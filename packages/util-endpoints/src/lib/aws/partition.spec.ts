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

describe("partition", () => {
  describe("should reuturn data when default partition exists", () => {
    jest.isolateModules(() => {
      jest.mock("./partitions.json", () => ({
        partitions: [MOCK_DEFAULT_PARTITION, MOCK_PARTITION],
      }));
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
  });

  it("should throw an error when the default partition is not found, and region doesn't match in partition array or regex", () => {
    jest.isolateModules(() => {
      jest.mock("./partitions.json", () => ({
        partitions: [MOCK_PARTITION],
      }));
      const { partition } = require("./partition");
      expect(() => partition("non-existant-region")).toThrow(
        "Provided region was not found in the partition array or regex," +
          " and default partition with id 'aws' doesn't exist."
      );
    });
  });
});
