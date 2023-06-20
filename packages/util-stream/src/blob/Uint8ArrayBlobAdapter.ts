import { transformFromString, transformToString } from "./transforms";

/**
 * Adapter for conversions of the native Uint8Array type.
 * @public
 */
export class Uint8ArrayBlobAdapter extends Uint8Array {
  /**
   * @param source - such as a string or Stream.
   * @returns a new Uint8ArrayBlobAdapter extending Uint8Array.
   */
  public static fromString(source: string, encoding = "utf-8"): Uint8ArrayBlobAdapter {
    switch (typeof source) {
      case "string":
        return transformFromString(source, encoding);
      default:
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
  }

  /**
   * @param source - Uint8Array to be mutated.
   * @returns the same Uint8Array but with prototype switched to Uint8ArrayBlobAdapter.
   */
  public static mutate(source: Uint8Array): Uint8ArrayBlobAdapter {
    Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
    return source as Uint8ArrayBlobAdapter;
  }

  /**
   * @param encoding - default 'utf-8'.
   * @returns the blob as string.
   */
  public transformToString(encoding = "utf-8"): string {
    return transformToString(this, encoding);
  }
}
