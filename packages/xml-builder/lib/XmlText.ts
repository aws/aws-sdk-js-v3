import {XmlNode} from './XmlNode';
/**
 * Represents an XML text value.
 */
export class XmlText extends XmlNode {
    constructor(private value: string) {
        super('text');
    }

    toString(): string {
        return this.escapeElement('' + this.value);
    }
}