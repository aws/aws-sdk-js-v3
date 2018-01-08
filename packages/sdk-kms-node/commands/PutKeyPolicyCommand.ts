import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {PutKeyPolicy} from '../model/PutKeyPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutKeyPolicyInput} from '../types/PutKeyPolicyInput';
import {PutKeyPolicyOutput} from '../types/PutKeyPolicyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class PutKeyPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    PutKeyPolicyInput,
    OutputTypesUnion,
    PutKeyPolicyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<PutKeyPolicyInput, PutKeyPolicyOutput, _stream.Readable>();

    constructor(readonly input: PutKeyPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<PutKeyPolicyInput, PutKeyPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutKeyPolicy
        };

        return stack.resolve(
            handler<PutKeyPolicyInput, PutKeyPolicyOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}