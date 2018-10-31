import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetKeyPolicy} from '../model/GetKeyPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetKeyPolicyInput} from '../types/GetKeyPolicyInput';
import {GetKeyPolicyOutput} from '../types/GetKeyPolicyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class GetKeyPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    GetKeyPolicyInput,
    OutputTypesUnion,
    GetKeyPolicyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetKeyPolicyInput,
        GetKeyPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetKeyPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<GetKeyPolicyInput, GetKeyPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetKeyPolicy
        };

        return stack.resolve(
            handler<GetKeyPolicyInput, GetKeyPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}