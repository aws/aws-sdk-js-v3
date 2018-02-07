import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetQueryLoggingConfig} from '../model/GetQueryLoggingConfig';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetQueryLoggingConfigInput} from '../types/GetQueryLoggingConfigInput';
import {GetQueryLoggingConfigOutput} from '../types/GetQueryLoggingConfigOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetQueryLoggingConfigCommand implements __aws_types.Command<
    InputTypesUnion,
    GetQueryLoggingConfigInput,
    OutputTypesUnion,
    GetQueryLoggingConfigOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetQueryLoggingConfigInput,
        GetQueryLoggingConfigOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetQueryLoggingConfigInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetQueryLoggingConfigInput, GetQueryLoggingConfigOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetQueryLoggingConfig
        };
        stack.add(
            __aws_route53_id_normalizer_middleware.idNormalizerMiddleware,
            {
                step: 'initialize',
                priority: 0,
                tags: {NORMALIZE_ROUTE53_IDS: true}
            }
        );
        return stack.resolve(
            handler<GetQueryLoggingConfigInput, GetQueryLoggingConfigOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}