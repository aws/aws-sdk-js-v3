import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateRealtimeEndpoint} from '../model/CreateRealtimeEndpoint';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateRealtimeEndpointInput} from '../types/CreateRealtimeEndpointInput';
import {CreateRealtimeEndpointOutput} from '../types/CreateRealtimeEndpointOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateRealtimeEndpointCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateRealtimeEndpointInput,
    OutputTypesUnion,
    CreateRealtimeEndpointOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateRealtimeEndpointInput,
        CreateRealtimeEndpointOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateRealtimeEndpointInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateRealtimeEndpoint
        };

        return stack.resolve(
            handler<CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}