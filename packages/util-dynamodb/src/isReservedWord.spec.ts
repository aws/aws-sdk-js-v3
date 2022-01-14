/**
 * @jest-environment jsdom
 */
import { isReservedWord, reservedWords } from "./isReservedWord";

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

  describe("Check all the reservedWords list", () => {
    it("should return true because all the given words are reserved ones", () => {
      expect(reservedWords.every(isReservedWord)).toBe(true);
    });
  });
});
