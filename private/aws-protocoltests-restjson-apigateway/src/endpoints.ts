// smithy-typescript generated code
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";
import { getRegionInfo, PartitionHash, RegionHash } from "@smithy/config-resolver";

const regionHash: RegionHash = {
  "ca-central-1": {
    variants: [
      {
        hostname: "apigateway-fips.ca-central-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "ca-west-1": {
    variants: [
      {
        hostname: "apigateway-fips.ca-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-1": {
    variants: [
      {
        hostname: "apigateway-fips.us-east-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-east-2": {
    variants: [
      {
        hostname: "apigateway-fips.us-east-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-1": {
    variants: [
      {
        hostname: "apigateway-fips.us-west-1.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
  "us-west-2": {
    variants: [
      {
        hostname: "apigateway-fips.us-west-2.amazonaws.com",
        tags: ["fips"],
      },
    ],
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ap-southeast-5",
      "ap-southeast-7",
      "ca-central-1",
      "ca-west-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "fips-ca-central-1",
      "fips-ca-west-1",
      "fips-us-east-1",
      "fips-us-east-2",
      "fips-us-west-1",
      "fips-us-west-2",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "mx-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "apigateway.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "apigateway-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "apigateway-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "apigateway.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "apigateway.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "apigateway-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "apigateway-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "apigateway.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "apigateway.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "apigateway-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "apigateway.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "apigateway-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-e": {
    regions: ["eu-isoe-west-1"],
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "apigateway.{region}.cloud.adc-e.uk",
        tags: [],
      },
      {
        hostname: "apigateway-fips.{region}.cloud.adc-e.uk",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-f": {
    regions: ["us-isof-east-1", "us-isof-south-1"],
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "apigateway.{region}.csp.hci.ic.gov",
        tags: [],
      },
      {
        hostname: "apigateway-fips.{region}.csp.hci.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "apigateway.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "apigateway-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "apigateway-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "apigateway.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "apigateway",
    regionHash,
    partitionHash,
  });
