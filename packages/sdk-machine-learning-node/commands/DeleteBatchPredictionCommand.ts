import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteBatchPrediction} from '../model/DeleteBatchPrediction';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteBatchPredictionInput} from '../types/DeleteBatchPredictionInput';
import {DeleteBatchPredictionOutput} from '../types/DeleteBatchPredictionOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DeleteBatchPredictionCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteBatchPredictionInput,
    OutputTypesUnion,
    DeleteBatchPredictionOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteBatchPredictionInput,
        DeleteBatchPredictionOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteBatchPredictionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DeleteBatchPredictionInput, DeleteBatchPredictionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteBatchPrediction
        };

        return stack.resolve(
            handler<DeleteBatchPredictionInput, DeleteBatchPredictionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}