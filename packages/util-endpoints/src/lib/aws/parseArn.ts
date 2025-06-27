import { EndpointARN } from "@smithy/types";

const ARN_DELIMITER = ":";
const RESOURCE_DELIMITER = "/";

/**
 * Evaluates a single string argument value, and returns an object containing
 * details about the parsed ARN.
 * If the input was not a valid ARN, the function returns null.
 */
export const parseArn = (value: string): EndpointARN | null => {
  const segments = value.split(ARN_DELIMITER);

  if (segments.length < 6) return null;

  const [arn, partition, service, region, accountId, ...resourcePath] = segments;

  if (arn !== "arn" || partition === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "") return null;

  const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();

  return {
    partition,
    service,
    region,
    accountId,
    resourceId,
  };
};
