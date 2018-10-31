import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DescribeBatchPredictions} from '../model/DescribeBatchPredictions';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeBatchPredictionsInput} from '../types/DescribeBatchPredictionsInput';
import {DescribeBatchPredictionsOutput} from '../types/DescribeBatchPredictionsOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DescribeBatchPredictionsCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeBatchPredictionsInput,
    OutputTypesUnion,
    DescribeBatchPredictionsOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeBatchPredictionsInput,
        DescribeBatchPredictionsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeBatchPredictionsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DescribeBatchPredictionsInput, DescribeBatchPredictionsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeBatchPredictions
        };

        return stack.resolve(
            handler<DescribeBatchPredictionsInput, DescribeBatchPredictionsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}