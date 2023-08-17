import { stringEquals } from "./stringEquals";

describe(stringEquals.name, () => {
  it("returns true if values are equal", () => {
    expect(stringEquals("foo", "foo")).toBe(true);
  });

  it("returns false if values are not equal", () => {
    expect(stringEquals("foo", "bar")).toBe(false);
  });
});
