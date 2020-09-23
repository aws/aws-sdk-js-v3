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
    const wrapNumbers = true;

    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (integer): ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString })).toEqual(Number(numString));
        });
        it(`returns string for number (integer) with options.wrapNumbers set: ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString }, { wrapNumbers })).toEqual(numString);
        });
      });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (floating point): ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString })).toEqual(Number(numString));
        });
        it(`returns string for number (floating point) with options.wrapNumbers set: ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString }, { wrapNumbers })).toEqual(numString);
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
        it(`returns bigint for numbers outside SAFE_INTEGER range: ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString })).toEqual(BigInt(Number(numString)));
        });

        it(`throws error for numbers outside SAFE_INTEGER range when BigInt is not defined: ${numString}`, () => {
          const BigIntConstructor = BigInt;
          (BigInt as any) = undefined;
          expect(() => {
            convertToNative({ ...emptyAttr, N: numString });
          }).toThrowError(`${numString} is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value.`);
          BigInt = BigIntConstructor;
        });

        it(`returns string for numbers outside SAFE_INTEGER range with options.wrapNumbers set: ${numString}`, () => {
          expect(convertToNative({ ...emptyAttr, N: numString }, { wrapNumbers })).toEqual(numString);
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
        [{ S: "one" }, { N: "1.01" }, { N: "9007199254740996" }],
        ["one", 1.01, BigInt(9007199254740996)],
      ],
      [
        [{ B: uint8Arr1 }, { B: uint8Arr2 }],
        [uint8Arr1, uint8Arr2],
      ],
      [
        [
          { M: { nullKey: { NULL: true }, boolKey: { BOOL: false } } },
          { M: { stringKey: { S: "one" }, numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } } },
        ],
        [
          { nullKey: null, boolKey: false },
          { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
        ],
      ],
      [
        [
          { NS: ["1", "2", "3"] },
          { NS: ["9007199254740996", "-9007199254740996"] },
          { BS: [uint8Arr1, uint8Arr2] },
          { SS: ["one", "two", "three"] },
        ],
        [
          new Set([1, 2, 3]),
          new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
          new Set([uint8Arr1, uint8Arr2]),
          new Set(["one", "two", "three"]),
        ],
      ],
    ].forEach(([input, output]) => {
      it(`testing list: ${JSON.stringify(input)}`, () => {
        expect(convertToNative({ ...emptyAttr, L: input as AttributeValue[] })).toEqual(output);
      });
    });

    it(`testing list with options.wrapNumbers`, () => {
      const input = [{ N: "1.01" }, { N: "9007199254740996" }];
      expect(convertToNative({ ...emptyAttr, L: input as AttributeValue[] }, { wrapNumbers: true })).toEqual(
        input.map((item) => item.N)
      );
    });
  });

  describe("map", () => {
    const uint8Arr1 = new Uint8Array([...Array(4).keys()]);
    const uint8Arr2 = new Uint8Array([...Array(2).keys()]);
    [
      [
        { nullKey: { NULL: true }, boolKey: { BOOL: false } },
        { nullKey: null, boolKey: false },
      ],
      [
        { stringKey: { S: "one" }, numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } },
        { stringKey: "one", numberKey: 1.01, bigintKey: BigInt(9007199254740996) },
      ],
      [
        { uint8Arr1Key: { B: uint8Arr1 }, uint8Arr2Key: { B: uint8Arr2 } },
        { uint8Arr1Key: uint8Arr1, uint8Arr2Key: uint8Arr2 },
      ],
      [
        {
          list1: { L: [{ NULL: true }, { BOOL: false }] },
          list2: { L: [{ S: "one" }, { N: "1.01" }, { N: "9007199254740996" }] },
        },
        { list1: [null, false], list2: ["one", 1.01, BigInt(9007199254740996)] },
      ],
      [
        {
          numberSet: { NS: ["1", "2", "3"] },
          bigintSet: { NS: ["9007199254740996", "-9007199254740996"] },
          binarySet: { BS: [uint8Arr1, uint8Arr2] },
          stringSet: { SS: ["one", "two", "three"] },
        },
        {
          numberSet: new Set([1, 2, 3]),
          bigintSet: new Set([BigInt(9007199254740996), BigInt(-9007199254740996)]),
          binarySet: new Set([uint8Arr1, uint8Arr2]),
          stringSet: new Set(["one", "two", "three"]),
        },
      ],
    ].forEach(([input, output]) => {
      it(`testing map: ${input}`, () => {
        expect(convertToNative({ ...emptyAttr, M: input as { [key: string]: AttributeValue } })).toEqual(output);
      });
    });

    it(`testing map with options.wrapNumbers`, () => {
      const input = { numberKey: { N: "1.01" }, bigintKey: { N: "9007199254740996" } };
      const output = { numberKey: "1.01", bigintKey: "9007199254740996" };
      expect(
        convertToNative({ ...emptyAttr, M: input as { [key: string]: AttributeValue } }, { wrapNumbers: true })
      ).toEqual(output);
    });
  });

  describe("set", () => {
    describe("number set", () => {
      const input = ["1", "2", "9007199254740996"];

      it("without options.wrapNumbers", () => {
        expect(convertToNative({ ...emptyAttr, NS: input })).toEqual(new Set([1, 2, BigInt(9007199254740996)]));
      });

      it("with options.wrapNumbers", () => {
        expect(convertToNative({ ...emptyAttr, NS: input }, { wrapNumbers: true })).toEqual(new Set(input));
      });
    });

    it("binary set", () => {
      const uint8Arr1 = new Uint8Array([...Array(4).keys()]);
      const uint8Arr2 = new Uint8Array([...Array(2).keys()]);
      const input = [uint8Arr1, uint8Arr2];
      expect(convertToNative({ ...emptyAttr, BS: input })).toEqual(new Set(input));
    });

    it("string set", () => {
      const input = ["one", "two", "three"];
      expect(convertToNative({ ...emptyAttr, SS: input })).toEqual(new Set(input));
    });
  });

  describe(`unsupported type`, () => {
    ["A", "P", "LS"].forEach((type) => {
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
