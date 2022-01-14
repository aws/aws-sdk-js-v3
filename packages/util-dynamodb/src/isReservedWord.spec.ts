/**
 * @jest-environment jsdom
 */
import { isReservedWord } from "./isReservedWord";

describe("isReservedWord", () => {
  describe("With lowercase words", () => {
    it("should return false because given word is not a reserved one", () => {
      expect(isReservedWord("banana")).toBe(false);
    });

    it("should return false because given word is a reserved one", () => {
      expect(isReservedWord("project")).toBe(true);
    });
  });

  describe("With uppercase words", () => {
    it("should return false because given word is not a reserved one", () => {
      expect(isReservedWord("BANANA")).toBe(false);
    });

    it("should return false because given word is a reserved one", () => {
      expect(isReservedWord("PROJECT")).toBe(true);
    });
  });
});
