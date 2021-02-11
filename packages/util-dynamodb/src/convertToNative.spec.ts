import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { convertToNative } from "./convertToNative";
import { NativeAttributeValue } from "./models";

describe("convertToNative", () => {
  describe("null", () => {
    it(`returns for null`, () => {
      expect(convertToNative({ NULL: true })).toEqual(null);
    });
  });

  describe("boolean", () => {
    [true, false].forEach((bool) => {
      it(`returns for boolean: ${bool}`, () => {
        expect(convertToNative({ BOOL: bool })).toEqual(bool);
      });
    });
  });

  describe("number", () => {
    const wrapNumbers = true;

    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (integer): ${numString}`, () => {
          expect(convertToNative({ N: numString })).toEqual(Number(numString));
        });
        it(`returns NumberValue for number (integer) with options.wrapNumbers=true: ${numString}`, () => {
          expect(convertToNative({ N: numString }, { wrapNumbers })).toEqual({ value: numString });
        });
      });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (floating point): ${numString}`, () => {
          expect(convertToNative({ N: numString })).toEqual(Number(numString));
        });
        it(`returns NumberValue for number (floating point) with options.wrapNumbers=true: ${numString}`, () => {
          expect(convertToNative({ N: numString }, { wrapNumbers })).toEqual({ value: numString });
        });
      });

    [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (special numeric value): ${numString}`, () => {
          expect(convertToNative({ N: numString })).toEqual(Number(numString));
        });
      });

    [Number.MAX_SAFE_INTEGER + 1, Number.MAX_VALUE, Number.MIN_SAFE_INTEGER - 1]
      .map((num) => BigInt(num).toString())
      .forEach((numString) => {
        it(`returns bigint for numbers outside SAFE_INTEGER range: ${numString}`, () => {
          expect(convertToNative({ N: numString })).toEqual(BigInt(numString));
        });

        it(`throws error for numbers outside SAFE_INTEGER range when BigInt is not defined: ${numString}`, () => {
          const BigIntConstructor = BigInt;
          (BigInt as any) = undefined;
          expect(() => {
            convertToNative({ N: numString });
          }).toThrowError(`${numString} is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value.`);
          BigInt = BigIntConstructor;
        });

        it(`returns NumberValue for numbers outside SAFE_INTEGER range with options.wrapNumbers=true: ${numString}`, () => {
          expect(convertToNative({ N: numString }, { wrapNumbers })).toEqual({ value: numString });
        });
      });

    [`0.0000001`, `0.0000000001`, `0.00000000000000000001`].forEach((numString) => {
      it(`returns for small numbers: ${numString}`, () => {
        expect(convertToNative({ N: numString })).toEqual(Number(numString));
      });
    });

    [`1e-7`, `1e-20`, `1e15`].forEach((numString) => {
      it(`returns numbers stored in scientific notation: ${numString}`, () => {
        expect(convertToNative({ N: numString })).toEqual(Number(numString));
      });
    });

    [`${Number.MAX_SAFE_INTEGER + 2}.1`, `${Number.MIN_SAFE_INTEGER - 2}.1`].forEach((numString) => {
      it(`throws if number cannot be converted into BigInt: ${numString}`, () => {
        expect(() => {
          convertToNative({ N: numString });
        }).toThrowError(`${numString} can't be converted to BigInt. Set options.wrapNumbers to get string value.`);
      });
    });
  });

  describe("binary", () => {
    it(`returns for Uint8Array`, () => {
      const data = new Uint8Array([...Array(64).keys()]);
      expect(convertToNative({ B: data })).toEqual(data);
    });
  });

  describe("string", () => {
    ["", "string", "'single-quote'", '"double-quote"'].forEach((str) => {
      it(`returns for string: ${str}`, () => {
        expect(convertToNative({ S: str })).toEqual(str);
      });
    });
  });

  describe("list", () => {
    const uint8Arr1 = new Uint8Array([...Array(4).keys()]);
    const uint8Arr2 = new Uint8Array([...Array(2).keys()]);
    ([
      {
        input: [{ NULL: true }, { BOOL: false }],
        output: [null, false],
      },
      {
        input: [{ S: "one" }, { N: "1.01" }, { N: "9007199254740996" }],
        output: ["one", 1.01, BigInt(9007199254740996)],
      },
      {
        input: [{ B: uint8Arr1 }, { B: uint8Arr2 }],
        output: [uint8Arr1, uint8Arr2],
      },
      {
        input: [
          { M: { nullKey: { NULL: true }, boolKey: { BOOL: false } } },
          { M: { stringKey: { S: "one" }, numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } } },
        ],
        output: [
          { nullKey: null, boolKey: false },
          { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
        ],
      },
      {
        input: [
          { NS: ["1", "2", "3"] },
          { NS: ["9007199254740996", "-9007199254740996"] },
          { BS: [uint8Arr1, uint8Arr2] },
          { SS: ["one", "two", "three"] },
        ],
        output: [
          new Set([1, 2, 3]),
          new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
          new Set([uint8Arr1, uint8Arr2]),
          new Set(["one", "two", "three"]),
        ],
      },
    ] as { input: AttributeValue[]; output: NativeAttributeValue[] }[]).forEach(({ input, output }) => {
      it(`testing list: ${JSON.stringify(input)}`, () => {
        expect(convertToNative({ L: input })).toEqual(output);
      });
    });

    it(`testing list with options.wrapNumbers=true`, () => {
      const input = [{ N: "1.01" }, { N: "9007199254740996" }];
      expect(convertToNative({ L: input as AttributeValue[] }, { wrapNumbers: true })).toEqual(
        input.map((item) => ({ value: item.N }))
      );
    });
  });

  describe("map", () => {
    const uint8Arr1 = new Uint8Array([...Array(4).keys()]);
    const uint8Arr2 = new Uint8Array([...Array(2).keys()]);
    ([
      {
        input: { nullKey: { NULL: true }, boolKey: { BOOL: false } },
        output: { nullKey: null, boolKey: false },
      },
      {
        input: { stringKey: { S: "one" }, numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } },
        output: { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
      },
      {
        input: { uint8Arr1Key: { B: uint8Arr1 }, uint8Arr2Key: { B: uint8Arr2 } },
        output: { uint8Arr1Key: uint8Arr1, uint8Arr2Key: uint8Arr2 },
      },
      {
        input: {
          list1: { L: [{ NULL: true }, { BOOL: false }] },
          list2: { L: [{ S: "one" }, { N: "1.01" }, { N: "9007199254740996" }] },
        },
        output: { list1: [null, false], list2: ["one", 1.01, BigInt(9007199254740996)] },
      },
      {
        input: {
          numberSet: { NS: ["1", "2", "3"] },
          bigintSet: { NS: ["9007199254740996", "-9007199254740996"] },
          binarySet: { BS: [uint8Arr1, uint8Arr2] },
          stringSet: { SS: ["one", "two", "three"] },
        },
        output: {
          numberSet: new Set([1, 2, 3]),
          bigintSet: new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
          binarySet: new Set([uint8Arr1, uint8Arr2]),
          stringSet: new Set(["one", "two", "three"]),
        },
      },
    ] as { input: { [key: string]: AttributeValue }; output: { [key: string]: NativeAttributeValue } }[]).forEach(
      ({ input, output }) => {
        it(`testing map: ${input}`, () => {
          expect(convertToNative({ M: input })).toEqual(output);
        });
      }
    );

    it(`testing map with options.wrapNumbers=true`, () => {
      const input = { numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } };
      const output = { numberKey: { value: "1.01" }, bigintKey: { value: "9007199254740996" } };
      expect(convertToNative({ M: input }, { wrapNumbers: true })).toEqual(output);
    });
  });

  describe("set", () => {
    describe("number set", () => {
      const input = ["1", "2", "9007199254740996"];

      it("without options.wrapNumbers", () => {
        expect(convertToNative({ NS: input })).toEqual(new Set([1, 2, BigInt(9007199254740996)]));
      });

      it("with options.wrapNumbers=true", () => {
        expect(convertToNative({ NS: input }, { wrapNumbers: true })).toEqual(
          new Set(input.map((numString) => ({ value: numString })))
        );
      });
    });

    it("binary set", () => {
      const uint8Arr1 = new Uint8Array([...Array(4).keys()]);
      const uint8Arr2 = new Uint8Array([...Array(2).keys()]);
      const input = [uint8Arr1, uint8Arr2];
      expect(convertToNative({ BS: input })).toEqual(new Set(input));
    });

    it("string set", () => {
      const input = ["one", "two", "three"];
      expect(convertToNative({ SS: input })).toEqual(new Set(input));
    });
  });

  describe(`unsupported type`, () => {
    ["A", "P", "LS"].forEach((type) => {
      it(`throws for unsupported type: ${type}`, () => {
        expect(() => {
          // @ts-ignore Property '$unknown' is missing in type.
          convertToNative({ [type]: "data" });
        }).toThrowError(`Unsupported type passed: ${type}`);
      });
    });
  });

  it(`no value defined`, () => {
    expect(() => {
      // @ts-ignore Property '$unknown' is missing in type.
      convertToNative({});
    }).toThrowError(`No value defined: {}`);
  });
});
