import { HttpRequest } from "./http";
import { OperationModel } from "./protocol";
import { Logger } from "./logger";

export interface HandlerArguments<Input extends object> {
  /**
   * User input to a command. Reflects the userland representation of the
   * union of data types the command can effectively handle.
   */
  input: Input;
}

export interface SerializeHandlerArguments<
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
   */
  request: HttpRequest<Stream>;
}

export interface BuildHandlerArguments<
  Input extends object,
  Stream = Uint8Array
> extends FinalizeHandlerArguments<Input, Stream> {}

export interface Handler<Input extends object, Output extends object> {
  /**
   * Asynchronously converts an input object into an output object.
   *
   * @param args  An object containing a input to the command as well as any
   *              associated or previously generated execution artifacts.
   */
  (args: HandlerArguments<Input>): Promise<Output>;
}

export interface SerializeHandler<
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
  (args: SerializeHandlerArguments<Input, Stream>): Promise<Output>;
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

export interface BuildHandler<
  Input extends object,
  Output extends object,
  Stream = Uint8Array
> extends FinalizeHandler<Input, Output, Stream> {}

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
  (next: Handler<Input, Output>, context: HandlerExecutionContext): Handler<
    Input,
    Output
  >;
}

/**
 * A factory function that creates functions implementing the {BuildHandler}
 * interface.
 */
export interface SerializeMiddleware<
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
    next: SerializeHandler<Input, Output, Stream>,
    context: HandlerExecutionContext
  ): SerializeHandler<Input, Output, Stream>;
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

export interface BuildMiddleware<
  Input extends object,
  Output extends object,
  Stream = Uint8Array
> extends FinalizeMiddleware<Input, Output, Stream> {}

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

export type Step = "initialize" | "serialize" | "build" | "finalize";

export interface HandlerOptions {
  /**
   * Handlers are ordered using a "step" that describes the stage of command
   * execution at which the handler will be executed. The available steps are:
   *
   * - initialize: The input is being prepared. Examples of typical
   *      initialization tasks include injecting default options computing
   *      derived parameters.
   * - serialize: The input is complete and ready to be serialized. Examples
   *      of typical serialization tasks include input validation and building
   *      an HTTP request from user input.
   * - build: The input has been serialized into an HTTP request, but that
   *      request may require further modification. Any request alterations
   *      will be applied to all retries. Examples of typical build tasks
   *      include injecting HTTP headers that describe a stable aspect of the
   *      request, such as `Content-Length` or a body checksum.
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
   * A map of strings to any that identify the general purpose or important
   * characteristics of a given handler.
   */
  tags?: { [tag: string]: any };
}

export interface SerializeHandlerOptions extends HandlerOptions {
  step: "serialize";
}

export interface BuildHandlerOptions extends HandlerOptions {
  step: "build";
}

export interface FinalizeHandlerOptions extends HandlerOptions {
  step: "finalize";
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
    options?: HandlerOptions & { step?: "initialize" }
  ): void;

  /**
   * Add middleware to the list to be executed during the "serialize" phase,
   * optionally specifying a priority and tags.
   */
  add(
    middleware: Middleware<Input, Output>,
    options: SerializeHandlerOptions
  ): void;

  /**
   * Add middleware to the list to be executed during the "build" phase,
   * optionally specifying a priority and tags.
   */
  add(
    middleware: FinalizeMiddleware<Input, Output, Stream>,
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
   * same to clone, but only filter in middlewares when evaluation callback
   * function returns true.
   */
  filter(
    callbackfn: (middlewareStats: HandlerOptions) => boolean
  ): MiddlewareStack<Input, Output, Stream>;

  /**
   * Create a list containing the middlewares in this list as well as the
   * middlewares in the `from` list. Neither source is modified, and step
   * bindings and handler priorities and tags are preserved in the copy.
   */
  concat<InputType extends Input, OutputType extends Output>(
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
  remove(toRemove: Middleware<Input, Output> | string): boolean;

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
  resolve<InputType extends Input, OutputType extends Output>(
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
