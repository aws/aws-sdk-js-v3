import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateEvaluation} from '../model/CreateEvaluation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateEvaluationInput} from '../types/CreateEvaluationInput';
import {CreateEvaluationOutput} from '../types/CreateEvaluationOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateEvaluationCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateEvaluationInput,
    OutputTypesUnion,
    CreateEvaluationOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateEvaluationInput,
        CreateEvaluationOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateEvaluationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<CreateEvaluationInput, CreateEvaluationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateEvaluation
        };

        return stack.resolve(
            handler<CreateEvaluationInput, CreateEvaluationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}