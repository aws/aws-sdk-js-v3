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

  beforeEach(() => {
    lib[mockFunctionName] = jest.fn().mockReturnValue(mockReturn);
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
      const mockArgReturn = "mockArgReturn";
      const mockFn = { fn: mockFunctionName, argv: [arg] };

      (evaluateExpression as jest.Mock).mockReturnValue(mockArgReturn);

      const result = callFunction(mockFn, mockOptions);
      expect(result).toBe(mockReturn);
      expect(evaluateExpression).toHaveBeenCalledWith(arg, "arg", mockOptions);
      expect(lib[mockFunctionName]).toHaveBeenCalledWith(mockArgReturn);
    }
  );
});
