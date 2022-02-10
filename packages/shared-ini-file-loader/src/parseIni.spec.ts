import { parseIni } from "./parseIni";

describe(parseIni.name, () => {
  it.each(["__proto__", "profile __proto__"])("throws error if profile name is '%s'", (deniedProfileName) => {
    const initData = `[${deniedProfileName}]\nfoo = not_exist`;
    expect(() => {
      parseIni(initData);
    }).toThrowError(`Found invalid profile name "${deniedProfileName}"`);
  });

  describe("parses config for other keys", () => {
    const mockProfileName = "mock_profile_name";
    const mockProfileData = { key: "value" };

    const getMockProfileData = (profileName: string, profileData: { [key: string]: string }) =>
      `[${profileName}]\n${Object.entries(profileData)
        .map(([key, value]) => `${key} = ${value}`)
        .join("\n")}\n`;

    it("returns data for one profile", () => {
      const mockInput = getMockProfileData(mockProfileName, mockProfileData);
      expect(parseIni(mockInput)).toStrictEqual({
        [mockProfileName]: mockProfileData,
      });
    });

    it("returns data for two profiles", () => {
      const mockProfile1 = getMockProfileData(mockProfileName, mockProfileData);

      const mockProfileName2 = "mock_profile_name_2";
      const mockProfileData2 = { key2: "value2" };
      const mockProfile2 = getMockProfileData(mockProfileName2, mockProfileData2);

      expect(parseIni(`${mockProfile1}${mockProfile2}`)).toStrictEqual({
        [mockProfileName]: mockProfileData,
        [mockProfileName2]: mockProfileData2,
      });
    });

    it("skip section if data is not present", () => {
      const mockProfileNameWithoutData = "mock_profile_name_without_data";
      const mockInput = getMockProfileData(mockProfileName, mockProfileData);
      expect(parseIni(`${mockInput}[${mockProfileNameWithoutData}]`)).toStrictEqual({
        [mockProfileName]: mockProfileData,
      });
      expect(parseIni(`[${mockProfileNameWithoutData}]\n${mockInput}`)).toStrictEqual({
        [mockProfileName]: mockProfileData,
      });
    });

    it("returns data profile name containing multiple words", () => {
      const mockProfileNameMultiWords = "foo bar baz";
      const mockInput = getMockProfileData(mockProfileNameMultiWords, mockProfileData);
      expect(parseIni(mockInput)).toStrictEqual({
        [mockProfileNameMultiWords]: mockProfileData,
      });
    });

    it("returns data for profile containing multiple entries", () => {
      const mockProfileDataMultipleEntries = { key1: "value1", key2: "value2", key3: "value3" };
      const mockInput = getMockProfileData(mockProfileName, mockProfileDataMultipleEntries);
      expect(parseIni(mockInput)).toStrictEqual({
        [mockProfileName]: mockProfileDataMultipleEntries,
      });
    });
  });
});
