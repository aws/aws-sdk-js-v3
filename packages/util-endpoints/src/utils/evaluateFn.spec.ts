import * as lib from "../lib";
import { evaluateExpression } from "./evaluateExpression";
import { evaluateFn } from "./evaluateFn";

jest.mock("./evaluateExpression");

describe(evaluateFn.name, () => {
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
    jest.resetAllMocks();
  });

  it("skips evaluateExpression for boolean arg", () => {
    const mockBooleanArg = true;
    const mockFn = { fn: mockFunctionName, argv: [mockBooleanArg] };
    const result = evaluateFn(mockFn, mockOptions);
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

      const result = evaluateFn(mockFn, mockOptions);
      expect(result).toBe(mockReturn);
      expect(evaluateExpression).toHaveBeenCalledWith(arg, "arg", mockOptions);
      expect(lib[mockFunctionName]).toHaveBeenCalledWith(mockArgReturn);
    }
  );
});
