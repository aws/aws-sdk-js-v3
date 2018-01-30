import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetBucketAccelerateConfiguration} from '../model/GetBucketAccelerateConfiguration';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetBucketAccelerateConfigurationInput} from '../types/GetBucketAccelerateConfigurationInput';
import {GetBucketAccelerateConfigurationOutput} from '../types/GetBucketAccelerateConfigurationOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class GetBucketAccelerateConfigurationCommand implements __aws_types.Command<
    InputTypesUnion,
    GetBucketAccelerateConfigurationInput,
    OutputTypesUnion,
    GetBucketAccelerateConfigurationOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetBucketAccelerateConfigurationInput,
        GetBucketAccelerateConfigurationOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetBucketAccelerateConfigurationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<GetBucketAccelerateConfigurationInput, GetBucketAccelerateConfigurationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetBucketAccelerateConfiguration
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
            handler<GetBucketAccelerateConfigurationInput, GetBucketAccelerateConfigurationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}