import {IMPORTS} from './constants';
import {packageNameToVariable} from '../packageNameToVariable';
import {
    base64Decoder,
    base64Encoder,
    utf8Decoder,
    utf8Encoder,
} from './standardConfigurationProperties';
import {
    ConfigurationPropertyGenerationConfiguration,
    ConfigurationGenerationConfiguration,
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
): ConfigurationGenerationConfiguration {
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
): ConfigurationPropertyGenerationConfiguration {
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
                default: {
                    type: 'provider',
                    imports: [IMPORTS['protocol-json-rpc'], IMPORTS['json-parser']],
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        bodyCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws/protocol-json-rpc')}.JsonRpcParser(
    new ${packageNameToVariable('@aws/json-parser')}.JsonParser(base64Decoder),
    bodyCollector,
    utf8Encoder
)`
                },
            };
        case 'rest-json':
            return {
                ...sharedProps,
                default: {
                    type: 'provider',
                    imports: [IMPORTS['protocol-rest'], IMPORTS['json-parser']],
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        bodyCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws/protocol-rest')}.RestParser<${streamType}>(
    new ${packageNameToVariable('@aws/json-parser')}.JsonParser(base64Decoder),
    bodyCollector,
    utf8Encoder
)`
                }
            };
        case 'rest-xml':
            return {
                ...sharedProps,
                default: {
                    type: 'provider',
                    imports: [IMPORTS['protocol-rest'], IMPORTS['xml-parser']],
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        bodyCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws/protocol-rest')}.RestParser<${streamType}>(
    new ${packageNameToVariable('@aws/xml-parser')}.XmlParser(base64Decoder),
    bodyCollector,
    utf8Encoder
)`
                }
            };
        case 'query':
        case 'ec2':
            return {
                ...sharedProps,
                default: {
                    type: 'provider',
                    imports: [IMPORTS['protocol-query'], IMPORTS['xml-parser']],
                    expression:
`(
    configuration: {
        base64Decoder: ${typesPackage}.Decoder,
        bodyCollector: ${typesPackage}.StreamCollector<${streamType}>,
        utf8Encoder: ${typesPackage}.Encoder
    }
) => new ${packageNameToVariable('@aws/protocol-query')}.QueryParser(
    new ${packageNameToVariable('@aws/xml-parser')}.XmlParser(base64Decoder),
    bodyCollector,
    utf8Encoder
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
): ConfigurationPropertyGenerationConfiguration {
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
                default: {
                    type: 'provider',
                    imports: [IMPORTS['protocol-json-rpc'], IMPORTS['json-builder']],
                    expression:
`(
    configuration: {
        base64Encoder: ${typesPackage}.Encoder,
        endpoint: ${typesPackage}.HttpEndpoint,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => new ${packageNameToVariable('@aws/protocol-json-rpc')}.JsonRpcSerializer(
    endpoint,
    new ${packageNameToVariable('@aws/json-builder')}.JsonBuilder(
        base64Encoder,
        utf8Decoder
    )
)`
                },
            };
        case 'rest-json':
            return {
                ...sharedProps,
                default: {
                    type: 'provider',
                    imports: [IMPORTS['protocol-rest'], IMPORTS['json-builder']],
                    expression:
`(
    configuration: {
        base64Encoder: ${typesPackage}.Encoder,
        endpoint: ${typesPackage}.HttpEndpoint,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => new ${packageNameToVariable('@aws/protocol-rest')}.RestSerializer(
    endpoint,
    new ${packageNameToVariable('@aws/json-builder')}.JsonBuilder(
        base64Encoder,
        utf8Decoder
    ),
    base64Encoder,
    utf8Decoder
)`
                }
            };
        case 'rest-xml':
            return {
                ...sharedProps,
                default: {
                    type: 'provider',
                    imports: [IMPORTS['protocol-rest'], IMPORTS['xml-body-builder']],
                    expression:
`(
    configuration: {
        base64Encoder: ${typesPackage}.Encoder,
        endpoint: ${typesPackage}.HttpEndpoint,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => new ${packageNameToVariable('@aws/protocol-rest')}.RestSerializer(
    endpoint,
    new ${packageNameToVariable('@aws/xml-body-builder')}.XmlBodyBuilder(
        base64Encoder,
        utf8Decoder
    ),
    base64Encoder,
    utf8Decoder
)`
                }
            };
        case 'query':
        case 'ec2':
            return {
                ...sharedProps,
                default: {
                    type: 'provider',
                    imports: [IMPORTS['protocol-query'], IMPORTS['query-builder']],
                    expression:
`(
    configuration: {
        base64Encoder: ${typesPackage}.Encoder,
        endpoint: ${typesPackage}.HttpEndpoint,
        utf8Decoder: ${typesPackage}.Decoder
    }
) => new ${packageNameToVariable('@aws/protocol-query')}.QuerySerializer(
    endpoint,
    new ${packageNameToVariable('@aws/query-builder')}.QueryBuilder(
        base64Encoder,
        utf8Decoder,
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
): ConfigurationPropertyGenerationConfiguration {
    return {
        type: 'forked',
        inputType: `${typesPackage}.StreamCollector<${streamType}>`,
        imports: [IMPORTS.types],
        documentation: 'A function that converts a stream into an array of bytes.',
        browser: {
            required: false,
            // provide default when https://github.com/aws/aws-sdk-js-staging/pull/57 lands
            default: {
                type: 'value',
                expression: '(() => { throw new Error("No stream collector defined"); }) as any'
            }
        },
        node: {
            required: false,
            // provide default when https://github.com/aws/aws-sdk-js-staging/pull/57 lands
            default: {
                type: 'value',
                expression: '(() => { throw new Error("No stream collector defined"); }) as any'
            }
        },
        universal: {
            required: false,
            // provide default when https://github.com/aws/aws-sdk-js-staging/pull/57 lands
            default: {
                type: 'value',
                expression: '(() => { throw new Error("No stream collector defined"); }) as any'
            }
        },
    }
}
