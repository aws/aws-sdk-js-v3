import {IMPORTS} from './constants';
import {packageNameToVariable} from '../packageNameToVariable';
import {applyStaticOrProvider, staticOrProvider} from './staticOrProvider';
import {ConfigurationPropertyGenerationConfiguration} from '@aws/build-types';

const typesPackage = packageNameToVariable('@aws/types');
const credsType = `${typesPackage}.Credentials`;
const credsApplier = applyStaticOrProvider(
    'credentials',
    'credsType',
    "typeof credentials === 'object'"
);

/**
 * @internal
 */
export const credentials: ConfigurationPropertyGenerationConfiguration = {
    propertyType: 'transient',
    inputType: `${staticOrProvider(credsType)}`,
    imports: [IMPORTS.types],
    documentation: 'The credentials used to sign requests.',
    definition: {
        browser: {
            required: true,
            apply: credsApplier,
        },
        node: {
            required: false,
            default: {
                type: 'provider',
                imports: [IMPORTS['credential-provider-node']],
                expression: `${packageNameToVariable('@aws/credential-provider-node')}.defaultProvider`
            },
            apply: credsApplier,
        },
        universal: {
            required: false,
            apply: credsApplier,
        },
    }
};

/**
 * @internal
 */
export const endpoint: ConfigurationPropertyGenerationConfiguration = {
    propertyType: 'persistent',
    inputType: `${typesPackage}.HttpEndpoint`,
    imports: [IMPORTS.types],
    documentation: 'The fullly qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).',
    definition: {
        required: false,
    },
};

/**
 * @internal
 */
export const maxRedirects: ConfigurationPropertyGenerationConfiguration = {
    propertyType: 'transient',
    inputType: 'number',
    documentation: 'The maximum number of redirects to follow for a service request. Set to `0` to disable retries.',
    definition: {
        required: false,
        default: {
            type: 'value',
            expression: '10',
        },
    },
};

/**
 * @internal
 */
export const maxRetries: ConfigurationPropertyGenerationConfiguration = {
    propertyType: 'transient',
    inputType: 'number',
    documentation: 'The maximum number of retries that will be attempted. Set to `0` to disable retries.',
    definition: {
        required: false,
        default: {
            type: 'value',
            expression: '3',
        },
    },
};

/**
 * @internal
 */
export const region: ConfigurationPropertyGenerationConfiguration = {
    propertyType: 'transient',
    inputType: staticOrProvider('string'),
    imports: [IMPORTS.types],
    documentation: 'The AWS region to which this client will send requests',
    definition: {
        required: true,
        imports: [IMPORTS.types],
        apply: applyStaticOrProvider(
            'region',
            'string',
            "typeof region === 'string'"
        ),
    },
};

/**
 * @internal
 */
export const sha256: ConfigurationPropertyGenerationConfiguration = {
    propertyType: 'transient',
    inputType: `${typesPackage}.HashConstructor`,
    imports: [IMPORTS.types],
    documentation: 'A constructor that can calculate a SHA-256 HMAC',
    definition: {
        browser: {
            required: false,
            default: {
                type: 'value',
                imports: [IMPORTS['crypto-sha256-browser']],
                expression: `${packageNameToVariable('@aws/crypto-sha256-browser')}.Sha256`,
            }
        },
        node: {
            required: false,
            default: {
                type: 'value',
                imports: [IMPORTS['crypto-sha256-node']],
                expression: `${packageNameToVariable('@aws/crypto-sha256-node')}.Sha256`,
            }
        },
        universal: {
            required: false,
            default: {
                type: 'value',
                imports: [IMPORTS['crypto-sha256-universal']],
                expression: `${packageNameToVariable('@aws/crypto-sha256-universal')}.Sha256`,
            }
        },
    },
};

/**
 * @internal
 */
export const sslEnabled: ConfigurationPropertyGenerationConfiguration = {
    propertyType: 'transient',
    inputType: 'boolean',
    documentation: 'Whether SSL is enabled for requests.',
    definition: {
        required: false,
        default: {
            type: 'value',
            expression: 'true',
        },
    },
};
