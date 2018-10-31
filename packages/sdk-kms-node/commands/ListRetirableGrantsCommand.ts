import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListRetirableGrants} from '../model/ListRetirableGrants';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListRetirableGrantsInput} from '../types/ListRetirableGrantsInput';
import {ListRetirableGrantsOutput} from '../types/ListRetirableGrantsOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class ListRetirableGrantsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListRetirableGrantsInput,
    OutputTypesUnion,
    ListRetirableGrantsOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListRetirableGrantsInput,
        ListRetirableGrantsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListRetirableGrantsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<ListRetirableGrantsInput, ListRetirableGrantsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListRetirableGrants
        };

        return stack.resolve(
            handler<ListRetirableGrantsInput, ListRetirableGrantsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}