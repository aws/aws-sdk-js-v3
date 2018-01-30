import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CancelKeyDeletion} from '../model/CancelKeyDeletion';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CancelKeyDeletionInput} from '../types/CancelKeyDeletionInput';
import {CancelKeyDeletionOutput} from '../types/CancelKeyDeletionOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class CancelKeyDeletionCommand implements __aws_types.Command<
    InputTypesUnion,
    CancelKeyDeletionInput,
    OutputTypesUnion,
    CancelKeyDeletionOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CancelKeyDeletionInput,
        CancelKeyDeletionOutput,
        _stream.Readable
    >();

    constructor(readonly input: CancelKeyDeletionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<CancelKeyDeletionInput, CancelKeyDeletionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CancelKeyDeletion
        };

        return stack.resolve(
            handler<CancelKeyDeletionInput, CancelKeyDeletionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}