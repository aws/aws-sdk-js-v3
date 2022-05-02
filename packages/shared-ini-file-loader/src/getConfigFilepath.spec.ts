import { join } from "path";

import { ENV_CONFIG_PATH, getConfigFilepath } from "./getConfigFilepath";
import { getHomeDir } from "./getHomeDir";

jest.mock("path");
jest.mock("./getHomeDir");

describe(getConfigFilepath.name, () => {
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
    expect(getConfigFilepath()).toStrictEqual(defaultConfigFilepath);
    expect(getHomeDir).toHaveBeenCalledWith();
    expect(join).toHaveBeenCalledWith(mockHomeDir, ".aws", "config");
  });

  it("returns configFile from location defined in environment", () => {
    const OLD_ENV = process.env;
    process.env = {
      ...OLD_ENV,
      [ENV_CONFIG_PATH]: mockConfigFilepath,
    };
    expect(getConfigFilepath()).toStrictEqual(mockConfigFilepath);
    expect(getHomeDir).not.toHaveBeenCalled();
    expect(join).not.toHaveBeenCalled();
    process.env = OLD_ENV;
  });
});
