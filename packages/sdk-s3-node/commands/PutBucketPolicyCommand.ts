import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {PutBucketPolicy} from '../model/PutBucketPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketPolicyInput} from '../types/PutBucketPolicyInput';
import {PutBucketPolicyOutput} from '../types/PutBucketPolicyOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutBucketPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    PutBucketPolicyInput,
    OutputTypesUnion,
    PutBucketPolicyOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PutBucketPolicyInput,
        PutBucketPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutBucketPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<PutBucketPolicyInput, PutBucketPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketPolicy
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
            handler<PutBucketPolicyInput, PutBucketPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}