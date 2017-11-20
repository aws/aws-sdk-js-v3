import * as __aws_core_handler from '@aws/core-handler';
import * as __aws_credential_provider_node from '@aws/credential-provider-node';
import * as __aws_crypto_sha256_node from '@aws/crypto-sha256-node';
import * as __aws_json_builder from '@aws/json-builder';
import * as __aws_json_parser from '@aws/json-parser';
import * as __aws_middleware_serializer from '@aws/middleware-serializer';
import * as __aws_node_http_handler from '@aws/node-http-handler';
import * as __aws_protocol_json_rpc from '@aws/protocol-json-rpc';
import * as __aws_region_provider from '@aws/region-provider';
import * as __aws_signature_v4 from '@aws/signature-v4';
import * as __aws_signing_middleware from '@aws/signing-middleware';
import * as __aws_stream_collector_node from '@aws/stream-collector-node';
import * as __aws_types from '@aws/types';
import * as __aws_util_base64_node from '@aws/util-base64-node';
import * as __aws_util_utf8_node from '@aws/util-utf8-node';
import * as _stream from 'stream';

export interface KMSConfiguration {
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
    handler?: __aws_types.CoreHandlerConstructor<any, any, _stream.Readable>;

    /**
     * The HTTP handler to use
     */
    httpHandler?: __aws_types.HttpHandler<_stream.Readable>;

    /**
     * The maximum number of redirects to follow for a service request. Set to `0` to disable retries.
     */
    maxRedirects?: number;

    /**
     * The maximum number of retries that will be attempted. Set to `0` to disable retries.
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
     * The function that will be used to convert a UTF8-encoded string to a byte array
     */
    utf8Decoder?: __aws_types.Decoder;

    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string
     */
    utf8Encoder?: __aws_types.Encoder;
}

export interface KMSResolvableConfiguration extends KMSConfiguration {
    /**
     * Whether the HTTP handler was injected by the user and should thus not be destroyed when this client is
     */
    _user_injected_http_handler: any;

    /**
     * The parser to use when converting HTTP responses to SDK output types
     */
    parser: __aws_types.ResponseParser<_stream.Readable>;

    /**
     * The serializer to use when converting SDK input to HTTP requests
     */
    serializer: __aws_types.Provider<__aws_types.RequestSerializer<_stream.Readable>>;
}

export interface KMSResolvedConfiguration extends KMSConfiguration {
    _user_injected_http_handler: boolean;

    base64Decoder: __aws_types.Decoder;

    base64Encoder: __aws_types.Encoder;

    credentials: __aws_types.Provider<__aws_types.Credentials>;

    endpoint: __aws_types.Provider<__aws_types.HttpEndpoint>;

    endpointProvider: any;

    handler: __aws_types.CoreHandlerConstructor<any, any, _stream.Readable>;

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

    utf8Decoder: __aws_types.Decoder;

    utf8Encoder: __aws_types.Encoder;
}

export const configurationProperties: __aws_types.ConfigurationDefinition<
    KMSResolvableConfiguration,
    KMSResolvedConfiguration
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
    endpointProvider: {
        required: false,
        defaultValue: (
            sslEnabled: boolean,
            region: string,
        ) => ({
            protocol: sslEnabled ? 'https:' : 'http:',
            path: '/',
            hostname: `kms.${region}.amazonaws.com`
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
                sslEnabled: boolean,
                endpointProvider: any,
                endpoint?: string|__aws_types.HttpEndpoint|__aws_types.Provider<__aws_types.HttpEndpoint>,
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
                .then(endpoint => new __aws_protocol_json_rpc.JsonRpcSerializer<_stream.Readable>(
                    endpoint,
                    new __aws_json_builder.JsonBuilder(
                        configuration.base64Encoder,
                        configuration.utf8Decoder
                    )
                ));
            return () => promisified;
        },
        apply: (
            serializerProvider: __aws_types.Provider<__aws_types.RequestSerializer<_stream.Readable>>,
            configuration: object,
            middlewareStack: __aws_types.MiddlewareStack<any, any, any>
        ): void => {
            const tagSet = new Set();
            tagSet.add('SERIALIZER');

            middlewareStack.add(
                class extends __aws_middleware_serializer.SerializerMiddleware {
                    constructor(
                        next: __aws_types.Handler<any, any, any>,
                        context: __aws_types.HandlerExecutionContext
                    ) {
                        super(serializerProvider, next, context);
                    }
                },
                {
                    step: 'build',
                    tags: tagSet,
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
        ) => new __aws_protocol_json_rpc.JsonRpcParser(
            new __aws_json_parser.JsonParser(
                configuration.base64Decoder
            ),
            configuration.streamCollector,
            configuration.utf8Encoder
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
        ) => class extends __aws_core_handler.CoreHandler<any, any, _stream.Readable> {
            constructor(context: __aws_types.HandlerExecutionContext) {
                super(configuration.httpHandler, configuration.parser, context);
            }
        }
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
        defaultValue: __aws_crypto_sha256_node.Sha256
    },
    signingName: {
        required: false,
        defaultValue: 'kms'
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
            unsignedPayload: false,
            uriEscapePath: false,
        }),
        apply: (
            signer: __aws_types.RequestSigner|undefined,
            configuration: object,
            middlewareStack: __aws_types.MiddlewareStack<any, any, any>
        ): void => {
            const tagSet = new Set();
            tagSet.add('SIGNATURE');

            middlewareStack.add(
                class extends __aws_signing_middleware.SigningHandler {
                    constructor(next: __aws_types.Handler<any, any, any>) {
                        super(signer as __aws_types.RequestSigner, next);
                    }
                },
                {
                    step: 'finalize',
                    tags: tagSet
                }
            );
        }
    },
};