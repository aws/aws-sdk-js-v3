/**
 * @jest-environment jsdom
 */
import { toUtf8 } from "./toUtf8.browser";

declare const global: any;

describe("toUtf8", () => {
  it("should use the Encoding API", () => {
    const expected = "ABC";
    const decode = jest.fn().mockReturnValue(expected);
    (global as any).TextDecoder = jest.fn(() => ({ decode }));

    expect(toUtf8(new Uint8Array(0))).toBe(expected);
  });
});
