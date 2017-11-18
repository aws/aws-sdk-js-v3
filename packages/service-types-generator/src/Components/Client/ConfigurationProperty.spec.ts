import {ConfigurationProperty} from './ConfigurationProperty';
import {ConfigurationPropertyDefinition} from '@aws/build-types';

describe('ConfigurationProperty', () => {
    const minimalProp: ConfigurationPropertyDefinition = {
        type: 'unified',
        documentation: '',
        inputType: 'boolean',
        required: false
    };

    it('should echo the `required` attribute for unified properties', () => {
        expect(
            (new ConfigurationProperty('node', minimalProp)).toString()
        ).toBe(
`{
    required: false
}`
        );
    });

    it('should inject default values', () => {
        const prop = new ConfigurationProperty('node', {
            ...minimalProp,
            default: {
                type: 'value',
                expression: 'true'
            }
        });

        expect(prop.toString()).toBe(
`{
    required: false,
    defaultValue: true
}`
        );
    });

    it('should inject default providers', () => {
        const prop = new ConfigurationProperty('node', {
            ...minimalProp,
            default: {
                type: 'provider',
                expression: '() => true'
            }
        });

        expect(prop.toString()).toBe(
`{
    required: false,
    defaultProvider: () => true
}`
        );
    });

    it('should inject applicators', () => {
        const prop = new ConfigurationProperty('node', {
            ...minimalProp,
            apply: '() => {}'
        });

        expect(prop.toString()).toBe(
`{
    required: false,
    apply: () => {}
}`
        );
    });

    it(
        'should pull generation configuration from the desired runtime if a property has a forked implementation',
        () => {
            const forkedProp: ConfigurationPropertyDefinition = {
                type: 'forked',
                documentation: '',
                inputType: 'boolean',
                node: {
                    required: false,
                    default: {
                        type: 'value',
                        expression: 'true',
                    },
                    apply: '() => {}'
                },
                browser: {
                    required: false,
                    default: {
                        type: 'value',
                        expression: 'false',
                    }
                },
                universal: {
                    required: false,
                    default: {
                        type: 'value',
                        expression: '!!true',
                    }
                },
            };

            expect(
                (new ConfigurationProperty('node', forkedProp)).toString()
            ).toBe(
`{
    required: false,
    defaultValue: true,
    apply: () => {}
}`
            );
        }
    );
});
