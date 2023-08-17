import { EndpointPartition } from "@aws-sdk/types";

import partitionsInfo from "./partitions.json";

export type PartitionsInfo = {
  partitions: Array<{
    id: string;
    outputs: {
      dnsSuffix: string;
      dualStackDnsSuffix: string;
      name: string;
      supportsDualStack: boolean;
      supportsFIPS: boolean;
    };
    regionRegex: string;
    regions: Record<
      string,
      | {
          description?: string;
        }
      | undefined
    >;
  }>;
};

/**
 * The partitions.json data to be used in resolving endpoints.
 * @internal
 */
let selectedPartitionsInfo: PartitionsInfo = partitionsInfo;

/**
 * @internal
 */
let selectedUserAgentPrefix = "";

/**
 * Evaluates a single string argument value as a region, and matches the
 * string value to an AWS partition.
 * The matcher MUST always return a successful object describing the partition
 * that the region has been determined to be a part of.
 */
export const partition = (value: string): EndpointPartition => {
  const { partitions } = selectedPartitionsInfo;
  // Check for explicit region listed in the regions array.
  for (const partition of partitions) {
    const { regions, outputs } = partition;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value) {
        return {
          ...outputs,
          ...regionData,
        };
      }
    }
  }

  // Check for region that matches a regionRegex pattern.
  for (const partition of partitions) {
    const { regionRegex, outputs } = partition;
    if (new RegExp(regionRegex).test(value)) {
      return {
        ...outputs,
      };
    }
  }

  const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");

  if (!DEFAULT_PARTITION) {
    throw new Error(
      "Provided region was not found in the partition array or regex," +
        " and default partition with id 'aws' doesn't exist."
    );
  }

  // Return the default partition.
  return {
    ...DEFAULT_PARTITION.outputs,
  };
};

/**
 * Set custom partitions.json data.
 * @internal
 */
export const setPartitionInfo = (partitionsInfo: PartitionsInfo, userAgentPrefix = "") => {
  selectedPartitionsInfo = partitionsInfo;
  selectedUserAgentPrefix = userAgentPrefix;
};

/**
 * Reset to the default partitions.json data.
 * @internal
 */
export const useDefaultPartitionInfo = () => {
  setPartitionInfo(partitionsInfo, "");
};

/**
 * @internal
 */
export const getUserAgentPrefix = () => selectedUserAgentPrefix;
