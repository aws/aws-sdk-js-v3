import { Buffer } from "buffer";

import { fromArrayBuffer, fromString } from "./";

jest.mock("buffer");

afterEach(() => {
  jest.clearAllMocks();
});

describe("fromArrayBuffer", () => {
  it("throws if argument is not an ArrayBuffer", () => {
    const input = 255;
    // @ts-expect-error is not assignable to parameter of type 'ArrayBuffer'
    expect(() => fromArrayBuffer(input)).toThrow(
      new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`)
    );
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
    const input = 255;
    // @ts-expect-error is not assignable to parameter of type 'ArrayBuffer'
    expect(() => fromString(input)).toThrow(
      new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`)
    );
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
