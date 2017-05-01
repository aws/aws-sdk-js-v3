import {getInterfaceType} from "./getInterfaceType";
import {getMemberType} from "./getMemberType";
import {
    isComplexShape,
    Shape,
    ShapeMap,
    Structure as StructureShape,
    StructureMember,
} from "@aws/service-model";

export abstract class Structure {
    protected readonly shape: StructureShape;

    constructor(
        protected readonly shapeName: string,
        protected readonly shapeMap: ShapeMap
    ) {
        const shape = shapeMap[shapeName];
        if (shape.type === 'structure') {
            this.shape = shape;
        } else {
            throw new Error(`Invalid shape name provided: ${shapeName} is a ${shape.type}, not a structure`);
        }
    }

    abstract toString(): string;

    protected get foreignShapes(): Array<string> {
        return [...new Set(
            Object.keys(this.shape.members)
                .map(memberName => this.shape.members[memberName].shape)
                .map(this.importableShapeFor, this)
                .filter(shapeName => shapeName !== this.shapeName)
                .filter(shapeName => isComplexShape(this.getShape(shapeName)))
        )];
    }

    protected documentationFor(
        shapeName: string,
        memberDoc?: string
    ): string {
        const {documentation = shapeName} = this.getShape(shapeName);
        return `
/**
 * ${memberDoc ? memberDoc : documentation}
 */`.trim();
    }

    protected getInterfaceDefinition(memberName: string): string {
        const member: StructureMember = this.shape.members[memberName];

        return `
${this.documentationFor(member.shape, member.documentation)}
${memberName}${this.isRequired(memberName)? '' : '?'}: ${getInterfaceType(member.shape, this.shapeMap, member)};
        `.trim();
    }

    protected getMemberDefinition(memberName: string): string {
        const member: StructureMember = this.shape.members[memberName];

        return `
${this.documentationFor(member.shape, member.documentation)}
${memberName}${this.isRequired(memberName)? '' : '?'}: ${getMemberType(member.shape, this.shapeMap, member)};
        `.trim();
    }

    protected getShape(shapeName: string): Shape {
        if (shapeName in this.shapeMap) {
            return this.shapeMap[shapeName];
        }

        throw new Error(`Unrecognized shape: ${shapeName}`);
    }

    private importableShapeFor(shapeName: string): string {
        const shape = this.getShape(shapeName);
        if (shape.type === 'list') {
            return this.importableShapeFor(shape.member.shape);
        } else if (shape.type === 'map') {
            return this.importableShapeFor(shape.value.shape);
        }

        return shapeName;
    }

    protected isRequired(memberName: string): boolean {
        const {required = []} = this.shape;
        return required.indexOf(memberName) > -1;
    }
}
