import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateHealthCheck} from '../model/CreateHealthCheck';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateHealthCheckInput} from '../types/CreateHealthCheckInput';
import {CreateHealthCheckOutput} from '../types/CreateHealthCheckOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class CreateHealthCheckCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateHealthCheckInput,
    OutputTypesUnion,
    CreateHealthCheckOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateHealthCheckInput,
        CreateHealthCheckOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateHealthCheckInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<CreateHealthCheckInput, CreateHealthCheckOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateHealthCheck
        };

        return stack.resolve(
            handler<CreateHealthCheckInput, CreateHealthCheckOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}