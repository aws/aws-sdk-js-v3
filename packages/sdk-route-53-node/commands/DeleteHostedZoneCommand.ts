import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteHostedZone} from '../model/DeleteHostedZone';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteHostedZoneInput} from '../types/DeleteHostedZoneInput';
import {DeleteHostedZoneOutput} from '../types/DeleteHostedZoneOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class DeleteHostedZoneCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteHostedZoneInput,
    OutputTypesUnion,
    DeleteHostedZoneOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteHostedZoneInput,
        DeleteHostedZoneOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteHostedZoneInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<DeleteHostedZoneInput, DeleteHostedZoneOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteHostedZone
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
            handler<DeleteHostedZoneInput, DeleteHostedZoneOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}