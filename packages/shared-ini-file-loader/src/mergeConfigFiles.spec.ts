import { mergeConfigFiles } from "./mergeConfigFiles";

describe(mergeConfigFiles.name, () => {
  it("merges profiles that are in multiple files", () => {
    const mockConfigFile = {
      profileName1: { configKey: "configValue1" },
    };
    const mockCredentialsFile = {
      profileName1: { credsKey: "configValue1" },
      profileName2: { credsKey: "credsValue1" },
    };

    expect(mergeConfigFiles(mockConfigFile, mockCredentialsFile)).toMatchInlineSnapshot(`
      Object {
        "profileName1": Object {
          "configKey": "configValue1",
          "credsKey": "configValue1",
        },
        "profileName2": Object {
          "credsKey": "credsValue1",
        },
      }
    `);
  });
});
