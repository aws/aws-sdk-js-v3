import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DescribeTags} from '../model/DescribeTags';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeTagsInput} from '../types/DescribeTagsInput';
import {DescribeTagsOutput} from '../types/DescribeTagsOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DescribeTagsCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeTagsInput,
    OutputTypesUnion,
    DescribeTagsOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeTagsInput,
        DescribeTagsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeTagsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DescribeTagsInput, DescribeTagsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeTags
        };

        return stack.resolve(
            handler<DescribeTagsInput, DescribeTagsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}