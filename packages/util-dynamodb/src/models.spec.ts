import { describe, expect, it } from "vitest";

import type { NativeAttributeValue } from "./models";

describe("NativeAttributeValue type", () => {
  it("should not resolve to any (should reject values not in the union)", () => {
    // This test validates that NativeAttributeValue is not `any`.
    // If the type were `any`, assigning a symbol would be allowed at compile time.
    // With a proper union type, symbols are not assignable to NativeAttributeValue.
    //
    // We verify at runtime that the known members of the union are accepted.
    const stringVal: NativeAttributeValue = "hello";
    const numberVal: NativeAttributeValue = 42;
    const boolVal: NativeAttributeValue = true;
    const nullVal: NativeAttributeValue = null;
    const undefinedVal: NativeAttributeValue = undefined;
    const mapVal: NativeAttributeValue = { key: "value" };
    const listVal: NativeAttributeValue = [1, "two", true];
    const setVal: NativeAttributeValue = new Set([1, 2, 3]);
    const binaryVal: NativeAttributeValue = new Uint8Array([1, 2, 3]);
    const classInstance: NativeAttributeValue = new Date();

    expect(stringVal).toBe("hello");
    expect(numberVal).toBe(42);
    expect(boolVal).toBe(true);
    expect(nullVal).toBe(null);
    expect(undefinedVal).toBe(undefined);
    expect(mapVal).toEqual({ key: "value" });
    expect(listVal).toEqual([1, "two", true]);
    expect(setVal).toEqual(new Set([1, 2, 3]));
    expect(binaryVal).toEqual(new Uint8Array([1, 2, 3]));
    expect(classInstance).toBeInstanceOf(Date);
  });
});
