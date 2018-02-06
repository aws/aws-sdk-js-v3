import * as __aws_location_constraint_middleware from '@aws/location-constraint-middleware';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateBucket} from '../model/CreateBucket';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateBucketInput} from '../types/CreateBucketInput';
import {CreateBucketOutput} from '../types/CreateBucketOutput';
import {S3ResolvedConfiguration} from '../S3Configuration';

export class CreateBucketCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateBucketInput,
    OutputTypesUnion,
    CreateBucketOutput,
    S3ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CreateBucketInput,
        CreateBucketOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateBucketInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: S3ResolvedConfiguration
    ): __aws_types.Handler<CreateBucketInput, CreateBucketOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateBucket
        };
        stack.add(
            __aws_location_constraint_middleware.locationConstraintMiddleware(configuration.region),
            {
                step: 'initialize',
                priority: 0
            }
        );
        return stack.resolve(
            handler<CreateBucketInput, CreateBucketOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}