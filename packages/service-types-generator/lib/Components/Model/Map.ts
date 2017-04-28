import {Import} from "../Import";
import {MemberRef} from "./MemberRef";
import {
    isComplexShape,
    Map as MapShape,
    Shape,
    ShapeMap,
} from "@aws/service-model";

export class Map {
    constructor(
        private readonly shapeName: string,
        private readonly shape: MapShape,
        private readonly shapeMap: ShapeMap
    ) {}

    toString(): string {
        let toReturn: string = `${new Import('@aws/types/SerializationModel', 'Map as _Map_')}\n`;
        const properties: Array<string> = ["type: 'map'"];
        for (let memberName of <Array<'key'|'value'>>['key', 'value']) {
            const member = this.shape[memberName];
            const memberShape: Shape = this.shapeMap[member.shape];
            if (isComplexShape(memberShape)) {
                toReturn += `${new Import(`./${member.shape}`, member.shape)}\n`;
            }
            properties.push(`${memberName}: ${new MemberRef(member, this.shapeMap)}`);
        }

        if (this.shape.flattened) {
            properties.push('flattened: true');
        }

        toReturn += `
export const ${this.shapeName}: _Map_ = {
    ${properties.join(',\n')},
};`;

        return toReturn.trim();
    }
}
