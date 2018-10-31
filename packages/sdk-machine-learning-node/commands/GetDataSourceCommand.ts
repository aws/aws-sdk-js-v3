import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetDataSource} from '../model/GetDataSource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetDataSourceInput} from '../types/GetDataSourceInput';
import {GetDataSourceOutput} from '../types/GetDataSourceOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class GetDataSourceCommand implements __aws_types.Command<
    InputTypesUnion,
    GetDataSourceInput,
    OutputTypesUnion,
    GetDataSourceOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetDataSourceInput,
        GetDataSourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetDataSourceInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<GetDataSourceInput, GetDataSourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetDataSource
        };

        return stack.resolve(
            handler<GetDataSourceInput, GetDataSourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}