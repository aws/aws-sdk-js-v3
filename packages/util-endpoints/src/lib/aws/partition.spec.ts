import { getUserAgentPrefix, partition, setPartitionInfo, useDefaultPartitionInfo } from "./partition";
import partitions from "./partitions.json";

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
    name: "aws",
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
    name: "partitionId",
    dnsSuffix: "mockPartitionDnsSuffix",
    dualStackDnsSuffix: "mockPartitionDualStackDnsSuffix",
    supportsFIPS: true,
    supportsDualStack: true,
  },
};

describe("partition", () => {
  afterEach(() => {
    useDefaultPartitionInfo();
  });

  describe("should return data when default partition exists", () => {
    beforeEach(() => {
      setPartitionInfo({
        partitions: [MOCK_DEFAULT_PARTITION, MOCK_PARTITION],
      });
    });

    describe("should return the data when region is found", () => {
      it("returns region data if it exists", () => {
        const regionWithRegionData = "mock-region-1";
        expect(partition(regionWithRegionData)).toEqual({
          ...MOCK_DEFAULT_PARTITION.outputs,
          ...MOCK_DEFAULT_PARTITION.regions[regionWithRegionData],
        });
      });

      it("returns partition data if region data does not exist", () => {
        const regionWithoutRegionData = "mock-region-2";
        expect(partition(regionWithoutRegionData)).toEqual({
          ...MOCK_DEFAULT_PARTITION.outputs,
        });
      });
    });

    it("should return the partition data when region is matched with regionRegex", () => {
      expect(partition(MOCK_DEFAULT_PARTITION.regionRegex)).toEqual({
        ...MOCK_DEFAULT_PARTITION.outputs,
      });
      expect(partition(MOCK_PARTITION.regionRegex)).toEqual({
        ...MOCK_PARTITION.outputs,
      });
    });

    it("should return the default partition when the region is not found", () => {
      expect(partition("non-existant-region")).toEqual({
        ...MOCK_DEFAULT_PARTITION.outputs,
      });
    });
  });

  it("should throw an error when the default partition is not found, and region doesn't match in partition array or regex", () => {
    setPartitionInfo({
      partitions: [MOCK_PARTITION],
    });
    expect(() => partition("non-existant-region")).toThrow(
      "Provided region was not found in the partition array or regex," +
        " and default partition with id 'aws' doesn't exist."
    );
  });

  it("should allow setting a custom partitions file", async () => {
    const copy = JSON.parse(JSON.stringify(partitions));
    setPartitionInfo(copy);
    const testRegion = "us-test-135";
    copy.partitions[0].regions[testRegion] = {
      description: "not a real region",
    };
    const result = partition(testRegion);
    expect(result).toEqual({
      description: "not a real region",
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true,
    });

    useDefaultPartitionInfo();
    // result is matched by regex, but customization is no longer present.
    expect(partition(testRegion)).toEqual({
      description: void 0,
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true,
    });
  });

  it("should optionally set a user agent prefix", async () => {
    setPartitionInfo(null as any, "a-string-prefix");
    expect(getUserAgentPrefix()).toBe("a-string-prefix");
  });
});
