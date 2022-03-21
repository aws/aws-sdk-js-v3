import { Provider } from "@aws-sdk/types";

export const normalizeBoolean = (value: boolean | Provider<boolean>): Provider<boolean> => {
  if (typeof value === "boolean") {
    const promisified = Promise.resolve(value);
    return () => promisified;
  }
  return value as Provider<boolean>;
};
