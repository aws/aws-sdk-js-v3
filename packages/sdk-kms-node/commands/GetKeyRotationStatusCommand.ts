import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetKeyRotationStatus} from '../model/GetKeyRotationStatus';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetKeyRotationStatusInput} from '../types/GetKeyRotationStatusInput';
import {GetKeyRotationStatusOutput} from '../types/GetKeyRotationStatusOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class GetKeyRotationStatusCommand implements __aws_types.Command<
    InputTypesUnion,
    GetKeyRotationStatusInput,
    OutputTypesUnion,
    GetKeyRotationStatusOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetKeyRotationStatusInput,
        GetKeyRotationStatusOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetKeyRotationStatusInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<GetKeyRotationStatusInput, GetKeyRotationStatusOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetKeyRotationStatus
        };

        return stack.resolve(
            handler<GetKeyRotationStatusInput, GetKeyRotationStatusOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}