/**
 * Evaluates whether a string is a DNS compatible bucket name and can be used with
 * virtual hosted style addressing.
 *
 * In addition to the restrictions defined in RFC 1123 and isValidHostLabel,
 * the isVirtualHostableS3Bucket also validates that:
 * - the bucket name is between [3,63] characters
 * - does not contain upper case characters
 * - is not formatted as an IP address.
 *
 * If allowSubDomains is true, then the provided value may be zero or more dotted
 * values, which are each validated as per rules above.
 */
export const isVirtualHostableS3Bucket = (value: string, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
};
