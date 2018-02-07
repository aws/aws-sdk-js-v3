import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListReusableDelegationSets} from '../model/ListReusableDelegationSets';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListReusableDelegationSetsInput} from '../types/ListReusableDelegationSetsInput';
import {ListReusableDelegationSetsOutput} from '../types/ListReusableDelegationSetsOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ListReusableDelegationSetsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListReusableDelegationSetsInput,
    OutputTypesUnion,
    ListReusableDelegationSetsOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListReusableDelegationSetsInput,
        ListReusableDelegationSetsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListReusableDelegationSetsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<ListReusableDelegationSetsInput, ListReusableDelegationSetsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListReusableDelegationSets
        };

        return stack.resolve(
            handler<ListReusableDelegationSetsInput, ListReusableDelegationSetsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}