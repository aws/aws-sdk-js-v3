import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {UpdateDataSource} from '../model/UpdateDataSource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateDataSourceInput} from '../types/UpdateDataSourceInput';
import {UpdateDataSourceOutput} from '../types/UpdateDataSourceOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class UpdateDataSourceCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateDataSourceInput,
    OutputTypesUnion,
    UpdateDataSourceOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateDataSourceInput,
        UpdateDataSourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateDataSourceInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<UpdateDataSourceInput, UpdateDataSourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateDataSource
        };

        return stack.resolve(
            handler<UpdateDataSourceInput, UpdateDataSourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}