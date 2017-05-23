
/**
 * Represents an XML node.
 */
export class XmlNode {

    private attributes: {[name: string]: any} = {};

    constructor(public name: string, private children: XmlNode[] = []) {}

    protected escapeElement(value: string): string {
        return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    protected escapeAttribute(value: string): string {
        return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    addAttribute(name: string, value: any): XmlNode {
        this.attributes[name] = value;
        return this;
    }

    addChildNode(child: XmlNode): XmlNode {
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
        for (let attributeName in attributes) {
            if (!Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
                continue;
            }
            xmlText += ` ${attributeName}="${this.escapeAttribute('' + attributes[attributeName])}"`;
        }
        // close the tag if there aren't any children
        if (!hasChildren) {
            xmlText += '/>';
        } else {
            xmlText += `>${this.children.map(c => c.toString()).join('')}</${this.name}>`;
        }

        return xmlText;
    }
}

