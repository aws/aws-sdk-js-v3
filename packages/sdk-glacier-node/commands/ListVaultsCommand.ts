import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListVaults} from '../model/ListVaults';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListVaultsInput} from '../types/ListVaultsInput';
import {ListVaultsOutput} from '../types/ListVaultsOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListVaultsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListVaultsInput,
    OutputTypesUnion,
    ListVaultsOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListVaultsInput,
        ListVaultsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListVaultsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<ListVaultsInput, ListVaultsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListVaults
        };

        return stack.resolve(
            handler<ListVaultsInput, ListVaultsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}