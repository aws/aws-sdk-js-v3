import * as __aws_core_handler from '@aws/core-handler';
import * as __aws_credential_provider_node from '@aws/credential-provider-node';
import * as __aws_hash_node from '@aws/hash-node';
import * as __aws_middleware_serializer from '@aws/middleware-serializer';
import * as __aws_node_http_handler from '@aws/node-http-handler';
import * as __aws_protocol_rest from '@aws/protocol-rest';
import * as __aws_query_error_unmarshaller from '@aws/query-error-unmarshaller';
import * as __aws_region_provider from '@aws/region-provider';
import * as __aws_signature_v4 from '@aws/signature-v4';
import * as __aws_signing_middleware from '@aws/signing-middleware';
import * as __aws_stream_collector_node from '@aws/stream-collector-node';
import * as __aws_types from '@aws/types';
import * as __aws_url_parser_node from '@aws/url-parser-node';
import * as __aws_util_base64_node from '@aws/util-base64-node';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as __aws_util_utf8_node from '@aws/util-utf8-node';
import * as __aws_xml_body_builder from '@aws/xml-body-builder';
import * as __aws_xml_body_parser from '@aws/xml-body-parser';
import * as _stream from 'stream';
import {OutputTypesUnion} from './types/OutputTypesUnion';

export interface Route53Configuration {
    /**
     * The function that will be used to convert a base64-encoded string to a byte array
     */
    base64Decoder?: __aws_types.Decoder;

    /**
     * The function that will be used to convert binary data to a base64-encoded string
     */
    base64Encoder?: __aws_types.Encoder;

    /**
     * The credentials used to sign requests.
     *
     * If no static credentials are supplied, the SDK will attempt to credentials from known environment variables, from shared configuration and credentials files, and from the EC2 Instance Metadata Service, in that order.
     */
    credentials?: __aws_types.Credentials|__aws_types.Provider<__aws_types.Credentials>;

    /**
     * A function that determines how long (in milliseconds) the SDK should wait before retrying a request
     */
    delayDecider?: __aws_types.DelayDecider;

    /**
     * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
     */
    endpoint?: string|__aws_types.HttpEndpoint|__aws_types.Provider<__aws_types.HttpEndpoint>;

    /**
     * The endpoint provider to call if no endpoint is provided
     */
    endpointProvider?: any;

    /**
     * The handler to use as the core of the client's middleware stack
     */
    handler?: __aws_types.Terminalware<any, _stream.Readable>;

    /**
     * The HTTP handler to use
     */
    httpHandler?: __aws_types.HttpHandler<_stream.Readable>;

    /**
     * The maximum number of redirects to follow for a service request. Set to `0` to disable retries.
     */
    maxRedirects?: number;

    /**
     * The maximum number of times requests that encounter potentially transient failures should be retried
     */
    maxRetries?: number;

    /**
     * The configuration profile to use.
     */
    profile?: string;

    /**
     * The AWS region to which this client will send requests
     */
    region?: string|__aws_types.Provider<string>;

    /**
     * A function that determines whether an error is retryable
     */
    retryDecider?: __aws_types.RetryDecider;

    /**
     * A constructor that can calculate a SHA-256 HMAC
     */
    sha256?: __aws_types.HashConstructor;

    /**
     * The signer to use when signing requests.
     */
    signer?: __aws_types.RequestSigner;

    /**
     * The service name with which to sign requests.
     */
    signingName?: string;

    /**
     * Whether SSL is enabled for requests.
     */
    sslEnabled?: boolean;

    /**
     * A function that converts a stream into an array of bytes.
     */
    streamCollector?: __aws_types.StreamCollector<_stream.Readable>;

    /**
     * The function that will be used to convert strings into HTTP endpoints
     */
    urlParser?: __aws_types.UrlParser;

    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array
     */
    utf8Decoder?: __aws_types.Decoder;

    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string
     */
    utf8Encoder?: __aws_types.Encoder;
}

export interface Route53ResolvableConfiguration extends Route53Configuration {
    /**
     * Whether the HTTP handler was injected by the user and should thus not be destroyed when this client is
     */
    _user_injected_http_handler: any;

    /**
     * A function that can calculate the length of a request body.
     */
    bodyLengthChecker: (body: any) => number | undefined;

