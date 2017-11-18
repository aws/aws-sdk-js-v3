import {ConfigurationProperty} from './ConfigurationProperty';
import {IndentedSection} from '../IndentedSection';
import {packageNameToVariable} from './packageNameToVariable';
import {ConfigurationDefinition, RuntimeTarget} from '@aws/build-types';

export class Configuration {
    constructor(
        private readonly className: string,
        private readonly target: RuntimeTarget,
        private readonly config: ConfigurationDefinition
    ) {}

    toString(): string {
        return `
export interface ${this.className}Configuration {
${new IndentedSection(this.configuration())}
}

interface ${this.className}ResolvableConfiguration extends ${this.className}Configuration {
${new IndentedSection(this.resolvableConfiguration())}
}

export interface ${this.className}ResolvedConfiguration extends ${this.className}Configuration {
${new IndentedSection(this.resolvedConfiguration())}
}

const configurationProperties: ${packageNameToVariable('@aws/types')}.ConfigurationDefinition<
    ${this.className}ResolvableConfiguration,
    ${this.className}ResolvedConfiguration
> = {
${new IndentedSection(this.configurationProperties())}
};
        `.trim();
    }

    private configuration(): string {
        const properties: Array<string> = [];
        for (const key of Object.keys(this.config).sort()) {
            let {
                documentation,
                inputType,
                internal,
                ...property
            } = this.config[key];
            if (internal) {
                continue;
            }

            let required = false;
            if (property.type === 'unified') {
                required = property.required;
            } else {
                const {
                    required: req,
                    additionalDocumentation,
                } = property[this.target];
                required = req;
                if (additionalDocumentation) {
                    documentation += `\n *\n * ${additionalDocumentation}`;
                }
            }

            properties.push(
`/**
 * ${documentation}
 */
${key}${required ? '' : '?'}: ${inputType};`
            );
        }

        return properties.join('\n\n');
    }

    private configurationProperties(): string {
        const properties: Array<string> = [];
        for (const key of Object.keys(this.config)) {
            const value = new ConfigurationProperty(
                this.target,
                this.config[key]
            );
            properties.push(`${key}: ${value},`);
        }

        return properties.join('\n');
    }

    private resolvableConfiguration(): string {
        const properties: Array<string> = [];
        for (const key of Object.keys(this.config).sort()) {
            const {
                documentation,
                inputType,
                internal,
            } = this.config[key];

            if (internal) {
                properties.push(
`/**
 * ${documentation}
 */
${key}: ${inputType};`
                );
            }
        }

        return properties.join('\n\n');
    }

    private resolvedConfiguration(): string {
        const properties: Array<string> = [];
        for (const key of Object.keys(this.config).sort()) {
            const property = this.config[key];
            const {
                default: dflt,
                required,
            } = (property.type === 'unified' ? property : property[this.target]);

            const {
                inputType,
                resolvedType,
                internal,
            } = property;

            if (
                internal ||
                resolvedType ||
                (!required && dflt)
            ) {
                properties.push(`${key}: ${resolvedType || inputType};`);
            }
        }

        return properties.join('\n\n');
    }
}
