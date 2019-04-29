import { escapeElement } from "./escape-element";

describe("escape-element", () => {
  it("escapes: & < >", () => {
    const value = 'abc 123 &<>"%';
    expect(escapeElement(value)).toBe('abc 123 &amp;&lt;&gt;"%');
  });
});
