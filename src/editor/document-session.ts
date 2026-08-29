import { bakeDocumentSource } from "../core/document";
import type { Diagram } from "../core/diagrams/schema";
import { serializeDiagram } from "../core/diagrams/serializer";

export interface BakeSessionResult {
  baked: number;
  failed: boolean;
}

export interface CanonicalSourceStore {
  read(): string;
  write(source: string): void;
}

export class TemplateSourceStore implements CanonicalSourceStore {
  public constructor(private readonly sourceElement: HTMLTemplateElement | null) {}

  public read(): string {
    return this.sourceElement?.content.textContent || "";
  }

  public write(source: string): void {
    this.sourceElement?.content.replaceChildren(document.createTextNode(source));
  }
}

export class DocumentSession {
  private savedSource = "";
  private lintReportUnsaved = false;

  public constructor(private readonly sourceStore: CanonicalSourceStore) {}

  public get source(): string {
    return this.sourceStore.read();
  }

  public set source(source: string) {
    this.sourceStore.write(source);
  }

  public captureSavedSource(): void {
    this.savedSource = this.source;
  }

  public markSaved(): void {
    this.captureSavedSource();
    this.lintReportUnsaved = false;
  }

  public markLintReportUnsaved(): void {
    this.lintReportUnsaved = true;
  }

  public hasUnsavedChanges(hasUnsavedDraft = false): boolean {
    return this.source !== this.savedSource || hasUnsavedDraft || this.lintReportUnsaved;
  }

  public bake(): BakeSessionResult {
    try {
      const result = bakeDocumentSource(this.source);
      if (result.baked) {
        this.source = result.source;
      }
      return { baked: result.baked, failed: false };
    } catch {
      return { baked: 0, failed: true };
    }
  }

  public persistDiagramModels(diagramModels: Diagram[]): string {
    let diagramIndex = 0;
    const diagramsById = new Map<string, Diagram[]>();
    for (const diagram of diagramModels) {
      const id = (diagram as { id?: unknown }).id;
      if (typeof id === "string") {
        diagramsById.set(id, [...(diagramsById.get(id) || []), diagram]);
      }
    }
    const uniqueDiagramsById = new Map(
      [...diagramsById].flatMap(([id, diagrams]) => diagrams.length === 1 ? [[id, diagrams[0]] as const] : [])
    );
    const source = this.source.replace(/\r\n/g, "\n").replace(
      /^((?: {0,3}> ?)*)```diagram\s*\n([\s\S]*?)^((?: {0,3}> ?)*)```$/gm,
      (_, prefix: string, diagramSource: string, closingPrefix: string) => {
        const normalizedDiagramSource = diagramSource.replace(/^(?: {0,3}> ?)+/gm, "");
        const definitionId = normalizedDiagramSource.match(/^id:\s*(?:"([^"]+)"|([^\s#]+))\s*$/m)?.slice(1).find(Boolean);
        const diagram = (definitionId && uniqueDiagramsById.get(definitionId)) || diagramModels[diagramIndex];
        diagramIndex += 1;
        const serializedDiagram = diagram ? serializeDiagram(diagram) : "";
        const serializedLines = serializedDiagram
          ? serializedDiagram.split("\n").map((line) => `${prefix}${line}`).join("\n")
          : "";
        return `${prefix}\`\`\`diagram\n${serializedLines ? `${serializedLines}\n` : ""}${closingPrefix}\`\`\``;
      }
    );
    this.source = source;
    return source;
  }
}
