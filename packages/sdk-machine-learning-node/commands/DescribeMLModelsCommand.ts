import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DescribeMLModels} from '../model/DescribeMLModels';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeMLModelsInput} from '../types/DescribeMLModelsInput';
import {DescribeMLModelsOutput} from '../types/DescribeMLModelsOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DescribeMLModelsCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeMLModelsInput,
    OutputTypesUnion,
    DescribeMLModelsOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeMLModelsInput,
        DescribeMLModelsOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeMLModelsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<DescribeMLModelsInput, DescribeMLModelsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeMLModels
        };

        return stack.resolve(
            handler<DescribeMLModelsInput, DescribeMLModelsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}