import {XmlNamespace} from "./XmlNamespace";
import {isComplexShape, StructureMember, ShapeMap} from "@aws/service-model";
import {InlineType} from "./InlineType";

export class MemberRef {
    constructor(
        private readonly member: StructureMember,
        private readonly shapeMap: ShapeMap
    ) {}

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
            `shape: ${!isComplexShape(this.shapeMap[shape])
                ? new InlineType(shape, this.shapeMap)
                : shape}`,
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
        return `{\n${properties.join(',\n')}\n}`;
    }
}