    /**
     * The parser to use when converting HTTP responses to SDK output types
     */
    parser: __aws_types.ResponseParser<_stream.Readable>;

    /**
     * The serializer to use when converting SDK input to HTTP requests
     */
    serializer: __aws_types.Provider<__aws_types.RequestSerializer<_stream.Readable>>;
}

export interface Route53ResolvedConfiguration extends Route53Configuration {
    _user_injected_http_handler: boolean;

    base64Decoder: __aws_types.Decoder;

    base64Encoder: __aws_types.Encoder;

    bodyLengthChecker: (body: any) => number | undefined;

    credentials: __aws_types.Provider<__aws_types.Credentials>;

    endpoint: __aws_types.Provider<__aws_types.HttpEndpoint>;

    endpointProvider: any;

    handler: __aws_types.Terminalware<any, _stream.Readable>;

    httpHandler: __aws_types.HttpHandler<_stream.Readable>;

    maxRedirects: number;

    maxRetries: number;

    parser: __aws_types.ResponseParser<_stream.Readable>;

    region: __aws_types.Provider<string>;

    serializer: __aws_types.Provider<__aws_types.RequestSerializer<_stream.Readable>>;

    sha256: __aws_types.HashConstructor;

    signer: __aws_types.RequestSigner;

    signingName: string;

    sslEnabled: boolean;

    streamCollector: __aws_types.StreamCollector<_stream.Readable>;

    urlParser: __aws_types.UrlParser;

    utf8Decoder: __aws_types.Decoder;

    utf8Encoder: __aws_types.Encoder;
}

export const configurationProperties: __aws_types.ConfigurationDefinition<
    Route53ResolvableConfiguration,
    Route53ResolvedConfiguration
