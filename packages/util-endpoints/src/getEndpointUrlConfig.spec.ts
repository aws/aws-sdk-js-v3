import { getEndpointUrlConfig } from "./getEndpointUrlConfig";

const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";

describe(getEndpointUrlConfig.name, () => {
  const serviceId = "foo";
  const endpointUrlConfig = getEndpointUrlConfig(serviceId);

  const mockEndpoint = "https://mock-endpoint.com";
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    process.env = {};
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
  });

  describe("environmentVariableSelector", () => {
    const serviceMockEndpoint = `${mockEndpoint}/${serviceId}`;

    beforeEach(() => {
      process.env[ENV_ENDPOINT_URL] = mockEndpoint;
      process.env[`${ENV_ENDPOINT_URL}_${serviceId.toUpperCase()}`] = serviceMockEndpoint;
    });

    it("returns service specific endpoint from environment variable, if available", () => {
      expect(endpointUrlConfig.environmentVariableSelector(process.env)).toEqual(serviceMockEndpoint);
    });

    it("returns endpoint from environment variable, if available", () => {
      process.env[`${ENV_ENDPOINT_URL}_${serviceId.toUpperCase()}`] = undefined;
      expect(endpointUrlConfig.environmentVariableSelector(process.env)).toEqual(mockEndpoint);
    });

    it("returns undefined, if endpoint not available in environment variables", () => {
      process.env[ENV_ENDPOINT_URL] = undefined;
      process.env[`${ENV_ENDPOINT_URL}_${serviceId.toUpperCase()}`] = undefined;
      expect(endpointUrlConfig.environmentVariableSelector(process.env)).toBeUndefined();
    });
  });

  describe("configFileSelector", () => {
    it("returns service specific endpoint from config file, if available", () => {
      // ToDo
    });

    it("returns endpoint from config file, if available", () => {
      const profile = { [CONFIG_ENDPOINT_URL]: mockEndpoint };
      expect(endpointUrlConfig.configFileSelector(profile)).toEqual(mockEndpoint);
    });

    it("returns undefined, if endpoint not available in config", () => {
      expect(endpointUrlConfig.environmentVariableSelector({})).toBeUndefined();
    });
  });

  it("returns undefined by default", () => {
    expect(endpointUrlConfig.default).toBeUndefined();
  });
});
