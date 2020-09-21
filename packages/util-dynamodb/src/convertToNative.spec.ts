import { AttributeValue } from "@aws-sdk/client-dynamodb";

import { convertToNative } from "./convertToNative";

describe("convertToNative", () => {
  const emptyAttr = {
    B: undefined,
    BOOL: undefined,
    BS: undefined,
    L: undefined,
    M: undefined,
    N: undefined,
    NS: undefined,
    NULL: undefined,
    S: undefined,
    SS: undefined,
  };

  describe("null", () => {
    it(`returns for null`, () => {
      expect(convertToNative({ ...emptyAttr, NULL: true })).toEqual(null);
    });
  });

  describe("boolean", () => {
    [true, false].forEach((bool) => {
      it(`returns for boolean: ${bool}`, () => {
        expect(convertToNative({ ...emptyAttr, BOOL: bool })).toEqual(bool);
      });
    });
  });

  describe("number", () => {
    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (integer): ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString })).toEqual(Number(numString));
        });
      });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (floating point): ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString })).toEqual(Number(numString));
        });
      });

    [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`throws for number (special numeric value): ${numString}`, () => {
          expect(() => {
            convertToNative({ ...emptyAttr, N: numString });
          }).toThrowError(`Special numeric value ${numString} is not allowed`);
        });
      });

    [Number.MAX_SAFE_INTEGER + 1, Number.MAX_VALUE, Number.MIN_SAFE_INTEGER - 1]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns bigint for numbers outside MAX_SAFE_INTEGER and MIN_SAFE_INTEGER range: ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString })).toEqual(BigInt(Number(numString)));
        });
      });
  });

  describe("binary", () => {
    it(`returns for Uint8Array`, () => {
      const data = new Uint8Array([...Array(64).keys()]);
      expect(convertToNative({ ...emptyAttr, B: data })).toEqual(data);
    });
  });

  describe("string", () => {
    ["", "string", "'single-quote'", '"double-quote"'].forEach((str) => {
      it(`returns for string: ${str}`, () => {
        expect(convertToNative({ ...emptyAttr, S: str })).toEqual(str);
      });
    });
  });

  describe("list", () => {
    const uint8Arr1 = new Uint8Array([...Array(4).keys()]);
    const uint8Arr2 = new Uint8Array([...Array(2).keys()]);
    [
      [
        [{ NULL: true }, { BOOL: false }],
        [null, false],
      ],
      [
        [{ N: "1.01" }, { N: "9007199254740996" }, { S: "one" }],
        [1.01, BigInt(9007199254740996), "one"],
      ],
      [
        [{ B: uint8Arr1 }, { B: uint8Arr2 }],
        [uint8Arr1, uint8Arr2],
      ],
    ].forEach(([input, output]) => {
      it(`testing list: ${JSON.stringify(input)}`, () => {
        expect(convertToNative({ ...emptyAttr, L: input as AttributeValue[] })).toEqual(output);
      });
    });
  });

  describe(`unsupported type`, () => {
    ["A", "M", "LS"].forEach((type) => {
      it(`throws for unsupported type: ${type}`, () => {
        expect(() => {
          convertToNative({ ...emptyAttr, [type]: "data" });
        }).toThrowError(`Unsupported type passed: ${type}`);
      });
    });
  });

  it(`no value defined`, () => {
    expect(() => {
      convertToNative(emptyAttr);
    }).toThrowError(`No value defined: ${emptyAttr}`);
  });
});
