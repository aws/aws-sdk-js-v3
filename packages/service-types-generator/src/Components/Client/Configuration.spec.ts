import {Configuration} from './Configuration';
import {ConfigurationPropertyDefinition} from '@aws/build-types';

const requiredProperty: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'boolean',
    documentation: 'Required property',
    required: true,
};

const optionalProperty: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'boolean',
    documentation: 'Optional property',
    required: false,
    default: {
        type: 'value',
        expression: 'true',
    },
};

const internalProperty: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'boolean',
    documentation: 'Internal property',
    required: true,
    internal: true,
};

const forkedProperty: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: 'boolean',
    documentation: 'Documentation',
    node: {
        required: true,
        additionalDocumentation: 'Node documentation',
    },
    browser: {
        required: true,
    },
    universal: {
        required: true,
    },
};

describe('Configuration', () => {
    it(
        'should generate a configuration interface designating which configuration values may be supplied by users',
        () => {
            const config = new Configuration(
                'CloudFoo',
                'node',
                {optionalProperty}
            );

            expect(config.toString()).toMatch(
`export interface CloudFooConfiguration {
    /**
     * Optional property
     */
    optionalProperty?: boolean;
}`
            );
        }
    );

    it('should exclude internal properties from the configuration interface', () => {
        const config = new Configuration(
            'CloudFoo',
            'node',
            {internalProperty}
        );

        expect(config.toString()).toMatch(
`export interface CloudFooConfiguration {

}`
        );
    });

    it('should mark required properties as such in the configuration interface', () => {
        const config = new Configuration(
            'CloudFoo',
            'node',
            {requiredProperty}
        );

        expect(config.toString()).toMatch(
`export interface CloudFooConfiguration {
    /**
     * Required property
     */
    requiredProperty: boolean;
}`
        );
    });

    it('should include additional, runtime-specific documentation if provided', () => {
        const config = new Configuration(
            'CloudFoo',
            'node',
            {forkedProperty}
        );

        expect(config.toString()).toMatch(
`export interface CloudFooConfiguration {
    /**
     * Documentation
     *
     * Node documentation
     */
    forkedProperty: boolean;
}`
        );
    });

    it(
        'should not include additional lines if the platform selected does not contain additional documentation',
        () => {
            const config = new Configuration(
                'CloudFoo',
                'browser',
                {forkedProperty}
            );

            expect(config.toString()).toMatch(
`export interface CloudFooConfiguration {
    /**
     * Documentation
     */
    forkedProperty: boolean;
}`
            );
        }
    );

    it(
        'should generate a resolvable configuration interface that extends the configuration interface and adds internal properties',
        () => {
            const config = new Configuration(
                'CloudFoo',
                'node',
                {internalProperty}
            );
            const stringified = config.toString();

            expect(stringified).toMatch(
`export interface CloudFooConfiguration {

}`
            );
            expect(stringified).toMatch(
`interface CloudFooResolvableConfiguration extends CloudFooConfiguration {
    /**
     * Internal property
     */
    internalProperty: boolean;
}`
            );
        }
    );

    it(
        'should generate a resolved configuration interface designating which configuration values will be available after the config resolver runs',
        () => {
            const config = new Configuration(
                'CloudFoo',
                'node',
                {optionalProperty}
            );

            expect(config.toString()).toMatch(
`export interface CloudFooResolvedConfiguration extends CloudFooConfiguration {
    optionalProperty: boolean;
}`
            );
        }
    );

    it('should generate a configuration resolver object in the module scope', () => {
        const config = new Configuration(
            'CloudFoo',
            'node',
            {optionalProperty}
        );

        expect(config.toString()).toMatch(
`const configurationProperties: __aws_types.ConfigurationDefinition<
    CloudFooResolvableConfiguration,
    CloudFooResolvedConfiguration
> = {
    optionalProperty: {
        required: false,
        defaultValue: true
    },
};`
        );
    });
});
