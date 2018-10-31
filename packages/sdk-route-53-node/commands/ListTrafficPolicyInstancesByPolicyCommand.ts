import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListTrafficPolicyInstancesByPolicy} from '../model/ListTrafficPolicyInstancesByPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTrafficPolicyInstancesByPolicyInput} from '../types/ListTrafficPolicyInstancesByPolicyInput';
import {ListTrafficPolicyInstancesByPolicyOutput} from '../types/ListTrafficPolicyInstancesByPolicyOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ListTrafficPolicyInstancesByPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    ListTrafficPolicyInstancesByPolicyInput,
    OutputTypesUnion,
    ListTrafficPolicyInstancesByPolicyOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListTrafficPolicyInstancesByPolicyInput,
        ListTrafficPolicyInstancesByPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTrafficPolicyInstancesByPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<ListTrafficPolicyInstancesByPolicyInput, ListTrafficPolicyInstancesByPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTrafficPolicyInstancesByPolicy
        };

        return stack.resolve(
            handler<ListTrafficPolicyInstancesByPolicyInput, ListTrafficPolicyInstancesByPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}