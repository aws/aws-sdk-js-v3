import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteBucketTagging} from '../model/DeleteBucketTagging';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteBucketTaggingInput} from '../types/DeleteBucketTaggingInput';
import {DeleteBucketTaggingOutput} from '../types/DeleteBucketTaggingOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class DeleteBucketTaggingCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteBucketTaggingInput,
    OutputTypesUnion,
    DeleteBucketTaggingOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteBucketTaggingInput,
        DeleteBucketTaggingOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteBucketTaggingInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<DeleteBucketTaggingInput, DeleteBucketTaggingOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteBucketTagging
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
        return stack.resolve(
            handler<DeleteBucketTaggingInput, DeleteBucketTaggingOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}