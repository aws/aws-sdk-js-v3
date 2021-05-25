import { Credentials, Provider } from "@aws-sdk/types";

/**
 * @private
 */
export const normalizeRegionProvider = (region: string | Provider<string>): Provider<string> => {
  if (typeof region === "string") {
    const promisified = Promise.resolve(region);
    return () => promisified;
  } else {
    return region;
  }
};

/**
 * @private
 */
export const normalizeCredentialsProvider = (
  credentials: Credentials | Provider<Credentials>
): Provider<Credentials> => {
  if (typeof credentials === "object") {
    const promisified = Promise.resolve(credentials);
    return () => promisified;
  } else {
    return credentials;
  }
};
