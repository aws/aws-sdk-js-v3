import { convertToAttr } from "./convertToAttr";

describe("convertToAttr", () => {
  [true, false].forEach((bool) => {
    it(`returns for boolean: ${bool}`, () => {
      expect(convertToAttr(bool)).toEqual({ BOOL: bool });
    });
  });

  [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER].forEach((num) => {
    it(`returns for number (integer): ${num}`, () => {
      expect(convertToAttr(num)).toEqual({ N: num.toString() });
    });
  });

  [3.14].forEach((num) => {
    it(`returns for number (floating point): ${num}`, () => {
      expect(convertToAttr(num)).toEqual({ N: num.toString() });
    });
  });

  [NaN, Infinity, -Infinity].forEach((num) => {
    it(`throws for number (special numeric value): ${num}`, () => {
      expect(() => {
        convertToAttr(num);
      }).toThrowError(`Special numeric value ${num} is not allowed`);
    });
  });

  [Number.MAX_SAFE_INTEGER + 1].forEach((num) => {
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

  it("returns for string", () => {
    const str = "str";
    expect(convertToAttr(str)).toEqual({ S: str });
  });
});
