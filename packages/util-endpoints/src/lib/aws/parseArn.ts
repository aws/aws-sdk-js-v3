import { EndpointARN } from "@aws-sdk/types";

/**
 * Evaluates a single string argument value, and returns an object containing
 * details about the parsed ARN.
 * If the input was not a valid ARN, the function returns null.
 */
export const parseArn = (value: string): EndpointARN | null => {
  const segments = value.split(":");

  if (segments.length < 6 || segments[0] !== "arn") return null;

  const [
    ,
    //Skip "arn" literal
    partition,
    service,
    region,
    accountId,
    ...resourceId
  ] = segments;

  return {
    partition,
    service,
    region,
    accountId,
    resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId,
  };
};
