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

  describe("returns if argument is an ArrayBuffer", () => {
    const buffer = new ArrayBuffer(16);

    it("with one arg", () => {
      fromArrayBuffer(buffer);
      expect(Buffer.from).toHaveBeenCalledTimes(1);
      expect(Buffer.from).toHaveBeenCalledWith(buffer, 0, buffer.byteLength);
    });

    it("with two args", () => {
      const offset = 12;
      fromArrayBuffer(buffer, offset);
      expect(Buffer.from).toHaveBeenCalledTimes(1);
      expect(Buffer.from).toHaveBeenCalledWith(buffer, offset, buffer.byteLength - offset);
    });

    it("with three args", () => {
      const offset = 12;
      const length = 13;
      fromArrayBuffer(buffer, offset, length);
      expect(Buffer.from).toHaveBeenCalledTimes(1);
      expect(Buffer.from).toHaveBeenCalledWith(buffer, offset, length);
    });
  });
});

describe("fromString", () => {
  it("throws if argument is not an ArrayBuffer", () => {
    expect(() => fromString(255 as any)).toThrow();
  });

  describe("returns if argument is an ArrayBuffer", () => {
    const input = "a string";

    it("without explicit encoding", () => {
      fromString(input);
      expect(Buffer.from).toHaveBeenCalledTimes(1);
      expect(Buffer.from).toHaveBeenCalledWith(input);
    });

    it("with encoding", () => {
      const encoding = "utf16le";
      fromString(input, encoding);
      expect(Buffer.from).toHaveBeenCalledTimes(1);
      expect(Buffer.from).toHaveBeenCalledWith(input, encoding);
    });
  });
});
