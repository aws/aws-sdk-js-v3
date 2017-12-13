import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {CreateKey} from '../model/CreateKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateKeyInput} from '../types/CreateKeyInput';
import {CreateKeyOutput} from '../types/CreateKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class CreateKeyCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateKeyInput,
    OutputTypesUnion,
    CreateKeyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<CreateKeyInput, CreateKeyOutput, _stream.Readable>();

    constructor(readonly input: CreateKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<CreateKeyInput, CreateKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateKey
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
            handler<CreateKeyInput, CreateKeyOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}