import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {SetVaultNotifications} from '../model/SetVaultNotifications';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {SetVaultNotificationsInput} from '../types/SetVaultNotificationsInput';
import {SetVaultNotificationsOutput} from '../types/SetVaultNotificationsOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class SetVaultNotificationsCommand implements __aws_types.Command<
    InputTypesUnion,
    SetVaultNotificationsInput,
    OutputTypesUnion,
    SetVaultNotificationsOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        SetVaultNotificationsInput,
        SetVaultNotificationsOutput,
        _stream.Readable
    >();

    constructor(readonly input: SetVaultNotificationsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<SetVaultNotificationsInput, SetVaultNotificationsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: SetVaultNotifications
        };

        return stack.resolve(
            handler<SetVaultNotificationsInput, SetVaultNotificationsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}