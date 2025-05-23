import { describe, expect, test as it } from "vitest";

import { XmlText } from "./XmlText";

describe("XmlText", () => {
  it("escapes element text", () => {
    const text = new XmlText('this & that are < or > "most"');
    expect(text.toString()).toBe("this &amp; that are &lt; or &gt; &quot;most&quot;");
  });
});
