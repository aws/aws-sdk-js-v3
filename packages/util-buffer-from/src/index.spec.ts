jest.mock("buffer", () => {
  const Buffer = jest.fn().mockReturnValue(new Uint8Array(0));
  (Buffer as any).from = jest.fn().mockReturnValue(new Uint8Array(0));

  return { Buffer };
});
import { Buffer } from "buffer";

import { fromArrayBuffer, fromString } from "./";

describe("fromArrayBuffer", () => {
  it("should throw if provided an argument that is not an ArrayBuffer", () => {
    expect(() => fromArrayBuffer(255 as any)).toThrow();
  });

  describe("Buffer.from", () => {
    beforeEach(() => {
      (Buffer.from as any).mockClear();
    });

    it("should use Buffer.from if available", () => {
      const underlyingBuffer = new ArrayBuffer(0);
      const offsetArg = 12;
      const lengthArg = 13;
      fromArrayBuffer(underlyingBuffer, offsetArg, lengthArg);

      const { calls } = (Buffer.from as any).mock;
      expect(calls.length).toBe(1);
      expect(calls[0].length).toBe(3);

      const [buffer, offset, length] = calls[0];
      expect(buffer).toBe(underlyingBuffer);
      expect(offset).toBe(offsetArg);
      expect(length).toBe(lengthArg);
    });
  });
});

describe("fromString", () => {
  it("should throw if provided an argument that is not an ArrayBuffer", () => {
    expect(() => fromString(255 as any)).toThrow();
  });

  describe("Buffer.from", () => {
    beforeEach(() => {
      (Buffer.from as any).mockClear();
    });

    it("should use Buffer.from if available", () => {
      const inputArg = "a string";
      const encodingArg = "utf16le";
      fromString(inputArg, encodingArg);

      const { calls } = (Buffer.from as any).mock;
      expect(calls.length).toBe(1);
      expect(calls[0].length).toBe(2);

      const [input, encoding] = calls[0];
      expect(input).toBe(inputArg);
      expect(encoding).toBe(encodingArg);
    });
  });
});
