import {customizationsFromModel} from './customizationsFromModel';
import {IndentedSection} from '../IndentedSection';
import {CustomizationDefinition, TreeModel} from "@aws/build-types";

export class Context {
    constructor(
        private readonly model: TreeModel,
        private readonly customizations: Array<CustomizationDefinition> = []
    ) {

    }

    toString(): string {
        const className = this.className();
        return `
${this.imports()}

export interface ${className}Configuration {
}

export interface ${className}ResolvedConfiguration {
}

export class ${className}Context implements 
    Context<${className}ResolvedConfiguration>
{
}

const configurationProperties = {};
        `.trim();
    }

    private className(): string {
        const {metadata} = this.model;
        return (metadata.serviceAbbreviation || metadata.serviceFullName)
            .replace(/^(aws|amazon)/i, '')
            .replace(/(service|api|client)$/i, '')
            .trim()
            .replace(/\s/g, '');
    }

    private imports(): string {
        const packages = new Set<string>([]);
        for (const customization of customizationsFromModel(this.model).concat(this.customizations)) {
            throw new Error("Can't handle customizations yet.");
        }

        return '';
    }
}
