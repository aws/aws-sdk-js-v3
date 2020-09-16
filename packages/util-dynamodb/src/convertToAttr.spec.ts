import { convertToAttr } from "./convertToAttr";

describe("convertToAttr", () => {
  [true, false].forEach((bool) => {
    it(`returns for boolean: ${bool}`, () => {
      expect(convertToAttr(bool)).toEqual({ BOOL: bool });
    });
  });

  [1].forEach((num) => {
    it(`returns for number (integer): ${num}`, () => {
      expect(convertToAttr(num)).toEqual({ N: num.toString() });
    });
  });

  [3.14].forEach((num) => {
    it(`returns for number (floating point): ${num}`, () => {
      expect(convertToAttr(num)).toEqual({ N: num.toString() });
    });
  });

  it("returns for string", () => {
    const str = "str";
    expect(convertToAttr(str)).toEqual({ S: str });
  });
});
