import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListTrafficPolicies} from '../model/ListTrafficPolicies';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTrafficPoliciesInput} from '../types/ListTrafficPoliciesInput';
import {ListTrafficPoliciesOutput} from '../types/ListTrafficPoliciesOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ListTrafficPoliciesCommand implements __aws_types.Command<
    InputTypesUnion,
    ListTrafficPoliciesInput,
    OutputTypesUnion,
    ListTrafficPoliciesOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListTrafficPoliciesInput,
        ListTrafficPoliciesOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTrafficPoliciesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<ListTrafficPoliciesInput, ListTrafficPoliciesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTrafficPolicies
        };

        return stack.resolve(
            handler<ListTrafficPoliciesInput, ListTrafficPoliciesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}