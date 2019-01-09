import { IMPORTS } from '../../internalImports';
import { EXTERNAL_IMPORTS } from '../../externalImports';
import { packageNameToVariable } from '../../packageNameToVariable';
import {
    normalizeStaticOrProvider,
    staticOrProvider,
} from './staticOrProvider';
import {ConfigurationPropertyDefinition} from '@aws-sdk/build-types';

const typesPackage = packageNameToVariable('@aws-sdk/types');
const credsType = `${typesPackage}.Credentials`;

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
            expression: `${packageNameToVariable('@aws-sdk/util-base64-browser')}.fromBase64`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['util-base64-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/util-base64-node')}.fromBase64`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['util-base64-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/util-base64-universal')}.fromBase64`,
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
            expression: `${packageNameToVariable('@aws-sdk/util-base64-browser')}.toBase64`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['util-base64-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/util-base64-node')}.toBase64`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['util-base64-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/util-base64-universal')}.toBase64`,
        },
    },
};

/**
 * @internal
 */
export const credentials: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${staticOrProvider(credsType)}`,
    resolvedType: `${packageNameToVariable('@aws-sdk/types')}.Provider<${credsType}>`,
    imports: [IMPORTS.types],
    documentation: 'The credentials used to sign requests.',
    browser: {
        required: true,
        normalize: normalizeStaticOrProvider(
            credsType,
            "typeof value === 'object'",
            false
        )
    },
    node: {
        required: false,
        imports: [IMPORTS['credential-provider-node']],
        additionalDocumentation: 'If no static credentials are supplied, the SDK will attempt to credentials from known environment variables, from shared configuration and credentials files, and from the EC2 Instance Metadata Service, in that order.',
        default: {
            type: 'provider',
            expression: `${packageNameToVariable('@aws-sdk/credential-provider-node')}.defaultProvider`
        },
        normalize: normalizeStaticOrProvider(
            credsType,
            "typeof value === 'object'"
        ),
    },
    universal: {
        required: true,
        normalize: normalizeStaticOrProvider(
            credsType,
            "typeof value === 'object'",
            false
        ),
    },
};

/**
 * @internal
 */
export const optionalCredentials: ConfigurationPropertyDefinition = {
    ...credentials,
    browser: {
        ...credentials.browser,
        required: false,
    },
    node: {
        ...credentials.node,
        required: false,
    },
    universal: {
        ...credentials.universal,
        required: false,
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
export const md5: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `{new (): ${typesPackage}.Hash}`,
    imports: [IMPORTS.types],
    documentation: 'A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the MD5 checksum of a string or binary buffer',
    browser: {
        required: false,
        imports: [IMPORTS['md5-js']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/md5-js')}.Md5`,
        }
    },
    node: {
        required: false,
        imports: [IMPORTS['hash-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/hash-node')}.Hash.bind(null, 'md5')`,
        }
    },
    universal: {
        required: false,
        imports: [IMPORTS['md5-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/crypto-md5-universal')}.Md5`,
        }
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

const regionNormalizer = normalizeStaticOrProvider(
    'string',
    "typeof value === 'string'"
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
            expression: `${packageNameToVariable('@aws-sdk/region-provider')}.defaultProvider`
        },
        normalize: regionNormalizer,
    },
    browser: {
        required: true,
        normalize: regionNormalizer,
    },
    universal: {
        required: true,
        normalize: regionNormalizer
    }
};

/**
 * @internal
 */
export const sha256: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${typesPackage}.HashConstructor`,
    imports: [IMPORTS.types],
    documentation: 'A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the SHA-256 HMAC or checksum of a string or binary buffer',
    browser: {
        required: false,
        imports: [EXTERNAL_IMPORTS['sha256-browser']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-crypto/sha256-browser')}.Sha256`,
        }
    },
    node: {
        required: false,
        imports: [IMPORTS['hash-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/hash-node')}.Hash.bind(null, 'sha256')`,
        }
    },
    universal: {
        required: false,
        imports: [EXTERNAL_IMPORTS['sha256-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-crypto/sha256-universal')}.Sha256`,
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
            expression: `${packageNameToVariable('@aws-sdk/util-utf8-browser')}.fromUtf8`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['util-utf8-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/util-utf8-node')}.fromUtf8`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['util-utf8-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/util-utf8-universal')}.fromUtf8`,
        },
    },
};

/**
 * @internal
 */
export const urlParser: ConfigurationPropertyDefinition = {
    type: 'forked',
    inputType: `${typesPackage}.UrlParser`,
    imports: [IMPORTS.types],
    documentation: 'The function that will be used to convert strings into HTTP endpoints',
    browser: {
        required: false,
        imports: [IMPORTS['url-parser-browser']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/url-parser-browser')}.parseUrl`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['url-parser-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/url-parser-node')}.parseUrl`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['url-parser-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/url-parser-universal')}.parseUrl`,
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
            expression: `${packageNameToVariable('@aws-sdk/util-utf8-browser')}.toUtf8`,
        },
    },
    node: {
        required: false,
        imports: [IMPORTS['util-utf8-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/util-utf8-node')}.toUtf8`,
        },
    },
    universal: {
        required: false,
        imports: [IMPORTS['util-utf8-universal']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws-sdk/util-utf8-universal')}.toUtf8`,
        },
    },
};
