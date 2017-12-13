import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {UpdateKeyDescription} from '../model/UpdateKeyDescription';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateKeyDescriptionInput} from '../types/UpdateKeyDescriptionInput';
import {UpdateKeyDescriptionOutput} from '../types/UpdateKeyDescriptionOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class UpdateKeyDescriptionCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateKeyDescriptionInput,
    OutputTypesUnion,
    UpdateKeyDescriptionOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<UpdateKeyDescriptionInput, UpdateKeyDescriptionOutput, _stream.Readable>();

    constructor(readonly input: UpdateKeyDescriptionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<UpdateKeyDescriptionInput, UpdateKeyDescriptionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateKeyDescription
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            __aws_middleware_content_length.contentLengthMiddleware(
                __aws_util_body_length_node.calculateBodyLength
            ),
            {
                step: 'build',
                tags: contentLengthTag,
                priority: -80
            }
        );

        return stack.resolve(
            handler<UpdateKeyDescriptionInput, UpdateKeyDescriptionOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}