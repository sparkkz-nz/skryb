/** Resolves fragment text from ordinary links as well as validated node destinations. */
export function getFragmentTargetId(value: unknown): string | null {
  if (typeof value !== "string" || !value.startsWith("#")) {
    return null;
  }
  try {
    return decodeURIComponent(value.slice(1)) || null;
  } catch {
    return null;
  }
}

/** Node fields use a stricter authoring contract than existing Markdown links. */
export function decodeDocumentFragment(value: unknown): string | null {
  if (typeof value !== "string" || /[\s\u0000-\u001f\u007f<>"`\\]/.test(value)) {
    return null;
  }
  const id = getFragmentTargetId(value);
  return id?.trim() && !/[\u0000-\u001f\u007f]/.test(id) && !id.includes(":~:") ? id : null;
}

export function isValidNodeHref(value: unknown): value is string {
  return decodeDocumentFragment(value) !== null;
}

export class NodeHrefValidationError extends Error {
  constructor(readonly nodeId: string) {
    super(`Node "${nodeId}" href must be a non-empty same-document fragment string, such as "#detail".`);
  }
}
