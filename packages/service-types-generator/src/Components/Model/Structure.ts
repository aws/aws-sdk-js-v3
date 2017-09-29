import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {MemberRef} from "./MemberRef";
import {requiresImport} from "./helpers";
import {TreeModelStructure} from "@aws/service-model";

export class Structure {
    constructor(private readonly shape: TreeModelStructure) {}

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

export const ${this.shape.name}: _Structure_ = {
${new IndentedSection(properties.join(',\n'))},
};
        `.trim();
    }

    private get imports(): string {
        const shapes: Array<string> = [...new Set(
            Object.keys(this.shape.members)
                .map(memberName => this.shape.members[memberName].shape)
                .filter(shape => requiresImport(shape))
                .map(shape => shape.name)
        )];
        return shapes
            .map(shape => new Import(`./${shape}`, shape))
            .concat([new Import('@aws/types', 'Structure as _Structure_')])
            .join('\n');
    }

    private get innateProps(): Array<string> {
        const props: Array<string> =[];
        if (this.shape.exception) {
            if (this.shape.exceptionType) {
                props.push(`exceptionType: '${this.shape.exceptionType}'`);
            }
            if (this.shape.exceptionCode) {
                props.push(`exceptionCode: '${this.shape.exceptionCode}'`);
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
            membersProps.push(`${memberName}: ${new MemberRef(member, memberName)}`);
        }

        return `
{
${new IndentedSection(membersProps.join(',\n'))},
}
        `.trim();
    }

    private get required(): string {
        const {required} = this.shape;
        if (required.length > 0) {
            return `
[
${new IndentedSection(required.map(prop => `'${prop}'`).join(',\n'))},
]
            `.trim();
        }

        return '[]';
    }
}
