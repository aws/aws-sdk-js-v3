import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteTrafficPolicy} from '../model/DeleteTrafficPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteTrafficPolicyInput} from '../types/DeleteTrafficPolicyInput';
import {DeleteTrafficPolicyOutput} from '../types/DeleteTrafficPolicyOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class DeleteTrafficPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteTrafficPolicyInput,
    OutputTypesUnion,
    DeleteTrafficPolicyOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteTrafficPolicyInput,
        DeleteTrafficPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteTrafficPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<DeleteTrafficPolicyInput, DeleteTrafficPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteTrafficPolicy
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
            handler<DeleteTrafficPolicyInput, DeleteTrafficPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}