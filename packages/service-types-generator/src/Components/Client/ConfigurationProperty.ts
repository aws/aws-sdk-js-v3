import {IndentedSection} from '../IndentedSection';
import {
    ConfigPropertyGenerationConfiguration,
    ConfigurationPropertyGenerationConfiguration,
    RuntimeTarget,
} from '@aws/build-types';

export class ConfigurationProperty {
    constructor(
        private readonly target: RuntimeTarget,
        private readonly property: ConfigurationPropertyGenerationConfiguration
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

    private get propertyConfig(): ConfigPropertyGenerationConfiguration {
        if (this.property.type === 'unified') {
            return this.property;
        }

        return this.property[this.target];
    }
}
