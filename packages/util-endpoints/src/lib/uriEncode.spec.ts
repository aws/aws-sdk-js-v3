import { uriEncode } from "./uriEncode";

describe(uriEncode.name, () => {
  it.each([
    [`;,/?:@&=+$#`, `%3B%2C%2F%3F%3A%40%26%3D%2B%24%23`], // Reserved characters
    [`!*'()`, `%21%2A%27%28%29`], // Specially escaped characters
    [` `, `%20`], // Space
  ])("encodes '%s' as '%s'", (input, output) => {
    expect(uriEncode(input)).toStrictEqual(output);
  });
});
