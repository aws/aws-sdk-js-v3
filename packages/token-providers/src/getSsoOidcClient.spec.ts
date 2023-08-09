import { SSOOIDCClient } from "./bundle/client-sso-oidc-node";

jest.mock("./bundle/client-sso-oidc-node");

describe("getSsoOidcClient", () => {
  const mockSsoRegion = "mockSsoRegion";
  const getMockClient = (region) => ({ region });

  beforeEach(() => {
    (SSOOIDCClient as jest.Mock).mockImplementation(({ region }) => getMockClient(region));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("creates new SSOOIDC client", () => {
    jest.isolateModules(() => {
      const { getSsoOidcClient } = require("./getSsoOidcClient");
      expect(getSsoOidcClient(mockSsoRegion)).toEqual(getMockClient(mockSsoRegion) as any);
      expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
    });
  });

  it("returns SSOOIDC client from hash if already created", () => {
    jest.isolateModules(() => {
      const { getSsoOidcClient } = require("./getSsoOidcClient");
      expect(getSsoOidcClient(mockSsoRegion)).toEqual(getMockClient(mockSsoRegion) as any);
      expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
      expect(getSsoOidcClient(mockSsoRegion)).toEqual(getMockClient(mockSsoRegion) as any);
      expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
    });
  });

  it("creates new SSOOIDC client per region", () => {
    jest.isolateModules(() => {
      const { getSsoOidcClient } = require("./getSsoOidcClient");
      const mockSsoRegion1 = `${mockSsoRegion}1`;
      expect(getSsoOidcClient(mockSsoRegion1)).toEqual(getMockClient(mockSsoRegion1) as any);
      expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
      expect(SSOOIDCClient).toHaveBeenCalledWith({ region: mockSsoRegion1 });

      const mockSsoRegion2 = `${mockSsoRegion}2`;
      expect(getSsoOidcClient(mockSsoRegion2)).toEqual(getMockClient(mockSsoRegion2) as any);
      expect(SSOOIDCClient).toHaveBeenCalledTimes(2);
      expect(SSOOIDCClient).toHaveBeenNthCalledWith(2, { region: mockSsoRegion2 });
    });
  });
});
