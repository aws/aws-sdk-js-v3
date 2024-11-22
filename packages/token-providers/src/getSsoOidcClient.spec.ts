import { SSOOIDCClient } from "@aws-sdk/client-sso-oidc";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@aws-sdk/client-sso-oidc");

describe("getSsoOidcClient", () => {
  const mockSsoRegion = "mockSsoRegion";
  const mockRequestHandler = {
    protocol: "http",
  };
  const getMockClient = (region: string) => ({ region });

  beforeEach(() => {
    vi.resetModules();
    vi.mocked(SSOOIDCClient as any).mockImplementation((({ region }: any) => getMockClient(region)) as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("creates new SSOOIDC client", async () => {
    const { getSsoOidcClient } = await import("./getSsoOidcClient");
    expect(await getSsoOidcClient(mockSsoRegion)).toEqual(getMockClient(mockSsoRegion) as any);
    expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
  });

  it("passes through clientConfig and parentClientConfig.logger", async () => {
    const { getSsoOidcClient } = await import("./getSsoOidcClient");
    const mockSsoRegion1 = `${mockSsoRegion}1`;
    expect(
      await getSsoOidcClient(mockSsoRegion1, {
        clientConfig: { requestHandler: mockRequestHandler },
        parentClientConfig: { logger: console },
      })
    ).toEqual({
      region: mockSsoRegion1,
    } as any);
    expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
    expect(SSOOIDCClient).toHaveBeenCalledWith({
      region: mockSsoRegion1,
      requestHandler: mockRequestHandler,
      logger: console,
    });
  });
});
