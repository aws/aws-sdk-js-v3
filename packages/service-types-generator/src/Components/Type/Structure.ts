import { getInterfaceType } from './getInterfaceType';
import { getMemberType } from './getMemberType';
import {
    SyntheticParameterCustomizationDefinition,
    TreeModelShape,
    TreeModelStructure,
} from '@aws/build-types';

export abstract class Structure {
    constructor(
        protected readonly shape: TreeModelStructure,
        private readonly customizations: Array<SyntheticParameterCustomizationDefinition> = []
    ) {}

    abstract toString(): string;

    protected get foreignShapes(): Array<string> {
        return [...new Set(
            Object.keys(this.shape.members)
                .map(memberName => this.shape.members[memberName].shape)
                .reduce((
                    shapes: Array<TreeModelShape>,
                    shape: TreeModelShape
                ) => shapes.concat(this.importableShapesFor(shape)), [])
                .filter(shape => shape.name !== this.shape.name)
                .map(shape => shape.name)
        )];
    }

    protected docBlock(documentation: string): string {
        return `/**
 * ${documentation}
 */`;
    }

    protected getInterfaceDefinition(memberName: string): string {
        const member = this.shape.members[memberName];

        return `
${this.docBlock(member.documentation ?  member.documentation : member.shape.documentation)}
${memberName}${this.isRequired(memberName)? '' : '?'}: ${getInterfaceType(member.shape, member)};
        `.trim();
    }

    protected getMemberDefinition(memberName: string): string {
        const member = this.shape.members[memberName];

        return `
${this.docBlock(member.documentation ?  member.documentation : member.shape.documentation)}
${memberName}${this.isRequired(memberName)? '' : '?'}: ${getMemberType(member.shape, member)};
        `.trim();
    }

    private importableShapesFor(shape: TreeModelShape): Array<TreeModelShape> {
        if (shape.type === 'list') {
            return this.importableShapesFor(shape.member.shape);
        } else if (shape.type === 'map') {
            return this.importableShapesFor(shape.key.shape)
                .concat(this.importableShapesFor(shape.value.shape));
        } else if (shape.type === 'structure') {
            return [shape];
        }

        return [];
    }

    protected isRequired(memberName: string): boolean {
        return this.shape.required.indexOf(memberName) > -1;
    }

    protected get syntheticParameters(): Array<string> {
        return this.customizations
            .map(({documentation, name, required, typeExpression}) =>
`${this.docBlock(documentation)}
${name}${required ? '' : '?'}: ${typeExpression};`
            )
    }
}
