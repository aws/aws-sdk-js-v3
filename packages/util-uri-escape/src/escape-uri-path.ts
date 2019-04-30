import { escapeUri } from "./escape-uri";
export function escapeUriPath(uri: string): string {
  let parts: string[] = [];
  for (let sub of uri.split("/")) {
    parts.push(escapeUri(sub));
  }
  return parts.join("/");
}
