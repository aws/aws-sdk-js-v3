import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {PutBucketLifecycle} from '../model/PutBucketLifecycle';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketLifecycleInput} from '../types/PutBucketLifecycleInput';
import {PutBucketLifecycleOutput} from '../types/PutBucketLifecycleOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutBucketLifecycleCommand implements __aws_types.Command<
    InputTypesUnion,
    PutBucketLifecycleInput,
    OutputTypesUnion,
    PutBucketLifecycleOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PutBucketLifecycleInput,
        PutBucketLifecycleOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutBucketLifecycleInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<PutBucketLifecycleInput, PutBucketLifecycleOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketLifecycle
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
            handler<PutBucketLifecycleInput, PutBucketLifecycleOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}