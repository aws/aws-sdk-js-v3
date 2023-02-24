import { isSet } from "./isSet";

describe(isSet.name, () => {
  it.each([null, undefined])("returns false for %s", (notSet) => {
    expect(isSet(notSet)).toBe(false);
  });

  it.each([false, 0, -0, "", NaN])("returns true for falsy value %s", (falsyVal) => {
    expect(isSet(falsyVal)).toBe(true);
  });

  it.each([true, 1, -1, "true", [], {}])("returns true for truthy value %s", (falsyVal) => {
    expect(isSet(falsyVal)).toBe(true);
  });
});
