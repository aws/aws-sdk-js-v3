import { fromUtf8, toUtf8 } from "./whatwgEncodingApi";

declare const global: any;

describe("WHATWG encoding spec compliant environment UTF-8 handling", () => {
  it("should use the global TextDecoder to decode UTF-8", () => {
    const decode = jest.fn().mockReturnValue("");
    (global as any).TextDecoder = jest.fn(() => ({ decode }));

    expect(decode.mock.calls.length).toBe(0);
    toUtf8(new Uint8Array(0));
    expect(decode.mock.calls.length).toBe(1);
  });

  it("should use the global TextEncoder to encode UTF-8", () => {
    const encode = jest.fn().mockReturnValue(new Uint8Array(0));
    (global as any).TextEncoder = jest.fn(() => ({ encode }));

    expect(encode.mock.calls.length).toBe(0);
    fromUtf8("string");
    expect(encode.mock.calls.length).toBe(1);
  });
});
