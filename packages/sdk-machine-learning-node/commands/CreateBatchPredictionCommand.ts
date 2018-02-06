import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateBatchPrediction} from '../model/CreateBatchPrediction';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateBatchPredictionInput} from '../types/CreateBatchPredictionInput';
import {CreateBatchPredictionOutput} from '../types/CreateBatchPredictionOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateBatchPredictionCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateBatchPredictionInput,
    OutputTypesUnion,
    CreateBatchPredictionOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateBatchPredictionInput,
        CreateBatchPredictionOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateBatchPredictionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<CreateBatchPredictionInput, CreateBatchPredictionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateBatchPrediction
        };

        return stack.resolve(
            handler<CreateBatchPredictionInput, CreateBatchPredictionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}