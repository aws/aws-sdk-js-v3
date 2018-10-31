import * as __aws_bucket_endpoint_middleware from '@aws-sdk/bucket-endpoint-middleware';
import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {PutObjectAcl} from '../model/PutObjectAcl';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutObjectAclInput} from '../types/PutObjectAclInput';
import {PutObjectAclOutput} from '../types/PutObjectAclOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class PutObjectAclCommand implements __aws_types.Command<
    InputTypesUnion,
    PutObjectAclInput,
    OutputTypesUnion,
    PutObjectAclOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PutObjectAclInput,
        PutObjectAclOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutObjectAclInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<PutObjectAclInput, PutObjectAclOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutObjectAcl
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
            handler<PutObjectAclInput, PutObjectAclOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}