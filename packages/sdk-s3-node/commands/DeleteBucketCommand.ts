import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteBucket} from '../model/DeleteBucket';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteBucketInput} from '../types/DeleteBucketInput';
import {DeleteBucketOutput} from '../types/DeleteBucketOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class DeleteBucketCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteBucketInput,
    OutputTypesUnion,
    DeleteBucketOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteBucketInput,
        DeleteBucketOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteBucketInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<DeleteBucketInput, DeleteBucketOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteBucket
        };

        return stack.resolve(
            handler<DeleteBucketInput, DeleteBucketOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}