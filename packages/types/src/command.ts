import {AbortSignal} from './abort';
import {HttpOptions} from './http';
import {Handler, MiddlewareStack} from './middleware';
import {MetadataBearer} from './response';

export interface CommandInput {
    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: HttpOptions;
}

export interface Command<
    ClientInput extends CommandInput,
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
