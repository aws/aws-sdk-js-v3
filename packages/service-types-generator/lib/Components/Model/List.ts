import {Import} from "../Import";
import {MemberRef} from "./MemberRef";

import {
    isComplexShape,
    List as ListShape,
    Shape,
    ShapeMap,
} from "@aws/service-model";
import {IndentedSection} from "../IndentedSection";

export class List {
    private readonly shape: ListShape;

    constructor(
        private readonly shapeName: string,
        private readonly shapeMap: ShapeMap
    ) {
        const shape = shapeMap[shapeName];
        if (shape.type === 'list') {
            this.shape = shape;
        } else {
            throw new Error(`Invalid shape name provided: ${shapeName} is a ${shape.type}, not a list`);
        }
    }

    toString(): string {
        let toReturn: string = `${new Import('@aws/types', 'List as _List_')}\n`;
        const {flattened, member, min, sensitive} = this.shape;
        const props: Array<string> = ["type: 'list'"];
        if (flattened) {
            props.push('flattened: true');
        }
        if (min) {
            props.push(`min: ${min}`)
        }
        if (sensitive) {
            props.push('sensitive: true');
        }
        const memberShape: Shape = this.shapeMap[member.shape];
        if (isComplexShape(memberShape)) {
            toReturn += `${new Import(`./${member.shape}`, member.shape)}\n`;
        }
        props.push(`member: ${new MemberRef(member, this.shapeMap)}`);

        toReturn += `
export const ${this.shapeName}: _List_ = {
${new IndentedSection(props.join(',\n'))},
};`;

        return toReturn.trim();
    }
}
