import * as __aws_bucket_endpoint_middleware from '@aws/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {PutBucketAcl} from '../model/PutBucketAcl';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutBucketAclInput} from '../types/PutBucketAclInput';
import {PutBucketAclOutput} from '../types/PutBucketAclOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutBucketAclCommand implements __aws_types.Command<
    InputTypesUnion,
    PutBucketAclInput,
    OutputTypesUnion,
    PutBucketAclOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PutBucketAclInput,
        PutBucketAclOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutBucketAclInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<PutBucketAclInput, PutBucketAclOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutBucketAcl
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
            handler<PutBucketAclInput, PutBucketAclOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}