> = {
    profile: {
        required: false
    },
    maxRedirects: {
        required: false,
        defaultValue: 10
    },
    maxRetries: {
        required: false,
        defaultValue: 3
    },
    region: {
        required: false,
        defaultProvider: __aws_region_provider.defaultProvider,
        apply: (
            region: string|__aws_types.Provider<string>|undefined,
            configuration: {region?: string|__aws_types.Provider<string>}
        ) => {
            if (typeof region === 'string') {
                const promisified = Promise.resolve(region);
                configuration.region = () => promisified;
            }
        }
    },
    sslEnabled: {
        required: false,
        defaultValue: true
    },
    urlParser: {
        required: false,
        defaultValue: __aws_url_parser_node.parseUrl
    },
    endpointProvider: {
        required: false,
        defaultValue: (
            sslEnabled: boolean,
            region: string,
        ) => ({
            protocol: sslEnabled ? 'https:' : 'http:',
            path: '/',
            hostname: `route53.${region}.amazonaws.com`
        })
    },
    endpoint: {
        required: false,
        defaultProvider: (
            configuration: {
                sslEnabled: boolean,
                endpointProvider: any,
                region: __aws_types.Provider<string>,
            }
        ) => {
            const promisified = configuration.region()
                .then(region => configuration.endpointProvider(
                    configuration.sslEnabled,
                    region
                ));
            return () => promisified;
        },
        apply: (
            value: string|__aws_types.HttpEndpoint|__aws_types.Provider<__aws_types.HttpEndpoint>|undefined,
            configuration: {
                endpointProvider: any,
                endpoint?: string|__aws_types.HttpEndpoint|__aws_types.Provider<__aws_types.HttpEndpoint>,
                sslEnabled: boolean,
                urlParser: __aws_types.UrlParser,
            }
        ): void => {
            if (typeof value === 'string') {
                const promisified = Promise.resolve(configuration.urlParser(value));
                configuration.endpoint = () => promisified;
            } else if (typeof value === 'object') {
                const promisified = Promise.resolve(value);
                configuration.endpoint = () => promisified;
            }
        }
    },
    base64Decoder: {
        required: false,
        defaultValue: __aws_util_base64_node.fromBase64
    },
    base64Encoder: {
        required: false,
        defaultValue: __aws_util_base64_node.toBase64
    },
    utf8Decoder: {
        required: false,
        defaultValue: __aws_util_utf8_node.fromUtf8
    },
    utf8Encoder: {
        required: false,
        defaultValue: __aws_util_utf8_node.toUtf8
    },
    streamCollector: {
        required: false,
        defaultValue: __aws_stream_collector_node.streamCollector
    },
    serializer: {
        required: false,
        defaultProvider: (
            configuration: {
                base64Encoder: __aws_types.Encoder,
                endpoint: __aws_types.Provider<__aws_types.HttpEndpoint>,
                utf8Decoder: __aws_types.Decoder
            }
        ) => {
            const promisified = configuration.endpoint()
                .then(endpoint => new __aws_protocol_rest.RestSerializer<_stream.Readable>(
                    endpoint,
                    new __aws_xml_body_builder.XmlBodyBuilder(
                        configuration.base64Encoder,
                        configuration.utf8Decoder
                    ),
                    configuration.base64Encoder,
                    configuration.utf8Decoder
                ));
            return () => promisified;
        },
        apply: (
            serializerProvider: __aws_types.Provider<__aws_types.RequestSerializer<_stream.Readable>>,
            configuration: object,
            middlewareStack: __aws_types.MiddlewareStack<any, any, any>
        ): void => {
            middlewareStack.add(
                __aws_middleware_serializer.serializerMiddleware(serializerProvider),
                {
                    step: 'serialize',
                    tags: {SERIALIZER: true},
                    priority: 90
                }
            );
        }
    },
    parser: {
        required: false,
        defaultProvider: (
            configuration: {
                base64Decoder: __aws_types.Decoder,
                streamCollector: __aws_types.StreamCollector<_stream.Readable>,
                utf8Encoder: __aws_types.Encoder
            }
        ) => new __aws_protocol_rest.RestParser<_stream.Readable>(
            new __aws_xml_body_parser.XmlBodyParser(
                configuration.base64Decoder
            ),
            configuration.streamCollector,
            __aws_query_error_unmarshaller.queryErrorUnmarshaller,
            configuration.utf8Encoder,
            configuration.base64Decoder
        )
    },
    _user_injected_http_handler: {
        required: false,
        defaultProvider: (configuration: {httpHandler?: any}) => !configuration.httpHandler
    },
    httpHandler: {
        required: false,
        defaultProvider: () => new __aws_node_http_handler.NodeHttpHandler()
    },
    handler: {
        required: false,
        defaultProvider: (
            configuration: {
                httpHandler: __aws_types.HttpHandler<_stream.Readable>,
                parser: __aws_types.ResponseParser<_stream.Readable>,
            }
        ) => __aws_core_handler.coreHandler<OutputTypesUnion, _stream.Readable>(
            configuration.httpHandler,
            configuration.parser
        )
    },
    credentials: {
        required: false,
        defaultProvider: __aws_credential_provider_node.defaultProvider,
        apply: (
            credentials: __aws_types.Credentials|__aws_types.Provider<__aws_types.Credentials>|undefined,
            configuration: {credentials?: __aws_types.Credentials|__aws_types.Provider<__aws_types.Credentials>}
        ) => {
            if (typeof credentials === 'object') {
                const promisified = Promise.resolve(credentials);
                configuration.credentials = () => promisified;
            }
        }
    },
    sha256: {
        required: false,
        defaultValue: __aws_hash_node.Hash.bind(null, 'sha256')
    },
    signingName: {
        required: false,
        defaultValue: 'route53'
    },
    signer: {
        required: false,
        defaultProvider: (
            configuration: {
                credentials: __aws_types.Credentials|__aws_types.Provider<__aws_types.Credentials>
                region: string|__aws_types.Provider<string>,
                sha256: __aws_types.HashConstructor,
                signingName: string,
            }
        ) => new __aws_signature_v4.SignatureV4({
            credentials: configuration.credentials,
            region: configuration.region,
            service: configuration.signingName,
            sha256: configuration.sha256,
            uriEscapePath: false,
        }),
        apply: (
            signer: __aws_types.RequestSigner|undefined,
            configuration: object,
            middlewareStack: __aws_types.MiddlewareStack<any, any, any>
        ): void => {
            if (!signer) {
                throw new Error('No signer was defined');
            }

            middlewareStack.add(
                __aws_signing_middleware.signingMiddleware(signer),
                {
                    step: 'finalize',
                    tags: {SIGNATURE: true}
                }
            );
        }
    },
    bodyLengthChecker: {
        required: false,
        defaultValue: __aws_util_body_length_node.calculateBodyLength
    },
    retryDecider: {
        required: false
    },
    delayDecider: {
        required: false
    },
};
