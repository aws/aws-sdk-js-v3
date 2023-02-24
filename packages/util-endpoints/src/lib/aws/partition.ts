import { EndpointPartition } from "@aws-sdk/types";

import partitionsInfo from "./partitions.json";

const { partitions } = partitionsInfo;
const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");

/**
 * Evaluates a single string argument value as a region, and matches the
 * string value to an AWS partition.
 * The matcher MUST always return a successful object describing the partition
 * that the region has been determined to be a part of.
 */
export const partition = (value: string): EndpointPartition => {
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
