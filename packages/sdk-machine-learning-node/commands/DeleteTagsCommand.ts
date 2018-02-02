import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteTags} from '../model/DeleteTags';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteTagsInput} from '../types/DeleteTagsInput';
import {DeleteTagsOutput} from '../types/DeleteTagsOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DeleteTagsCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteTagsInput,
    OutputTypesUnion,
    DeleteTagsOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteTagsInput,
        DeleteTagsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteTagsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DeleteTagsInput, DeleteTagsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteTags
        };

        return stack.resolve(
            handler<DeleteTagsInput, DeleteTagsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}