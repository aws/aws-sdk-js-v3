import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {GenerateDataKeyWithoutPlaintext} from '../model/GenerateDataKeyWithoutPlaintext';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GenerateDataKeyWithoutPlaintextInput} from '../types/GenerateDataKeyWithoutPlaintextInput';
import {GenerateDataKeyWithoutPlaintextOutput} from '../types/GenerateDataKeyWithoutPlaintextOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class GenerateDataKeyWithoutPlaintextCommand implements __aws_types.Command<
    InputTypesUnion,
    GenerateDataKeyWithoutPlaintextInput,
    OutputTypesUnion,
    GenerateDataKeyWithoutPlaintextOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GenerateDataKeyWithoutPlaintextInput, GenerateDataKeyWithoutPlaintextOutput, _stream.Readable>();

    constructor(readonly input: GenerateDataKeyWithoutPlaintextInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<GenerateDataKeyWithoutPlaintextInput, GenerateDataKeyWithoutPlaintextOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GenerateDataKeyWithoutPlaintext
        };

        return stack.resolve(
            handler<GenerateDataKeyWithoutPlaintextInput, GenerateDataKeyWithoutPlaintextOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}