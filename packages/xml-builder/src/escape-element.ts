/**
 * @internal
 * 
 * Escapes characters that can not be in an XML element.
 */
export function escapeElement(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\r/g, "&#x0D;")
    .replace(/\n/g, "&#x0A;")
    .replace(/\u0085/g, "&#x85;")
    .replace(/\u2028/, "&#x2028;");
}
