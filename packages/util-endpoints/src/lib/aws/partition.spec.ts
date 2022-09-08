import { partitions } from "./partitions.json";

const MOCK_DEFAULT_PARTITION = {
  id: "aws",
  regionRegex: "mockDefaultRegionRegex",
  regions: {
    "mock-region-1": {
      dnsSuffix: "mockRegion1DnsSuffix",
      dualStackDnsSuffix: "mockRegion1DualStackDnsSuffix",
    },
    "mock-region-2": {},
  },
  outputs: {
    dnsSuffix: "mockDefaultDnsSuffix",
    dualStackDnsSuffix: "mockDefaultDualStackDnsSuffix",
    supportsFIPS: false,
    supportsDualStack: false,
  },
};

const MOCK_PARTITION = {
  id: "partitionId",
  regionRegex: "mockRegionRegex",
  regions: {},
  outputs: {
    dnsSuffix: "mockPartitionDnsSuffix",
    dualStackDnsSuffix: "mockPartitionDualStackDnsSuffix",
    supportsFIPS: true,
    supportsDualStack: true,
  },
};

jest.mock("./partitions.json", () => ({
  partitions: [MOCK_DEFAULT_PARTITION, MOCK_PARTITION],
}));

describe("partition", () => {
  const { partition } = require("./partition");

  describe("should return the data when region is found", () => {
    it("returns region data if it exists", () => {
      const regionWithRegionData = "mock-region-1";
      expect(partition(regionWithRegionData)).toEqual({
        name: MOCK_DEFAULT_PARTITION.id,
        ...MOCK_DEFAULT_PARTITION.outputs,
        ...MOCK_DEFAULT_PARTITION.regions[regionWithRegionData],
      });
    });

    it("returns partition data if region data does not exist", () => {
      const regionWithoutRegionData = "mock-region-2";
      expect(partition(regionWithoutRegionData)).toEqual({
        name: MOCK_DEFAULT_PARTITION.id,
        ...MOCK_DEFAULT_PARTITION.outputs,
      });
    });
  });

  it("should return the partition data when region is matched with regionRegex", () => {
    expect(partition(MOCK_DEFAULT_PARTITION.regionRegex)).toEqual({
      name: MOCK_DEFAULT_PARTITION.id,
      ...MOCK_DEFAULT_PARTITION.outputs,
    });
    expect(partition(MOCK_PARTITION.regionRegex)).toEqual({
      name: MOCK_PARTITION.id,
      ...MOCK_PARTITION.outputs,
    });
  });

  it("should return the default partition when the region is not found", () => {
    expect(partition("non-existant-region")).toEqual({
      name: MOCK_DEFAULT_PARTITION.id,
      ...MOCK_DEFAULT_PARTITION.outputs,
    });
  });
});
