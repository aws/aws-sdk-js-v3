import { EndpointError } from "../types";
import { callFunction } from "./callFunction";
import { evaluateExpression } from "./evaluateExpression";
import { evaluateRef } from "./evaluateRef";
import { evaluateTemplate } from "./evaluateTemplate";

jest.mock("./callFunction");
jest.mock("./evaluateRef");
jest.mock("./evaluateTemplate");

describe(evaluateExpression.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };
  const mockKeyName = "mockKeyName";
  const mockResult = "mockResult";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls evaluateTemplate if input is string", () => {
    const mockInput = "mockInput";
    (evaluateTemplate as jest.Mock).mockReturnValue(mockResult);
    const result = evaluateExpression(mockInput, mockKeyName, mockOptions);
    expect(result).toBe(mockResult);
    expect(evaluateTemplate).toHaveBeenCalledWith(mockInput, mockOptions);
    expect(callFunction).not.toHaveBeenCalled();
    expect(evaluateRef).not.toHaveBeenCalled();
  });

  it("calls callFunction if input constains 'fn' key", () => {
    const mockInput = { fn: "fn", argv: ["arg1"] };
    (callFunction as jest.Mock).mockReturnValue(mockResult);
    const result = evaluateExpression(mockInput, mockKeyName, mockOptions);
    expect(result).toBe(mockResult);
    expect(evaluateTemplate).not.toHaveBeenCalled();
    expect(callFunction).toHaveBeenCalledWith(mockInput, mockOptions);
    expect(evaluateRef).not.toHaveBeenCalled();
  });

  it("calls evaluateRef if input constains 'ref' key", () => {
    const mockInput = { ref: "ref" };
    (evaluateRef as jest.Mock).mockReturnValue(mockResult);
    const result = evaluateExpression(mockInput, mockKeyName, mockOptions);
    expect(result).toBe(mockResult);
    expect(evaluateTemplate).not.toHaveBeenCalled();
    expect(callFunction).not.toHaveBeenCalled();
    expect(evaluateRef).toHaveBeenCalledWith(mockInput, mockOptions);
  });

  it("throws error if input is neither string, function or reference", () => {
    const mockInput = {};
    // @ts-ignore: Argument is not assignable
    expect(() => evaluateExpression(mockInput, mockKeyName, mockOptions)).toThrowError(
      new EndpointError(`'${mockKeyName}': ${String(mockInput)} is not a string, function or reference.`)
    );
    expect(evaluateTemplate).not.toHaveBeenCalled();
    expect(callFunction).not.toHaveBeenCalled();
    expect(evaluateRef).not.toHaveBeenCalled();
  });
});
