import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {DeleteImportedKeyMaterial} from '../model/DeleteImportedKeyMaterial';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteImportedKeyMaterialInput} from '../types/DeleteImportedKeyMaterialInput';
import {DeleteImportedKeyMaterialOutput} from '../types/DeleteImportedKeyMaterialOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class DeleteImportedKeyMaterialCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteImportedKeyMaterialInput,
    OutputTypesUnion,
    DeleteImportedKeyMaterialOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<DeleteImportedKeyMaterialInput, DeleteImportedKeyMaterialOutput, _stream.Readable>();

    constructor(readonly input: DeleteImportedKeyMaterialInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<DeleteImportedKeyMaterialInput, DeleteImportedKeyMaterialOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteImportedKeyMaterial
        };

        return stack.resolve(
            handler<DeleteImportedKeyMaterialInput, DeleteImportedKeyMaterialOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}