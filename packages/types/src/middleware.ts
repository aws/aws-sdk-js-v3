import {AbortSignal} from './abort';
import {
    HttpOptions,
    HttpRequest
} from './http';
import {OperationModel} from './protocol';
import {Logger} from './logger'

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
export interface Middleware<
    InputType extends object,
    OutputType extends object,
    StreamType = Uint8Array
> {
    /**
     * @param next The handler to invoke after this middleware has operated on
     * the user input and before this middleware operates on the output.
     *
     * @param context
     */
    new (
        next: Handler<InputType, OutputType, StreamType>,
        context: HandlerExecutionContext
    ): Handler<InputType, OutputType, StreamType>;
}

/**
 * The constructor for a class to be used as the terminal handler in a
 * middleware stack.
 */
export interface CoreHandlerConstructor<
    InputType extends object,
    OutputType extends object,
    StreamType = Uint8Array
> {
    new (
        context: HandlerExecutionContext
    ): Handler<InputType, OutputType, StreamType>;
}

export type Step = 'initialize'|'build'|'finalize';

export interface HandlerOptions {
    /**
     * Handlers are ordered using a "step" that describes the stage of command
     * execution at which the handler will be executed. The available steps are:
     *
     * - initialize: The input is being prepared and validated. Examples of
     *      typical initialization tasks include injecting default options and
     *      parameter validation.
     * - build: The input is being serialized into an HTTP request. The input
     *      should not be altered in middleware occupying this step, as it may
     *      have already been serialized into a request. Examples of typical
     *      build tasks include request construction and injecting HTTP headers.
     * - finalize: The request is being prepared to be sent over the wire. The
     *      request in this stage should already be semantically complete and
     *      should therefore only be altered as match the recipient's
     *      expectations. Examples of typical finalization tasks include request
     *      signing and injecting hop-by-hop headers.
     *
     *      Unlike initialization and build handlers, which are executed once
     *      per operation execution, finalization handlers will be executed for
     *      each HTTP request sent.
     *
     * @default 'build'
     */
    step?: Step;

    /**
     * A number that specifies how early in a given step of the middleware stack
     * a handler should be executed. Higher numeric priorities will be executed
     * earlier.
     *
     * @default 0
     */
    priority?: number;

    /**
     * A set of strings that identify the general purpose or important
     * characteristics of a given handler.
     */
    tags?: Set<string>;
}

export interface MiddlewareStack<
    InputType extends object,
    OutputType extends object,
    StreamType = Uint8Array
> {
    /**
     * Add middleware to the list, optionally specifying a step, priority, and
     * tags.
     *
     * Middleware registered at the same step and with the same priority may be
     * executed in any order.
     */
    add(
        middleware: Middleware<InputType, OutputType, StreamType>,
        options?: HandlerOptions
    ): void;

    /**
     * Create a shallow clone of this list. Step bindings and handler priorities
     * and tags are preserved in the copy.
     */
    clone(): MiddlewareStack<InputType, OutputType, StreamType>;

    /**
     * Create a list containing the middlewares in this list as well as the
     * middlewares in the `from` list. Neither source is modified, and step
     * bindings and handler priorities and tags are preserved in the copy.
     */
    concat(
        from: MiddlewareStack<InputType, OutputType, StreamType>
    ): MiddlewareStack<InputType, OutputType, StreamType>;

    /**
     * Removes middleware from the stack.
     *
     * If a string is provided, any entry in the stack whose tags contain that
     * string will be removed from the stack.
     *
     * If a middleware class is provided, all usages thereof will be removed.
     */
    remove(
        toRemove: Middleware<InputType, OutputType, StreamType>|string
    ): boolean;

    /**
     * Builds a single handler function from zero or more middleware classes and
     * a core handler. The core handler is meant to send command objects to AWS
     * services and return promises that will resolve with the operation result
     * or be rejected with an error.
     *
     * When a composed handler is invoked, the arguments will pass through all
     * middleware in a defined order, and the return from the innermost handler
     * will pass through all middleware in the reverse of that order.
     */
    resolve(
        handler: Handler<InputType, OutputType, StreamType>,
        context: HandlerExecutionContext
    ): Handler<InputType, OutputType, StreamType>;
}

/**
 * Data and helper objects that are not expected to change from one execution of
 * a composed handler to another.
 */
export interface HandlerExecutionContext {
    /**
     * TODO Define a logger interface
     */
    logger: Logger;

    /**
     * The serialization model for the input, output, and possible errors for
     * the operation executed by invoking the composed handler.
     */
    model: OperationModel;
}
