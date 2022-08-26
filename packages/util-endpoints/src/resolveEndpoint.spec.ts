import { resolveEndpoint } from "./resolveEndpoint";
import { EndpointError, EndpointParams, ParameterObject, RuleSetObject } from "./types";
import { evaluateRules } from "./utils";

jest.mock("./utils");

describe(resolveEndpoint.name, () => {
  const boolParamKey = "boolParamKey";
  const stringParamKey = "stringParamKey";
  const requiredParamKey = "requiredParamKey";
  const paramWithDefaultKey = "paramWithDefaultKey";

  const mockEndpointParams: EndpointParams = {
    [boolParamKey]: true,
    [stringParamKey]: "stringParamValue",
    [requiredParamKey]: "requiredParamValue",
    [paramWithDefaultKey]: "defaultParamValue",
  };

  const mockRules = [];
  const mockRuleSetParameters: Record<string, ParameterObject> = {
    [boolParamKey]: {
      type: "boolean",
    },
    [stringParamKey]: {
      type: "string",
    },
    [requiredParamKey]: {
      type: "string",
      required: true,
    },
    [paramWithDefaultKey]: {
      type: "string",
      default: "paramWithDefaultValue",
    },
  };

  const mockRuleSetObject: RuleSetObject = {
    version: "1.0",
    serviceId: "serviceId",
    parameters: mockRuleSetParameters,
    rules: mockRules,
  };

  const mockResolvedEndpoint = { url: new URL("http://example.com") };

  beforeEach(() => {
    (evaluateRules as jest.Mock).mockReturnValue(mockResolvedEndpoint);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should throw an error if a required parameter is missing", () => {
    const { requiredParamKey: ignored, ...endpointParamsWithoutRequired } = mockEndpointParams;
    expect(() => resolveEndpoint(mockRuleSetObject, { endpointParams: endpointParamsWithoutRequired })).toThrow(
      new EndpointError(`Missing required parameter: '${requiredParamKey}'`)
    );
    expect(evaluateRules).not.toHaveBeenCalled();
  });

  it("should use the default value if a parameter is not set", () => {
    const { paramWithDefaultKey: ignored, ...endpointParamsWithoutDefault } = mockEndpointParams;

    const resolvedEndpoint = resolveEndpoint(mockRuleSetObject, { endpointParams: endpointParamsWithoutDefault });
    expect(resolvedEndpoint).toEqual(mockResolvedEndpoint);

    expect(evaluateRules).toHaveBeenCalledWith(mockRules, {
      endpointParams: {
        ...mockEndpointParams,
        [paramWithDefaultKey]: mockRuleSetParameters[paramWithDefaultKey].default,
      },
      referenceRecord: {},
    });
  });

  it("should call evaluateRules", () => {
    const resolvedEndpoint = resolveEndpoint(mockRuleSetObject, { endpointParams: mockEndpointParams });
    expect(resolvedEndpoint).toEqual(mockResolvedEndpoint);
    expect(evaluateRules).toHaveBeenCalledWith(mockRules, {
      endpointParams: mockEndpointParams,
      referenceRecord: {},
    });
  });
});
