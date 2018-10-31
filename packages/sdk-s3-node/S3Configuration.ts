import * as __aws_core_handler from '@aws-sdk/core-handler';
import * as __aws_credential_provider_node from '@aws-sdk/credential-provider-node';
import * as __aws_hash_node from '@aws-sdk/hash-node';
import * as __aws_hash_stream_node from '@aws-sdk/hash-stream-node';
import * as __aws_middleware_serializer from '@aws-sdk/middleware-serializer';
import * as __aws_node_http_handler from '@aws-sdk/node-http-handler';
import * as __aws_protocol_rest from '@aws-sdk/protocol-rest';
import * as __aws_query_error_unmarshaller from '@aws-sdk/query-error-unmarshaller';
import * as __aws_region_provider from '@aws-sdk/region-provider';
import * as __aws_signature_v4 from '@aws-sdk/signature-v4';
import * as __aws_signing_middleware from '@aws-sdk/signing-middleware';
import * as __aws_stream_collector_node from '@aws-sdk/stream-collector-node';
import * as __aws_types from '@aws-sdk/types';
import * as __aws_url_parser_node from '@aws-sdk/url-parser-node';
import * as __aws_util_base64_node from '@aws-sdk/util-base64-node';
import * as __aws_util_body_length_node from '@aws-sdk/util-body-length-node';
import * as __aws_util_utf8_node from '@aws-sdk/util-utf8-node';
import * as __aws_xml_body_builder from '@aws-sdk/xml-body-builder';
import * as __aws_xml_body_parser from '@aws-sdk/xml-body-parser';
import * as _stream from 'stream';
import {OutputTypesUnion} from './types/OutputTypesUnion';

export interface S3Configuration {
    /**
     * The function that will be used to convert a base64-encoded string to a byte array
     */
    base64Decoder?: __aws_types.Decoder;

    /**
     * The function that will be used to convert binary data to a base64-encoded string
     */
    base64Encoder?: __aws_types.Encoder;

    /**
     * Whether the provided endpoint addresses an individual bucket.
     */
    bucketEndpoint?: boolean;

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
     * Whether body signing should be disabled. Body signing can only be disabled when using HTTPS
     */
    disableBodySigning?: boolean;

    /**
     * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
     */
    endpoint?: string|__aws_types.HttpEndpoint|__aws_types.Provider<__aws_types.HttpEndpoint>;

    /**
     * The endpoint provider to call if no endpoint is provided
     */
    endpointProvider?: any;

    /**
     * Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
     */
    forcePathStyle?: boolean;

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
     * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the MD5 checksum of a string or binary buffer
     */
    md5?: {new (): __aws_types.Hash};

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
     * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the SHA-256 HMAC or checksum of a string or binary buffer
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
     * A function that, given a hash constructor and a stream, calculates the hash of the streamed value
     */
    streamHasher?: __aws_types.StreamHasher<_stream.Readable>;

    /**
     * The function that will be used to convert strings into HTTP endpoints
     */
    urlParser?: __aws_types.UrlParser;

    /**
     * Whether to use the S3 Transfer Acceleration endpoint by default
     */
    useAccelerateEndpoint?: boolean;

    /**
     * Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.
     */
    useDualstackEndpoint?: boolean;

    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array
     */
    utf8Decoder?: __aws_types.Decoder;

    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string
     */
    utf8Encoder?: __aws_types.Encoder;
}

export interface S3ResolvableConfiguration extends S3Configuration {
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

export interface S3ResolvedConfiguration extends S3Configuration {
    _user_injected_http_handler: boolean;

    base64Decoder: __aws_types.Decoder;

    base64Encoder: __aws_types.Encoder;

    bodyLengthChecker: (body: any) => number | undefined;

    bucketEndpoint: boolean;

    credentials: __aws_types.Provider<__aws_types.Credentials>;

    disableBodySigning: boolean;

    endpoint: __aws_types.Provider<__aws_types.HttpEndpoint>;

    endpointProvider: any;

    forcePathStyle: boolean;

    handler: __aws_types.Terminalware<any, _stream.Readable>;

    httpHandler: __aws_types.HttpHandler<_stream.Readable>;

    maxRedirects: number;

    maxRetries: number;

    md5: {new (): __aws_types.Hash};

    parser: __aws_types.ResponseParser<_stream.Readable>;

    region: __aws_types.Provider<string>;

    serializer: __aws_types.Provider<__aws_types.RequestSerializer<_stream.Readable>>;

    sha256: __aws_types.HashConstructor;

