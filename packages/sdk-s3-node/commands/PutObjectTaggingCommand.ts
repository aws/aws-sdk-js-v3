import * as __aws_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {PutObjectTagging} from '../model/PutObjectTagging';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutObjectTaggingInput} from '../types/PutObjectTaggingInput';
import {PutObjectTaggingOutput} from '../types/PutObjectTaggingOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutObjectTaggingCommand implements __aws_types.Command<
    InputTypesUnion,
    PutObjectTaggingInput,
    OutputTypesUnion,
    PutObjectTaggingOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PutObjectTaggingInput,
        PutObjectTaggingOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutObjectTaggingInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<PutObjectTaggingInput, PutObjectTaggingOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutObjectTagging
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
            handler<PutObjectTaggingInput, PutObjectTaggingOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}