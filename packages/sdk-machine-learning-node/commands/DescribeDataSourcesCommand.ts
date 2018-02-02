import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DescribeDataSources} from '../model/DescribeDataSources';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeDataSourcesInput} from '../types/DescribeDataSourcesInput';
import {DescribeDataSourcesOutput} from '../types/DescribeDataSourcesOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DescribeDataSourcesCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeDataSourcesInput,
    OutputTypesUnion,
    DescribeDataSourcesOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeDataSourcesInput,
        DescribeDataSourcesOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeDataSourcesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DescribeDataSourcesInput, DescribeDataSourcesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeDataSources
        };

        return stack.resolve(
            handler<DescribeDataSourcesInput, DescribeDataSourcesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}