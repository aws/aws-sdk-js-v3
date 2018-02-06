import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_modeled_endpoint_middleware from '@aws/modeled-endpoint-middleware';
import * as __aws_types from '@aws/types';
import * as __aws_url_parser_node from '@aws/url-parser-node';
import * as _stream from 'stream';
import {Predict} from '../model/Predict';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PredictInput} from '../types/PredictInput';
import {PredictOutput} from '../types/PredictOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class PredictCommand implements __aws_types.Command<
    InputTypesUnion,
    PredictInput,
    OutputTypesUnion,
    PredictOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        PredictInput,
        PredictOutput,
        _stream.Readable
    >();

    constructor(readonly input: PredictInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_types.Handler<PredictInput, PredictOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: Predict
        };
        stack.add(
            __aws_modeled_endpoint_middleware.modeledEndpointMiddleware<PredictInput>(
                configuration.urlParser,
                'PredictEndpoint'
            ),
            {
                step: 'build',
                priority: 50,
                tags: {APPLY_PREDICT_ENDPOINT: true}
            }
        );
        return stack.resolve(
            handler<PredictInput, PredictOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}