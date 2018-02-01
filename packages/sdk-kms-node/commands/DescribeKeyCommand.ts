import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DescribeKey} from '../model/DescribeKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeKeyInput} from '../types/DescribeKeyInput';
import {DescribeKeyOutput} from '../types/DescribeKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class DescribeKeyCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeKeyInput,
    OutputTypesUnion,
    DescribeKeyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeKeyInput,
        DescribeKeyOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<DescribeKeyInput, DescribeKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeKey
        };

        return stack.resolve(
            handler<DescribeKeyInput, DescribeKeyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}