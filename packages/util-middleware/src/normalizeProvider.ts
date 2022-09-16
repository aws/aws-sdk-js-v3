import { Provider } from "@aws-sdk/types";

/**
 * @returns a provider function for the input value if it isn't already one.
 */
export const normalizeProvider = <T>(input: T | Provider<T>): Provider<T> => {
  if (typeof input === "function") return input as Provider<T>;
  const promisified = Promise.resolve(input);
  return () => promisified;
};
