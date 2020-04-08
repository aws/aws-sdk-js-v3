import { splitEvery } from "./split-every";
describe("splitEvery", () => {
  const m1 = "foo";
  const m2 = "foo, bar";
  const m3 = "foo, bar, baz";
  const m4 = "foo, bar, baz, qux";
  const m5 = "foo, bar, baz, qux, coo";
  const m6 = "foo, bar, baz, qux, coo, tan";
  const delim = ", ";

  it("Errors on <= 0", () => {
    expect(() => {
      splitEvery(m2, delim, -1);
    }).toThrow("Invalid number of delimiters");

    expect(() => {
      splitEvery(m2, delim, 0);
    }).toThrow("Invalid number of delimiters");
  });

  it("Errors on non-integer", () => {
    expect(() => {
      splitEvery(m2, delim, 1.3);
    }).toThrow("Invalid number of delimiters");

    expect(() => {
      splitEvery(m2, delim, 4.9);
    }).toThrow("Invalid number of delimiters");
  });

  it("Handles splitting on 1", () => {
    const count = 1;
    expect(splitEvery(m1, delim, count)).toMatchObject(m1.split(delim));
    expect(splitEvery(m2, delim, count)).toMatchObject(m2.split(delim));
    expect(splitEvery(m3, delim, count)).toMatchObject(m3.split(delim));
    expect(splitEvery(m4, delim, count)).toMatchObject(m4.split(delim));
    expect(splitEvery(m5, delim, count)).toMatchObject(m5.split(delim));
    expect(splitEvery(m6, delim, count)).toMatchObject(m6.split(delim));
  });

  it("Handles splitting on 2", () => {
    const count = 2;
    expect(splitEvery(m1, delim, count)).toMatchObject(["foo"]);
    expect(splitEvery(m2, delim, count)).toMatchObject(["foo, bar"]);
    expect(splitEvery(m3, delim, count)).toMatchObject(["foo, bar", "baz"]);
    expect(splitEvery(m4, delim, count)).toMatchObject([
      "foo, bar",
      "baz, qux"
    ]);
    expect(splitEvery(m5, delim, count)).toMatchObject([
      "foo, bar",
      "baz, qux",
      "coo"
    ]);
    expect(splitEvery(m6, delim, count)).toMatchObject([
      "foo, bar",
      "baz, qux",
      "coo, tan"
    ]);
  });

  it("Handles splitting on 3", () => {
    const count = 3;
    expect(splitEvery(m1, delim, count)).toMatchObject(["foo"]);
    expect(splitEvery(m2, delim, count)).toMatchObject(["foo, bar"]);
    expect(splitEvery(m3, delim, count)).toMatchObject(["foo, bar, baz"]);
    expect(splitEvery(m4, delim, count)).toMatchObject([
      "foo, bar, baz",
      "qux"
    ]);
    expect(splitEvery(m5, delim, count)).toMatchObject([
      "foo, bar, baz",
      "qux, coo"
    ]);
    expect(splitEvery(m6, delim, count)).toMatchObject([
      "foo, bar, baz",
      "qux, coo, tan"
    ]);
  });
});
