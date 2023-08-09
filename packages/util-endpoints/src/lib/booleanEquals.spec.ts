import { booleanEquals } from "./booleanEquals";

describe(booleanEquals.name, () => {
  it("returns true if values are equal", () => {
    expect(booleanEquals(true, true)).toBe(true);
    expect(booleanEquals(false, false)).toBe(true);
  });

  it("returns false if values are not equal", () => {
    expect(booleanEquals(true, false)).toBe(false);
    expect(booleanEquals(false, true)).toBe(false);
  });
});
