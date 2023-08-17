import { CreateTokenCommand } from "./bundle/client-sso-oidc-node";
import { getNewSsoOidcToken } from "./getNewSsoOidcToken";
import { getSsoOidcClient } from "./getSsoOidcClient";

jest.mock("./bundle/client-sso-oidc-node");
jest.mock("./getSsoOidcClient");

describe(getNewSsoOidcToken.name, () => {
  let mockSend;

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
    mockSend = jest.fn().mockResolvedValueOnce(mockNewToken);
    (getSsoOidcClient as jest.Mock).mockReturnValue({ send: mockSend });
    (CreateTokenCommand as unknown as jest.Mock).mockImplementation((args) => args);
  });

  describe("re-throws", () => {
    const mockError = new Error("mockError");

    it("if getSsoOidcClient throws", async () => {
      (getSsoOidcClient as jest.Mock).mockImplementationOnce(() => {
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
      const mockSendWithError = jest.fn().mockRejectedValueOnce(mockError);
      (getSsoOidcClient as jest.Mock).mockReturnValueOnce({ send: mockSendWithError });
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
      (CreateTokenCommand as unknown as jest.Mock).mockImplementation(() => {
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
