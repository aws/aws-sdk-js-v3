import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetHealthCheckLastFailureReason} from '../model/GetHealthCheckLastFailureReason';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetHealthCheckLastFailureReasonInput} from '../types/GetHealthCheckLastFailureReasonInput';
import {GetHealthCheckLastFailureReasonOutput} from '../types/GetHealthCheckLastFailureReasonOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetHealthCheckLastFailureReasonCommand implements __aws_types.Command<
    InputTypesUnion,
    GetHealthCheckLastFailureReasonInput,
    OutputTypesUnion,
    GetHealthCheckLastFailureReasonOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetHealthCheckLastFailureReasonInput,
        GetHealthCheckLastFailureReasonOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetHealthCheckLastFailureReasonInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetHealthCheckLastFailureReasonInput, GetHealthCheckLastFailureReasonOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetHealthCheckLastFailureReason
        };

        return stack.resolve(
            handler<GetHealthCheckLastFailureReasonInput, GetHealthCheckLastFailureReasonOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}