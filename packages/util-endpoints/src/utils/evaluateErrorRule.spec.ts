import { EndpointError, ErrorRuleObject } from "../types";
import { evaluateConditions } from "./evaluateConditions";
import { evaluateErrorRule } from "./evaluateErrorRule";
import { evaluateExpression } from "./evaluateExpression";

jest.mock("./evaluateConditions");
jest.mock("./evaluateExpression");

describe(evaluateErrorRule.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };
  const mockConditions = [
    { fn: "fn1", argv: ["arg1"] },
    { fn: "fn2", argv: ["arg2"] },
  ];
  const mockError = "mockError";
  const mockErrorRule: ErrorRuleObject = {
    type: "error",
    conditions: mockConditions,
    error: mockError,
  };

  it("returns undefined if conditions evaluate to false", () => {
    (evaluateConditions as jest.Mock).mockReturnValue({ result: false });
    const result = evaluateErrorRule(mockErrorRule, mockOptions);
    expect(result).toBeUndefined();
    expect(evaluateConditions).toHaveBeenCalledWith(mockConditions, mockOptions);
    expect(evaluateExpression).not.toHaveBeenCalled();
  });

  it("throws error if conditions evaluate to true", () => {
    const mockErrorMsg = "mockErrorMsg";
    const mockReferenceRecord = { key: "value" };

    (evaluateConditions as jest.Mock).mockReturnValue({ result: true, referenceRecord: mockReferenceRecord });
    (evaluateExpression as jest.Mock).mockReturnValue(mockErrorMsg);

    expect(() => evaluateErrorRule(mockErrorRule, mockOptions)).toThrowError(new EndpointError(`mockErrorMsg`));
    expect(evaluateConditions).toHaveBeenCalledWith(mockConditions, mockOptions);
    expect(evaluateExpression).toHaveBeenCalledWith(mockError, "Error", {
      ...mockOptions,
      referenceRecord: { ...mockOptions.referenceRecord, ...mockReferenceRecord },
    });
  });
});
