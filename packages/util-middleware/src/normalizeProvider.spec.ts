import { normalizeProvider } from "./normalizeProvider";

describe(normalizeProvider.name, () => {
  const testCases = [
    true, // boolean
    null, // null
    undefined, // undefined
    1, // number
    "", // string
    {}, // object
  ];

  it.each(testCases)("returns Provider if value is not a function: %s", async (value) => {
    const output = normalizeProvider(value);
    expect(await output()).toEqual(value);
  });

  it.each(testCases)("returns Provider if value if a function which returns %s", (value) => {
    const mockValueProvider = () => Promise.resolve(value);
    expect(normalizeProvider(mockValueProvider)).toBe(mockValueProvider);
  });
});
