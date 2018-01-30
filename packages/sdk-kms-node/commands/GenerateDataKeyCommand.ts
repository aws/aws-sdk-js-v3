import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GenerateDataKey} from '../model/GenerateDataKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GenerateDataKeyInput} from '../types/GenerateDataKeyInput';
import {GenerateDataKeyOutput} from '../types/GenerateDataKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class GenerateDataKeyCommand implements __aws_types.Command<
    InputTypesUnion,
    GenerateDataKeyInput,
    OutputTypesUnion,
    GenerateDataKeyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GenerateDataKeyInput,
        GenerateDataKeyOutput,
        _stream.Readable
    >();

    constructor(readonly input: GenerateDataKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<GenerateDataKeyInput, GenerateDataKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GenerateDataKey
        };

        return stack.resolve(
            handler<GenerateDataKeyInput, GenerateDataKeyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}