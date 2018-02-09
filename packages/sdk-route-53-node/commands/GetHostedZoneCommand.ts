import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetHostedZone} from '../model/GetHostedZone';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetHostedZoneInput} from '../types/GetHostedZoneInput';
import {GetHostedZoneOutput} from '../types/GetHostedZoneOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetHostedZoneCommand implements __aws_types.Command<
    InputTypesUnion,
    GetHostedZoneInput,
    OutputTypesUnion,
    GetHostedZoneOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetHostedZoneInput,
        GetHostedZoneOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetHostedZoneInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetHostedZoneInput, GetHostedZoneOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetHostedZone
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
            handler<GetHostedZoneInput, GetHostedZoneOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}