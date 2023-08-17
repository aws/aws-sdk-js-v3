import { ConditionObject, EvaluateOptions, FunctionReturn } from "../types";
import { evaluateCondition } from "./evaluateCondition";
import { evaluateConditions } from "./evaluateConditions";

jest.mock("./evaluateCondition");

describe(evaluateConditions.name, () => {
  const mockOptions: EvaluateOptions = {
    endpointParams: {},
    referenceRecord: {},
  };
  const mockCn1: ConditionObject = { fn: "fn1", argv: ["arg1"], assign: "assign1" };
  const mockCn2: ConditionObject = { fn: "fn2", argv: ["arg2"], assign: "assign2" };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("returns false as soon as one condition is false", () => {
    it("first condition is false", () => {
      (evaluateCondition as jest.Mock).mockReturnValueOnce({ result: false });
      const { result, referenceRecord } = evaluateConditions([mockCn1, mockCn2], mockOptions);
      expect(result).toBe(false);
      expect(referenceRecord).toBeUndefined();
      expect(evaluateCondition).toHaveBeenCalledWith(mockCn1, mockOptions);
    });

    it("second condition is false", () => {
      (evaluateCondition as jest.Mock).mockReturnValueOnce({ result: true });
      (evaluateCondition as jest.Mock).mockReturnValueOnce({ result: false });
      const { result, referenceRecord } = evaluateConditions([mockCn1, mockCn2], mockOptions);
      expect(result).toBe(false);
      expect(referenceRecord).toBeUndefined();
      expect(evaluateCondition).toHaveBeenNthCalledWith(1, mockCn1, mockOptions);
      expect(evaluateCondition).toHaveBeenNthCalledWith(2, mockCn2, mockOptions);
    });
  });

  it("returns true if all conditions are true with referenceRecord", () => {
    const value1 = "value1";
    const value2 = "value2";

    (evaluateCondition as jest.Mock).mockReturnValueOnce({
      result: true,
      toAssign: { name: mockCn1.assign, value: value1 },
    });
    (evaluateCondition as jest.Mock).mockReturnValueOnce({
      result: true,
      toAssign: { name: mockCn2.assign, value: value2 },
    });

    const { result, referenceRecord } = evaluateConditions([mockCn1, mockCn2], mockOptions);
    expect(result).toBe(true);
    expect(referenceRecord).toEqual({
      [mockCn1.assign!]: value1,
      [mockCn2.assign!]: value2,
    });
    expect(evaluateCondition).toHaveBeenNthCalledWith(1, mockCn1, mockOptions);
    expect(evaluateCondition).toHaveBeenNthCalledWith(2, mockCn2, {
      ...mockOptions,
      referenceRecord: { [mockCn1.assign!]: value1 },
    });
  });
});
