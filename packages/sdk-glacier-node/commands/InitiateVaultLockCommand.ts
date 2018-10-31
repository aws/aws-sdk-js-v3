import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {InitiateVaultLock} from '../model/InitiateVaultLock';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {InitiateVaultLockInput} from '../types/InitiateVaultLockInput';
import {InitiateVaultLockOutput} from '../types/InitiateVaultLockOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class InitiateVaultLockCommand implements __aws_types.Command<
    InputTypesUnion,
    InitiateVaultLockInput,
    OutputTypesUnion,
    InitiateVaultLockOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        InitiateVaultLockInput,
        InitiateVaultLockOutput,
        _stream.Readable
    >();

    constructor(readonly input: InitiateVaultLockInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<InitiateVaultLockInput, InitiateVaultLockOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: InitiateVaultLock
        };

        return stack.resolve(
            handler<InitiateVaultLockInput, InitiateVaultLockOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}