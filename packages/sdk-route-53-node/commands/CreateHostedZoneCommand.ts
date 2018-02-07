import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateHostedZone} from '../model/CreateHostedZone';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateHostedZoneInput} from '../types/CreateHostedZoneInput';
import {CreateHostedZoneOutput} from '../types/CreateHostedZoneOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class CreateHostedZoneCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateHostedZoneInput,
    OutputTypesUnion,
    CreateHostedZoneOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateHostedZoneInput,
        CreateHostedZoneOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateHostedZoneInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<CreateHostedZoneInput, CreateHostedZoneOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateHostedZone
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
            handler<CreateHostedZoneInput, CreateHostedZoneOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}