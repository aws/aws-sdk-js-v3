import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListTagsForResources} from '../model/ListTagsForResources';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTagsForResourcesInput} from '../types/ListTagsForResourcesInput';
import {ListTagsForResourcesOutput} from '../types/ListTagsForResourcesOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ListTagsForResourcesCommand implements __aws_types.Command<
    InputTypesUnion,
    ListTagsForResourcesInput,
    OutputTypesUnion,
    ListTagsForResourcesOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListTagsForResourcesInput,
        ListTagsForResourcesOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTagsForResourcesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<ListTagsForResourcesInput, ListTagsForResourcesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTagsForResources
        };

        return stack.resolve(
            handler<ListTagsForResourcesInput, ListTagsForResourcesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}