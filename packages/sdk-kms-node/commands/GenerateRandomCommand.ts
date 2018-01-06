import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {GenerateRandom} from '../model/GenerateRandom';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GenerateRandomInput} from '../types/GenerateRandomInput';
import {GenerateRandomOutput} from '../types/GenerateRandomOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class GenerateRandomCommand implements __aws_types.Command<
    InputTypesUnion,
    GenerateRandomInput,
    OutputTypesUnion,
    GenerateRandomOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GenerateRandomInput, GenerateRandomOutput, _stream.Readable>();

    constructor(readonly input: GenerateRandomInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<GenerateRandomInput, GenerateRandomOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GenerateRandom
        };

        return stack.resolve(
            handler<GenerateRandomInput, GenerateRandomOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}