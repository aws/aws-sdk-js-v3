import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {MemberRef} from "./MemberRef";
import {
    isComplexShape,
    Map as MapShape,
    Shape,
    ShapeMap,
} from "@aws/service-model";

export class Map {
    private readonly shape: MapShape;

    constructor(
        private readonly shapeName: string,
        private readonly shapeMap: ShapeMap
    ) {
        const shape = shapeMap[shapeName];
        if (shape.type === 'map') {
            this.shape = shape;
        } else {
            throw new Error(`Invalid shape name provided: ${shapeName} is a ${shape.type}, not a map`);
        }
    }

    toString(): string {
        let toReturn: string = `${new Import('@aws/types', 'Map as _Map_')}\n`;
        const properties: Array<string> = ["type: 'map'"];
        const {flattened, sensitive} = this.shape;
        if (flattened) {
            properties.push('flattened: true');
        }
        if (sensitive) {
            properties.push('sensitive: true');
        }

        for (let memberName of <Array<'key'|'value'>>['key', 'value']) {
            const member = this.shape[memberName];
            const memberShape: Shape = this.shapeMap[member.shape];
            if (isComplexShape(memberShape)) {
                toReturn += `${new Import(`./${member.shape}`, member.shape)}\n`;
            }
            properties.push(`${memberName}: ${new MemberRef(member, this.shapeMap)}`);
        }

        toReturn += `
export const ${this.shapeName}: _Map_ = {
${new IndentedSection(properties.join(',\n'))},
};`;

        return toReturn.trim();
    }
}
