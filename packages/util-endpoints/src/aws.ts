import { customEndpointFunctions, EndpointFunctions } from "@smithy/util-endpoints";

import { isVirtualHostableS3Bucket } from "./lib/aws/isVirtualHostableS3Bucket";
import { parseArn } from "./lib/aws/parseArn";
import { partition } from "./lib/aws/partition";

export const awsEndpointFunctions: EndpointFunctions = {
  isVirtualHostableS3Bucket: isVirtualHostableS3Bucket,
  parseArn: parseArn,
  partition: partition,
};

customEndpointFunctions.aws = awsEndpointFunctions;
