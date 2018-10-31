import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetHostedZoneCount} from '../model/GetHostedZoneCount';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetHostedZoneCountInput} from '../types/GetHostedZoneCountInput';
import {GetHostedZoneCountOutput} from '../types/GetHostedZoneCountOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetHostedZoneCountCommand implements __aws_types.Command<
    InputTypesUnion,
    GetHostedZoneCountInput,
    OutputTypesUnion,
    GetHostedZoneCountOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetHostedZoneCountInput,
        GetHostedZoneCountOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetHostedZoneCountInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetHostedZoneCountInput, GetHostedZoneCountOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetHostedZoneCount
        };

        return stack.resolve(
            handler<GetHostedZoneCountInput, GetHostedZoneCountOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}