import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DisableKey} from '../model/DisableKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DisableKeyInput} from '../types/DisableKeyInput';
import {DisableKeyOutput} from '../types/DisableKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class DisableKeyCommand implements __aws_types.Command<
    InputTypesUnion,
    DisableKeyInput,
    OutputTypesUnion,
    DisableKeyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DisableKeyInput,
        DisableKeyOutput,
        _stream.Readable
    >();

    constructor(readonly input: DisableKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<DisableKeyInput, DisableKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DisableKey
        };

        return stack.resolve(
            handler<DisableKeyInput, DisableKeyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}