import { not } from "./not";

describe(not.name, () => {
  it.each([
    [false, true],
    [true, false],
  ])("returns %s of boolean %s", (output, input) => {
    expect(not(input)).toBe(output);
  });

  it.each([
    [true, null],
    [true, undefined],
    [true, 0],
    [true, -0],
    [true, NaN],
    [false, 1],
    [true, ""],
    [false, "string"],
    [false, []],
    [false, {}],
  ])("returns %s of non boolean %s", (output, input) => {
    // @ts-expect-error: Argument of type is not assignable
    expect(not(input)).toBe(output);
  });
});
