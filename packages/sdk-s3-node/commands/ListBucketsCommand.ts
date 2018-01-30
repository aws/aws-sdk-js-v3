import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListBuckets} from '../model/ListBuckets';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListBucketsInput} from '../types/ListBucketsInput';
import {ListBucketsOutput} from '../types/ListBucketsOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class ListBucketsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListBucketsInput,
    OutputTypesUnion,
    ListBucketsOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListBucketsInput,
        ListBucketsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListBucketsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<ListBucketsInput, ListBucketsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListBuckets
        };

        return stack.resolve(
            handler<ListBucketsInput, ListBucketsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}