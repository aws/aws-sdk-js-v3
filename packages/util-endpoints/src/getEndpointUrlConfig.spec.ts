import { getEndpointUrlConfig } from "./getEndpointUrlConfig";

const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";

describe(getEndpointUrlConfig.name, () => {
  const serviceId = "mockServiceId";
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
    beforeEach(() => {
      process.env[ENV_ENDPOINT_URL] = mockEndpoint;
    });

    it.each([
      ["foo", `${ENV_ENDPOINT_URL}_FOO`],
      ["foobar", `${ENV_ENDPOINT_URL}_FOOBAR`],
      ["foo bar", `${ENV_ENDPOINT_URL}_FOO_BAR`],
    ])("returns endpoint for '%s' from environment variable %s", (serviceId, envKey) => {
      const serviceMockEndpoint = `${mockEndpoint}/${envKey}`;
      process.env[envKey] = serviceMockEndpoint;

      const endpointUrlConfig = getEndpointUrlConfig(serviceId);
      expect(endpointUrlConfig.environmentVariableSelector(process.env)).toEqual(serviceMockEndpoint);
    });

    it(`returns endpoint from environment variable ${ENV_ENDPOINT_URL}`, () => {
      expect(endpointUrlConfig.environmentVariableSelector(process.env)).toEqual(mockEndpoint);
    });

    it("returns undefined, if endpoint not available in environment variables", () => {
      process.env[ENV_ENDPOINT_URL] = undefined;
      expect(endpointUrlConfig.environmentVariableSelector(process.env)).toBeUndefined();
    });
  });

  describe("configFileSelector", () => {
    const profile = { [CONFIG_ENDPOINT_URL]: mockEndpoint };

    // ToDo: Enable once support for services section is added.
    it.skip.each([
      ["foo", "foo"],
      ["foobar", "foobar"],
      ["foo bar", "foo_bar"],
    ])("returns endpoint for '%s' from config file '%s'", (serviceId, serviceConfigId) => {
      const serviceMockEndpoint = `${mockEndpoint}/${serviceConfigId}`;
      const serviceSectionName = `services ${serviceConfigId}_dev`;

      const profileWithServices = {
        ...profile,
        services: serviceSectionName,
      };
      const parsedIni = {
        profileName: profileWithServices,
        [serviceSectionName]: {
          [serviceConfigId]: {
            [CONFIG_ENDPOINT_URL]: serviceMockEndpoint,
          },
        },
      };

      // @ts-ignore
      expect(endpointUrlConfig.environmentVariableSelector(profileWithServices, parsedIni)).toEqual(
        serviceMockEndpoint
      );
    });

    it("returns endpoint from config file, if available", () => {
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
