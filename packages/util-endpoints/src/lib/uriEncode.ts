/**
 * Performs percent-encoding per RFC3986 section 2.1
 */
export const uriEncode = (value: string) =>
  encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
