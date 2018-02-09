import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetGeoLocation} from '../model/GetGeoLocation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetGeoLocationInput} from '../types/GetGeoLocationInput';
import {GetGeoLocationOutput} from '../types/GetGeoLocationOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetGeoLocationCommand implements __aws_types.Command<
    InputTypesUnion,
    GetGeoLocationInput,
    OutputTypesUnion,
    GetGeoLocationOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetGeoLocationInput,
        GetGeoLocationOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetGeoLocationInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<GetGeoLocationInput, GetGeoLocationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetGeoLocation
        };

        return stack.resolve(
            handler<GetGeoLocationInput, GetGeoLocationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}