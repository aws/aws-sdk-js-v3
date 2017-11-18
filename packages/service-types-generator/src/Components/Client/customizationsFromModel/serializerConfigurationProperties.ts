import {IMPORTS} from '../internalImports';
import {packageNameToVariable} from '../packageNameToVariable';
import {
    base64Decoder,
    base64Encoder,
    utf8Decoder,
    utf8Encoder,
} from './standardConfigurationProperties';
import {
    ConfigurationPropertyDefinition,
    ConfigurationDefinition,
} from '@aws/build-types';
import {ServiceMetadata, SupportedProtocol} from '@aws/types';

const typesPackage = packageNameToVariable('@aws/types');
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
function parserProperty(
    metadata: ServiceMetadata,
    streamType: string
): ConfigurationPropertyDefinition {
    const sharedProps = {
        type: 'unified' as 'unified',
        inputType: `${typesPackage}.ResponseParser<${streamType}>`,
        documentation: 'The parser to use when converting HTTP responses to SDK output types',
        required: false,
    };

    switch (metadata.protocol) {
        case 'json':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['protocol-json-rpc'],
                    IMPORTS['json-parser'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        bodyCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws/protocol-json-rpc')}.JsonRpcParser(
    new ${packageNameToVariable('@aws/json-parser')}.JsonParser(
        configuration.base64Decoder
    ),
    configuration.bodyCollector,
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
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        bodyCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws/protocol-rest')}.RestParser<${streamType}>(
    new ${packageNameToVariable('@aws/json-parser')}.JsonParser(
        configuration.base64Decoder
    ),
    configuration.bodyCollector,
    configuration.utf8Encoder
)`
                }
            };
        case 'rest-xml':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['protocol-rest'],
                    IMPORTS['xml-parser'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        bodyCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws/protocol-rest')}.RestParser<${streamType}>(
    new ${packageNameToVariable('@aws/xml-parser')}.XmlParser(
        configuration.base64Decoder
    ),
    configuration.bodyCollector,
    configuration.utf8Encoder
)`
                }
            };
        case 'query':
        case 'ec2':
            return {
                ...sharedProps,
                imports: [
                    IMPORTS['protocol-query'],
                    IMPORTS['xml-parser'],
                    IMPORTS.types,
                ],
                default: {
                    type: 'provider',
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        bodyCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws/protocol-query')}.QueryParser(
    new ${packageNameToVariable('@aws/xml-parser')}.XmlParser(
        configuration.base64Decoder
    ),
    configuration.bodyCollector,
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
    const sharedProps = {
        type: 'unified' as 'unified',
        inputType: `${typesPackage}.RequestSerializer<${streamType}>`,
        documentation: 'The serializer to use when converting SDK input to HTTP requests',
        required: false,
    };

    switch (metadata.protocol) {
        case 'json':
            return {
                ...sharedProps,
                imports: [
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
        endpoint: ${typesPackage}.HttpEndpoint,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => new ${packageNameToVariable('@aws/protocol-json-rpc')}.JsonRpcSerializer(
    configuration.endpoint,
    new ${packageNameToVariable('@aws/json-builder')}.JsonBuilder(
        configuration.base64Encoder,
        configuration.utf8Decoder
    )
)`
                },
            };
        case 'rest-json':
            return {
                ...sharedProps,
                imports: [
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
        endpoint: ${typesPackage}.HttpEndpoint,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => new ${packageNameToVariable('@aws/protocol-rest')}.RestSerializer(
    configuration.endpoint,
    new ${packageNameToVariable('@aws/json-builder')}.JsonBuilder(
        configuration.base64Encoder,
        configuration.utf8Decoder
    ),
    configuration.base64Encoder,
    configuration.utf8Decoder
)`
                }
            };
        case 'rest-xml':
            return {
                ...sharedProps,
                imports: [
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
        endpoint: ${typesPackage}.HttpEndpoint,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => new ${packageNameToVariable('@aws/protocol-rest')}.RestSerializer(
    configuration.endpoint,
    new ${packageNameToVariable('@aws/xml-body-builder')}.XmlBodyBuilder(
        configuration.base64Encoder,
        configuration.utf8Decoder
    ),
    configuration.base64Encoder,
    configuration.utf8Decoder
)`
                }
            };
        case 'query':
        case 'ec2':
            return {
                ...sharedProps,
                imports: [
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
        endpoint: ${typesPackage}.HttpEndpoint,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => new ${packageNameToVariable('@aws/protocol-query')}.QuerySerializer(
    configuration.endpoint,
    new ${packageNameToVariable('@aws/query-builder')}.QueryBuilder(
        configuration.base64Encoder,
        configuration.utf8Decoder,
        '${metadata.protocol}'
    )
)`
                },
            };
    }
}

/**
 * @internal
 */
function streamCollectorProperty(
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
                expression: `${packageNameToVariable('@aws/stream-collector-browser')}.streamCollector`,
            }
        },
        node: {
            required: false,
            imports: [IMPORTS['stream-collector-node']],
            default: {
                type: 'value',
                expression: `${packageNameToVariable('@aws/stream-collector-node')}.streamCollector`,
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
`${packageNameToVariable('@aws/is-node')}.isNode
    ? ${packageNameToVariable('@aws/stream-collector-node')}.streamCollector
    : ${packageNameToVariable('@aws/stream-collector-browser')}.streamCollector`
            }
        },
    }
}
