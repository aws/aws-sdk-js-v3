import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {ScheduleKeyDeletion} from '../model/ScheduleKeyDeletion';
import {ScheduleKeyDeletionInput} from '../types/ScheduleKeyDeletionInput';
import {ScheduleKeyDeletionOutput} from '../types/ScheduleKeyDeletionOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class ScheduleKeyDeletionCommand implements __aws_types.Command<
    ScheduleKeyDeletionInput,
    ScheduleKeyDeletionOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {

    constructor(readonly input: ScheduleKeyDeletionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<ScheduleKeyDeletionInput, ScheduleKeyDeletionOutput, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<ScheduleKeyDeletionInput, ScheduleKeyDeletionOutput, _stream.Readable> {
        const {
            handler: Handler,
            httpHandler
        } = configuration;
        const stack = clientStack.clone();

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ScheduleKeyDeletion
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            class extends __aws_middleware_content_length.ContentLengthMiddleware {
                constructor(
                    next: __aws_types.Handler<any, any, any>
                ) {
                    super(
                        __aws_util_body_length_node.calculateBodyLength,
                        next
                    );
                }
            },
            {
                step: 'build',
                tags: contentLengthTag,
                priority: 80
            }
        );

        const coreHandler = new Handler(handlerExecutionContext);
        return stack.resolve(coreHandler, handlerExecutionContext);
    }
}