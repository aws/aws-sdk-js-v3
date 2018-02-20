import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_header_default from '@aws/middleware-header-default';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListBucketMetricsConfigurations} from '../model/ListBucketMetricsConfigurations';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListBucketMetricsConfigurationsInput} from '../types/ListBucketMetricsConfigurationsInput';
import {ListBucketMetricsConfigurationsOutput} from '../types/ListBucketMetricsConfigurationsOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class ListBucketMetricsConfigurationsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListBucketMetricsConfigurationsInput,
    OutputTypesUnion,
    ListBucketMetricsConfigurationsOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListBucketMetricsConfigurationsInput,
        ListBucketMetricsConfigurationsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListBucketMetricsConfigurationsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<ListBucketMetricsConfigurationsInput, ListBucketMetricsConfigurationsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListBucketMetricsConfigurations
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
            handler<ListBucketMetricsConfigurationsInput, ListBucketMetricsConfigurationsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}