import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {EnableKeyRotation} from '../model/EnableKeyRotation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {EnableKeyRotationInput} from '../types/EnableKeyRotationInput';
import {EnableKeyRotationOutput} from '../types/EnableKeyRotationOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class EnableKeyRotationCommand implements __aws_types.Command<
    InputTypesUnion,
    EnableKeyRotationInput,
    OutputTypesUnion,
    EnableKeyRotationOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        EnableKeyRotationInput,
        EnableKeyRotationOutput,
        _stream.Readable
    >();

    constructor(readonly input: EnableKeyRotationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<EnableKeyRotationInput, EnableKeyRotationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: EnableKeyRotation
        };

        return stack.resolve(
            handler<EnableKeyRotationInput, EnableKeyRotationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}