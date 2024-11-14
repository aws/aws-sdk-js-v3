import { SSOOIDCClient } from "@aws-sdk/client-sso-oidc";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@aws-sdk/client-sso-oidc");

describe("getSsoOidcClient", () => {
  const mockSsoRegion = "mockSsoRegion";
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

  it("returns SSOOIDC client from hash if already created", async () => {
    const { getSsoOidcClient } = await import("./getSsoOidcClient");
    expect(await getSsoOidcClient(mockSsoRegion)).toEqual(getMockClient(mockSsoRegion) as any);
    expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
    expect(await getSsoOidcClient(mockSsoRegion)).toEqual(getMockClient(mockSsoRegion) as any);
    expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
  });

  it("creates new SSOOIDC client per region", async () => {
    const { getSsoOidcClient } = await import("./getSsoOidcClient");
    const mockSsoRegion1 = `${mockSsoRegion}1`;
    expect(await getSsoOidcClient(mockSsoRegion1)).toEqual(getMockClient(mockSsoRegion1) as any);
    expect(SSOOIDCClient).toHaveBeenCalledTimes(1);
    expect(SSOOIDCClient).toHaveBeenCalledWith({ region: mockSsoRegion1 });

    const mockSsoRegion2 = `${mockSsoRegion}2`;
    expect(await getSsoOidcClient(mockSsoRegion2)).toEqual(getMockClient(mockSsoRegion2) as any);
    expect(SSOOIDCClient).toHaveBeenCalledTimes(2);
    expect(SSOOIDCClient).toHaveBeenNthCalledWith(2, { region: mockSsoRegion2 });
  });
});
