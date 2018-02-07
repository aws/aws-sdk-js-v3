import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateDataSourceFromRDS} from '../model/CreateDataSourceFromRDS';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateDataSourceFromRDSInput} from '../types/CreateDataSourceFromRDSInput';
import {CreateDataSourceFromRDSOutput} from '../types/CreateDataSourceFromRDSOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateDataSourceFromRDSCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateDataSourceFromRDSInput,
    OutputTypesUnion,
    CreateDataSourceFromRDSOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateDataSourceFromRDSInput,
        CreateDataSourceFromRDSOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateDataSourceFromRDSInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateDataSourceFromRDS
        };

        return stack.resolve(
            handler<CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}