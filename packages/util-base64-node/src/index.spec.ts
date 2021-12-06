import { fromBase64, toBase64 } from "./";

const doublePadded = new Uint8Array([0xde, 0xad, 0xbe, 0xef]);
const b64DoublePadded = "3q2+7w==";

const singlePadded = new Uint8Array([0xde, 0xad, 0xbe, 0xef, 0xfa]);
const b64SinglePadded = "3q2+7/o=";

const unpadded = new Uint8Array([0xde, 0xad, 0xbe, 0xef, 0xfa, 0xce]);
const b64Unpadded = "3q2+7/rO";

describe("toBase64", () => {
  it("should convert Uint8Arrays with byte lengths divisible by 3 to unpadded base64 strings", () => {
    expect(toBase64(unpadded)).toBe(b64Unpadded);
  });

  it("should convert Uint8Arrays whose byte lengths mod 3 === 2 to single-padded base64 strings", () => {
    expect(toBase64(singlePadded)).toBe(b64SinglePadded);
  });

  it("should convert Uint8Arrays whose byte lengths mod 3 === 1 to double-padded base64 strings", () => {
    expect(toBase64(doublePadded)).toBe(b64DoublePadded);
  });

  it("should throw when given a number", () => {
    expect(() => toBase64(0xdeadbeefface as any)).toThrow();
  });
});

describe("fromBase64", () => {
  it("should convert unpadded base64 strings to Uint8Arrays", () => {
    expect(fromBase64(b64Unpadded)).toEqual(unpadded);
  });

  it("should convert single padded base64 strings to Uint8Arrays", () => {
    expect(fromBase64(b64SinglePadded)).toEqual(singlePadded);
  });

  it("should convert double padded base64 strings to Uint8Arrays", () => {
    expect(fromBase64(b64DoublePadded)).toEqual(doublePadded);
  });

  it("should throw when given a number", () => {
    expect(() => fromBase64(0xdeadbeefface as any)).toThrow();
  });

  describe("should reject invalid base64 strings", () => {
    it.each(["Rg", "Rg=", "[][]", "-_=="])("rejects '%s'", (value) => {
      expect(() => fromBase64(value)).toThrowError();
    });
  });
});
