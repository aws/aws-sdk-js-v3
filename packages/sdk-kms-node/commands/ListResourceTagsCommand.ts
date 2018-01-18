import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListResourceTags} from '../model/ListResourceTags';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListResourceTagsInput} from '../types/ListResourceTagsInput';
import {ListResourceTagsOutput} from '../types/ListResourceTagsOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class ListResourceTagsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListResourceTagsInput,
    OutputTypesUnion,
    ListResourceTagsOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<ListResourceTagsInput, ListResourceTagsOutput, _stream.Readable>();

    constructor(readonly input: ListResourceTagsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<ListResourceTagsInput, ListResourceTagsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListResourceTags
        };

        return stack.resolve(
            handler<ListResourceTagsInput, ListResourceTagsOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}