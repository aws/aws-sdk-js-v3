import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ReEncrypt} from '../model/ReEncrypt';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ReEncryptInput} from '../types/ReEncryptInput';
import {ReEncryptOutput} from '../types/ReEncryptOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class ReEncryptCommand implements __aws_types.Command<
    InputTypesUnion,
    ReEncryptInput,
    OutputTypesUnion,
    ReEncryptOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ReEncryptInput,
        ReEncryptOutput,
        _stream.Readable
    >();

    constructor(readonly input: ReEncryptInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<ReEncryptInput, ReEncryptOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ReEncrypt
        };

        return stack.resolve(
            handler<ReEncryptInput, ReEncryptOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}