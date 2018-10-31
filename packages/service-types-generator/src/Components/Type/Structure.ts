import { getInterfaceType } from './getInterfaceType';
import { getMemberType } from './getMemberType';
import { FullPackageImport } from '../Client/FullPackageImport';
import {
    ParameterSuppressionCustomizationDefinition,
    SyntheticParameterCustomizationDefinition,
    TreeModelShape,
    TreeModelStructure,
    CustomizationDefinition,
} from '@aws-sdk/build-types';

export abstract class Structure {
    constructor(
        protected readonly shape: TreeModelStructure,
        private readonly customizations: Array<
            ParameterSuppressionCustomizationDefinition |
            SyntheticParameterCustomizationDefinition
        > = []
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
 * ${documentation.split('\n').join('\n * ')}
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

    protected get customizationImports(): Array<FullPackageImport> {
        return [
            ...new Set(
                this.customizations
                    .filter(isSyntheticParameter)
                    .map(customization => customization.imports || [])
                    .reduce((allImports, imports) => allImports.concat(imports))
            )
        ].map(packageImport => new FullPackageImport(packageImport.package));
    }

    protected get memberNames(): Array<string> {
        const suppressions = this.customizations
            .filter(isParameterSuppression)
            .map(({name}) => name);

        return Object.keys(this.shape.members)
            .filter(name => suppressions.indexOf(name) === -1);
    }

    protected get syntheticParameters(): Array<[string, string]> {
        return this.customizations
            .filter(isSyntheticParameter)
            .map(({documentation, name, required, typeExpression}) => [
                name,
`${this.docBlock(documentation)}
${name}${required ? '' : '?'}: ${typeExpression};`
            ] as [string, string]);
    }
}

function isParameterSuppression(
    arg: CustomizationDefinition
): arg is ParameterSuppressionCustomizationDefinition {
    return arg.type === 'ParameterSuppression';
}

function isSyntheticParameter(
    arg: CustomizationDefinition
): arg is SyntheticParameterCustomizationDefinition {
    return arg.type === 'SyntheticParameter';
}
