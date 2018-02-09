import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateVPCAssociationAuthorization} from '../model/CreateVPCAssociationAuthorization';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateVPCAssociationAuthorizationInput} from '../types/CreateVPCAssociationAuthorizationInput';
import {CreateVPCAssociationAuthorizationOutput} from '../types/CreateVPCAssociationAuthorizationOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class CreateVPCAssociationAuthorizationCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateVPCAssociationAuthorizationInput,
    OutputTypesUnion,
    CreateVPCAssociationAuthorizationOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateVPCAssociationAuthorizationInput,
        CreateVPCAssociationAuthorizationOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateVPCAssociationAuthorizationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<CreateVPCAssociationAuthorizationInput, CreateVPCAssociationAuthorizationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateVPCAssociationAuthorization
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
            handler<CreateVPCAssociationAuthorizationInput, CreateVPCAssociationAuthorizationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}