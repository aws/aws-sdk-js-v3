import { convertToNative } from "./convertToNative";

describe("convertToNative", () => {
  const input = {
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
      expect(convertToNative({ ...input, NULL: true })).toEqual(null);
    });
  });

  describe("boolean", () => {
    [true, false].forEach((bool) => {
      it(`returns for boolean: ${bool}`, () => {
        expect(convertToNative({ ...input, BOOL: bool })).toEqual(bool);
      });
    });
  });

  describe("number", () => {
    [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (integer): ${numString}`, () => {
          expect(convertToNative({ ...input, N: numString })).toEqual(Number(numString));
        });
      });

    [1.01, Math.PI, Math.E, Number.MIN_VALUE, Number.EPSILON]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns for number (floating point): ${numString}`, () => {
          expect(convertToNative({ ...input, N: numString })).toEqual(Number(numString));
        });
      });

    [Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`throws for number (special numeric value): ${numString}`, () => {
          expect(() => {
            convertToNative({ ...input, N: numString });
          }).toThrowError(`Special numeric value ${numString} is not allowed`);
        });
      });

    [Number.MAX_SAFE_INTEGER + 1, Number.MAX_VALUE, Number.MIN_SAFE_INTEGER - 1]
      .map((num) => num.toString())
      .forEach((numString) => {
        it(`returns bigint for numbers outside MAX_SAFE_INTEGER and MIN_SAFE_INTEGER range: ${numString}`, () => {
          expect(convertToNative({ ...input, N: numString })).toEqual(BigInt(Number(numString)));
        });
      });
  });

  describe("binary", () => {
    it(`returns for Uint8Array`, () => {
      const data = new Uint8Array([...Array(64).keys()]);
      expect(convertToNative({ ...input, B: data })).toEqual(data);
    });
  });

  describe("string", () => {
    ["", "string", "'single-quote'", '"double-quote"'].forEach((str) => {
      it(`returns for string: ${str}`, () => {
        expect(convertToNative({ ...input, S: str })).toEqual(str);
      });
    });
  });

  describe(`unsupported type`, () => {
    ["A", "M", "LS"].forEach((type) => {
      it(`throws for unsupported type: ${type}`, () => {
        expect(() => {
          convertToNative({ ...input, [type]: "data" });
        }).toThrowError(`Unsupported type passed: ${type}`);
      });
    });
  });

  it(`no value defined`, () => {
    expect(() => {
      convertToNative(input);
    }).toThrowError(`No value defined: ${input}`);
  });
});
