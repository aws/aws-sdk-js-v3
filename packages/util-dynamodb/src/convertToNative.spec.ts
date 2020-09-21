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

  describe("number", () => {
    ["1", Number.MAX_SAFE_INTEGER.toString(), Number.MIN_SAFE_INTEGER.toString()].forEach((num) => {
      it(`returns for number (integer): ${num}`, () => {
        expect(convertToNative({ ...input, N: num })).toEqual(Number(num));
      });
    });

    ["1.01", Math.PI.toString(), Math.E.toString(), Number.MIN_VALUE.toString(), Number.EPSILON.toString()].forEach(
      (num) => {
        it(`returns for number (floating point): ${num}`, () => {
          expect(convertToNative({ ...input, N: num })).toEqual(Number(num));
        });
      }
    );
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
