import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteRealtimeEndpoint} from '../model/DeleteRealtimeEndpoint';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteRealtimeEndpointInput} from '../types/DeleteRealtimeEndpointInput';
import {DeleteRealtimeEndpointOutput} from '../types/DeleteRealtimeEndpointOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DeleteRealtimeEndpointCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteRealtimeEndpointInput,
    OutputTypesUnion,
    DeleteRealtimeEndpointOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteRealtimeEndpointInput,
        DeleteRealtimeEndpointOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteRealtimeEndpointInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DeleteRealtimeEndpointInput, DeleteRealtimeEndpointOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteRealtimeEndpoint
        };

        return stack.resolve(
            handler<DeleteRealtimeEndpointInput, DeleteRealtimeEndpointOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}