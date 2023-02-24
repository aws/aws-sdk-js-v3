import { alphabetByValue, bitsPerByte, bitsPerLetter, maxLetterValue } from "./constants.browser";
/**
 * Converts a Uint8Array of binary data to a base-64 encoded string.
 *
 * @param input The binary data to encode
 *
 * @see https://tools.ietf.org/html/rfc4648#section-4
 */
export function toBase64(input: Uint8Array): string {
  let str = "";
  for (let i = 0; i < input.length; i += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
      bits |= input[j] << ((limit - j - 1) * bitsPerByte);
      bitLength += bitsPerByte;
    }

    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k = 1; k <= bitClusterCount; k++) {
      const offset = (bitClusterCount - k) * bitsPerLetter;
      str += alphabetByValue[(bits & (maxLetterValue << offset)) >> offset];
    }

    str += "==".slice(0, 4 - bitClusterCount);
  }

  return str;
}
