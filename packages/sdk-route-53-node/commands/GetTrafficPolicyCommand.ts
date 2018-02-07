import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetTrafficPolicy} from '../model/GetTrafficPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetTrafficPolicyInput} from '../types/GetTrafficPolicyInput';
import {GetTrafficPolicyOutput} from '../types/GetTrafficPolicyOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetTrafficPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    GetTrafficPolicyInput,
    OutputTypesUnion,
    GetTrafficPolicyOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetTrafficPolicyInput,
        GetTrafficPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetTrafficPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetTrafficPolicyInput, GetTrafficPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetTrafficPolicy
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
            handler<GetTrafficPolicyInput, GetTrafficPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}