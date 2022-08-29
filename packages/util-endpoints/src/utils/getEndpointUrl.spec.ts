import { EndpointError } from "../types";
import { evaluateExpression } from "./evaluateExpression";
import { getEndpointUrl } from "./getEndpointUrl";

jest.mock("./evaluateExpression");

describe(getEndpointUrl.name, () => {
  const mockEndpointUrlInput = "http://input.example.com";
  const mockEndpointUrlOutput = "http://output.example.com";
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };

  it("returns URL is expression evaluates to string", () => {
    (evaluateExpression as jest.Mock).mockReturnValue(mockEndpointUrlOutput);
    const result = getEndpointUrl(mockEndpointUrlInput, mockOptions);
    expect(result).toEqual(new URL(mockEndpointUrlOutput));
    expect(evaluateExpression).toHaveBeenCalledWith(mockEndpointUrlInput, "Endpoint URL", mockOptions);
  });

  it("throws error if expression evaluates to non-string", () => {
    const mockNotStringOutput = 42;
    (evaluateExpression as jest.Mock).mockReturnValue(mockNotStringOutput);
    expect(() => getEndpointUrl(mockEndpointUrlInput, mockOptions)).toThrowError(
      new EndpointError(`Endpoint URL must be a string, got ${typeof mockNotStringOutput}`)
    );
    expect(evaluateExpression).toHaveBeenCalledWith(mockEndpointUrlInput, "Endpoint URL", mockOptions);
  });
});
