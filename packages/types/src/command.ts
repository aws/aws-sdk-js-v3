import {
    Handler,
    MiddlewareStack
} from './middleware';
import {MetadataBearer} from './response';

export interface Command<
    ClientInput extends object,
    InputType extends ClientInput,
    ClientOutput extends MetadataBearer,
    OutputType extends ClientOutput,
    ResolvedConfiguration,
    StreamType = Uint8Array
> {
    readonly input: InputType;

    resolveMiddleware(
        stack: MiddlewareStack<ClientInput, ClientOutput, StreamType>,
        configuration: ResolvedConfiguration
    ): Handler<InputType, OutputType>
}
