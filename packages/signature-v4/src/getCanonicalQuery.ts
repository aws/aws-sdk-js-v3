import { SIGNATURE_HEADER } from "./constants";
import { HttpRequest } from "@aws-sdk/types";

/**
 * @internal
 */
export function getCanonicalQuery({ query = {} }: HttpRequest): string {
  const keys: Array<string> = [];
  const serialized: { [key: string]: string } = {};
  for (let key of Object.keys(query).sort()) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }

    keys.push(key);
    const value = query[key];
    if (typeof value === "string") {
      serialized[key] = `${encodeURIComponent(key)}=${encodeURIComponent(
        value
      )}`;
    } else if (Array.isArray(value)) {
      serialized[key] = value
        .slice(0)
        .sort()
        .reduce(
          (encoded: Array<string>, value: string) =>
            encoded.concat([
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
            ]),
          []
        )
        .join("&");
    }
  }

  return keys
    .map(key => serialized[key])
    .filter(serialized => serialized) // omit any falsy values
    .join("&");
}
