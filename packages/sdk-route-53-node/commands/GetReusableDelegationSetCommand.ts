import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetReusableDelegationSet} from '../model/GetReusableDelegationSet';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetReusableDelegationSetInput} from '../types/GetReusableDelegationSetInput';
import {GetReusableDelegationSetOutput} from '../types/GetReusableDelegationSetOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetReusableDelegationSetCommand implements __aws_types.Command<
    InputTypesUnion,
    GetReusableDelegationSetInput,
    OutputTypesUnion,
    GetReusableDelegationSetOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetReusableDelegationSetInput,
        GetReusableDelegationSetOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetReusableDelegationSetInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetReusableDelegationSetInput, GetReusableDelegationSetOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetReusableDelegationSet
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
            handler<GetReusableDelegationSetInput, GetReusableDelegationSetOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}