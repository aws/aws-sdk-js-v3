import { escapeAttribute } from "./escape-attribute";

describe("escape-attribute", () => {
  it('escapes: & < > "', () => {
    const value = 'abc 123 &<>"%';
    expect(escapeAttribute(value)).toBe("abc 123 &amp;&lt;&gt;&quot;%");
  });
});
