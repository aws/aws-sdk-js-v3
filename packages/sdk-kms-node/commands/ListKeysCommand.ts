import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListKeys} from '../model/ListKeys';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListKeysInput} from '../types/ListKeysInput';
import {ListKeysOutput} from '../types/ListKeysOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class ListKeysCommand implements __aws_types.Command<
    InputTypesUnion,
    ListKeysInput,
    OutputTypesUnion,
    ListKeysOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListKeysInput,
        ListKeysOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListKeysInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<ListKeysInput, ListKeysOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListKeys
        };

        return stack.resolve(
            handler<ListKeysInput, ListKeysOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}