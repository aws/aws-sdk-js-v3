import { EndpointError, EvaluateOptions } from "../types";
import { callFunction } from "./callFunction";
import { evaluateCondition } from "./evaluateCondition";

jest.mock("./callFunction");

describe(evaluateCondition.name, () => {
  const mockOptions: EvaluateOptions = {
    endpointParams: {},
    referenceRecord: {},
  };
  const mockAssign = "mockAssign";
  const mockFnArgs = { fn: "fn", argv: ["arg"] };

  it("throws error if assign is already defined in Reference Record", () => {
    const mockOptionsWithAssign = {
      ...mockOptions,
      referenceRecord: {
        [mockAssign]: true,
      },
    };
    expect(() => evaluateCondition({ assign: mockAssign, ...mockFnArgs }, mockOptionsWithAssign)).toThrow(
      new EndpointError(`'${mockAssign}' is already defined in Reference Record.`)
    );
    expect(callFunction).not.toHaveBeenCalled();
  });

  describe("evaluates function", () => {
    describe.each([
      [true, "truthy", [true, 1, -1, "true", "false"]],
      [false, "falsy", [false, 0, -0, "", null, undefined, NaN]],
    ])("returns %s for %s values", (result, boolStatus, testCases) => {
      it.each(testCases)(`${boolStatus} value: '%s'`, (mockReturn) => {
        (callFunction as jest.Mock).mockReturnValue(mockReturn);
        const { result, toAssign } = evaluateCondition(mockFnArgs, mockOptions);
        expect(result).toBe(result);
        expect(toAssign).toBeUndefined();
      });
    });
  });

  it("returns assigned value if defined", () => {
    const mockAssignedValue = "mockAssignedValue";
    (callFunction as jest.Mock).mockReturnValue(mockAssignedValue);
    const { result, toAssign } = evaluateCondition({ assign: mockAssign, ...mockFnArgs }, mockOptions);
    expect(result).toBe(true);
    expect(toAssign).toEqual({ name: mockAssign, value: mockAssignedValue });
  });
});
