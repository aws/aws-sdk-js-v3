import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetCheckerIpRanges} from '../model/GetCheckerIpRanges';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCheckerIpRangesInput} from '../types/GetCheckerIpRangesInput';
import {GetCheckerIpRangesOutput} from '../types/GetCheckerIpRangesOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetCheckerIpRangesCommand implements __aws_types.Command<
    InputTypesUnion,
    GetCheckerIpRangesInput,
    OutputTypesUnion,
    GetCheckerIpRangesOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetCheckerIpRangesInput,
        GetCheckerIpRangesOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetCheckerIpRangesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetCheckerIpRangesInput, GetCheckerIpRangesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetCheckerIpRanges
        };

        return stack.resolve(
            handler<GetCheckerIpRangesInput, GetCheckerIpRangesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}