import {
    Handler,
    MiddlewareStack
} from './middleware';
import {MetadataBearer} from './response';

export interface Command<
    InputType extends any,
    OutputType extends MetadataBearer,
    ResolvedConfiguration,
    StreamType = Uint8Array
> {
    readonly input: InputType;

    resolveMiddleware(
        stack: MiddlewareStack<InputType, OutputType, StreamType>,
        configuration: ResolvedConfiguration
    ): Handler<InputType, OutputType, StreamType>
}