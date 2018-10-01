import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_hash_node from '@aws/hash-node';
import * as __aws_middleware_header_default from '@aws/middleware-header-default';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_ssec_middleware from '@aws/ssec-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {UploadPart} from '../model/UploadPart';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UploadPartInput} from '../types/UploadPartInput';
import {UploadPartOutput} from '../types/UploadPartOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class UploadPartCommand implements __aws_types.Command<
    InputTypesUnion,
    UploadPartInput,
    OutputTypesUnion,
    UploadPartOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UploadPartInput,
        UploadPartOutput,
        _stream.Readable
    >();

    constructor(readonly input: UploadPartInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<UploadPartInput, UploadPartOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UploadPart
        };
        stack.add(
            __aws_bucket_endpoint_middleware.bucketEndpointMiddleware({
                forcePathStyle: configuration.forcePathStyle,
                preformedBucketEndpoint: configuration.bucketEndpoint,
                useAccelerateEndpoint: configuration.useAccelerateEndpoint,
                useDualstackEndpoint: configuration.useDualstackEndpoint
            }),
            {
                step: 'build',
                priority: 0
            }
        );
        if (configuration.disableBodySigning) {
            stack.add(
                __aws_middleware_header_default.headerDefault({'x-amz-content-sha256': 'UNSIGNED-PAYLOAD'}),
                {
                    step: 'build',
                    priority: 100,
                    tags: {BODY_CHECKSUM: true, UNSIGNED_PAYLOAD: true}
                }
            );
        }
        stack.add(
            __aws_ssec_middleware.ssecMiddleware<UploadPartInput>({
                base64Encoder: configuration.base64Encoder,
                hashConstructor: configuration.md5,
                ssecProperties: {
                    $serverSideEncryptionKey: {
                        targetProperty: 'SSECustomerKey',
                        hashTargetProperty: 'SSECustomerKeyMD5',
                    }
                },
                utf8Decoder: configuration.utf8Decoder,
            }),
            {
                step: 'initialize',
                priority: 0
            }
        );
        return stack.resolve(
            handler<UploadPartInput, UploadPartOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}