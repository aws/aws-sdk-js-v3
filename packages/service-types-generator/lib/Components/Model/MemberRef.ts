import {XmlNamespace} from "./XmlNamespace";
import {InlineType} from "./InlineType";
import {IndentedSection} from "../IndentedSection";
import {requiresImport} from "./helpers";
import {TreeModelMember} from "@aws/service-model";

export class MemberRef {
    constructor(private readonly member: TreeModelMember) {}

    toString(): string {
        const {
            flattened,
            location,
            locationName,
            shape,
            streaming,
            xmlAttribute,
            xmlNamespace,
        } = this.member;
        const properties: Array<string> = [
            `shape: ${!requiresImport(shape)
                ? new InlineType(shape)
                : shape.name}`,
        ];
        if (flattened) {
            properties.push('flattened: true');
        }
        if (location) {
            properties.push(`location: '${location}'`);
        }
        if (locationName) {
            properties.push(`locationName: '${locationName}'`);
        }
        if (streaming) {
            properties.push(`streaming: true`);
        }
        if (xmlAttribute) {
            properties.push(`xmlAttribute: true`);
        }
        if (xmlNamespace) {
            properties.push(`xmlNamespace: ${new XmlNamespace(xmlNamespace)}`);
        }
        return `
{
${new IndentedSection(properties.join(',\n'))},
}
        `.trim();
    }
}
