import {Import} from "../Import";
import {Structure} from "./Structure";
import {IndentedSection} from "../IndentedSection";
import {hasStreamingBody} from "./helpers";
import { streamType } from '../../streamType';
import {
    ParameterSuppressionCustomizationDefinition,
    RuntimeTarget,
    SyntheticParameterCustomizationDefinition,
    TreeModelStructure,
} from '@aws/build-types';
import {
    INPUT_CONTROL_PROPERTIES,
    INPUT_TYPES_IMPORT_BROWSER,
    INPUT_TYPES_IMPORT_NODE,
    INPUT_TYPES_IMPORT_UNIVERSAL,
} from './constants';
import { FullPackageImport } from '../Client/FullPackageImport';

export class Input extends Structure {
    constructor(
        shape: TreeModelStructure,
        private readonly runtime: RuntimeTarget,
        customizations: Array<
            ParameterSuppressionCustomizationDefinition |
            SyntheticParameterCustomizationDefinition
        > = []
    ) {
        super(
            shape,
            customizations.concat(INPUT_CONTROL_PROPERTIES)
        );
    }

    toString(): string {
        return `
${this.imports}

${this.docBlock(this.shape.documentation)}
export interface ${this.shape.name}${hasStreamingBody(this.shape) ? `<StreamType = ${streamType(this.runtime)}>` : ''} {
${new IndentedSection(
    [
        ...(new Map<string, string>(
            this.memberNames
                .map(memberName => [
                    memberName,
                    this.getInterfaceDefinition(memberName)
                ] as [string, string])
                .concat(this.syntheticParameters)
        ).values())
    ].join('\n\n')
)}
}
`.trim();
    }

    private get imports(): string {
        return this.foreignShapes
            .map<{toString(): string}>(shape => new Import(`./${shape}`, shape))
            .concat(this.environmentImports(), this.customizationImports)
            .join('\n');
    }

    private environmentImports(): Array<{ toString(): string }> {
        switch (this.runtime) {
            case 'node':
                if (hasStreamingBody(this.shape)) {
                    return [
                        INPUT_TYPES_IMPORT_NODE,
                        new FullPackageImport('stream'),
                    ]
                }
                return [INPUT_TYPES_IMPORT_NODE];
            case 'browser':
                return [INPUT_TYPES_IMPORT_BROWSER];
            case 'universal':
                return [INPUT_TYPES_IMPORT_UNIVERSAL];
        }
    }
}
