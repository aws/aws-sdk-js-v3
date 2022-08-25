const VALID_HOST_LABEL_REGEX = new RegExp(`^(?![0-9]+$)(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);

/**
 * Evaluates whether one or more string values are valid host labels per RFC 1123.
 *
 * If allowSubDomains is true, then the provided value may be zero or more dotted
 * subdomains which are each validated per RFC 1123.
 */
export const isValidHostLabel = (value: string, allowSubDomains = false) => {
  if (!allowSubDomains) {
    return VALID_HOST_LABEL_REGEX.test(value);
  }

  const labels = value.split(".");
  for (const label of labels) {
    if (!isValidHostLabel(label)) {
      return false;
    }
  }
  return true;
};
