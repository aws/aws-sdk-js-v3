import {AbortSignal} from './abort';
import {HttpRequest} from './http';
import {OperationModel} from './protocol';

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

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    abortSignal?: AbortSignal;
}

export interface Handler<
    InputType extends object,
    OutputType extends object,
    StreamType = Uint8Array
> {
    /**
     * Asynchronously converts an input object into an output object.
     *
     * @param args  An object containing a input to the command as well as any
     *              associated or previously generated execution artifacts.
     */
    handle(args: HandlerArguments<InputType, StreamType>): Promise<OutputType>;
}

/**
 * A constructor for a class that implements the {Handler} interface.
 */
export interface Middleware<T extends Handler<any, any>> {
    /**
     * @param next The handler to invoke after this middleware has operated on
     * the user input and before this middleware operates on the output.
     *
     * @param context
     */
    new (
        next: T,
        context: HandlerExecutionContext
    ): T;
}

/**
 * Data and helper objects that are not expected to change from one execution of
 * a composed handler to another.
 */
export interface HandlerExecutionContext {
    /**
     * TODO Define a logger interface
     */
    logger: any;

    /**
     * The serialization model for the input, output, and possible errors for
     * the operation executed by invoking the composed handler.
     */
    model: OperationModel;
}
