import { getBearerTokenEnvKey } from "@aws-sdk/core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { fromEnvBearerToken } from "./fromEnvBearerToken";

vi.mock("@aws-sdk/core");

describe("fromEnvBearerToken", () => {
  const originalEnv = process.env;
  const mockInit = { signingName: "signing name" };
  const mockBearerTokenEnvKey = "AWS_BEARER_TOKEN_SIGNING_NAME";

  beforeEach(() => {
    process.env = { ...originalEnv };
    vi.mocked(getBearerTokenEnvKey).mockReturnValue(mockBearerTokenEnvKey);
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  describe("throws error", () => {
    it("when signingName is not passed", async () => {
      await expect(fromEnvBearerToken()()).rejects.toThrow(
        "Please pass 'signingName' to compute environment variable key"
      );
      expect(getBearerTokenEnvKey).not.toHaveBeenCalled();
    });

    it("when token is not present in environment variable", async () => {
      await expect(fromEnvBearerToken(mockInit)()).rejects.toThrow(
        `Token not present in '${mockBearerTokenEnvKey}' environment variable`
      );
      expect(getBearerTokenEnvKey).toHaveBeenCalledWith(mockInit.signingName);
    });
  });

  it("returns token from environment variable", async () => {
    const mockBearerToken = "mock-bearer-token";
    process.env[mockBearerTokenEnvKey] = mockBearerToken;
    const token = await fromEnvBearerToken(mockInit)();
    expect(token).toEqual({ token: mockBearerToken });
    expect(getBearerTokenEnvKey).toHaveBeenCalledWith(mockInit.signingName);
  });
});
