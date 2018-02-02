import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {UpdateEvaluation} from '../model/UpdateEvaluation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateEvaluationInput} from '../types/UpdateEvaluationInput';
import {UpdateEvaluationOutput} from '../types/UpdateEvaluationOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class UpdateEvaluationCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateEvaluationInput,
    OutputTypesUnion,
    UpdateEvaluationOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateEvaluationInput,
        UpdateEvaluationOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateEvaluationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<UpdateEvaluationInput, UpdateEvaluationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateEvaluation
        };

        return stack.resolve(
            handler<UpdateEvaluationInput, UpdateEvaluationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}