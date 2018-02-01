import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {ListQueryLoggingConfigs} from '../model/ListQueryLoggingConfigs';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListQueryLoggingConfigsInput} from '../types/ListQueryLoggingConfigsInput';
import {ListQueryLoggingConfigsOutput} from '../types/ListQueryLoggingConfigsOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ListQueryLoggingConfigsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListQueryLoggingConfigsInput,
    OutputTypesUnion,
    ListQueryLoggingConfigsOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListQueryLoggingConfigsInput,
        ListQueryLoggingConfigsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListQueryLoggingConfigsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<ListQueryLoggingConfigsInput, ListQueryLoggingConfigsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListQueryLoggingConfigs
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
            handler<ListQueryLoggingConfigsInput, ListQueryLoggingConfigsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}