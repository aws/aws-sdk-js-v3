import { evaluateExpression } from "./evaluateExpression";
import { getEndpointHeaders } from "./getEndpointHeaders";

jest.mock("./evaluateExpression");

describe(getEndpointHeaders.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return an empty object if empty headers are provided", () => {
    expect(getEndpointHeaders({}, mockOptions)).toEqual({});
    expect(evaluateExpression).not.toHaveBeenCalled();
  });

  it("should return processed header", () => {
    const inputHeaderValue = "inputHeaderValue";
    const outputHeaderValue = "outputHeaderValue";
    const mockHeaders = { key: [inputHeaderValue] };

    (evaluateExpression as jest.Mock).mockReturnValue(outputHeaderValue);
    expect(getEndpointHeaders(mockHeaders, mockOptions)).toEqual({ key: [outputHeaderValue] });
    expect(evaluateExpression).toHaveBeenCalledWith("inputHeaderValue", "Header value entry", mockOptions);
  });

  it.each([null, undefined, true, 1])(
    "should throw error if evaluated expression is not string: %s",
    (notStringValue) => {
      const inputHeaderKey = "inputHeaderKey";
      const inputHeaderValue = "inputHeaderValue";
      const mockHeaders = { [inputHeaderKey]: [inputHeaderValue] };

      (evaluateExpression as jest.Mock).mockReturnValue(notStringValue);
      expect(() => getEndpointHeaders(mockHeaders, mockOptions)).toThrowError(
        `Header '${inputHeaderKey}' value '${notStringValue}' is not a string`
      );
      expect(evaluateExpression).toHaveBeenCalledWith("inputHeaderValue", "Header value entry", mockOptions);
    }
  );
});
