import * as __aws_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_middleware_header_default from '@aws-sdk/middleware-header-default';
import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetBucketLifecycleConfiguration} from '../model/GetBucketLifecycleConfiguration';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetBucketLifecycleConfigurationInput} from '../types/GetBucketLifecycleConfigurationInput';
import {GetBucketLifecycleConfigurationOutput} from '../types/GetBucketLifecycleConfigurationOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class GetBucketLifecycleConfigurationCommand implements __aws_types.Command<
    InputTypesUnion,
    GetBucketLifecycleConfigurationInput,
    OutputTypesUnion,
    GetBucketLifecycleConfigurationOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetBucketLifecycleConfigurationInput,
        GetBucketLifecycleConfigurationOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetBucketLifecycleConfigurationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<GetBucketLifecycleConfigurationInput, GetBucketLifecycleConfigurationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetBucketLifecycleConfiguration
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
            __aws_middleware_header_default.headerDefault(
                {'Content-Type': 'application/octet-stream'}
            ),
            {
                step: 'build',
                priority: -50,
                tags: {'Content-Type': true}
            }
        );
        return stack.resolve(
            handler<GetBucketLifecycleConfigurationInput, GetBucketLifecycleConfigurationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}