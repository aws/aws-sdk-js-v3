import * as __aws_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {PutBucketNotification} from '../model/PutBucketNotification';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketNotificationInput} from '../types/PutBucketNotificationInput';
import {PutBucketNotificationOutput} from '../types/PutBucketNotificationOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutBucketNotificationCommand implements __aws_types.Command<
    InputTypesUnion,
    PutBucketNotificationInput,
    OutputTypesUnion,
    PutBucketNotificationOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PutBucketNotificationInput,
        PutBucketNotificationOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutBucketNotificationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<PutBucketNotificationInput, PutBucketNotificationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketNotification
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
            handler<PutBucketNotificationInput, PutBucketNotificationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}