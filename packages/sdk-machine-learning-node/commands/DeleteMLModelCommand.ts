import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteMLModel} from '../model/DeleteMLModel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteMLModelInput} from '../types/DeleteMLModelInput';
import {DeleteMLModelOutput} from '../types/DeleteMLModelOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DeleteMLModelCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteMLModelInput,
    OutputTypesUnion,
    DeleteMLModelOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteMLModelInput,
        DeleteMLModelOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteMLModelInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DeleteMLModelInput, DeleteMLModelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteMLModel
        };

        return stack.resolve(
            handler<DeleteMLModelInput, DeleteMLModelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}