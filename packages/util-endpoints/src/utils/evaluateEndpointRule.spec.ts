import { ConditionObject, EndpointRuleObject } from "../types";
import { evaluateConditions } from "./evaluateConditions";
import { evaluateEndpointRule } from "./evaluateEndpointRule";
import { getEndpointHeaders } from "./getEndpointHeaders";
import { getEndpointProperties } from "./getEndpointProperties";
import { getEndpointUrl } from "./getEndpointUrl";

jest.mock("./evaluateConditions");
jest.mock("./getEndpointUrl");
jest.mock("./getEndpointHeaders");
jest.mock("./getEndpointProperties");

describe(evaluateEndpointRule.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };
  const mockConditions: ConditionObject[] = [
    { fn: "fn1", argv: ["arg1"] },
    { fn: "fn2", argv: ["arg2"] },
  ];
  const mockEndpoint = { url: "http://example.com" };
  const mockEndpointRule: EndpointRuleObject = {
    type: "endpoint",
    conditions: mockConditions,
    endpoint: mockEndpoint,
  };

  it("returns undefined if conditions are false", () => {
    (evaluateConditions as jest.Mock).mockReturnValue({ result: false });
    const result = evaluateEndpointRule(mockEndpointRule, mockOptions);
    expect(result).toBeUndefined();
    expect(evaluateConditions).toHaveBeenCalledWith(mockConditions, mockOptions);
    expect(getEndpointUrl).not.toHaveBeenCalled();
    expect(getEndpointHeaders).not.toHaveBeenCalled();
    expect(getEndpointProperties).not.toHaveBeenCalled();
  });

  describe("returns endpoint if conditions are true", () => {
    const mockReferenceRecord = { key: "value" };
    const mockEndpointUrl = new URL(mockEndpoint.url);
    const mockUpdatedOptions = {
      ...mockOptions,
      referenceRecord: { ...mockOptions.referenceRecord, ...mockReferenceRecord },
    };

    beforeEach(() => {
      (evaluateConditions as jest.Mock).mockReturnValue({
        result: true,
        referenceRecord: mockReferenceRecord,
      });
      (getEndpointUrl as jest.Mock).mockReturnValue(mockEndpointUrl);
    });

    afterEach(() => {
      expect(evaluateConditions).toHaveBeenCalledWith(mockConditions, mockOptions);
      expect(getEndpointUrl).toHaveBeenCalledWith(mockEndpoint.url, mockUpdatedOptions);
      jest.clearAllMocks();
    });

    it("without headers and properties", () => {
      const result = evaluateEndpointRule(mockEndpointRule, mockOptions);
      expect(result).toEqual({
        url: mockEndpointUrl,
      });
      expect(getEndpointHeaders).not.toHaveBeenCalled();
      expect(getEndpointProperties).not.toHaveBeenCalled();
    });

    it("with headers and properties", () => {
      const mockInputHeaders = { headerKey: ["headerInputValue"] };
      const mockInputProperties = { propertyKey: "propertyInputValue" };

      const mockOutputHeaders = { headerKey: ["headerOutputValue"] };
      const mockOutputProperties = { propertyKey: "propertyOutputValue" };

      (getEndpointHeaders as jest.Mock).mockReturnValue(mockOutputHeaders);
      (getEndpointProperties as jest.Mock).mockReturnValue(mockOutputProperties);

      const result = evaluateEndpointRule(
        {
          ...mockEndpointRule,
          endpoint: {
            ...mockEndpoint,
            headers: mockInputHeaders,
            properties: mockInputProperties,
          },
        },
        mockOptions
      );

      expect(result).toEqual({
        url: mockEndpointUrl,
        headers: mockOutputHeaders,
        properties: mockOutputProperties,
      });
      expect(getEndpointHeaders).toHaveBeenCalledWith(mockInputHeaders, mockUpdatedOptions);
      expect(getEndpointProperties).toHaveBeenCalledWith(mockInputProperties, mockUpdatedOptions);
    });
  });
});
