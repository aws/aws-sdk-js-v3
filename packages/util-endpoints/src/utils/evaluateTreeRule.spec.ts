import { TreeRuleObject } from "../types";
import { evaluateConditions } from "./evaluateConditions";
import { evaluateRules } from "./evaluateRules";
import { evaluateTreeRule } from "./evaluateTreeRule";

jest.mock("./evaluateConditions");
jest.mock("./evaluateRules");

describe(evaluateTreeRule.name, () => {
  const mockOptions = {
    endpointParams: {},
    referenceRecord: {},
  };
  const mockConditions = [
    { fn: "fn1", argv: ["arg1"] },
    { fn: "fn2", argv: ["arg2"] },
  ];
  const mockTreeRule: TreeRuleObject = {
    type: "tree",
    conditions: mockConditions,
    rules: [],
  };

  it("returns undefined if conditions evaluate to false", () => {
    (evaluateConditions as jest.Mock).mockReturnValue({ result: false });
    const result = evaluateTreeRule(mockTreeRule, mockOptions);
    expect(result).toBeUndefined();
    expect(evaluateConditions).toHaveBeenCalledWith(mockConditions, mockOptions);
    expect(evaluateRules).not.toHaveBeenCalled();
  });

  it("returns evaluateRules if conditions evaluate to true", () => {
    const mockReferenceRecord = { key: "value" };
    const mockEndpointUrl = new URL("http://example.com");

    (evaluateConditions as jest.Mock).mockReturnValue({ result: true, referenceRecord: mockReferenceRecord });
    (evaluateRules as jest.Mock).mockReturnValue(mockEndpointUrl);

    const result = evaluateTreeRule(mockTreeRule, mockOptions);
    expect(result).toBe(mockEndpointUrl);
    expect(evaluateConditions).toHaveBeenCalledWith(mockConditions, mockOptions);
    expect(evaluateRules).toHaveBeenCalledWith(mockTreeRule.rules, {
      ...mockOptions,
      referenceRecord: {
        ...mockOptions.referenceRecord,
        ...mockReferenceRecord,
      },
    });
  });
});
