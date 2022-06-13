import { getProfileData } from "./getProfileData";

describe(getProfileData.name, () => {
  it("returns empty for no data", () => {
    expect(getProfileData({})).toStrictEqual({});
  });

  it("returns default profile if present", () => {
    const mockInput = { default: { key: "value" } };
    expect(getProfileData(mockInput)).toStrictEqual(mockInput);
  });

  it("skips profiles without prefix profile", () => {
    const mockInput = { test: { key: "value" } };
    expect(getProfileData(mockInput)).toStrictEqual({});
  });

  it("skips profiles with different prefix", () => {
    const mockInput = { "not-profile test": { key: "value" } };
    expect(getProfileData(mockInput)).toStrictEqual({});
  });

  describe("normalizes profile names", () => {
    const getMockProfileData = (profileName: string) =>
      [1, 2, 3]
        .map((num) => [`key_${profileName}_${num}`, `value_${profileName}_${num}`])
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    const getMockOutput = (profileNames: string[]) =>
      profileNames.reduce((acc, profileName) => ({ ...acc, [profileName]: getMockProfileData(profileName) }), {});

    const getMockInput = (mockOutput: Record<string, Record<string, string>>) =>
      Object.entries(mockOutput).reduce((acc, [key, value]) => ({ ...acc, [`profile ${key}`]: value }), {});

    it("single profile", () => {
      const mockOutput = getMockOutput(["one"]);
      const mockInput = getMockInput(mockOutput);
      expect(getProfileData(mockInput)).toStrictEqual(mockOutput);
    });

    it("two profiles", () => {
      const mockOutput = getMockOutput(["one", "two"]);
      const mockInput = getMockInput(mockOutput);
      expect(getProfileData(mockInput)).toStrictEqual(mockOutput);
    });

    it("three profiles", () => {
      const mockOutput = getMockOutput(["one", "two", "three"]);
      const mockInput = getMockInput(mockOutput);
      expect(getProfileData(mockInput)).toStrictEqual(mockOutput);
    });

    it("with default", () => {
      const defaultInput = { default: { key: "value" } };
      const mockOutput = getMockOutput(["one"]);
      const mockInput = getMockInput(mockOutput);
      expect(getProfileData({ ...defaultInput, ...mockInput })).toStrictEqual({ ...defaultInput, ...mockOutput });
    });

    it("with profileName without prefix", () => {
      const profileWithPrefix = { test: { key: "value" } };
      const mockOutput = getMockOutput(["one"]);
      const mockInput = getMockInput(mockOutput);
      expect(getProfileData({ ...profileWithPrefix, ...mockInput })).toStrictEqual(mockOutput);
    });
  });
});
