import { isIpAddress } from "../isIpAddress";
import { isValidHostLabel } from "../isValidHostLabel";

/**
 * Evaluates whether a string is a DNS compatible bucket name and can be used with
 * virtual hosted style addressing.
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

  // Value must be a valid host label.
  if (!isValidHostLabel(value)) {
    return false;
  }

  // Value must be between 3 and 63 characters long.
  if (value.length < 3 || value.length > 63) {
    return false;
  }

  // Value must not contain upper case characters.
  if (value !== value.toLowerCase()) {
    return false;
  }

  // Value must not be an IP address.
  if (isIpAddress(value)) {
    return false;
  }

  return true;
};
