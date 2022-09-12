// TODO(endpointsv2): generate this file from partitions.json file
import type { PartitionModel } from "../types";

export const partitionModel: PartitionModel = {
  version: "1.1",
  partitions: [
    {
      id: "aws",
      regionRegex: "^(us|eu|ap|sa|ca|me|af)-\\w+-\\d+$",
      regions: {
        "af-south-1": {},
        "af-east-1": {},
        "ap-northeast-1": {},
        "ap-northeast-2": {},
        "ap-northeast-3": {},
        "ap-south-1": {},
        "ap-southeast-1": {},
        "ap-southeast-2": {},
        "ap-southeast-3": {},
        "ca-central-1": {},
        "eu-central-1": {},
        "eu-north-1": {},
        "eu-south-1": {},
        "eu-west-1": {},
        "eu-west-2": {},
        "eu-west-3": {},
        "me-south-1": {},
        "sa-east-1": {},
        "us-east-1": {},
        "us-east-2": {},
        "us-west-1": {},
        "us-west-2": {},
        "aws-global": {},
      },
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        supportsFIPS: true,
        supportsDualStack: true,
      },
    },
    {
      id: "aws-us-gov",
      regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
      regions: {
        "us-gov-west-1": {},
        "us-gov-east-1": {},
        "aws-us-gov-global": {},
      },
      outputs: {
        dnsSuffix: "amazonaws.com",
        dualStackDnsSuffix: "api.aws",
        supportsFIPS: true,
        supportsDualStack: true,
      },
    },
    {
      id: "aws-cn",
      regionRegex: "^cn\\-\\w+\\-\\d+$",
      regions: {
        "cn-north-1": {},
        "cn-northwest-1": {},
        "aws-cn-global": {},
      },
      outputs: {
        dnsSuffix: "amazonaws.com.cn",
        dualStackDnsSuffix: "api.amazonwebservices.com.cn",
        supportsFIPS: true,
        supportsDualStack: true,
      },
    },
  ],
};
