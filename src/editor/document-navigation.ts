import { getFragmentTargetId } from "../core/navigation";

export interface DocumentNavigationHost {
  readonly outputElement: HTMLElement;
  prepareDocumentView(targetId: string | null): boolean;
}

interface NavigationPointer {
  id: number;
  x: number;
  y: number;
  link: Element | null;
  cancelled: boolean;
}

export class DocumentNavigation {
  private pointer: NavigationPointer | null = null;
  private navigationRequest = 0;

  public constructor(private readonly host: DocumentNavigationHost) {}

  public bind(): void {
    const output = this.host.outputElement;
    output.addEventListener("click", (event) => this.handleClick(event));
    output.addEventListener("pointerdown", (event) => {
      this.pointer = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        link: this.nodeLink(event.target),
        cancelled: !event.isPrimary || event.button !== 0
      };
    }, true);
    const trackPointer = (event: PointerEvent) => {
      if (this.pointer?.id === event.pointerId &&
        Math.hypot(event.clientX - this.pointer.x, event.clientY - this.pointer.y) > 5) {
        this.pointer.cancelled = true;
      }
    };
    output.addEventListener("pointermove", trackPointer, true);
    output.addEventListener("pointerup", trackPointer, true);
    output.addEventListener("pointercancel", () => {
      if (this.pointer) {
        this.pointer.cancelled = true;
      }
    }, true);
    output.addEventListener("wheel", () => {
      if (this.pointer) {
        this.pointer.cancelled = true;
      }
    }, true);
    output.addEventListener("dragstart", (event) => {
      if (this.nodeLink(event.target)) {
        event.preventDefault();
        if (this.pointer) {
          this.pointer.cancelled = true;
        }
      }
    });
    globalThis.addEventListener("hashchange", () => { void this.revealFragment(); });
  }

  private nodeLink(target: EventTarget | null): Element | null {
    return target instanceof Element ? target.closest("a.docdiagram-node-link") : null;
  }

  private handleClick(event: MouseEvent): void {
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!link || event.defaultPrevented) {
      return;
    }
    const nodeLink = link.matches(".docdiagram-node-link");
    if (nodeLink && event.detail > 0 &&
      (!this.pointer || this.pointer.link !== link || this.pointer.cancelled)) {
      event.preventDefault();
      return;
    }
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      link.hasAttribute("download") || (link.getAttribute("target") || "_self") !== "_self") {
      return;
    }
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) {
      return;
    }
    event.preventDefault();
    void this.revealFragment(href, true);
  }

  public async revealFragment(href = globalThis.location.hash, activate = false): Promise<void> {
    const request = ++this.navigationRequest;
    const targetId = href && href !== "#" ? getFragmentTargetId(href) : null;
    const findTargets = () => targetId === null ? [] :
      [...this.host.outputElement.querySelectorAll<HTMLElement>(
        "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id], figure.docdiagram[id]"
      )].filter((element) => element.id === targetId);
    if (href && href !== "#" && (targetId === null || findTargets().length !== 1)) {
      const message = `Navigation target "${href}" is missing, ambiguous, or invalid. Use Check document to inspect node destinations.`;
      console.warn(message);
      if (activate) {
        globalThis.alert(message);
      }
      return;
    }
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch (error) {
        console.error("Could not leave fullscreen for document navigation.", error);
        globalThis.alert("Could not leave fullscreen. Exit fullscreen and activate the link again.");
        return;
      }
    }
    if (request !== this.navigationRequest || !this.host.prepareDocumentView(targetId)) {
      return;
    }
    if (activate && globalThis.location.hash !== href) {
      globalThis.location.hash = href;
    }
    const target = targetId === null ? this.host.outputElement : findTargets()[0];
    if (!target) {
      console.warn(`Navigation target "${href}" is no longer available.`);
      return;
    }
    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
      target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
    }
    target.focus({ preventScroll: true });
    if (targetId === null) {
      globalThis.scrollTo(0, 0);
    } else {
      target.scrollIntoView({ block: "start" });
    }
  }
}
