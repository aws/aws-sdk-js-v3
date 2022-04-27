import { join } from "path";

import { ENV_CREDENTIALS_PATH, getCredentialsFilePath } from "./getCredentialsFilePath";
import { getHomeDir } from "./getHomeDir";

jest.mock("path");
jest.mock("./getHomeDir");

describe(getCredentialsFilePath.name, () => {
  const mockSeparator = "/";
  const mockHomeDir = "/mock/home/dir";

  const mockConfigFilepath = "/mock/file/path/credentials";
  const defaultConfigFilepath = `${mockHomeDir}/.aws/credentials`;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns configFilePath from default locations", () => {
    (join as jest.Mock).mockImplementation((...args) => args.join(mockSeparator));
    (getHomeDir as jest.Mock).mockReturnValue(mockHomeDir);
    expect(getCredentialsFilePath()).toStrictEqual(defaultConfigFilepath);
    expect(getHomeDir).toHaveBeenCalledWith();
    expect(join).toHaveBeenCalledWith(mockHomeDir, ".aws", "credentials");
  });

  it("returns configFile from location defined in environment", () => {
    const OLD_ENV = process.env;
    process.env = {
      ...OLD_ENV,
      [ENV_CREDENTIALS_PATH]: mockConfigFilepath,
    };
    expect(getCredentialsFilePath()).toStrictEqual(mockConfigFilepath);
    expect(getHomeDir).not.toHaveBeenCalled();
    expect(join).not.toHaveBeenCalled();
    process.env = OLD_ENV;
  });
});
