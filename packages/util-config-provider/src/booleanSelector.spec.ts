import { booleanSelector, SelectorType } from "./booleanSelector";

describe(booleanSelector.name, () => {
  const key = "key";
  const obj: { [key]: any } = {} as any;

  describe.each(Object.entries(SelectorType))(`Selector %s`, (selectorKey, selectorValue) => {
    beforeEach(() => {
      delete obj[key];
    });

    it(`should return undefined if ${key} is not defined`, () => {
      expect(booleanSelector(obj, key, SelectorType[selectorKey])).toBeUndefined();
    });

    it.each([
      [true, "true"],
      [false, "false"],
    ])(`should return boolean %s if ${key}="%s"`, (output, input) => {
      obj[key] = input;
      expect(booleanSelector(obj, key, SelectorType[selectorKey])).toBe(output);
    });

    it.each(["0", "1", "yes", "no", undefined, null, void 0, ""])(`should throw if ${key}=%s`, (input) => {
      obj[key] = input;
      expect(() => booleanSelector(obj, key, SelectorType[selectorKey])).toThrow(
        `Cannot load ${selectorValue} "${key}". Expected "true" or "false", got ${obj[key]}.`
      );
    });
  });
});
