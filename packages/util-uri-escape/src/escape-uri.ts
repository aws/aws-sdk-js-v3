export function escapeUri(uri: string): string {
  var output = encodeURIComponent(uri);

  // AWS percent-encodes some extra non-standard characters in a URI
  output = output.replace(/[!'()*]/g, hexEncode);

  return output;
}

function hexEncode(c: string) {
  return `%${c.charCodeAt(0).toString(16).toUpperCase()}`;
}
