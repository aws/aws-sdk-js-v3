import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { convertToAttr } from "./convertToAttr";
import { NativeAttributeValue } from "./models";

describe("convertToAttr", () => {
  describe("null", () => {
    it(`returns for null`, () => {
      expect(convertToAttr(null)).toEqual({ NULL: true });
    });
  });

  describe("boolean", () => {
    [true, false].forEach((bool) => {
      it(`returns for boolean: ${bool}`, () => {
        expect(convertToAttr(bool)).toEqual({ BOOL: bool });
      });
    });
  });

  describe("number", () => {
    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER].forEach((num) => {
      it(`returns for number (integer): ${num}`, () => {
        expect(convertToAttr(num)).toEqual({ N: num.toString() });
      });
    });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON].forEach((num) => {
      it(`returns for number (floating point): ${num}`, () => {
        expect(convertToAttr(num)).toEqual({ N: num.toString() });
      });
    });

    [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].forEach((num) => {
      it(`throws for number (special numeric value): ${num}`, () => {
        expect(() => {
          convertToAttr(num);
        }).toThrowError(`Special numeric value ${num} is not allowed`);
      });
    });

    [Number.MAX_SAFE_INTEGER + 1, Number.MAX_VALUE].forEach((num) => {
      it(`throws for number greater than Number.MAX_SAFE_INTEGER: ${num}`, () => {
        const errorPrefix = `Number ${num} is greater than Number.MAX_SAFE_INTEGER.`;

        expect(() => {
          convertToAttr(num);
        }).toThrowError(`${errorPrefix} Use BigInt.`);

        const BigIntConstructor = BigInt;
        (BigInt as any) = undefined;
        expect(() => {
          convertToAttr(num);
        }).toThrowError(`${errorPrefix} Pass string value instead.`);
        BigInt = BigIntConstructor;
      });
    });

    [Number.MIN_SAFE_INTEGER - 1].forEach((num) => {
      it(`throws for number lesser than Number.MIN_SAFE_INTEGER: ${num}`, () => {
        const errorPrefix = `Number ${num} is lesser than Number.MIN_SAFE_INTEGER.`;

        expect(() => {
          convertToAttr(num);
        }).toThrowError(`${errorPrefix} Use BigInt.`);

        const BigIntConstructor = BigInt;
        (BigInt as any) = undefined;
        expect(() => {
          convertToAttr(num);
        }).toThrowError(`${errorPrefix} Pass string value instead.`);
        BigInt = BigIntConstructor;
      });
    });
  });

  describe("bigint", () => {
    const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
    [
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      1n,
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      maxSafe * 2n,
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      maxSafe * -2n,
      BigInt(Number.MAX_VALUE),
      BigInt("0x1fffffffffffff"),
      BigInt("0b11111111111111111111111111111111111111111111111111111"),
    ].forEach((num) => {
      it(`returns for bigint: ${num}`, () => {
        expect(convertToAttr(num)).toEqual({ N: num.toString() });
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
        expect(convertToAttr(data)).toEqual({ B: data });
      });
    });

    it("returns null for Binary when options.convertEmptyValues=true", () => {
      expect(convertToAttr(new Uint8Array(), { convertEmptyValues: true })).toEqual({ NULL: true });
    });
  });

  describe("list", () => {
    const arr = [...Array(4).keys()];
    const uint8Arr = new Uint32Array(arr);
    const biguintArr = new BigUint64Array(arr.map(BigInt));

    ([
      {
        input: [null, false],
        output: [{ NULL: true }, { BOOL: false }],
      },
      {
        input: [1.01, BigInt(1), "one"],
        output: [{ N: "1.01" }, { N: "1" }, { S: "one" }],
      },
      {
        input: [uint8Arr, biguintArr],
        output: [{ B: uint8Arr }, { B: biguintArr }],
      },
      {
        input: [
          { nullKey: null, boolKey: false },
          { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
        ],
        output: [
          { M: { nullKey: { NULL: true }, boolKey: { BOOL: false } } },
          { M: { stringKey: { S: "one" }, numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } } },
        ],
      },
      {
        input: [
          new Set([1, 2, 3]),
          new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
          new Set([uint8Arr, biguintArr]),
          new Set(["one", "two", "three"]),
        ],
        output: [
          { NS: ["1", "2", "3"] },
          { NS: ["9007199254740996", "-9007199254740996"] },
          { BS: [uint8Arr, biguintArr] },
          { SS: ["one", "two", "three"] },
        ],
      },
    ] as { input: NativeAttributeValue[]; output: AttributeValue[] }[]).forEach(({ input, output }) => {
      it(`testing list: ${input}`, () => {
        expect(convertToAttr(input)).toEqual({ L: output });
      });
    });

    it(`testing list with options.convertEmptyValues=true`, () => {
      const input = ["", new Uint8Array(), new Set([])];
      expect(convertToAttr(input, { convertEmptyValues: true })).toEqual({
        L: [{ NULL: true }, { NULL: true }, { NULL: true }],
      });
    });
  });

  describe("set", () => {
    it("number set", () => {
      const set = new Set([1, 2, 3]);
      expect(convertToAttr(set)).toEqual({ NS: Array.from(set).map((num) => num.toString()) });
    });

    it("bigint set", () => {
      // @ts-expect-error BigInt literals are not available when targeting lower than ES2020.
      const bigNum = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
      const set = new Set([bigNum, -bigNum]);
      expect(convertToAttr(set)).toEqual({ NS: Array.from(set).map((num) => num.toString()) });
    });

    it("binary set", () => {
      const set = new Set([new ArrayBuffer(4), new ArrayBuffer(8), new ArrayBuffer(16)]);
      expect(convertToAttr(set)).toEqual({ BS: Array.from(set) });
    });

    it("string set", () => {
      const set = new Set(["one", "two", "three"]);
      expect(convertToAttr(set)).toEqual({ SS: Array.from(set) });
    });

    it("returns null for empty set for options.convertEmptyValues=true", () => {
      expect(convertToAttr(new Set([]), { convertEmptyValues: true })).toEqual({ NULL: true });
    });

    it("throws error for empty set", () => {
      expect(() => {
        convertToAttr(new Set([]));
      }).toThrowError(`Please pass a non-empty set, or set convertEmptyValues to true.`);
    });

    it("thows error for unallowed set", () => {
      expect(() => {
        // @ts-expect-error Type 'Set<boolean>' is not assignable
        convertToAttr(new Set([true, false]));
      }).toThrowError(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.`);
    });
  });

  describe("map", () => {
    const arr = [...Array(4).keys()];
    const uint8Arr = new Uint32Array(arr);
    const biguintArr = new BigUint64Array(arr.map(BigInt));

    ([
      {
        input: { nullKey: null, boolKey: false },
        output: { nullKey: { NULL: true }, boolKey: { BOOL: false } },
      },
      {
        input: { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(1) },
        output: { stringKey: { S: "one" }, numberKey: { N: "1.01" }, bigintKey: { N: "1" } },
      },
      {
        input: { uint8ArrKey: uint8Arr, biguintArrKey: biguintArr },
        output: { uint8ArrKey: { B: uint8Arr }, biguintArrKey: { B: biguintArr } },
      },
      {
        input: {
          list1: [null, false],
          list2: ["one", 1.01, BigInt(9007199254740996)],
        },
        output: {
          list1: { L: [{ NULL: true }, { BOOL: false }] },
          list2: { L: [{ S: "one" }, { N: "1.01" }, { N: "9007199254740996" }] },
        },
      },
      {
        input: {
          numberSet: new Set([1, 2, 3]),
          bigintSet: new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
          binarySet: new Set([uint8Arr, biguintArr]),
          stringSet: new Set(["one", "two", "three"]),
        },
        output: {
          numberSet: { NS: ["1", "2", "3"] },
          bigintSet: { NS: ["9007199254740996", "-9007199254740996"] },
          binarySet: { BS: [uint8Arr, biguintArr] },
          stringSet: { SS: ["one", "two", "three"] },
        },
      },
    ] as { input: { [key: string]: NativeAttributeValue }; output: { [key: string]: AttributeValue } }[]).forEach(
      ({ input, output }) => {
        it(`testing map: ${input}`, () => {
          expect(convertToAttr(input)).toEqual({ M: output });
        });
      }
    );

    it(`testing map with options.convertEmptyValues=true`, () => {
      const input = { stringKey: "", binaryKey: new Uint8Array(), setKey: new Set([]) };
      expect(convertToAttr(input, { convertEmptyValues: true })).toEqual({
        M: { stringKey: { NULL: true }, binaryKey: { NULL: true }, setKey: { NULL: true } },
      });
    });
  });

  describe("string", () => {
    ["", "string", "'single-quote'", '"double-quote"'].forEach((str) => {
      it(`returns for string: ${str}`, () => {
        expect(convertToAttr(str)).toEqual({ S: str });
      });
    });

    it("returns null for string when options.convertEmptyValues=true", () => {
      expect(convertToAttr("", { convertEmptyValues: true })).toEqual({ NULL: true });
    });
  });

  describe(`unsupported type`, () => {
    class FooObj {
      constructor(private readonly foo: string) {}
    }

    // ToDo: Serialize ES6 class objects as string https://github.com/aws/aws-sdk-js-v3/issues/1535
    [undefined, new Date(), new FooObj("foo")].forEach((data) => {
      it(`throws for: ${String(data)}`, () => {
        expect(() => {
          // @ts-expect-error Argument is not assignable to parameter of type 'NativeAttributeValue'
          convertToAttr(data);
        }).toThrowError(`Unsupported type passed: ${String(data)}`);
      });
    });
  });
});
