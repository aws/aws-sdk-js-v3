// smithy-typescript generated code
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";
import { getRegionInfo, PartitionHash, RegionHash } from "@smithy/config-resolver";

const regionHash: RegionHash = {};

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
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af|il)\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "awsec2.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "awsec2-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "awsec2-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "awsec2.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "awsec2.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "awsec2-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "awsec2-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "awsec2.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "awsec2.{region}.c2s.ic.gov",
        tags: [],
      },
      {
        hostname: "awsec2-fips.{region}.c2s.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "awsec2.{region}.sc2s.sgov.gov",
        tags: [],
      },
      {
        hostname: "awsec2-fips.{region}.sc2s.sgov.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-e": {
    regions: [],
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "awsec2.{region}.cloud.adc-e.uk",
        tags: [],
      },
      {
        hostname: "awsec2-fips.{region}.cloud.adc-e.uk",
        tags: ["fips"],
      },
    ],
  },
  "aws-iso-f": {
    regions: [],
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "awsec2.{region}.csp.hci.ic.gov",
        tags: [],
      },
      {
        hostname: "awsec2-fips.{region}.csp.hci.ic.gov",
        tags: ["fips"],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    variants: [
      {
        hostname: "awsec2.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "awsec2-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "awsec2-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "awsec2.{region}.api.aws",
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
    signingService: "awsec2",
    regionHash,
    partitionHash,
  });
