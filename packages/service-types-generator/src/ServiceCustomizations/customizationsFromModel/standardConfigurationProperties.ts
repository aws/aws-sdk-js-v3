import {IMPORTS} from '../../internalImports';
import {packageNameToVariable} from '../../packageNameToVariable';
import {applyStaticOrProvider, staticOrProvider} from './staticOrProvider';
import {ConfigurationPropertyDefinition} from '@aws/build-types';

const typesPackage = packageNameToVariable('@aws/types');
const credsType = `${typesPackage}.Credentials`;
const credsApplier = applyStaticOrProvider(
    'credentials',
    credsType,
    "typeof credentials === 'object'"
);

/**
 * @internal
 */
export const base64Decoder: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${typesPackage}.Decoder`,
    imports: [IMPORTS.types],
    documentation: 'The function that will be used to convert a base64-encoded string to a byte array',
    browser: {
        required: false,
        imports: [IMPORTS['util-base64-browser']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-base64-browser')}.fromBase64`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['util-base64-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-base64-node')}.fromBase64`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['util-base64-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-base64-universal')}.fromBase64`,
        },
    },
};

/**
 * @internal
 */
export const base64Encoder: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${typesPackage}.Encoder`,
    imports: [IMPORTS.types],
    documentation: 'The function that will be used to convert binary data to a base64-encoded string',
    browser: {
        required: false,
        imports: [IMPORTS['util-base64-browser']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-base64-browser')}.toBase64`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['util-base64-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-base64-node')}.toBase64`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['util-base64-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-base64-universal')}.toBase64`,
        },
    },
};

/**
 * @internal
 */
export const credentials: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${staticOrProvider(credsType)}`,
    resolvedType: `${packageNameToVariable('@aws/types')}.Provider<${credsType}>`,
    imports: [IMPORTS.types],
    documentation: 'The credentials used to sign requests.',
    browser: {
        required: true,
        apply: credsApplier,
    },
    node: {
        required: false,
        imports: [IMPORTS['credential-provider-node']],
        additionalDocumentation: 'If no static credentials are supplied, the SDK will attempt to credentials from known environment variables, from shared configuration and credentials files, and from the EC2 Instance Metadata Service, in that order.',
        default: {
            type: 'provider',
            expression: `${packageNameToVariable('@aws/credential-provider-node')}.defaultProvider`
        },
        apply: credsApplier,
    },
    universal: {
        required: false,
        apply: credsApplier,
    },
};

/**
 * @internal
 */
export const maxRedirects: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'number',
    documentation: 'The maximum number of redirects to follow for a service request. Set to `0` to disable retries.',
    required: false,
    default: {
        type: 'value',
        expression: '10',
    },
};

/**
 * @internal
 */
export const maxRetries: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'number',
    documentation: 'The maximum number of retries that will be attempted. Set to `0` to disable retries.',
    required: false,
    default: {
        type: 'value',
        expression: '3',
    },
};

/**
 * @internal
 */
export const profile: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'string',
    documentation: 'The configuration profile to use.',
    required: false
};

const regionApplicator = applyStaticOrProvider(
    'region',
    'string',
    "typeof region === 'string'"
);
/**
 * @internal
 */
export const region: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: staticOrProvider('string'),
    resolvedType: `${typesPackage}.Provider<string>`,
    imports: [IMPORTS.types],
    documentation: 'The AWS region to which this client will send requests',
    node: {
        required: false,
        imports: [IMPORTS['region-provider']],
        default: {
            type: 'provider',
            expression: `${packageNameToVariable('@aws/region-provider')}.defaultProvider`
        },
        apply: regionApplicator,
    },
    browser: {
        required: true,
        apply: regionApplicator,
    },
    universal: {
        required: true,
        apply: regionApplicator
    }
};

/**
 * @internal
 */
export const sha256: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${typesPackage}.HashConstructor`,
    imports: [IMPORTS.types],
    documentation: 'A constructor that can calculate a SHA-256 HMAC',
    browser: {
        required: false,
        imports: [IMPORTS['crypto-sha256-browser']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/crypto-sha256-browser')}.Sha256`,
        }
    },
    node: {
        required: false,
        imports: [IMPORTS['hash-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/hash-node')}.Hash.bind(null, 'sha256')`,
        }
    },
    universal: {
        required: false,
        imports: [IMPORTS['crypto-sha256-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/crypto-sha256-universal')}.Sha256`,
        }
    },
};

/**
 * @internal
 */
export const sslEnabled: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'boolean',
    documentation: 'Whether SSL is enabled for requests.',
    required: false,
    default: {
        type: 'value',
        expression: 'true',
    },
};

/**
 * @internal
 */
export const utf8Decoder: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${typesPackage}.Decoder`,
    imports: [IMPORTS.types],
    documentation: 'The function that will be used to convert a UTF8-encoded string to a byte array',
    browser: {
        required: false,
        imports: [IMPORTS['util-utf8-browser']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-utf8-browser')}.fromUtf8`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['util-utf8-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-utf8-node')}.fromUtf8`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['util-utf8-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-utf8-universal')}.fromUtf8`,
        },
    },
};

/**
 * @internal
 */
export const utf8Encoder: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${typesPackage}.Encoder`,
    imports: [IMPORTS.types],
    documentation: 'The function that will be used to convert binary data to a UTF-8 encoded string',
    browser: {
        required: false,
        imports: [IMPORTS['util-utf8-browser']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-utf8-browser')}.toUtf8`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['util-utf8-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-utf8-node')}.toUtf8`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['util-utf8-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/util-utf8-universal')}.toUtf8`,
        },
    },
};
