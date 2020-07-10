import { XmlNode } from "./XmlNode";
import { XmlText } from "./XmlText";

describe("XmlNode", () => {
  it("creates empty xml documents", () => {
    const node = new XmlNode("Xml");
    expect(node.toString()).toBe("<Xml/>");
  });

  it("nests elements", () => {
    const node = new XmlNode("xml", [new XmlNode("element")]);
    expect(node.toString()).toBe("<xml><element/></xml>");
  });

  it("nests elements deeply", () => {
    const node = new XmlNode("xml", [new XmlNode("a", [new XmlNode("b", [new XmlNode("c")])])]);
    expect(node.toString()).toBe("<xml><a><b><c/></b></a></xml>");
  });

  it("supports flat elements with nested elements", () => {
    const node = new XmlNode("xml", [new XmlNode("a", [new XmlNode("b")]), new XmlNode("c")]);
    expect(node.toString()).toBe("<xml><a><b/></a><c/></xml>");
  });

  it("accepts element values", () => {
    const node = new XmlNode("xml", [new XmlNode("element", [new XmlText("value")])]);
    expect(node.toString()).toBe("<xml><element>value</element></xml>");
  });

  it("accepts element attributes", () => {
    const node = new XmlNode("xml", [new XmlNode("el").addAttribute("abc", 123).addAttribute("mno", "xyz")]);
    expect(node.toString()).toBe('<xml><el abc="123" mno="xyz"/></xml>');
  });

  it("accepts element values and attributes at the same time", () => {
    const node = new XmlNode("xml", [new XmlNode("el", [new XmlText("value")]).addAttribute("abc", "xyz")]);
    expect(node.toString()).toBe('<xml><el abc="xyz">value</el></xml>');
  });

  it("accepts attributes on outer elements", () => {
    const node = new XmlNode("xml", [new XmlNode("out", [new XmlNode("c")]).addAttribute("a", "b")]).addAttribute(
      "xmlns",
      "abc"
    );
    expect(node.toString()).toBe('<xml xmlns="abc"><out a="b"><c/></out></xml>');
  });

  it("ignores null and undefined attributes", () => {
    const node: any = new XmlNode("xml");
    expect(Object.keys(node.attributes).length).toBe(0);
    node.addAttribute("foo", null);
    node.addAttribute("bar", undefined);
    node.addAttribute("baz", 123);
    node.addAttribute("bingo", "bongo");
    expect(node.toString()).toBe('<xml baz="123" bingo="bongo"/>');
  });

  it("escapes attribute values and element text", () => {
    const node = new XmlNode("xml", [new XmlNode("this & that")]).addAttribute("xmlns", 'a"b');
    expect(node.toString()).toBe('<xml xmlns="a&quot;b"><this & that/></xml>');
  });

  describe("addAttribute", () => {
    it("adds an attribute to the XmlNode", () => {
      const node: any = new XmlNode("xml");
      expect(node.attributes["foo"]).toBeUndefined();
      node.addAttribute("foo", "bar");
      expect(node.attributes["foo"]).toBe("bar");
    });

    it("returns a reference to the XmlNode", () => {
      const node = new XmlNode("xml");
      expect(node.addAttribute("foo", "bar")).toBe(node);
    });
  });

  describe("addChildNode", () => {
    it("adds a child to the XmlNode", () => {
      const node: any = new XmlNode("xml");
      expect(node.children.length === 0);
      node.addChildNode(new XmlNode("foo"));
      expect(node.children.length === 1);
      expect(node.toString()).toBe("<xml><foo/></xml>");
    });

    it("returns a reference to the XmlNode", () => {
      const node = new XmlNode("xml");
      expect(node.addChildNode(new XmlNode("foo"))).toBe(node);
    });
  });

  describe("removeAttribute", () => {
    it("removes an attribute from the XmlNode", () => {
      const node: any = new XmlNode("xml");
      node.addAttribute("foo", "bar");
      expect(node.attributes["foo"]).toBe("bar");
      node.removeAttribute("foo");
      expect(node.attributes["foo"]).toBeUndefined();
    });

    it("returns a reference to the XmlNode", () => {
      const node = new XmlNode("xml");
      expect(node.removeAttribute("foo")).toBe(node);
    });
  });
});
