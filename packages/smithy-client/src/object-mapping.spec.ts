import { map, ObjectMappingInstructions } from "./object-mapping";

describe("object mapping", () => {
  const example: ObjectMappingInstructions = {
    lazyValue1: [, () => 1],
    lazyValue2: [, () => 2],
    lazyValue3: [, () => 3],
    lazyConditionalValue1: [() => true, () => 4],
    lazyConditionalValue2: [() => true, () => 5],
    lazyConditionalValue3: [true, () => 6],
    lazyConditionalValue4: [false, () => 44],
    lazyConditionalValue5: [() => false, () => 55],
    lazyConditionalValue6: ["", () => 66],
    simpleValue1: [, 7],
    simpleValue2: [, 8],
    simpleValue3: [, 9],
    conditionalValue1: [() => true, 10],
    conditionalValue2: [() => true, 11],
    conditionalValue3: [{}, 12],
    conditionalValue4: [false, 110],
    conditionalValue5: [() => false, 121],
    conditionalValue6: ["", 132],
  };

  const exampleResult: Record<string, any> = {
    lazyValue1: 1,
    lazyValue2: 2,
    lazyValue3: 3,
    lazyConditionalValue1: 4,
    lazyConditionalValue2: 5,
    lazyConditionalValue3: 6,
    simpleValue1: 7,
    simpleValue2: 8,
    simpleValue3: 9,
    conditionalValue1: 10,
    conditionalValue2: 11,
    conditionalValue3: 12,
  };

  describe("map function", () => {
    it("should map various values according to their instruction sets", () => {
      expect(map({}, example)).toEqual(exampleResult);
    });

    it("should allow default empty object as target", () => {
      expect(map(example)).toEqual(exampleResult);
    });

    it("should allow a uniform default filter to be specified", () => {
      expect(map({}, (_: number) => _ % 2 === 0, exampleResult)).toEqual({
        lazyValue2: 2,
        lazyConditionalValue1: 4,
        lazyConditionalValue3: 6,
        simpleValue2: 8,
        conditionalValue1: 10,
        conditionalValue3: 12,
      });
    });

    it("should allow a set of passing filters", () => {
      expect(
        map({
          a: [, 0],
          b: [, false],
          c: [, ""],
          d: [, []],
          e: [, [void 0, void 0]],
          f: [, {}],
          g: [, [false, void 0]],
          h: [true, void 0],
          i: [1, void 0],
          j: [" ", void 0],
          k: [[], void 0],
          l: [{}, void 0],
          m: [() => true, void 0],
          n: [(val) => val === void 0, void 1],
          o: [() => true, () => void 0],
          p: [(val) => val !== 1, () => 1], // value is not provided to filter fn when value provider is lazy
          q: 0,
          r: false,
          s: "",
          t: undefined,
          u: null,
        })
      ).toEqual({
        a: 0,
        b: false,
        c: "",
        d: [],
        e: [undefined, undefined],
        f: {},
        g: [false, undefined],
        h: undefined,
        i: undefined,
        j: undefined,
        k: undefined,
        l: undefined,
        m: undefined,
        n: undefined,
        o: undefined,
        p: 1,
        q: 0,
        r: false,
        s: "",
        t: undefined,
        u: null,
      });
    });

    it("should block a set of failing filters", () => {
      expect(
        map({
          a: [, undefined],
          b: [, null],
          c: [(_) => _ !== "", ""],
          d: [(_) => _.length !== 0, []],
          e: [0, 0],
          f: [false, false],
          g: ["", ""],
          h: [undefined, undefined],
          i: [null, null],
          j: [() => false, void 0],
          k: [(val) => val !== void 0, void 0],
          l: [() => false, () => void 0],
          m: [(val) => val === 1, () => 1], // value is not provided to filter fn when value provider is lazy
          n: [, () => undefined],
        })
      ).toEqual({});
    });
  });
});
