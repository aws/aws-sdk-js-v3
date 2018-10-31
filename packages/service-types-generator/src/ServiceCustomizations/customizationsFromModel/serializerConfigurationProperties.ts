import {IMPORTS} from '../../internalImports';
import {packageNameToVariable} from '../../packageNameToVariable';
import {
    base64Decoder,
    base64Encoder,
    utf8Decoder,
    utf8Encoder,
} from './standardConfigurationProperties';
import {
    ConfigurationPropertyDefinition,
    ConfigurationDefinition,
    MiddlewareCustomizationDefinition,
} from '@aws-sdk/build-types';
import {ServiceMetadata, SupportedProtocol} from '@aws-sdk/types';

const typesPackage = packageNameToVariable('@aws-sdk/types');
const supportedProtocols = new Set<SupportedProtocol>([
    'json',
    'rest-json',
    'rest-xml',
    'query',
    'ec2',
]);

/**
 * @internal
 */
export function serializerConfigurationProperties(
    metadata: ServiceMetadata,
    streamType: string
): ConfigurationDefinition {
    if (!supportedProtocols.has(metadata.protocol)) {
        throw new Error(
            `Unable to generate client for service with protocol: ${metadata.protocol}`
        );
    }

    return {
        base64Decoder,
        base64Encoder,
        utf8Decoder,
        utf8Encoder,
        streamCollector: streamCollectorProperty(streamType),
        serializer: serializerProperty(metadata, streamType),
        parser: parserProperty(metadata, streamType),
    };
}

/**
 * @internal
 */
export function serializerMiddleware(
    metadata: ServiceMetadata,
    streamType: string
): MiddlewareCustomizationDefinition {
    if (!supportedProtocols.has(metadata.protocol)) {
        throw new Error(
            `Unable to generate client for service with protocol: ${metadata.protocol}`
        );
    }

     return {
        type: 'Middleware',
        step: 'serialize',
        priority: 90,
        tags: '{SERIALIZER: true}',
        expression: `${packageNameToVariable('@aws-sdk/middleware-serializer')}.serializerMiddleware(this.config.serializer)`,
        configuration: serializerConfigurationProperties(metadata, streamType),
    }
}

/**
 * @internal
 */
