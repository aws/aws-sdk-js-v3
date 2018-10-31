import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteQueryLoggingConfig} from '../model/DeleteQueryLoggingConfig';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteQueryLoggingConfigInput} from '../types/DeleteQueryLoggingConfigInput';
import {DeleteQueryLoggingConfigOutput} from '../types/DeleteQueryLoggingConfigOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class DeleteQueryLoggingConfigCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteQueryLoggingConfigInput,
    OutputTypesUnion,
    DeleteQueryLoggingConfigOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteQueryLoggingConfigInput,
        DeleteQueryLoggingConfigOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteQueryLoggingConfigInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<DeleteQueryLoggingConfigInput, DeleteQueryLoggingConfigOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteQueryLoggingConfig
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
            handler<DeleteQueryLoggingConfigInput, DeleteQueryLoggingConfigOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}