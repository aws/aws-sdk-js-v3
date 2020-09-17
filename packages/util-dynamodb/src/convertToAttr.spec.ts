import { convertToAttr } from "./convertToAttr";

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
        expect(() => {
          convertToAttr(num);
        }).toThrowError(`Number ${num} is greater than Number.MAX_SAFE_INTEGER. Use BigInt.`);
      });
    });

    [Number.MIN_SAFE_INTEGER - 1].forEach((num) => {
      it(`throws for number lesser than Number.MIN_SAFE_INTEGER: ${num}`, () => {
        expect(() => {
          convertToAttr(num);
        }).toThrowError(`Number ${num} is lesser than Number.MIN_SAFE_INTEGER. Use BigInt.`);
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

  describe("string", () => {
    it("returns for string", () => {
      const str = "str";
      expect(convertToAttr(str)).toEqual({ S: str });
    });
  });
});
