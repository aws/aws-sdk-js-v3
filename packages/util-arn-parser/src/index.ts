export interface ARN {
  partition: string;
  service: string;
  region: string;
  accountId: string;
  resource: string;
}
/**
 * Validate whether a string is an ARN.
 */
export const validate = (str: any): boolean =>
  typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;

/**
 * Parse an ARN string into structure with partition, service, region, accountId and resource values
 */
export const parse = (arn: string): ARN => {
  const matched = arn.split(":");
  return {
    partition: matched[1],
    service: matched[2],
    region: matched[3],
    accountId: matched[4],
    resource: matched.slice(5).join(":"),
  };
};

const isNonEmptyString = (str: any): boolean => typeof str === "string" && str !== "";

type buildOptions = Omit<ARN, "partition"> & { partition?: string };

/**
 * Build an ARN with service, partition, region, accountId, and resources strings
 */
export const build = (arnObject: buildOptions): string => {
  if (
    !isNonEmptyString(arnObject.service) ||
    !isNonEmptyString(arnObject.region) ||
    !isNonEmptyString(arnObject.accountId) ||
    !isNonEmptyString(arnObject.resource)
  ) {
    throw new Error("Input ARN object is invalid");
  }
  return `arn:${arnObject.partition || "aws"}:${arnObject.service}:${arnObject.region}:${arnObject.accountId}:${
    arnObject.resource
  }`;
};
