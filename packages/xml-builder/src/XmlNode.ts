import { escapeAttribute } from "./escape-attribute";
import { Stringable } from "./stringable";
import { XmlText } from "./XmlText";

/**
 * Represents an XML node.
 */
export class XmlNode {
  private attributes: Record<string, any> = {};

  public static of(name: string, childText?: string, withName?: string): XmlNode {
    const node = new XmlNode(name);
    if (childText !== undefined) {
      node.addChildNode(new XmlText(childText));
    }
    if (withName !== undefined) {
      node.withName(withName);
    }
    return node;
  }

  constructor(private name: string, public readonly children: Stringable[] = []) {}

  withName(name: string): XmlNode {
    this.name = name;
    return this;
  }

  addAttribute(name: string, value: any): XmlNode {
    this.attributes[name] = value;
    return this;
  }

  addChildNode(child: Stringable): XmlNode {
    this.children.push(child);
    return this;
  }

  removeAttribute(name: string): XmlNode {
    delete this.attributes[name];
    return this;
  }

  toString(): string {
    const hasChildren = Boolean(this.children.length);
    let xmlText = `<${this.name}`;
    // add attributes
    const attributes = this.attributes;
    for (const attributeName of Object.keys(attributes)) {
      const attribute = attributes[attributeName];
      if (typeof attribute !== "undefined" && attribute !== null) {
        xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
      }
    }

    return (xmlText += !hasChildren ? "/>" : `>${this.children.map((c) => c.toString()).join("")}</${this.name}>`);
  }
}
