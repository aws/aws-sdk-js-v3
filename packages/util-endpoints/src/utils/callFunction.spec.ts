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

  it.each([
    ["boolean", true],
    ["boolean", false],
    ["number", 1],
    ["number", 0],
  ])("skips evaluateExpression for %s arg: %s", (argType, mockNotExpressionArg) => {
    const mockFn = { fn: mockFunctionName, argv: [mockNotExpressionArg] };
    const result = callFunction(mockFn, mockOptions);
    expect(result).toBe(mockReturn);
    expect(evaluateExpression).not.toHaveBeenCalled();
    expect(lib[mockFunctionName]).toHaveBeenCalledWith(mockNotExpressionArg);
  });

  it.each(["string", { ref: "ref" }, { fn: "fn", argv: [] }])(
    "calls evaluateExpression for expression arg: %s",
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
