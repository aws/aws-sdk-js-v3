import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetParametersForImport} from '../model/GetParametersForImport';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetParametersForImportInput} from '../types/GetParametersForImportInput';
import {GetParametersForImportOutput} from '../types/GetParametersForImportOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class GetParametersForImportCommand implements __aws_types.Command<
    InputTypesUnion,
    GetParametersForImportInput,
    OutputTypesUnion,
    GetParametersForImportOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetParametersForImportInput,
        GetParametersForImportOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetParametersForImportInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<GetParametersForImportInput, GetParametersForImportOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetParametersForImport
        };

        return stack.resolve(
            handler<GetParametersForImportInput, GetParametersForImportOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}