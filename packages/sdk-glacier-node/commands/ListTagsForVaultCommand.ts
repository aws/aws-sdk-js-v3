import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListTagsForVault} from '../model/ListTagsForVault';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTagsForVaultInput} from '../types/ListTagsForVaultInput';
import {ListTagsForVaultOutput} from '../types/ListTagsForVaultOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListTagsForVaultCommand implements __aws_types.Command<
    InputTypesUnion,
    ListTagsForVaultInput,
    OutputTypesUnion,
    ListTagsForVaultOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<ListTagsForVaultInput, ListTagsForVaultOutput, _stream.Readable>();

    constructor(readonly input: ListTagsForVaultInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<ListTagsForVaultInput, ListTagsForVaultOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTagsForVault
        };

        return stack.resolve(
            handler<ListTagsForVaultInput, ListTagsForVaultOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}