import {IndentedSection} from '../IndentedSection';
import {
    ConfigurationPropertyDefinition,
    ConfigurationPropertyDefinitionRuntimeAttributes,
    RuntimeTarget,
} from '@aws/build-types';

export class ConfigurationProperty {
    constructor(
        private readonly target: RuntimeTarget,
        private readonly property: ConfigurationPropertyDefinition
    ) {}

    toString(): string {
        const {required, default: dflt, apply} = this.propertyConfig;
        const properties: Array<string> = [`required: ${required}`];
        if (dflt) {
            const {type, expression} = dflt;
            properties.push(
                `${type === 'value' ? 'defaultValue' : 'defaultProvider'}: ${expression}`,
            );
        }
        if (apply) {
            properties.push(`apply: ${apply}`);
        }

        return `{\n${new IndentedSection(properties.join(',\n'))}\n}`;
    }

    private get propertyConfig(): ConfigurationPropertyDefinitionRuntimeAttributes {
        if (this.property.type === 'unified') {
            return this.property;
        }

        return this.property[this.target];
    }
}
