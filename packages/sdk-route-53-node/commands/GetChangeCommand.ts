import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetChange} from '../model/GetChange';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetChangeInput} from '../types/GetChangeInput';
import {GetChangeOutput} from '../types/GetChangeOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetChangeCommand implements __aws_types.Command<
    InputTypesUnion,
    GetChangeInput,
    OutputTypesUnion,
    GetChangeOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetChangeInput,
        GetChangeOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetChangeInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetChangeInput, GetChangeOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetChange
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
            handler<GetChangeInput, GetChangeOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}