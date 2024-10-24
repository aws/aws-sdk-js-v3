import { describe, expect, test as it } from "vitest";

import { XmlNode, XmlText } from "./";

describe("package index", () => {
  it("should define XmlNode", () => {
    expect(XmlNode).toBeDefined();
  });

  it("should define XmlText", () => {
    expect(XmlText).toBeDefined();
  });
});
