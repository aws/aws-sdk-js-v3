import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateDataSourceFromRedshift} from '../model/CreateDataSourceFromRedshift';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateDataSourceFromRedshiftInput} from '../types/CreateDataSourceFromRedshiftInput';
import {CreateDataSourceFromRedshiftOutput} from '../types/CreateDataSourceFromRedshiftOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateDataSourceFromRedshiftCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateDataSourceFromRedshiftInput,
    OutputTypesUnion,
    CreateDataSourceFromRedshiftOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateDataSourceFromRedshiftInput,
        CreateDataSourceFromRedshiftOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateDataSourceFromRedshiftInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<CreateDataSourceFromRedshiftInput, CreateDataSourceFromRedshiftOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateDataSourceFromRedshift
        };

        return stack.resolve(
            handler<CreateDataSourceFromRedshiftInput, CreateDataSourceFromRedshiftOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}