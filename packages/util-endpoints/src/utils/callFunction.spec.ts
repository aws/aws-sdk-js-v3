import * as lib from "../lib";
import { callFunction } from "./callFunction";
import { evaluateExpression } from "./evaluateExpression";

jest.mock("./evaluateExpression");

describe(callFunction.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };
  const mockFunctionName = "mockFunctionName";
  const mockReturn = "mockReturn";
  const mockArgReturn = "mockArgReturn";

  beforeEach(() => {
    lib[mockFunctionName] = jest.fn().mockReturnValue(mockReturn);
    (evaluateExpression as jest.Mock).mockReturnValue(mockArgReturn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("skips evaluateExpression for boolean arg", () => {
    const mockBooleanArg = true;
    const mockFn = { fn: mockFunctionName, argv: [mockBooleanArg] };
    const result = callFunction(mockFn, mockOptions);
    expect(result).toBe(mockReturn);
    expect(evaluateExpression).not.toHaveBeenCalled();
    expect(lib[mockFunctionName]).toHaveBeenCalledWith(mockBooleanArg);
  });

  it.each(["string", { ref: "ref" }, { fn: "fn", argv: [] }])(
    "calls evaluateExpression for non-boolean arg: %s",
    (arg) => {
      const mockFn = { fn: mockFunctionName, argv: [arg] };

      const result = callFunction(mockFn, mockOptions);
      expect(result).toBe(mockReturn);
      expect(evaluateExpression).toHaveBeenCalledWith(arg, "arg", mockOptions);
      expect(lib[mockFunctionName]).toHaveBeenCalledWith(mockArgReturn);
    }
  );

  it("calls multi-level function", () => {
    const mockSecondLevelFunctionName = "mockSecondLevelFunctionName";
    lib[mockFunctionName][mockSecondLevelFunctionName] = jest.fn().mockReturnValue(mockReturn);

    const mockArg = "mockArg";
    const mockFn = { fn: `${mockFunctionName}.${mockSecondLevelFunctionName}`, argv: [mockArg] };

    const result = callFunction(mockFn, mockOptions);
    expect(result).toBe(mockReturn);
    expect(evaluateExpression).toHaveBeenCalledWith(mockArg, "arg", mockOptions);
    expect(lib[mockFunctionName]).not.toHaveBeenCalled();
    expect(lib[mockFunctionName][mockSecondLevelFunctionName]).toHaveBeenCalledWith(mockArgReturn);
  });
});
