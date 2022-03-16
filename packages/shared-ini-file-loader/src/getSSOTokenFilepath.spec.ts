import { createHash } from "crypto";
import { join } from "path";

import { getHomeDir } from "./getHomeDir";
import { getSSOTokenFilepath } from "./getSSOTokenFilepath";

jest.mock("crypto");
jest.mock("./getHomeDir");

describe(getSSOTokenFilepath.name, () => {
  const mockCacheName = "mockCacheName";
  const mockDigest = jest.fn().mockReturnValue(mockCacheName);
  const mockUpdate = jest.fn().mockReturnValue({ digest: mockDigest });
  const mockHomeDir = "/home/dir";
  const mockSsoStartUrl = "mock_sso_start_url";

  beforeEach(() => {
    (createHash as jest.Mock).mockReturnValue({ update: mockUpdate });
    (getHomeDir as jest.Mock).mockReturnValue(mockHomeDir);
  });

  afterEach(() => {
    expect(createHash).toHaveBeenCalledWith("sha1");
    jest.clearAllMocks();
  });

  describe("re-throws error", () => {
    const mockError = new Error("error");

    it("when createHash throws error", () => {
      (createHash as jest.Mock).mockImplementationOnce(() => {
        throw mockError;
      });
      expect(() => getSSOTokenFilepath(mockSsoStartUrl)).toThrow(mockError);
      expect(mockUpdate).not.toHaveBeenCalled();
      expect(mockDigest).not.toHaveBeenCalled();
      expect(getHomeDir).not.toHaveBeenCalled();
    });

    it("when hash.update() throws error", () => {
      mockUpdate.mockImplementationOnce(() => {
        throw mockError;
      });
      expect(() => getSSOTokenFilepath(mockSsoStartUrl)).toThrow(mockError);
      expect(mockUpdate).toHaveBeenCalledWith(mockSsoStartUrl);
      expect(mockDigest).not.toHaveBeenCalled();
      expect(getHomeDir).not.toHaveBeenCalled();
    });

    it("when hash.digest() throws error", () => {
      mockDigest.mockImplementationOnce(() => {
        throw mockError;
      });
      expect(() => getSSOTokenFilepath(mockSsoStartUrl)).toThrow(mockError);
      expect(mockUpdate).toHaveBeenCalledWith(mockSsoStartUrl);
      expect(mockDigest).toHaveBeenCalledWith("hex");
      expect(getHomeDir).not.toHaveBeenCalled();
    });

    it("when getHomeDir() throws error", () => {
      (getHomeDir as jest.Mock).mockImplementationOnce(() => {
        throw mockError;
      });
      expect(() => getSSOTokenFilepath(mockSsoStartUrl)).toThrow(mockError);
      expect(mockUpdate).toHaveBeenCalledWith(mockSsoStartUrl);
      expect(mockDigest).toHaveBeenCalledWith("hex");
      expect(getHomeDir).toHaveBeenCalled();
    });
  });

  it("returns token filepath", () => {
    const ssoTokenFilepath = getSSOTokenFilepath(mockSsoStartUrl);
    expect(ssoTokenFilepath).toStrictEqual(join(mockHomeDir, ".aws", "sso", "cache", `${mockCacheName}.json`));
    expect(mockUpdate).toHaveBeenCalledWith(mockSsoStartUrl);
    expect(mockDigest).toHaveBeenCalledWith("hex");
    expect(getHomeDir).toHaveBeenCalled();
  });
});
