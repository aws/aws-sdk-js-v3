import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DescribeEvaluations} from '../model/DescribeEvaluations';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeEvaluationsInput} from '../types/DescribeEvaluationsInput';
import {DescribeEvaluationsOutput} from '../types/DescribeEvaluationsOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DescribeEvaluationsCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeEvaluationsInput,
    OutputTypesUnion,
    DescribeEvaluationsOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeEvaluationsInput,
        DescribeEvaluationsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeEvaluationsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DescribeEvaluationsInput, DescribeEvaluationsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeEvaluations
        };

        return stack.resolve(
            handler<DescribeEvaluationsInput, DescribeEvaluationsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}