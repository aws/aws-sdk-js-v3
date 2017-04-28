import {Import} from "../Import";
import {MemberRef} from "./MemberRef";
import {
    isComplexShape,
    Structure as StructureShape,
    ShapeMap,
} from "@aws/service-model";

export class Structure {
    constructor(
        private readonly shapeName: string,
        private readonly shape: StructureShape,
        private readonly shapeMap: ShapeMap
    ) {}

    toString(): string {
        const {members, required, payload} = this.shape;
        const properties: Array<string> = [
            "type: 'structure'",
            `required: [${Array.isArray(required) ? required.map(prop => `'${prop}'`).join(',') : ''}]`,
        ].concat(this.innateProps);
        const membersProps = [];
        for (let memberName of Object.keys(this.shape.members)) {
            const member = this.shape.members[memberName];
            membersProps.push(`${memberName}: ${new MemberRef(member, this.shapeMap)}`);
        }
        properties.push(`members: {\n${membersProps.join(',\n')}\n}`);
        if (payload) {
            properties.push(`payload: '${payload}'`);
        }

        return `
${this.imports}

export const ${this.shapeName}: _Structure_ = {
    ${properties.join(',\n')},
};
`.trim();
    }

    private get imports(): string {
        const shapes: Array<string> = [...new Set(
            Object.keys(this.shape.members)
                .map(memberName => this.shape.members[memberName].shape)
                .filter(shapeName => isComplexShape(this.shapeMap[shapeName]))
        )];
        return shapes
            .map(shape => new Import(`./${shape}`, shape))
            .concat([new Import('@aws/types/SerializationModel', 'Structure as _Structure_')])
            .join('\n');
    }

    private get innateProps(): Array<string> {
        const props: Array<string> =[];
        if (this.shape.exception) {
            props.push(`exceptionType: '${this.shapeName}'`);
            if (this.shape.error && this.shape.error.code) {
                props.push(`exceptionCode: ${this.shape.error.code}`);
            }
        }

        return props;
    }
}
