import { substring } from "./substring";

describe(substring.name, () => {
  describe("returns undefined", () => {
    it("when start >= stop", () => {
      expect(substring("", 0, 0, false)).toBeNull();
      expect(substring("", 1, 0, false)).toBeNull();
    });

    it("when input.length < stop", () => {
      expect(substring("", 0, 1, false)).toBeNull();
    });
  });

  it("returns substring", () => {
    expect(substring("abcde", 0, 3, false)).toBe("abc");
  });

  it("returns substring with reverse=true", () => {
    expect(substring("abcde", 0, 3, true)).toBe("cde");
  });
});
