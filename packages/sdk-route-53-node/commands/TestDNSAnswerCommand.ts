import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {TestDNSAnswer} from '../model/TestDNSAnswer';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {TestDNSAnswerInput} from '../types/TestDNSAnswerInput';
import {TestDNSAnswerOutput} from '../types/TestDNSAnswerOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class TestDNSAnswerCommand implements __aws_types.Command<
    InputTypesUnion,
    TestDNSAnswerInput,
    OutputTypesUnion,
    TestDNSAnswerOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        TestDNSAnswerInput,
        TestDNSAnswerOutput,
        _stream.Readable
    >();

    constructor(readonly input: TestDNSAnswerInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<TestDNSAnswerInput, TestDNSAnswerOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: TestDNSAnswer
        };
        stack.add(
            __aws_route53_id_normalizer_middleware.idNormalizerMiddleware,
            {
                step: 'initialize',
                priority: 0,
                tags: {NORMALIZE_ROUTE53_IDS: true}
            }
        );
        return stack.resolve(
            handler<TestDNSAnswerInput, TestDNSAnswerOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}