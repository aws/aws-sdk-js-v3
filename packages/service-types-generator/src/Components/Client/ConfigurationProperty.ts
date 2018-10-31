import {IndentedSection} from '../IndentedSection';
import {
    ConfigurationPropertyDefinition,
    ConfigurationPropertyDefinitionRuntimeAttributes,
    RuntimeTarget,
} from '@aws-sdk/build-types';

export class ConfigurationProperty {
    constructor(
        private readonly target: RuntimeTarget,
        private readonly property: ConfigurationPropertyDefinition
    ) {}

    toString(): string {
        const {
            apply,
            default: dflt,
            normalize,
            required,
        } = this.propertyConfig;
        const properties: Array<string> = [];
        if (required) {
            properties.push('required: true');
        }

        if (dflt) {
            const {type, expression} = dflt;
            properties.push(
                `${type === 'value' ? 'defaultValue' : 'defaultProvider'}: ${expression}`,
            );
        }

        if (normalize) {
            properties.push(`normalize: ${normalize}`);
        }

        if (apply) {
            properties.push(`apply: ${apply}`);
        }

        return properties.length > 0
            ? `{\n${new IndentedSection(properties.join(',\n'))}\n}`
            : '{}';
    }

    private get propertyConfig(): ConfigurationPropertyDefinitionRuntimeAttributes {
        if (this.property.type === 'unified') {
            return this.property;
        }

        return this.property[this.target];
    }
}
