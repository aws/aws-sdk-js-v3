import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdateBatchPrediction} from '../model/UpdateBatchPrediction';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateBatchPredictionInput} from '../types/UpdateBatchPredictionInput';
import {UpdateBatchPredictionOutput} from '../types/UpdateBatchPredictionOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class UpdateBatchPredictionCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateBatchPredictionInput,
    OutputTypesUnion,
    UpdateBatchPredictionOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateBatchPredictionInput,
        UpdateBatchPredictionOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateBatchPredictionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<UpdateBatchPredictionInput, UpdateBatchPredictionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateBatchPrediction
        };

        return stack.resolve(
            handler<UpdateBatchPredictionInput, UpdateBatchPredictionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}