import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {AssociateVPCWithHostedZone} from '../model/AssociateVPCWithHostedZone';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AssociateVPCWithHostedZoneInput} from '../types/AssociateVPCWithHostedZoneInput';
import {AssociateVPCWithHostedZoneOutput} from '../types/AssociateVPCWithHostedZoneOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class AssociateVPCWithHostedZoneCommand implements __aws_types.Command<
    InputTypesUnion,
    AssociateVPCWithHostedZoneInput,
    OutputTypesUnion,
    AssociateVPCWithHostedZoneOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        AssociateVPCWithHostedZoneInput,
        AssociateVPCWithHostedZoneOutput,
        _stream.Readable
    >();

    constructor(readonly input: AssociateVPCWithHostedZoneInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<AssociateVPCWithHostedZoneInput, AssociateVPCWithHostedZoneOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AssociateVPCWithHostedZone
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
            handler<AssociateVPCWithHostedZoneInput, AssociateVPCWithHostedZoneOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}