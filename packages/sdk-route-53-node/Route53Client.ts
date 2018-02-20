import * as __aws_config_resolver from '@aws/config-resolver';
import * as __aws_core_handler from '@aws/core-handler';
import * as __aws_credential_provider_node from '@aws/credential-provider-node';
import * as __aws_hash_node from '@aws/hash-node';
import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_serializer from '@aws/middleware-serializer';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_node_http_handler from '@aws/node-http-handler';
import * as __aws_protocol_rest from '@aws/protocol-rest';
import * as __aws_query_error_unmarshaller from '@aws/query-error-unmarshaller';
import * as __aws_region_provider from '@aws/region-provider';
import * as __aws_retry_middleware from '@aws/retry-middleware';
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
import {Route53Configuration, Route53ResolvedConfiguration, configurationProperties} from './Route53Configuration';
import {InputTypesUnion} from './types/InputTypesUnion';
import {OutputTypesUnion} from './types/OutputTypesUnion';

export class Route53Client {
    protected readonly config: Route53ResolvedConfiguration;

    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        InputTypesUnion,
        OutputTypesUnion,
        _stream.Readable
    >();

    constructor(configuration: Route53Configuration) {
        this.config = __aws_config_resolver.resolveConfiguration(
            configuration,
            configurationProperties,
            this.middlewareStack
        );
        this.middlewareStack.add(
            __aws_middleware_content_length.contentLengthMiddleware(
                this.config.bodyLengthChecker
            ),
            {
                step: 'build',
                priority: -80,
                tags: {SET_CONTENT_LENGTH: true}
            }
        );
        if (this.config.maxRetries > 0) {
            this.middlewareStack.add(
                __aws_retry_middleware.retryMiddleware(
                    this.config.maxRetries,
                    this.config.retryDecider,
                    this.config.delayDecider
                ),
                {
                    step: 'finalize',
                    priority: Infinity,
                    tags: {RETRY: true}
                }
            );
        }
    }

    destroy(): void {
        if (!this.config._user_injected_http_handler) {
            this.config.httpHandler.destroy();
        }
    }

    /**
     * This will need to be revised when the command interface lands.
     */
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, Route53ResolvedConfiguration, _stream.Readable>): Promise<OutputType>;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, Route53ResolvedConfiguration, _stream.Readable>,
        cb: (err: any, data?: OutputType) => void
    ): void;
    send<
        InputType extends InputTypesUnion,
        OutputType extends OutputTypesUnion
    >(
        command: __aws_types.Command<InputTypesUnion, InputType, OutputTypesUnion, OutputType, Route53ResolvedConfiguration, _stream.Readable>,
        cb?: (err: any, data?: OutputType) => void
    ): Promise<OutputType>|void {
        const handler = command.resolveMiddleware(
            this.middlewareStack,
            this.config
        );
        if (cb) {
            handler(command).then(
                (result: OutputType)  => cb(null, result),
                (err: any) => cb(err)
            ).catch(
                // prevent any errors thrown in the callback from triggering an
                // unhandled promise rejection
                () => {}
            );
        } else {
            return handler(command);
        }
    }
}
