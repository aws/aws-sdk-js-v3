import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {ImportKeyMaterial} from '../model/ImportKeyMaterial';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ImportKeyMaterialInput} from '../types/ImportKeyMaterialInput';
import {ImportKeyMaterialOutput} from '../types/ImportKeyMaterialOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class ImportKeyMaterialCommand implements __aws_types.Command<
    InputTypesUnion,
    ImportKeyMaterialInput,
    OutputTypesUnion,
    ImportKeyMaterialOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<ImportKeyMaterialInput, ImportKeyMaterialOutput, _stream.Readable>();

    constructor(readonly input: ImportKeyMaterialInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<ImportKeyMaterialInput, ImportKeyMaterialOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ImportKeyMaterial
        };

        return stack.resolve(
            handler<ImportKeyMaterialInput, ImportKeyMaterialOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}