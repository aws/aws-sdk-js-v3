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

  describe("new Buffer", () => {
    const bufferDotFrom = Buffer.from;

    beforeEach(() => {
      (Buffer as any).mockClear();
      delete Buffer.from;
    });

    afterAll(() => {
      Buffer.from = bufferDotFrom;
    });

    it("should use the Buffer constructor if Buffer.from is not defined", () => {
      const underlyingBuffer = new ArrayBuffer(0);
      fromArrayBuffer(underlyingBuffer);

      const { calls } = (Buffer as any).mock;
      expect(calls.length).toBe(1);
      expect(calls[0].length).toBe(1);
      expect(calls[0][0]).toBe(underlyingBuffer);
    });

    it("should use the Buffer constructor if Buffer.from is inherited from Uint8Array", () => {
      Buffer.from = Uint8Array.from as any;
      const underlyingBuffer = new ArrayBuffer(0);
      fromArrayBuffer(underlyingBuffer);

      const { calls } = (Buffer as any).mock;
      expect(calls.length).toBe(1);
      expect(calls[0].length).toBe(1);
      expect(calls[0][0]).toBe(underlyingBuffer);
    });

    it("should throw if Buffer.from is undefined and a non-zero offset is provided", () => {
      expect(() => fromArrayBuffer(new ArrayBuffer(0), 1)).toThrow();
    });

    it("should not throw if Buffer.from is undefined and an offset of 0 is provided", () => {
      expect(() => fromArrayBuffer(new ArrayBuffer(0), 0)).not.toThrow();
    });

    it("should throw if Buffer.from is undefined and a length other than the length of the underlying buffer is provided", () => {
      expect(() => fromArrayBuffer(new ArrayBuffer(10), 0, 9)).toThrow();
    });

    it("should not throw if Buffer.from is undefined and a length of the length of the underlying buffer is provided", () => {
      expect(() => fromArrayBuffer(new ArrayBuffer(10), 0, 10)).not.toThrow();
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

  describe("new Buffer", () => {
    const bufferDotFrom = Buffer.from;

    beforeEach(() => {
      (Buffer as any).mockClear();
      delete Buffer.from;
    });

    afterAll(() => {
      Buffer.from = bufferDotFrom;
    });

    it("should use the Buffer constructor if Buffer.from is not defined", () => {
      fromString("string", "hex");

      const { calls } = (Buffer as any).mock;
      expect(calls.length).toBe(1);
      expect(calls[0]).toEqual(["string", "hex"]);
    });

    it("should use the Buffer constructor if Buffer.from is inherited from Uint8Array", () => {
      Buffer.from = Uint8Array.from as any;
      fromString("string", "utf8");

      const { calls } = (Buffer as any).mock;
      expect(calls.length).toBe(1);
      expect(calls[0]).toEqual(["string", "utf8"]);
    });
  });
});
