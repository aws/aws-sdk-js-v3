import { join } from "path";

import { ENV_CONFIG_PATH, getConfigFilePath } from "./getConfigFilePath";
import { getHomeDir } from "./getHomeDir";

jest.mock("path");
jest.mock("./getHomeDir");

describe(getConfigFilePath.name, () => {
  const mockSeparator = "/";
  const mockHomeDir = "/mock/home/dir";

  const mockConfigFilepath = "/mock/file/path/config";
  const defaultConfigFilepath = `${mockHomeDir}/.aws/config`;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns configFilePath from default locations", () => {
    (join as jest.Mock).mockImplementation((...args) => args.join(mockSeparator));
    (getHomeDir as jest.Mock).mockReturnValue(mockHomeDir);
    expect(getConfigFilePath()).toStrictEqual(defaultConfigFilepath);
    expect(getHomeDir).toHaveBeenCalledWith();
    expect(join).toHaveBeenCalledWith(mockHomeDir, ".aws", "config");
  });

  it("returns configFile from location defined in environment", () => {
    const OLD_ENV = process.env;
    process.env = {
      ...OLD_ENV,
      [ENV_CONFIG_PATH]: mockConfigFilepath,
    };
    expect(getConfigFilePath()).toStrictEqual(mockConfigFilepath);
    expect(getHomeDir).not.toHaveBeenCalled();
    expect(join).not.toHaveBeenCalled();
    process.env = OLD_ENV;
  });
});
