import { escapeUri } from "./escape-uri";

/**
 * @internal
 */
export const escapeUriPath = (uri: string): string => uri.split("/").map(escapeUri).join("/");
