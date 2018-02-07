import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {AddTags} from '../model/AddTags';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AddTagsInput} from '../types/AddTagsInput';
import {AddTagsOutput} from '../types/AddTagsOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class AddTagsCommand implements __aws_types.Command<
    InputTypesUnion,
    AddTagsInput,
    OutputTypesUnion,
    AddTagsOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        AddTagsInput,
        AddTagsOutput,
        _stream.Readable
    >();

    constructor(readonly input: AddTagsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<AddTagsInput, AddTagsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AddTags
        };

        return stack.resolve(
            handler<AddTagsInput, AddTagsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}