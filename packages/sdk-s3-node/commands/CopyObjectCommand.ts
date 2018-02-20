import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_hash_node from '@aws/hash-node';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_ssec_middleware from '@aws/ssec-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CopyObject} from '../model/CopyObject';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CopyObjectInput} from '../types/CopyObjectInput';
import {CopyObjectOutput} from '../types/CopyObjectOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class CopyObjectCommand implements __aws_types.Command<
    InputTypesUnion,
    CopyObjectInput,
    OutputTypesUnion,
    CopyObjectOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CopyObjectInput,
        CopyObjectOutput,
        _stream.Readable
    >();

    constructor(readonly input: CopyObjectInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<CopyObjectInput, CopyObjectOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CopyObject
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
        stack.add(
            __aws_ssec_middleware.ssecMiddleware<CopyObjectInput>({
                base64Encoder: configuration.base64Encoder,
                hashConstructor: configuration.md5,
                ssecProperties: {
                    $serverSideEncryptionKey: {
                        targetProperty: 'SSECustomerKey',
                        hashTargetProperty: 'SSECustomerKeyMD5',
                    },
                    $copySourceServerSideEncryptionKey: {
                        targetProperty: 'CopySourceSSECustomerKey',
                        hashTargetProperty: 'CopySourceSSECustomerKeyMD5',
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
            handler<CopyObjectInput, CopyObjectOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}