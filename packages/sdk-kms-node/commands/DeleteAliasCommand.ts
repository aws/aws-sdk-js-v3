import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteAlias} from '../model/DeleteAlias';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteAliasInput} from '../types/DeleteAliasInput';
import {DeleteAliasOutput} from '../types/DeleteAliasOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class DeleteAliasCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteAliasInput,
    OutputTypesUnion,
    DeleteAliasOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteAliasInput,
        DeleteAliasOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteAliasInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<DeleteAliasInput, DeleteAliasOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteAlias
        };

        return stack.resolve(
            handler<DeleteAliasInput, DeleteAliasOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}