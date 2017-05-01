import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {MemberRef} from "./MemberRef";
import {
    isComplexShape,
    Structure as StructureShape,
    ShapeMap,
} from "@aws/service-model";

export class Structure {
    private readonly shape: StructureShape;

    constructor(
        private readonly shapeName: string,
        private readonly shapeMap: ShapeMap
    ) {
        const shape = shapeMap[shapeName];
        if (shape.type === 'structure') {
            this.shape = shape;
        } else {
            throw new Error(`Invalid shape name provided: ${shapeName} is a ${shape.type}, not a structure`);
        }
    }

    toString(): string {
        const {members, required, payload, sensitive} = this.shape;
        const properties: Array<string> = [
            `type: 'structure'`,
            `required: ${this.required}`,
            `members: ${this.members}`,
        ].concat(this.innateProps);
        if (payload) {
            properties.push(`payload: '${payload}'`);
        }
        if (sensitive) {
            properties.push(`sensitive: true`);
        }

        return `
${this.imports}

export const ${this.shapeName}: _Structure_ = {
${new IndentedSection(properties.join(',\n'))},
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
            .concat([new Import('@aws/types', 'Structure as _Structure_')])
            .join('\n');
    }

    private get innateProps(): Array<string> {
        const props: Array<string> =[];
        if (this.shape.exception) {
            props.push(`exceptionType: '${this.shapeName}'`);
            if (this.shape.error && this.shape.error.code) {
                props.push(`exceptionCode: '${this.shape.error.code}'`);
            }
        }

        return props;
    }

    private get members(): string {
        const {members} = this.shape;
        if (Object.keys(members).length === 0) {
            return '{}';
        }

        const membersProps = [];
        for (let memberName of Object.keys(members)) {
            const member = this.shape.members[memberName];
            membersProps.push(`${memberName}: ${new MemberRef(member, this.shapeMap)}`);
        }

        return `
{
${new IndentedSection(membersProps.join(',\n'))},
}
        `.trim();
    }

    private get required(): string {
        const {required} = this.shape;
        if (Array.isArray(required)) {
            return `
[
${new IndentedSection(required.map(prop => `'${prop}'`).join(',\n'))},
]
            `.trim();
        }

        return '[]';
    }
}
