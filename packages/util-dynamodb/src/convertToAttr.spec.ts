import { convertToAttr } from "./convertToAttr";

describe("convertToAttr", () => {
  [true, false].forEach((bool) => {
    it(`test boolean "${bool}"`, () => {
      expect(convertToAttr(bool)).toEqual({ BOOL: bool });
    });
  });

  it("returns for number", () => {
    const num = 5;
    expect(convertToAttr(num)).toEqual({ N: num.toString() });
  });

  it("returns for string", () => {
    const str = "str";
    expect(convertToAttr(str)).toEqual({ S: str });
  });
});
