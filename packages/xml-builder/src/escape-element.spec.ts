import { describe, expect, test as it } from "vitest";

import { escapeElement } from "./escape-element";

describe("escape-element", () => {
  it("escapes: & < > \" ' \\n \\r \\u0085 \\u2028", () => {
    const value = "abc 123 &<>\"'%\n\r\u0085\u2028";
    expect(escapeElement(value)).toBe("abc 123 &amp;&lt;&gt;&quot;&apos;%&#x0A;&#x0D;&#x85;&#x2028;");
  });
});
