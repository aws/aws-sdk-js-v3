import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {Encrypt} from '../model/Encrypt';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {EncryptInput} from '../types/EncryptInput';
import {EncryptOutput} from '../types/EncryptOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class EncryptCommand implements __aws_types.Command<
    InputTypesUnion,
    EncryptInput,
    OutputTypesUnion,
    EncryptOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        EncryptInput,
        EncryptOutput,
        _stream.Readable
    >();

    constructor(readonly input: EncryptInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<EncryptInput, EncryptOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: Encrypt
        };

        return stack.resolve(
            handler<EncryptInput, EncryptOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}