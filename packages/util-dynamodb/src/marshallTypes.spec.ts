import { describe, expect, test as it } from "vitest";

import { convertToAttr } from "./convertToAttr";
import { marshall } from "./marshall";

describe("marshall type discernment", () => {
  describe("behaves as convertToAttr for non-collection values or Sets", () => {
    it("marshals string", () => {
      const value = "hello";
      expect(marshall(value)).toEqual(convertToAttr(value));
    });

    it("marshals number", () => {
      const value = 1578;
      expect(marshall(value)).toEqual(convertToAttr(value));
    });

    it("marshals binary", () => {
      const value = new Uint8Array([0, 1, 0, 1]);
      expect(marshall(value)).toEqual(convertToAttr(value));
    });

    it("marshals boolean", () => {
      let value = false;
      expect(marshall(value)).toEqual(convertToAttr(value));
      value = true;
      expect(marshall(value)).toEqual(convertToAttr(value));
    });

    it("marshals null", () => {
      const value = null;
      expect(marshall(value)).toEqual(convertToAttr(value));
    });
    it("marshals string set", () => {
      const value = new Set(["a", "b"]);
      expect(marshall(value)).toEqual(convertToAttr(value));
    });

    it("marshals number set", () => {
      const value = new Set([1, 2]);
      expect(marshall(value)).toEqual(convertToAttr(value));
    });

    it("marshals binary set", () => {
      const value = new Set([new Uint8Array([1, 0]), new Uint8Array([0, 1])]);
      expect(marshall(value)).toEqual(convertToAttr(value));
    });
  });

  describe("unwraps one level for input data which are lists or maps", () => {
    it("marshals and unwraps map", () => {
      expect(marshall({ a: 1, b: { a: 2, b: [1, 2, 3] } })).toEqual({
        a: { N: "1" },
        b: {
          M: {
            a: { N: "2" },
            b: {
              L: [{ N: "1" }, { N: "2" }, { N: "3" }],
            },
          },
        },
      });
    });

    it("marshals and unwraps list", () => {
      expect(marshall(["test", 2, null])).toEqual([{ S: "test" }, { N: "2" }, { NULL: true }]);
    });
  });
});
