import { CreateTokenCommand } from "@aws-sdk/client-sso-oidc";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { getNewSsoOidcToken } from "./getNewSsoOidcToken";
import { getSsoOidcClient } from "./getSsoOidcClient";

vi.mock("@aws-sdk/client-sso-oidc");
vi.mock("./getSsoOidcClient");

describe(getNewSsoOidcToken.name, () => {
  let mockSend: any;

  const mockSsoRegion = "mockSsoRegion";
  const mockSsoToken = {
    accessToken: "mockAccessToken",
    expiresAt: new Date().toISOString(),
    clientId: "clientId",
    clientSecret: "clientSecret",
    refreshToken: "refreshToken",
  };
  const mockCreateTokenArgs = {
    clientId: mockSsoToken.clientId,
    clientSecret: mockSsoToken.clientSecret,
    refreshToken: mockSsoToken.refreshToken,
    grantType: "refresh_token",
  };

  const mockNewToken = {
    accessToken: "mockNewAccessToken",
    expiresIn: "3600",
  };

  beforeEach(() => {
    mockSend = vi.fn().mockResolvedValueOnce(mockNewToken);
    vi.mocked(getSsoOidcClient as any).mockReturnValue({ send: mockSend });
    (CreateTokenCommand as unknown as any).mockImplementation((args: any) => args);
  });

  describe("re-throws", () => {
    const mockError = new Error("mockError");

    it("if getSsoOidcClient throws", async () => {
      vi.mocked(getSsoOidcClient).mockImplementationOnce(() => {
        throw mockError;
      });
      try {
        await getNewSsoOidcToken(mockSsoToken, mockSsoRegion);
        fail(`expected ${mockError}`);
      } catch (error) {
        expect(error).toStrictEqual(mockError);
      }
      expect(getSsoOidcClient).toHaveBeenCalledWith(mockSsoRegion);
      expect(mockSend).not.toHaveBeenCalled();
      expect(CreateTokenCommand).not.toHaveBeenCalled();
    });

    it("if client.send() throws", async () => {
      const mockSendWithError = vi.fn().mockRejectedValueOnce(mockError);
      vi.mocked(getSsoOidcClient as any).mockReturnValueOnce({ send: mockSendWithError });
      try {
        await getNewSsoOidcToken(mockSsoToken, mockSsoRegion);
        fail(`expected ${mockError}`);
      } catch (error) {
        expect(error).toStrictEqual(mockError);
      }
      expect(getSsoOidcClient).toHaveBeenCalledWith(mockSsoRegion);
      expect(mockSendWithError).toHaveBeenCalledWith(mockCreateTokenArgs);
      expect(CreateTokenCommand).toHaveBeenCalledWith(mockCreateTokenArgs);
    });

    it("if CreateTokenCommand throws", async () => {
      (CreateTokenCommand as unknown as any).mockImplementation(() => {
        throw mockError;
      });
      try {
        await getNewSsoOidcToken(mockSsoToken, mockSsoRegion);
        fail(`expected ${mockError}`);
      } catch (error) {
        expect(error).toStrictEqual(mockError);
      }
      expect(getSsoOidcClient).toHaveBeenCalledWith(mockSsoRegion);
      expect(mockSend).not.toHaveBeenCalled();
      expect(CreateTokenCommand).toHaveBeenCalledWith(mockCreateTokenArgs);
    });
  });

  it("returns client.send(CreateTokenCommand)", async () => {
    const newSsoOidcToken = await getNewSsoOidcToken(mockSsoToken, mockSsoRegion);

    expect(newSsoOidcToken).toEqual(mockNewToken as any);
    expect(CreateTokenCommand).toHaveBeenCalledWith(mockCreateTokenArgs);
    expect(mockSend).toHaveBeenCalledWith(mockCreateTokenArgs);
    expect(getSsoOidcClient).toHaveBeenCalledWith(mockSsoRegion);
  });
});
