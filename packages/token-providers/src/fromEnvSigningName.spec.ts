import { getBearerTokenEnvKey } from "@aws-sdk/core/httpAuthSchemes";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { fromEnvSigningName } from "./fromEnvSigningName";

vi.mock("@aws-sdk/core/httpAuthSchemes");

describe(fromEnvSigningName.name, () => {
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
      await expect(fromEnvSigningName()()).rejects.toThrow(
        "Please pass 'signingName' to compute environment variable key"
      );
      expect(getBearerTokenEnvKey).not.toHaveBeenCalled();
    });

    it("when token is not present in environment variable", async () => {
      await expect(fromEnvSigningName(mockInit)()).rejects.toThrow(
        `Token not present in '${mockBearerTokenEnvKey}' environment variable`
      );
      expect(getBearerTokenEnvKey).toHaveBeenCalledWith(mockInit.signingName);
    });
  });

  it("returns token from environment variable", async () => {
    const mockBearerToken = "mock-bearer-token";
    process.env[mockBearerTokenEnvKey] = mockBearerToken;
    const token = await fromEnvSigningName(mockInit)();
    expect(token).toEqual({
      token: mockBearerToken,
      $source: {
        BEARER_SERVICE_ENV_VARS: "3",
      },
    });
    expect(getBearerTokenEnvKey).toHaveBeenCalledWith(mockInit.signingName);
  });
});
