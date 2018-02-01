import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListObjectsV2} from '../model/ListObjectsV2';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListObjectsV2Input} from '../types/ListObjectsV2Input';
import {ListObjectsV2Output} from '../types/ListObjectsV2Output';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class ListObjectsV2Command implements __aws_types.Command<
    InputTypesUnion,
    ListObjectsV2Input,
    OutputTypesUnion,
    ListObjectsV2Output,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListObjectsV2Input,
        ListObjectsV2Output,
        _stream.Readable
    >();

    constructor(readonly input: ListObjectsV2Input) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<ListObjectsV2Input, ListObjectsV2Output> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListObjectsV2
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
            handler<ListObjectsV2Input, ListObjectsV2Output>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}