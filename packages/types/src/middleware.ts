import {HttpRequest} from './http';

export interface HandlerArguments<
    InputType extends object,
    StreamType = Uint8Array
> {
    /**
     * User input to a command. Reflects the userland representation of the
     * union of data types the command can effectively handle.
     */
    input: InputType;

    /**
     * The user input serialized as an HTTP request.
     */
    request?: HttpRequest<StreamType>;
}

/**
 * A function that asynchronous converts an input object into an output object.
 *
 * @param args  An object containing a input to the command as well as any
 *              associated or previously generated execution artifacts.
 */
export interface Handler<
    InputType extends object,
    OutputType extends object,
    StreamType = Uint8Array
> {
    (args: HandlerArguments<InputType, StreamType>): Promise<OutputType>;
}

/**
 * An object capable of decorating handler functions.
 */

/**
 * A higher-order function that creates a composite Handler consisting of this
 * middleware and a decorated handler. Intended to be used to compose complex
 * workflows into a single handler function.
 *
 * @param next The handler to invoke after this middleware has operated on
 * the user input and before this middleware operates on the output returned
 * by invoking `next`.
 */
export interface Middleware<
    InputType extends object,
    OutputType extends object,
    StreamType = Uint8Array
> {
    (
        next: Handler<InputType, OutputType, StreamType>
    ): Handler<InputType, OutputType, StreamType>;
}
