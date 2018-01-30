import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {Decrypt} from '../model/Decrypt';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DecryptInput} from '../types/DecryptInput';
import {DecryptOutput} from '../types/DecryptOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class DecryptCommand implements __aws_types.Command<
    InputTypesUnion,
    DecryptInput,
    OutputTypesUnion,
    DecryptOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DecryptInput,
        DecryptOutput,
        _stream.Readable
    >();

    constructor(readonly input: DecryptInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<DecryptInput, DecryptOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: Decrypt
        };

        return stack.resolve(
            handler<DecryptInput, DecryptOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}