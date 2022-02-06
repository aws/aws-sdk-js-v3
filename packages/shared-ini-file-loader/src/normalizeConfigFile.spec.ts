import { normalizeConfigFile } from "./normalizeConfigFile";

describe(normalizeConfigFile.name, () => {
  it("returns empty for no data", () => {
    expect(normalizeConfigFile({})).toStrictEqual({});
  });

  it("returns default profile if present", () => {
    const mockInput = { default: { key: "value" } };
    expect(normalizeConfigFile(mockInput)).toStrictEqual(mockInput);
  });

  it("skips profiles without prefix profile", () => {
    const mockInput = { test: { key: "value" } };
    expect(normalizeConfigFile(mockInput)).toStrictEqual({});
  });

  describe("normalizes profile names", () => {
    const getProfileData = (profileName: string) =>
      [1, 2, 3]
        .map((num) => [`key_${profileName}_${num}`, `value_${profileName}_${num}`])
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    const getMockOutput = (profileNames: string[]) =>
      profileNames.reduce((acc, profileName) => ({ ...acc, [profileName]: getProfileData(profileName) }), {});

    const getMockInput = (mockOutput: { [key: string]: { [key: string]: string } }) =>
      Object.entries(mockOutput).reduce((acc, [key, value]) => ({ ...acc, [`profile ${key}`]: value }), {});

    it("single profile", () => {
      const mockOutput = getMockOutput(["one"]);
      const mockInput = getMockInput(mockOutput);
      expect(normalizeConfigFile(mockInput)).toStrictEqual(mockOutput);
    });

    it("two profiles", () => {
      const mockOutput = getMockOutput(["one", "two"]);
      const mockInput = getMockInput(mockOutput);
      expect(normalizeConfigFile(mockInput)).toStrictEqual(mockOutput);
    });

    it("three profiles", () => {
      const mockOutput = getMockOutput(["one", "two", "three"]);
      const mockInput = getMockInput(mockOutput);
      expect(normalizeConfigFile(mockInput)).toStrictEqual(mockOutput);
    });

    it("with default", () => {
      const defaultInput = { default: { key: "value" } };
      const mockOutput = getMockOutput(["one"]);
      const mockInput = getMockInput(mockOutput);
      expect(normalizeConfigFile({ ...defaultInput, ...mockInput })).toStrictEqual({ ...defaultInput, ...mockOutput });
    });

    it("with profileName without prefix", () => {
      const profileWithPrefix = { test: { key: "value" } };
      const mockOutput = getMockOutput(["one"]);
      const mockInput = getMockInput(mockOutput);
      expect(normalizeConfigFile({ ...profileWithPrefix, ...mockInput })).toStrictEqual(mockOutput);
    });
  });
});
