import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListProvisionedCapacity} from '../model/ListProvisionedCapacity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListProvisionedCapacityInput} from '../types/ListProvisionedCapacityInput';
import {ListProvisionedCapacityOutput} from '../types/ListProvisionedCapacityOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListProvisionedCapacityCommand implements __aws_types.Command<
    InputTypesUnion,
    ListProvisionedCapacityInput,
    OutputTypesUnion,
    ListProvisionedCapacityOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListProvisionedCapacityInput,
        ListProvisionedCapacityOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListProvisionedCapacityInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<ListProvisionedCapacityInput, ListProvisionedCapacityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListProvisionedCapacity
        };

        return stack.resolve(
            handler<ListProvisionedCapacityInput, ListProvisionedCapacityOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}