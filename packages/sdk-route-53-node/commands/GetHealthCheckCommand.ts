import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetHealthCheck} from '../model/GetHealthCheck';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetHealthCheckInput} from '../types/GetHealthCheckInput';
import {GetHealthCheckOutput} from '../types/GetHealthCheckOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetHealthCheckCommand implements __aws_types.Command<
    InputTypesUnion,
    GetHealthCheckInput,
    OutputTypesUnion,
    GetHealthCheckOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetHealthCheckInput,
        GetHealthCheckOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetHealthCheckInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetHealthCheckInput, GetHealthCheckOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetHealthCheck
        };

        return stack.resolve(
            handler<GetHealthCheckInput, GetHealthCheckOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}