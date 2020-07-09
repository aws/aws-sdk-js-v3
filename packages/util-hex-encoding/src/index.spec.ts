import { fromHex, toHex } from "./";

const encoded = "dead" + "beef" + "cafe" + "babe" + "face";
const bytes = new Uint8Array([0xde, 0xad, 0xbe, 0xef, 0xca, 0xfe, 0xba, 0xbe, 0xfa, 0xce]);

describe("fromHex", () => {
  it("should decode hexadecimal strings to binary", () => {
    expect(fromHex(encoded)).toEqual(bytes);
  });

  it("should throw if the string is not an even number of code units", () => {
    expect(() => fromHex(encoded + "a")).toThrow();
  });

  it("should throw if an unexpected sequence is encountered", () => {
    expect(() => fromHex("xy")).toThrow();
  });

  it("should decode hexadecimal strings regardless of casing", () => {
    expect(fromHex(encoded.toLowerCase())).toEqual(bytes);
    expect(fromHex(encoded.toUpperCase())).toEqual(bytes);
  });
});

describe("toHex", () => {
  it("should encode bytes as hexadecimal", () => {
    expect(toHex(bytes)).toBe(encoded);
  });
});
