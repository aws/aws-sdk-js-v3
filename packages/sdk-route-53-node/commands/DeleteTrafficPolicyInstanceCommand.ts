import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteTrafficPolicyInstance} from '../model/DeleteTrafficPolicyInstance';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteTrafficPolicyInstanceInput} from '../types/DeleteTrafficPolicyInstanceInput';
import {DeleteTrafficPolicyInstanceOutput} from '../types/DeleteTrafficPolicyInstanceOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class DeleteTrafficPolicyInstanceCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteTrafficPolicyInstanceInput,
    OutputTypesUnion,
    DeleteTrafficPolicyInstanceOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteTrafficPolicyInstanceInput,
        DeleteTrafficPolicyInstanceOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteTrafficPolicyInstanceInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<DeleteTrafficPolicyInstanceInput, DeleteTrafficPolicyInstanceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteTrafficPolicyInstance
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
            handler<DeleteTrafficPolicyInstanceInput, DeleteTrafficPolicyInstanceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}