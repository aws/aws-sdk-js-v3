import { convertToAttr } from "./convertToAttr";
import { convertToNative } from "./convertToNative";
import { NativeAttributeValue } from "./models";

describe("convertToAttrToNative", () => {
  describe("null", () => {
    it(`returns for null`, () => {
      expect(convertToNative(convertToAttr(null))).toEqual(null);
    });
  });

  describe("boolean", () => {
    [true, false].forEach((bool) => {
      it(`returns for boolean: ${bool}`, () => {
        expect(convertToNative(convertToAttr(bool))).toEqual(bool);
      });
    });
  });

  describe("number", () => {
    const wrapNumbers = true;

    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER].forEach((num) => {
      it(`returns for number (integer): ${num}`, () => {
        expect(convertToNative(convertToAttr(num))).toEqual(num);
      });
      it(`returns NumberValue for number (integer) with options.wrapNumbers set: ${num}`, () => {
        expect(convertToNative(convertToAttr(num), { wrapNumbers })).toEqual({ value: num.toString() });
      });
    });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON].forEach((num) => {
      it(`returns for number (floating point): ${num}`, () => {
        expect(convertToNative(convertToAttr(num))).toEqual(num);
      });
      it(`returns NumberValue for number (floating point) with options.wrapNumbers set: ${num}`, () => {
        expect(convertToNative(convertToAttr(num), { wrapNumbers })).toEqual({ value: num.toString() });
      });
    });
  });

  describe("bigint", () => {
    const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
    [
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      maxSafe * 2n,
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      maxSafe * -2n,
      BigInt(Number.MAX_VALUE),
      BigInt("0x1fffffffffffffff"),
      BigInt("0b111111111111111111111111111111111111111111111111111111"),
    ].forEach((num) => {
      it(`returns for bigint: ${num}`, () => {
        expect(convertToNative(convertToAttr(num))).toEqual(num);
      });
    });
  });

  describe("binary", () => {
    const buffer = new ArrayBuffer(64);
    const arr = [...Array(64).keys()];
    const addPointOne = (num: number) => num + 0.1;

    [
      buffer,
      new Blob([new Uint8Array(buffer)]),
      Buffer.from(buffer),
      new DataView(buffer),
      new Int8Array(arr),
      new Uint8Array(arr),
      new Uint8ClampedArray(arr),
      new Int16Array(arr),
      new Uint16Array(arr),
      new Int32Array(arr),
      new Uint32Array(arr),
      new Float32Array(arr.map(addPointOne)),
      new Float64Array(arr.map(addPointOne)),
      new BigInt64Array(arr.map(BigInt)),
      new BigUint64Array(arr.map(BigInt)),
    ].forEach((data) => {
      it(`returns for binary: ${data.constructor.name}`, () => {
        expect(convertToNative(convertToAttr(data))).toEqual(data);
      });
    });

    it("returns null for Binary when options.convertEmptyValues=true", () => {
      expect(convertToNative(convertToAttr(new Uint8Array(), { convertEmptyValues: true }))).toEqual(null);
    });
  });

  describe("list", () => {
    const arr = [...Array(4).keys()];
    const uint8Arr = new Uint32Array(arr);
    const biguintArr = new BigUint64Array(arr.map(BigInt));

    ([
      [null, false],
      [1.01, BigInt(9007199254740996), "one"],
      [uint8Arr, biguintArr],
      [
        { nullKey: null, boolKey: false },
        { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
      ],
      [
        new Set([1, 2, 3]),
        new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
        new Set([uint8Arr, biguintArr]),
        new Set(["one", "two", "three"]),
      ],
    ] as NativeAttributeValue[][]).forEach((input) => {
      it(`testing list: ${input}`, () => {
        expect(convertToNative(convertToAttr(input))).toEqual(input);
      });
    });

    it(`testing list with options.convertEmptyValues=true`, () => {
      const input = ["", new Uint8Array(), new Set([])];
      expect(convertToNative(convertToAttr(input, { convertEmptyValues: true }))).toEqual([null, null, null]);
    });

    it(`testing list with options.wrapNumbers=true`, () => {
      const input = [1, 1.01, BigInt(9007199254740996)];
      expect(convertToNative(convertToAttr(input), { wrapNumbers: true })).toEqual(
        input.map((num) => ({ value: num.toString() }))
      );
    });
  });

  describe("set", () => {
    describe("number set", () => {
      const set = new Set([1, 2, 3]);

      it("without options.wrapNumbers", () => {
        expect(convertToNative(convertToAttr(set))).toEqual(set);
      });

      it("with options.wrapNumbers=true", () => {
        expect(convertToNative(convertToAttr(set), { wrapNumbers: true })).toEqual(
          new Set(Array.from(set).map((num) => ({ value: num.toString() })))
        );
      });
    });

    describe("bigint set", () => {
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      const bigNum = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
      const set = new Set([bigNum, -bigNum]);

      it("without options.wrapNumbers", () => {
        expect(convertToNative(convertToAttr(set))).toEqual(set);
      });

      it("with options.wrapNumbers=true", () => {
        expect(convertToNative(convertToAttr(set), { wrapNumbers: true })).toEqual(
          new Set(Array.from(set).map((num) => ({ value: num.toString() })))
        );
      });
    });

    it("binary set", () => {
      const set = new Set([new ArrayBuffer(4), new ArrayBuffer(8), new ArrayBuffer(16)]);
      expect(convertToNative(convertToAttr(set))).toEqual(set);
    });

    it("string set", () => {
      const set = new Set(["one", "two", "three"]);
      expect(convertToNative(convertToAttr(set))).toEqual(set);
    });

    it("returns null for empty set for options.convertEmptyValues=true", () => {
      expect(convertToNative(convertToAttr(new Set([]), { convertEmptyValues: true }))).toEqual(null);
    });
  });

  describe("map", () => {
    const arr = [...Array(4).keys()];
    const uint8Arr = new Uint32Array(arr);
    const biguintArr = new BigUint64Array(arr.map(BigInt));

    ([
      { nullKey: null, boolKey: false },
      { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
      { uint8ArrKey: uint8Arr, biguintArrKey: biguintArr },
      {
        list1: [null, false],
        list2: ["one", 1.01, BigInt(9007199254740996)],
      },
      {
        numberSet: new Set([1, 2, 3]),
        bigintSet: new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
        binarySet: new Set([uint8Arr, biguintArr]),
        stringSet: new Set(["one", "two", "three"]),
      },
    ] as { [key: string]: NativeAttributeValue }[]).forEach((input) => {
      it(`testing map: ${input}`, () => {
        expect(convertToNative(convertToAttr(input))).toEqual(input);
      });
    });

    it(`testing map with options.convertEmptyValues=true`, () => {
      const input = { stringKey: "", binaryKey: new Uint8Array(), setKey: new Set([]) };
      expect(convertToNative(convertToAttr(input, { convertEmptyValues: true }))).toEqual({
        stringKey: null,
        binaryKey: null,
        setKey: null,
      });
    });

    it(`testing map with options.wrapNumbers=true`, () => {
      const input = { numKey: 1, floatNumKey: 1.01, bigintKey: BigInt(9007199254740996) };
      expect(convertToNative(convertToAttr(input), { wrapNumbers: true })).toEqual(
        Object.entries(input).reduce(
          (acc, [key, num]) => ({
            ...acc,
            [key]: { value: num.toString() },
          }),
          {}
        )
      );
    });
  });

  describe("string", () => {
    ["", "string", "'single-quote'", '"double-quote"'].forEach((str) => {
      it(`returns for string: ${str}`, () => {
        expect(convertToNative(convertToAttr(str))).toEqual(str);
      });
    });

    it("returns null for string when options.convertEmptyValues=true", () => {
      expect(convertToNative(convertToAttr("", { convertEmptyValues: true }))).toEqual(null);
    });
  });
});
