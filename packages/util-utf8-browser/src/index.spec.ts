import { fromUtf8, toUtf8 } from "./";

jest.mock("./pureJs", () => {
  return {
    fromUtf8: jest.fn().mockReturnValue(new Uint8Array(0)),
    toUtf8: jest.fn().mockReturnValue(""),
  };
});
import { fromUtf8 as jsFromUtf8, toUtf8 as jsToUtf8 } from "./pureJs";

jest.mock("./whatwgEncodingApi", () => {
  return {
    fromUtf8: jest.fn().mockReturnValue(new Uint8Array(0)),
    toUtf8: jest.fn().mockReturnValue(""),
  };
});
import { fromUtf8 as textEncoderFromUtf8, toUtf8 as textEncoderToUtf8 } from "./whatwgEncodingApi";

beforeEach(() => {
  (jsFromUtf8 as any).mockClear();
  (jsToUtf8 as any).mockClear();
  (textEncoderFromUtf8 as any).mockClear();
  (textEncoderToUtf8 as any).mockClear();
});

declare const global: any;

describe("fromUtf8", () => {
  it("should use the Encoding API if available", () => {
    (global as any).TextEncoder = jest.fn() as any;

    fromUtf8("foo");

    expect((textEncoderFromUtf8 as any).mock.calls.length).toBe(1);
    expect((jsFromUtf8 as any).mock.calls.length).toBe(0);
  });

  it("should use a JS implementation otherwise", () => {
    (global as any).TextEncoder = undefined;

    fromUtf8("foo");

    expect((textEncoderFromUtf8 as any).mock.calls.length).toBe(0);
    expect((jsFromUtf8 as any).mock.calls.length).toBe(1);
  });
});

describe("toUtf8", () => {
  it("should use the Encoding API if available", () => {
    (global as any).TextDecoder = jest.fn() as any;

    toUtf8(new Uint8Array(0));

    expect((textEncoderToUtf8 as any).mock.calls.length).toBe(1);
    expect((jsToUtf8 as any).mock.calls.length).toBe(0);
  });

  it("should use a JS implementation otherwise", () => {
    (global as any).TextDecoder = undefined;

    toUtf8(new Uint8Array(0));

    expect((textEncoderToUtf8 as any).mock.calls.length).toBe(0);
    expect((jsToUtf8 as any).mock.calls.length).toBe(1);
  });
});
