import { map, ObjectMappingInstructions } from "./object-mapping";

describe("object mapping", () => {
  const example: ObjectMappingInstructions = {
    lazyValue1: [, , () => 1],
    lazyValue2: ["lazyValue2AltKey", , () => 2],
    lazyValue3: [, , () => 3],
    lazyConditionalValue1: [, () => true, () => 4],
    lazyConditionalValue2: ["lazyConditionalValue2AltKey", () => true, () => 5],
    lazyConditionalValue3: [, true, () => 6],
    lazyConditionalValue4: [, false, () => 44],
    lazyConditionalValue5: ["lazyConditionalValue5AltKey", () => false, () => 55],
    lazyConditionalValue6: [, "", () => 66],
    simpleValue1: [, , 7],
    simpleValue2: ["simpleValueAltKey", , 8],
    simpleValue3: [, , 9],
    conditionalValue1: [, () => true, 10],
    conditionalValue2: ["conditionalValue2AltKey", () => true, 11],
    conditionalValue3: [, {}, 12],
    conditionalValue4: [, false, 110],
    conditionalValue5: ["conditionalValue5AltKey", () => false, 121],
    conditionalValue6: [, "", 132],
  };

  const exampleResult: Record<string, any> = {
    lazyValue1: 1,
    lazyValue2AltKey: 2,
    lazyValue3: 3,
    lazyConditionalValue1: 4,
    lazyConditionalValue2AltKey: 5,
    lazyConditionalValue3: 6,
    simpleValue1: 7,
    simpleValueAltKey: 8,
    simpleValue3: 9,
    conditionalValue1: 10,
    conditionalValue2AltKey: 11,
    conditionalValue3: 12,
  };

  describe("map function", () => {
    it("should map various values according to their instruction sets", () => {
      expect(map({}, example)).toEqual(exampleResult);
    });
  });
});
