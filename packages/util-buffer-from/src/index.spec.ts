import { Buffer } from "buffer";

import { fromArrayBuffer, fromString } from "./";

jest.mock("buffer");

afterEach(() => {
  jest.clearAllMocks();
});

describe("fromArrayBuffer", () => {
  it("throws if argument is not an ArrayBuffer", () => {
    expect(() => fromArrayBuffer(255 as any)).toThrow();
  });

  it("returns if argument is an ArrayBuffer", () => {
    const underlyingBuffer = new ArrayBuffer(0);
    const offsetArg = 12;
    const lengthArg = 13;
    fromArrayBuffer(underlyingBuffer, offsetArg, lengthArg);
    expect(Buffer.from).toHaveBeenCalledTimes(1);
    expect(Buffer.from).toHaveBeenCalledWith(underlyingBuffer, offsetArg, lengthArg);
  });
});

describe("fromString", () => {
  it("throws if argument is not an ArrayBuffer", () => {
    expect(() => fromString(255 as any)).toThrow();
  });

  it("returns if argument is an ArrayBuffer", () => {
    const inputArg = "a string";
    const encodingArg = "utf16le";
    fromString(inputArg, encodingArg);

    expect(Buffer.from).toHaveBeenCalledTimes(1);
    expect(Buffer.from).toHaveBeenCalledWith(inputArg, encodingArg);
  });
});
