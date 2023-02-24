import { toUint8Array } from "./toUint8Array";

describe("toUint8Array", () => {
  it(`should convert string to Uint8Array`, () => {
    const expected = new Uint8Array([240, 159, 144, 142, 240, 159, 145, 177, 226, 157, 164]);
    expect(toUint8Array("🐎👱❤")).toStrictEqual(expected);
  });
  it(`should convert buffer to Uint8Array`, () => {
    const expected = new Uint8Array([240, 159, 144, 142, 240, 159, 145, 177, 226, 157, 164]);
    const buffer = Buffer.from(expected);
    expect(toUint8Array(buffer)).toStrictEqual(expected);
  });
  it(`should convert ArrayBuffer to Uint8Array`, () => {
    const input = new Uint32Array([240]);
    const expected = new Uint8Array([240, 0, 0, 0]);
    expect(toUint8Array(input)).toStrictEqual(expected);
  });
});
