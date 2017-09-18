import {getInterfaceType} from "./getInterfaceType";
import {getMemberType} from "./getMemberType";
import {TreeModelShape, TreeModelStructure} from "@aws/service-model";

export abstract class Structure {
    constructor(protected readonly shape: TreeModelStructure) {}

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
        return `
/**
 * ${documentation}
 */
        `.trim();
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
        const {required} = this.shape;
        return required.indexOf(memberName) > -1;
    }
}
