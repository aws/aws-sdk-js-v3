import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetBucketLocation} from '../model/GetBucketLocation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetBucketLocationInput} from '../types/GetBucketLocationInput';
import {GetBucketLocationOutput} from '../types/GetBucketLocationOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class GetBucketLocationCommand implements __aws_types.Command<
    InputTypesUnion,
    GetBucketLocationInput,
    OutputTypesUnion,
    GetBucketLocationOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetBucketLocationInput,
        GetBucketLocationOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetBucketLocationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<GetBucketLocationInput, GetBucketLocationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetBucketLocation
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
            handler<GetBucketLocationInput, GetBucketLocationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}