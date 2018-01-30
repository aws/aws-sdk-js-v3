import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListKeyPolicies} from '../model/ListKeyPolicies';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListKeyPoliciesInput} from '../types/ListKeyPoliciesInput';
import {ListKeyPoliciesOutput} from '../types/ListKeyPoliciesOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class ListKeyPoliciesCommand implements __aws_types.Command<
    InputTypesUnion,
    ListKeyPoliciesInput,
    OutputTypesUnion,
    ListKeyPoliciesOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListKeyPoliciesInput,
        ListKeyPoliciesOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListKeyPoliciesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<ListKeyPoliciesInput, ListKeyPoliciesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListKeyPolicies
        };

        return stack.resolve(
            handler<ListKeyPoliciesInput, ListKeyPoliciesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}