    signer: __aws_types.RequestSigner;

    signingName: string;

    sslEnabled: boolean;

    streamCollector: __aws_types.StreamCollector<_stream.Readable>;

    streamHasher: __aws_types.StreamHasher<_stream.Readable>;

    urlParser: __aws_types.UrlParser;

    useAccelerateEndpoint: boolean;

    useDualstackEndpoint: boolean;

    utf8Decoder: __aws_types.Decoder;

    utf8Encoder: __aws_types.Encoder;
}

export const configurationProperties: __aws_types.ConfigurationDefinition<
    S3ResolvableConfiguration,
    S3ResolvedConfiguration
> = {
    profile: {},
    maxRedirects: {
        defaultValue: 10
    },
    maxRetries: {
        defaultValue: 3
    },
    region: {
        defaultProvider: __aws_region_provider.defaultProvider,
        normalize: (
            value: string|__aws_types.Provider<string>|undefined
        ) => {
            if (typeof value === 'string') {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }

            return value!;
        }
    },
    sslEnabled: {
        defaultValue: true
    },
    urlParser: {
        defaultValue: __aws_url_parser_node.parseUrl
    },
    endpointProvider: {
        defaultValue: (
            sslEnabled: boolean,
            region: string,
        ) => ({
            protocol: sslEnabled ? 'https:' : 'http:',
            path: '/',
            hostname: `s3.${region}.amazonaws.com`
        })
    },
    endpoint: {
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
        normalize: (
            value: string|__aws_types.HttpEndpoint|__aws_types.Provider<__aws_types.HttpEndpoint>|undefined,
            configuration: {
                urlParser?: __aws_types.UrlParser,
            }
        ): __aws_types.Provider<__aws_types.HttpEndpoint> => {
            if (typeof value === 'string') {
                const promisified = Promise.resolve(configuration.urlParser!(value));
                return () => promisified;
            } else if (typeof value === 'object') {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }

            // Users are not required to supply an endpoint, so `value`
            // could be undefined. This function, however, will only be
            // invoked if `value` is defined, so the return will never
            // be undefined.
            return value!;
        }
    },
    base64Decoder: {
        defaultValue: __aws_util_base64_node.fromBase64
    },
    base64Encoder: {
        defaultValue: __aws_util_base64_node.toBase64
    },
    utf8Decoder: {
        defaultValue: __aws_util_utf8_node.fromUtf8
    },
    utf8Encoder: {
        defaultValue: __aws_util_utf8_node.toUtf8
    },
    streamCollector: {
        defaultValue: __aws_stream_collector_node.streamCollector
    },
    serializer: {
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
        }
    },
    parser: {
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
        defaultProvider: (configuration: {httpHandler?: any}) => !configuration.httpHandler
    },
    httpHandler: {
        defaultProvider: () => new __aws_node_http_handler.NodeHttpHandler()
    },
    handler: {
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
    bodyLengthChecker: {
        defaultValue: __aws_util_body_length_node.calculateBodyLength
    },
    retryDecider: {},
    delayDecider: {},
    credentials: {
        defaultProvider: __aws_credential_provider_node.defaultProvider,
        normalize: (
            value: __aws_types.Credentials|__aws_types.Provider<__aws_types.Credentials>|undefined
        ) => {
            if (typeof value === 'object') {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }

            return value!;
        }
    },
    sha256: {
        defaultValue: __aws_hash_node.Hash.bind(null, 'sha256')
    },
    signingName: {
        defaultValue: 's3'
    },
    signer: {
        defaultProvider: (
            configuration: {
                credentials: __aws_types.Provider<__aws_types.Credentials>,
                region: __aws_types.Provider<string>,
                sha256: __aws_types.HashConstructor,
                signingName: string,
            }
        ) => new __aws_signature_v4.SignatureV4({
            credentials: configuration.credentials,
            region: configuration.region,
            service: configuration.signingName,
            sha256: configuration.sha256,
            uriEscapePath: true,
        })
    },
    bucketEndpoint: {
        defaultValue: false
    },
    forcePathStyle: {
        defaultValue: false
    },
    useAccelerateEndpoint: {
        defaultValue: false
    },
    useDualstackEndpoint: {
        defaultValue: false
    },
    disableBodySigning: {
        defaultProvider: (configuration: { sslEnabled: boolean }) => configuration.sslEnabled
    },
    streamHasher: {
        defaultValue: __aws_hash_stream_node.calculateSha256
    },
    md5: {
        defaultValue: __aws_hash_node.Hash.bind(null, 'md5')
    },
};