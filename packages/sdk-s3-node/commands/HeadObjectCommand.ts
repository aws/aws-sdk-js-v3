import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {HeadObject} from '../model/HeadObject';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {HeadObjectInput} from '../types/HeadObjectInput';
import {HeadObjectOutput} from '../types/HeadObjectOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class HeadObjectCommand implements __aws_types.Command<
    InputTypesUnion,
    HeadObjectInput,
    OutputTypesUnion,
    HeadObjectOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        HeadObjectInput,
        HeadObjectOutput,
        _stream.Readable
    >();

    constructor(readonly input: HeadObjectInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<HeadObjectInput, HeadObjectOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: HeadObject
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
            handler<HeadObjectInput, HeadObjectOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}