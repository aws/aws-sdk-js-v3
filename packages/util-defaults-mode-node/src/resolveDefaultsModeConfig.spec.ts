import { NODE_REGION_CONFIG_OPTIONS } from "@aws-sdk/config-resolver";
import * as ImdsProvider from "@aws-sdk/credential-provider-imds";
import * as NodeConfigProvider from "@aws-sdk/node-config-provider";

import {
  AWS_DEFAULT_REGION_ENV,
  AWS_EXECUTION_ENV,
  AWS_REGION_ENV,
  DEFAULTS_MODE_OPTIONS,
  ENV_IMDS_DISABLED,
  IMDS_REGION_PATH,
} from "./constants";
import { NODE_DEFAULTS_MODE_CONFIG_OPTIONS } from "./defaultsModeConfig";
import { resolveDefaultsModeConfig } from "./resolveDefaultsModeConfig";

jest.mock("@aws-sdk/node-config-provider");
jest.mock("@aws-sdk/credential-provider-imds");

describe("resolveDefaultsModeConfig", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should default to legacy", async () => {
    expect(await resolveDefaultsModeConfig({})()).toBe("legacy");
    expect(await resolveDefaultsModeConfig()()).toBe("legacy");
  });

  it.each(DEFAULTS_MODE_OPTIONS)("should resolve %s mode", async (mode) => {
    expect(await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve(mode as any) })()).toBe(mode);
  });

  it.each(["invalid", "abc"])("should throw for invalid value %s", async (mode) => {
    try {
      await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve(mode as any) })();
      fail("should throw for invalid modes");
    } catch (e) {
      expect(e.message).toContain("Invalid parameter");
    }
  });

  it("should memoize the response", async () => {
    const providerMock = jest.fn().mockResolvedValue("legacy");
    const defaultsMode = resolveDefaultsModeConfig({ defaultsMode: providerMock });
    await defaultsMode();
    const mockInvokeCount = providerMock.mock.calls.length;
    await defaultsMode();
    expect(providerMock).toBeCalledTimes(mockInvokeCount);
  });

  it("should resolve client region from Node config provider chain", async () => {
    const loadConfigMock = NodeConfigProvider.loadConfig as jest.Mock;
    loadConfigMock.mockReturnValueOnce(undefined);
    expect(await resolveDefaultsModeConfig({ defaultsMode: () => Promise.resolve("mobile") })()).toBe("mobile");
    expect(loadConfigMock.mock.calls[0][0]).toBe(NODE_REGION_CONFIG_OPTIONS);
  });

  it("should resolve defaults mode from Node config provider chain", async () => {
    const loadConfigMock = NodeConfigProvider.loadConfig as jest.Mock;
    loadConfigMock.mockReturnValueOnce("us-west-2").mockReturnValueOnce("mobile");
    expect(await resolveDefaultsModeConfig({})()).toBe("mobile");
    expect(loadConfigMock.mock.calls[1][0]).toBe(NODE_DEFAULTS_MODE_CONFIG_OPTIONS);
  });

  describe("auto mode inference", () => {
    const originalEnv = process.env;
    beforeEach(() => {
      process.env = {};
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    it("should use the AWS_REGION env when in an AWS service environment", async () => {
      process.env[AWS_EXECUTION_ENV] = "aws-lambda";
      process.env[AWS_REGION_ENV] = "us-west-2";
      expect(await resolveDefaultsModeConfig({ region: "us-west-1", defaultsMode: "auto" })()).toBe("cross-region");
      process.env[AWS_REGION_ENV] = "us-west-1";
      expect(await resolveDefaultsModeConfig({ region: "us-west-1", defaultsMode: "auto" })()).toBe("in-region");
    });

    it("should use the AWS_DEFAULT_REGION env when in an AWS service environment", async () => {
      process.env[AWS_EXECUTION_ENV] = "aws-lambda";
      process.env[AWS_DEFAULT_REGION_ENV] = "us-west-2";
      expect(await resolveDefaultsModeConfig({ region: "us-west-1", defaultsMode: "auto" })()).toBe("cross-region");
      process.env[AWS_DEFAULT_REGION_ENV] = "us-west-1";
      expect(await resolveDefaultsModeConfig({ region: "us-west-1", defaultsMode: "auto" })()).toBe("in-region");
    });

    it("should make request to IMDS endpoint to resolve client region", async () => {
      const fakeImdsEndpoint = { path: "foo", hostname: "bar" };
      const getImdsEndpointMock = (ImdsProvider.getInstanceMetadataEndpoint as jest.Mock).mockResolvedValue(
        fakeImdsEndpoint
      );
      const httpRequestMock = (ImdsProvider.httpRequest as jest.Mock).mockResolvedValue("us-west-2");
      expect(await resolveDefaultsModeConfig({ region: "us-west-1", defaultsMode: "auto" })()).toBe("cross-region");
      expect(getImdsEndpointMock).toBeCalled();
      expect(httpRequestMock.mock.calls[0][0]).toMatchObject({ ...fakeImdsEndpoint, path: IMDS_REGION_PATH });
      httpRequestMock.mockResolvedValue("us-west-1");
      expect(await resolveDefaultsModeConfig({ region: "us-west-1", defaultsMode: "auto" })()).toBe("in-region");
    });

    it(`should skip calling IMDS if ${ENV_IMDS_DISABLED} is set`, async () => {
      process.env[ENV_IMDS_DISABLED] = "true";
      const getImdsEndpointMock = ImdsProvider.getInstanceMetadataEndpoint as jest.Mock;
      const httpRequestMock = ImdsProvider.httpRequest as jest.Mock;
      expect(await resolveDefaultsModeConfig({ region: "us-west-1", defaultsMode: "auto" })()).toBe("standard");
      expect(getImdsEndpointMock).not.toBeCalled();
      expect(httpRequestMock).not.toBeCalled();
    });
  });
});
