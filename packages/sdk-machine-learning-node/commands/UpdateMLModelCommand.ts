import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdateMLModel} from '../model/UpdateMLModel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateMLModelInput} from '../types/UpdateMLModelInput';
import {UpdateMLModelOutput} from '../types/UpdateMLModelOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class UpdateMLModelCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateMLModelInput,
    OutputTypesUnion,
    UpdateMLModelOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateMLModelInput,
        UpdateMLModelOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateMLModelInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<UpdateMLModelInput, UpdateMLModelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateMLModel
        };

        return stack.resolve(
            handler<UpdateMLModelInput, UpdateMLModelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}