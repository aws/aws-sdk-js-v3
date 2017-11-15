import {IMPORTS} from '../internalImports';
import {packageNameToVariable} from '../packageNameToVariable';
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
    resolvedType: credsType,
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

const endpointType = `string|${staticOrProvider(`${typesPackage}.HttpEndpoint`)}`;

/**
 * @internal
 */
export const endpoint: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: endpointType,
    resolvedType: `${typesPackage}.Provider<${typesPackage}.HttpEndpoint>`,
    imports: [IMPORTS.types],
    documentation: 'The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).',
    required: false,
    default: {
        type: 'provider',
        expression:
`(
    configuration: {
        endpointProvider: any,
        region: ${typesPackage}.Provider<string>,
    }
) => {
    const promisified = configuration.region()
        .then(region => configuration.endpointProvider(region));
    return () => promisified;
}`
    },
    apply:
`(
    value: ${endpointType},
    configuration: {
        sslEnabled: boolean,
        endpointProvider: any,
        endpoint: ${endpointType},
    }
): void => {
    if (typeof value === 'string') {
        let [protocol, host] = value.split('//');
        if (protocol && !host) {
            host = protocol;
            protocol = configuration.sslEnabled !== false ? 'https:' : 'http:';
        }
        const [hostname, portString] = host.split(':');
        const port = portString
            ? parseInt(portString, 10)
            : (protocol === 'http:' ? 80 : 443);

        const promisified = Promise.resolve({
            hostname,
            path: '/',
            port,
            protocol,
        });
        configuration.endpoint = () => promisified;
    } else if (typeof value === 'object') {
        const promisified = Promise.resolve(value);
        configuration.endpoint = () => promisified;
    }
}`
};

/**
 * @internal
 *
 * FIXME
 */
export const httpHandler: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: 'any',
    documentation: 'The HTTP handler to use',
    required: false,
    default: {
        type: 'value',
        expression: '() => { throw new Error("No HTTP handlers have been defined"); }'
    }
};

/**
 * @internal
 *
 * FIXME -- this should also be false if the user supplied their own core handler
 */
export const _own_http_handler: ConfigurationPropertyDefinition = {
    type: 'unified',
    internal: true,
    inputType: 'any',
    resolvedType: 'boolean',
    documentation: 'Whether the HTTP handler was created by this SDK client and should therefore have the same lifespan',
    required: false,
    default: {
        type: 'provider',
        expression:
`(configuration: {httpHandler?: any}) => Boolean(configuration.httpHandler)`
    }
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
export const region: ConfigurationPropertyDefinition = {
    type: 'unified',
    inputType: staticOrProvider('string'),
    resolvedType: `${typesPackage}.Provider<string>`,
    imports: [IMPORTS.types],
    documentation: 'The AWS region to which this client will send requests',
    required: true,
    apply: applyStaticOrProvider(
        'region',
        'string',
        "typeof region === 'string'"
    ),
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
        imports: [IMPORTS['crypto-sha256-node']],
        default: {
            type: 'value',
            expression: `${packageNameToVariable('@aws/crypto-sha256-node')}.Sha256`,
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
