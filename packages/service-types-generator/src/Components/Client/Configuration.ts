import {ConfigurationProperty} from './ConfigurationProperty';
import {IndentedSection} from '../IndentedSection';
import {packageNameToVariable} from './packageNameToVariable';
import {Import, ConfigurationDefinition, RuntimeTarget} from '@aws/build-types';
import {IMPORTS} from './internalImports';
import {FullPackageImport} from './FullPackageImport';
import {Import as DestructuringImport} from '../Import';

export class Configuration {
    constructor(
        private readonly prefix: string,
        private readonly target: RuntimeTarget,
        private readonly config: ConfigurationDefinition
    ) {}

    get className() {
        return `${this.prefix}Configuration`;
    }

    toString(): string {
        return `${this.imports()}

export interface ${this.prefix}Configuration {
${new IndentedSection(this.configuration())}
}

export interface ${this.prefix}ResolvableConfiguration extends ${this.prefix}Configuration {
${new IndentedSection(this.resolvableConfiguration())}
}

export interface ${this.prefix}ResolvedConfiguration extends ${this.prefix}Configuration {
${new IndentedSection(this.resolvedConfiguration())}
}

export const configurationProperties: ${packageNameToVariable('@aws/types')}.ConfigurationDefinition<
    ${this.prefix}ResolvableConfiguration,
    ${this.prefix}ResolvedConfiguration
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

    private imports(): string {
        const allImports: Import[] = [
            IMPORTS['types']
        ];

        for (const key of Object.keys(this.config)) {
            const {imports = [], ...property} = this.config[key];
            allImports.push(...imports);
            if (property.type === 'forked') {
                allImports.push(...(property[this.target].imports || []));
            }
        }

        const packages = new Set<string>();
        for (const dependency of allImports) {
            packages.add(dependency.package);
        }

        if (this.target === 'node') {
            packages.add('stream');
        }

        return [...packages]
            .sort()
            .map(packageName => new FullPackageImport(packageName).toString())
            .concat(new DestructuringImport(
                './types/OutputTypesUnion',
                'OutputTypesUnion'
            ).toString())
            .join('\n');
    }

}
