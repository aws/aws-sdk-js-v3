import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteEvaluation} from '../model/DeleteEvaluation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteEvaluationInput} from '../types/DeleteEvaluationInput';
import {DeleteEvaluationOutput} from '../types/DeleteEvaluationOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DeleteEvaluationCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteEvaluationInput,
    OutputTypesUnion,
    DeleteEvaluationOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteEvaluationInput,
        DeleteEvaluationOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteEvaluationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DeleteEvaluationInput, DeleteEvaluationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteEvaluation
        };

        return stack.resolve(
            handler<DeleteEvaluationInput, DeleteEvaluationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}