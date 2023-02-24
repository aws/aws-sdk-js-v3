import { getSsoSessionData } from "./getSsoSessionData";

describe(getSsoSessionData.name, () => {
  it("returns empty for no data", () => {
    expect(getSsoSessionData({})).toStrictEqual({});
  });

  it("skips sections without prefix sso-session", () => {
    const mockInput = { test: { key: "value" } };
    expect(getSsoSessionData(mockInput)).toStrictEqual({});
  });

  it("skips sections with different prefix", () => {
    const mockInput = { "not-sso-session test": { key: "value" } };
    expect(getSsoSessionData(mockInput)).toStrictEqual({});
  });

  describe("normalizes sso-session names", () => {
    const getMockSsoSessionData = (ssoSessionName: string) =>
      [1, 2, 3]
        .map((num) => [`key_${ssoSessionName}_${num}`, `value_${ssoSessionName}_${num}`])
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    const getMockOutput = (ssoSessionNames: string[]) =>
      ssoSessionNames.reduce((acc, profileName) => ({ ...acc, [profileName]: getMockSsoSessionData(profileName) }), {});

    const getMockInput = (mockOutput: { [key: string]: { [key: string]: string } }) =>
      Object.entries(mockOutput).reduce((acc, [key, value]) => ({ ...acc, [`sso-session ${key}`]: value }), {});

    it("single sso-session section", () => {
      const mockOutput = getMockOutput(["one"]);
      const mockInput = getMockInput(mockOutput);
      expect(getSsoSessionData(mockInput)).toStrictEqual(mockOutput);
    });

    it("two sso-session sections", () => {
      const mockOutput = getMockOutput(["one", "two"]);
      const mockInput = getMockInput(mockOutput);
      expect(getSsoSessionData(mockInput)).toStrictEqual(mockOutput);
    });

    it("three sso-session sections", () => {
      const mockOutput = getMockOutput(["one", "two", "three"]);
      const mockInput = getMockInput(mockOutput);
      expect(getSsoSessionData(mockInput)).toStrictEqual(mockOutput);
    });

    it("with section without prefix", () => {
      const sectionWithoutPrefix = { test: { key: "value" } };
      const mockOutput = getMockOutput(["one"]);
      const mockInput = getMockInput(mockOutput);
      expect(getSsoSessionData({ ...sectionWithoutPrefix, ...mockInput })).toStrictEqual(mockOutput);
    });
  });
});
