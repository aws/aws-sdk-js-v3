import {Import} from "../Import";
import {MemberRef} from "./MemberRef";
import {
    isComplexShape,
    List as ListShape,
    Shape,
    ShapeMap,
} from "@aws/service-model";

export class List {
    constructor(
        private readonly shapeName: string,
        private readonly shape: ListShape,
        private readonly shapeMap: ShapeMap
    ) {}

    toString(): string {
        let toReturn: string = `${new Import('@aws/types/SerializationModel', 'List as _List_')}\n`;
        const {flattened, member, min} = this.shape;
        const props: Array<string> = ["type: 'list'"];
        if (flattened) {
            props.push('flattened: true');
        }
        if (min) {
            props.push(`min: ${min}`)
        }
        const memberShape: Shape = this.shapeMap[member.shape];
        if (isComplexShape(memberShape)) {
            toReturn += `${new Import(`./${member.shape}`, member.shape)}\n`;
        }
        props.push(`member: ${new MemberRef(member, this.shapeMap)}`);

        toReturn += `
export const ${this.shapeName}: _List_ = {
    ${props.join(',\n')},
};`;

        return toReturn.trim();
    }
}
