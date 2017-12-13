import {AbortSignal} from './abort';
import {HttpRequest} from './http';
import {OperationModel} from './protocol';
import {Logger} from './logger';

export interface HandlerArguments<Input extends object> {
    /**
     * User input to a command. Reflects the userland representation of the
     * union of data types the command can effectively handle.
     */
    input: Input;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    abortSignal?: AbortSignal;
}

export interface BuildHandlerArguments<
    Input extends object,
    Stream = Uint8Array
> extends HandlerArguments<Input> {
    /**
     * The user input serialized as an HTTP request.
     *
     * During the build phase of the execution of a middleware stack, a built
     * HTTP request may or may not be available.
     */
    request?: HttpRequest<Stream>;
}

export interface FinalizeHandlerArguments<
    Input extends object,
    Stream = Uint8Array
> extends HandlerArguments<Input> {
    /**
     * The user input serialized as an HTTP request.
     *
     * During the finalize phase of the execution of a middleware stack, a built
     * HTTP request will always be available.
     */
    request: HttpRequest<Stream>;
}

export interface Handler<Input extends object, Output extends object> {
    /**
     * Asynchronously converts an input object into an output object.
     *
     * @param args  An object containing a input to the command as well as any
     *              associated or previously generated execution artifacts.
     */
    (args: HandlerArguments<Input>): Promise<Output>;
}

export interface BuildHandler<
    Input extends object,
    Output extends object,
    Stream = Uint8Array
> {
    /**
     * Asynchronously converts an input object into an output object.
     *
     * @param args  An object containing a input to the command as well as any
     *              associated or previously generated execution artifacts.
     */
    (args: BuildHandlerArguments<Input, Stream>): Promise<Output>;
}

export interface FinalizeHandler<
    Input extends object,
    Output extends object,
    Stream = Uint8Array
> {
    /**
     * Asynchronously converts an input object into an output object.
     *
     * @param args  An object containing a input to the command as well as any
     *              associated or previously generated execution artifacts.
     */
    (args: FinalizeHandlerArguments<Input, Stream>): Promise<Output>;
}

/**
 * A factory function that creates functions implementing the {Handler}
 * interface.
 */
export interface Middleware<Input extends object, Output extends object> {
    /**
     * @param next The handler to invoke after this middleware has operated on
     * the user input and before this middleware operates on the output.
     *
     * @param context Invariant data and functions for use by the handler.
     */
    (
        next: Handler<Input, Output>,
        context: HandlerExecutionContext
    ): Handler<Input, Output>;
}

/**
 * A factory function that creates functions implementing the {BuildHandler}
 * interface.
 */
export interface BuildMiddleware<
    Input extends object,
    Output extends object,
    Stream = Uint8Array
> {
    /**
     * @param next The handler to invoke after this middleware has operated on
     * the user input and before this middleware operates on the output.
     *
     * @param context Invariant data and functions for use by the handler.
     */
    (
        next: BuildHandler<Input, Output, Stream>,
        context: HandlerExecutionContext
    ): BuildHandler<Input, Output, Stream>;
}


/**
 * A factory function that creates functions implementing the {FinalizeHandler}
 * interface.
 */
export interface FinalizeMiddleware<
    Input extends object,
    Output extends object,
    Stream = Uint8Array
> {
    /**
     * @param next The handler to invoke after this middleware has operated on
     * the user input and before this middleware operates on the output.
     *
     * @param context Invariant data and functions for use by the handler.
     */
    (
        next: FinalizeHandler<Input, Output, Stream>,
        context: HandlerExecutionContext
    ): FinalizeHandler<Input, Output, Stream>;
}

/**
 * A factory function that creates the terminal handler atop which a middleware
 * stack sits.
 */
export interface Terminalware<
    OutputConstraint extends object,
    Stream = Uint8Array
> {
    <Input extends object, Output extends OutputConstraint>(
        context: HandlerExecutionContext
    ): FinalizeHandler<Input, Output, Stream>;
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
     * @default 'initialize'
     */
    step?: Step;

    /**
     * A number that specifies how early in a given step of the middleware stack
     * a handler should be executed. Higher numeric priorities will be executed
     * earlier.
     *
     * Middleware registered at the same step and with the same priority may be
     * executed in any order.
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

export interface BuildHandlerOptions extends HandlerOptions {
    step: 'build';
}

export interface FinalizeHandlerOptions extends HandlerOptions {
    step: 'finalize';
}

export interface MiddlewareStack<
    Input extends object,
    Output extends object,
    Stream = Uint8Array
> {
    /**
     * Add middleware to the list, optionally specifying a priority and tags.
     */
    add(
        middleware: Middleware<Input, Output>,
        options?: HandlerOptions & {step?: 'initialize'}
    ): void;

    /**
     * Add middleware to the list to be executed during the "build" phase,
     * optionally specifying a priority and tags.
     */
    add(
        middleware: BuildMiddleware<Input, Output, Stream>,
        options: BuildHandlerOptions
    ): void;

    /**
     * Add middleware to the list to be executed during the "finalize" phase,
     * optionally specifying a priority and tags.
     */
    add(
        middleware: FinalizeMiddleware<Input, Output, Stream>,
        options: FinalizeHandlerOptions
    ): void;

    /**
     * Create a shallow clone of this list. Step bindings and handler priorities
     * and tags are preserved in the copy.
     */
    clone(): MiddlewareStack<Input, Output, Stream>;

    /**
     * Create a list containing the middlewares in this list as well as the
     * middlewares in the `from` list. Neither source is modified, and step
     * bindings and handler priorities and tags are preserved in the copy.
     */
    concat<
        InputType extends Input,
        OutputType extends Output
    >(
        from: MiddlewareStack<InputType, OutputType, Stream>
    ): MiddlewareStack<InputType, OutputType, Stream>;

    /**
     * Removes middleware from the stack.
     *
     * If a string is provided, any entry in the stack whose tags contain that
     * string will be removed from the stack.
     *
     * If a middleware class is provided, all usages thereof will be removed.
     */
    remove(toRemove: Middleware<Input, Output>|string): boolean;

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
    resolve<
        InputType extends Input,
        OutputType extends Output
    >(
        handler: FinalizeHandler<InputType, OutputType, Stream>,
        context: HandlerExecutionContext
    ): Handler<InputType, OutputType>;
}

/**
 * Data and helper objects that are not expected to change from one execution of
 * a composed handler to another.
 */
export interface HandlerExecutionContext {
    /**
     * A logger that may be invoked by any handler during execution of an
     * operation.
     */
    logger: Logger;

    /**
     * The serialization model for the input, output, and possible errors for
     * the operation executed by invoking the composed handler.
     */
    model: OperationModel;
}