function parserProperty(
    metadata: ServiceMetadata,
    streamType: string
): ConfigurationPropertyDefinition {
    const sharedProps = {
        type: 'unified' as 'unified',
        inputType: `${typesPackage}.ResponseParser<${streamType}>`,
        documentation: 'The parser to use when converting HTTP responses to SDK output types',
        required: false,
        internal: true,
    };

    switch (metadata.protocol) {
        case 'json':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['protocol-json-rpc'],
                    IMPORTS['json-parser'],
                    IMPORTS['json-error-unmarshaller'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        streamCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws-sdk/protocol-json-rpc')}.JsonRpcParser(
    new ${packageNameToVariable('@aws-sdk/json-parser')}.JsonParser(
        configuration.base64Decoder
    ),
    ${packageNameToVariable('@aws-sdk/json-error-unmarshaller')}.jsonErrorUnmarshaller,
    configuration.streamCollector,
    configuration.utf8Encoder
)`
                },
            };
        case 'rest-json':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['protocol-rest'],
                    IMPORTS['json-parser'],
                    IMPORTS['json-error-unmarshaller'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        streamCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws-sdk/protocol-rest')}.RestParser<${streamType}>(
    new ${packageNameToVariable('@aws-sdk/json-parser')}.JsonParser(
        configuration.base64Decoder
    ),
    configuration.streamCollector,
    ${packageNameToVariable('@aws-sdk/json-error-unmarshaller')}.jsonErrorUnmarshaller,
    configuration.utf8Encoder,
    configuration.base64Decoder,

)`
                }
            };
        case 'rest-xml':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['protocol-rest'],
                    IMPORTS['xml-body-parser'],
                    IMPORTS['query-error-unmarshaller'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        streamCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws-sdk/protocol-rest')}.RestParser<${streamType}>(
    new ${packageNameToVariable('@aws-sdk/xml-body-parser')}.XmlBodyParser(
        configuration.base64Decoder
    ),
    configuration.streamCollector,
    ${packageNameToVariable('@aws-sdk/query-error-unmarshaller')}.queryErrorUnmarshaller,
    configuration.utf8Encoder,
    configuration.base64Decoder
)`
                }
            };
        case 'query':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['protocol-query'],
                    IMPORTS['xml-body-parser'],
                    IMPORTS['query-error-unmarshaller'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        streamCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws-sdk/protocol-query')}.QueryParser(
    new ${packageNameToVariable('@aws-sdk/xml-body-parser')}.XmlBodyParser(
        configuration.base64Decoder
    ),
    ${packageNameToVariable('@aws-sdk/query-error-unmarshaller')}.queryErrorUnmarshaller,
    configuration.streamCollector,
    configuration.utf8Encoder
)`
                },
            };
        case 'ec2':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['protocol-query'],
                    IMPORTS['xml-body-parser'],
                    IMPORTS['ec2-error-unmarshaller'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        streamCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws-sdk/protocol-query')}.QueryParser(
    new ${packageNameToVariable('@aws-sdk/xml-body-parser')}.XmlBodyParser(
        configuration.base64Decoder
    ),
    ${packageNameToVariable('@aws-sdk/ec2-error-unmarshaller')}.ec2ErrorUnmarshaller,
    configuration.streamCollector,
    configuration.utf8Encoder
)`
            },
        };
    }
}

/**
 * @internal
 */
function serializerProperty(
    metadata: ServiceMetadata,
    streamType: string
): ConfigurationPropertyDefinition {
    const serializerType = `${typesPackage}.RequestSerializer<${streamType}>`;
    const sharedProps = {
        type: 'unified' as 'unified',
        inputType: `${typesPackage}.Provider<${serializerType}>`,
        documentation: 'The serializer to use when converting SDK input to HTTP requests',
        required: false,
        internal: true,
    };

    switch (metadata.protocol) {
        case 'json':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['middleware-serializer'],
                    IMPORTS['protocol-json-rpc'],
                    IMPORTS['json-builder'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Encoder: ${typesPackage}.Encoder,
        endpoint: ${typesPackage}.Provider<${typesPackage}.HttpEndpoint>,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => {
    const promisified = configuration.endpoint()
        .then(endpoint => new ${packageNameToVariable('@aws-sdk/protocol-json-rpc')}.JsonRpcSerializer<${streamType}>(
            endpoint,
            new ${packageNameToVariable('@aws-sdk/json-builder')}.JsonBuilder(
                configuration.base64Encoder,
                configuration.utf8Decoder
            )
        ));
    return () => promisified;
}`
                },
            };
        case 'rest-json':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['middleware-serializer'],
                    IMPORTS['protocol-rest'],
                    IMPORTS['json-builder'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Encoder: ${typesPackage}.Encoder,
        endpoint: ${typesPackage}.Provider<${typesPackage}.HttpEndpoint>,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => {
    const promisified = configuration.endpoint()
        .then(endpoint => new ${packageNameToVariable('@aws-sdk/protocol-rest')}.RestSerializer<${streamType}>(
            endpoint,
            new ${packageNameToVariable('@aws-sdk/json-builder')}.JsonBuilder(
                configuration.base64Encoder,
                configuration.utf8Decoder
            ),
            configuration.base64Encoder,
            configuration.utf8Decoder
        ));
    return () => promisified;
}`
                }
            };
        case 'rest-xml':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['middleware-serializer'],
                    IMPORTS['protocol-rest'],
                    IMPORTS['xml-body-builder'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Encoder: ${typesPackage}.Encoder,
        endpoint: ${typesPackage}.Provider<${typesPackage}.HttpEndpoint>,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => {
    const promisified = configuration.endpoint()
        .then(endpoint => new ${packageNameToVariable('@aws-sdk/protocol-rest')}.RestSerializer<${streamType}>(
            endpoint,
            new ${packageNameToVariable('@aws-sdk/xml-body-builder')}.XmlBodyBuilder(
                configuration.base64Encoder,
                configuration.utf8Decoder
            ),
            configuration.base64Encoder,
            configuration.utf8Decoder
        ));
    return () => promisified;
}`
                }
            };
        case 'query':
        case 'ec2':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['middleware-serializer'],
                    IMPORTS['protocol-query'],
                    IMPORTS['query-builder'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Encoder: ${typesPackage}.Encoder,
        endpoint: ${typesPackage}.Provider<${typesPackage}.HttpEndpoint>,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => {
    const promisified = configuration.endpoint()
        .then(endpoint => new ${packageNameToVariable('@aws-sdk/protocol-query')}.QuerySerializer<${streamType}>(
            endpoint,
            new ${packageNameToVariable('@aws-sdk/query-builder')}.QueryBuilder(
                configuration.base64Encoder,
                configuration.utf8Decoder,
                '${metadata.protocol}'
            )
        ));
    return () => promisified;
}`
                },
            };
    }
}

/**
 * @internal
 */
export function streamCollectorProperty(
    streamType: string
): ConfigurationPropertyDefinition {
    return {
        type: 'forked',
        inputType: `${typesPackage}.StreamCollector<${streamType}>`,
        imports: [IMPORTS.types],
        documentation: 'A function that converts a stream into an array of bytes.',
        browser: {
            required: false,
            imports: [IMPORTS['stream-collector-browser']],
            default: {
                type: 'value',
                expression: `${packageNameToVariable('@aws-sdk/stream-collector-browser')}.streamCollector`,
            }
        },
        node: {
            required: false,
            imports: [IMPORTS['stream-collector-node']],
            default: {
                type: 'value',
                expression: `${packageNameToVariable('@aws-sdk/stream-collector-node')}.streamCollector`,
            }
        },
        universal: {
            required: false,
            imports: [
                IMPORTS['is-node'],
                IMPORTS['stream-collector-browser'],
                IMPORTS['stream-collector-node']
            ],
            default: {
                type: 'value',
                expression:
`${packageNameToVariable('@aws-sdk/is-node')}.isNode
    ? ${packageNameToVariable('@aws-sdk/stream-collector-node')}.streamCollector
    : ${packageNameToVariable('@aws-sdk/stream-collector-browser')}.streamCollector`
            }
        },
    }
}
