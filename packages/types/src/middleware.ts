import { Logger } from "./logger";
import { AWSClient } from "./client";

export interface HandlerArguments<Input extends object> {
  /**
   * User input to a command. Reflects the userland representation of the
   * union of data types the command can effectively handle.
   */
  input: Input;
}

export interface HandlerOutput<Output extends object>
  extends DeserializeHandlerOutput<Output> {
  output: Output;
}

export interface SerializeHandlerArguments<Input extends object>
  extends HandlerArguments<Input> {
  /**
   * The user input serialized as a request object. The request object is unknown,
   * so you cannot modify it directly. When work with request, you need to guard its
   * type to e.g. HttpRequest with 'instanceof' operand
   *
   * During the build phase of the execution of a middleware stack, a built
   * request may or may not be available.
   */
  request?: unknown;
}

export interface SerializeHandlerOutput<Output extends object>
  extends HandlerOutput<Output> {}

export interface FinalizeHandlerArguments<Input extends object>
  extends HandlerArguments<Input> {
  /**
   * The user input serialized as a request.
   */
  request: unknown;
}

export interface FinalizeHandlerOutput<Output extends object>
  extends HandlerOutput<Output> {}

export interface BuildHandlerArguments<Input extends object>
  extends FinalizeHandlerArguments<Input> {}

export interface BuildHandlerOutput<Output extends object>
  extends HandlerOutput<Output> {}

export interface DeserializeHandlerArguments<Input extends object>
  extends FinalizeHandlerArguments<Input> {}

export interface DeserializeHandlerOutput<Output extends object> {
  /**
   * The raw response object from runtime is deserialized to structured output object.
   * The response object is unknown so you cannot modify it directly. When work with
   * response, you need to guard its type to e.g. HttpResponse with 'instanceof' operand.
   *
   * During the deserialize phase of the execution of a middleware stack, a deserialized
   * response may or may not be available
   */
  response: unknown;
  output?: Output;
}

export interface Handler<Input extends object, Output extends object> {
  /**
   * Asynchronously converts an input object into an output object.
   *
   * @param args  An object containing a input to the command as well as any
   *              associated or previously generated execution artifacts.
   */
  (args: HandlerArguments<Input>): Promise<HandlerOutput<Output>>;
}

export interface SerializeHandler<Input extends object, Output extends object> {
  /**
   * Asynchronously converts an input object into an output object.
   *
   * @param args  An object containing a input to the command as well as any
   *              associated or previously generated execution artifacts.
   */
  (args: SerializeHandlerArguments<Input>): Promise<
    SerializeHandlerOutput<Output>
  >;
}

export interface FinalizeHandler<Input extends object, Output extends object> {
  /**
   * Asynchronously converts an input object into an output object.
   *
   * @param args  An object containing a input to the command as well as any
   *              associated or previously generated execution artifacts.
   */
  (args: FinalizeHandlerArguments<Input>): Promise<
    FinalizeHandlerOutput<Output>
  >;
}

export interface BuildHandler<Input extends object, Output extends object>
  extends FinalizeHandler<Input, Output> {}

export interface DeserializeHandler<
  Input extends object,
  Output extends object
> {
  (args: DeserializeHandlerArguments<Input>): Promise<
    DeserializeHandlerOutput<Output>
  >;
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
  Output extends object
> {
  /**
   * @param next The handler to invoke after this middleware has operated on
   * the user input and before this middleware operates on the output.
   *
   * @param context Invariant data and functions for use by the handler.
   */
  (
    next: SerializeHandler<Input, Output>,
    context: HandlerExecutionContext
  ): SerializeHandler<Input, Output>;
}

/**
 * A factory function that creates functions implementing the {FinalizeHandler}
 * interface.
 */
export interface FinalizeRequestMiddleware<
  Input extends object,
  Output extends object
> {
  /**
   * @param next The handler to invoke after this middleware has operated on
   * the user input and before this middleware operates on the output.
   *
   * @param context Invariant data and functions for use by the handler.
   */
  (
    next: FinalizeHandler<Input, Output>,
    context: HandlerExecutionContext
  ): FinalizeHandler<Input, Output>;
}

export interface BuildMiddleware<Input extends object, Output extends object>
  extends FinalizeRequestMiddleware<Input, Output> {}

export interface DeserializeMiddleware<
  Input extends object,
  Output extends object
> {
  (next: DeserializeHandler<Input, Output>): DeserializeHandler<Input, Output>;
}

/**
 * A factory function that creates the terminal handler atop which a middleware
 * stack sits.
 */
export interface Terminalware {
  <Input extends object, Output extends object>(
    context: HandlerExecutionContext
  ): DeserializeHandler<Input, Output>;
}

export type Step =
  | "initialize"
  | "serialize"
  | "build"
  | "finalizeRequest"
  | "deserialize";

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
   * - finalizeRequest: The request is being prepared to be sent over the wire. The
   *      request in this stage should already be semantically complete and
   *      should therefore only be altered as match the recipient's
   *      expectations. Examples of typical finalization tasks include request
   *      signing and injecting hop-by-hop headers.
   * - deserialize: The response has arrived, the middleware here will deserialize
   *      the raw response object to structured response
   *
   *      Unlike initialization and build handlers, which are executed once
   *      per operation execution, finalization and deserialize handlers will be
   *      executed foreach HTTP request sent.
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

export interface FinalizeRequestHandlerOptions extends HandlerOptions {
  step: "finalizeRequest";
}

export interface DeserializeHandlerOptions extends HandlerOptions {
  step: "deserialize";
}

export interface MiddlewareStack<Input extends object, Output extends object> {
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
    middleware: SerializeMiddleware<Input, Output>,
    options: SerializeHandlerOptions
  ): void;

  /**
   * Add middleware to the list to be executed during the "build" phase,
   * optionally specifying a priority and tags.
   */
  add(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    options: BuildHandlerOptions
  ): void;

  /**
   * Add middleware to the list to be executed during the "finalizeRequest" phase,
   * optionally specifying a priority and tags.
   */
  add(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    options: FinalizeRequestHandlerOptions
  ): void;

  /**
   * Add middleware to the list to be executed during the "deserialize" phase,
   * optionally specifying a priority and tags.
   */
  add(
    middleware: DeserializeMiddleware<Input, Output>,
    options: DeserializeHandlerOptions
  ): void;

  /**
   * Create a shallow clone of this list. Step bindings and handler priorities
   * and tags are preserved in the copy.
   */
  clone(): MiddlewareStack<Input, Output>;

  /**
   * same to clone, but only filter in middlewares when evaluation callback
   * function returns true.
   */
  filter(
    callbackfn: (middlewareStats: HandlerOptions) => boolean
  ): MiddlewareStack<Input, Output>;

  /**
   * Create a list containing the middlewares in this list as well as the
   * middlewares in the `from` list. Neither source is modified, and step
   * bindings and handler priorities and tags are preserved in the copy.
   */
  concat<InputType extends Input, OutputType extends Output>(
    from: MiddlewareStack<InputType, OutputType>
  ): MiddlewareStack<InputType, OutputType>;

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
    handler: DeserializeHandler<InputType, OutputType>,
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
}

export type InjectableMiddleware<
  Input extends object = any,
  Output extends object = any
> =
  | {
      middleware: Middleware<Input, Output>;
      step: "initialize";
      priority?: number;
      tags?: { [tag: string]: any };
    }
  | {
      middleware: SerializeMiddleware<Input, Output>;
      step: "serialization";
      priority?: number;
      tags?: { [tag: string]: any };
    }
  | {
      middleware: FinalizeRequestMiddleware<Input, Output>;
      step: "build";
      priority?: number;
      tags?: { [tag: string]: any };
    }
  | {
      middleware: FinalizeRequestMiddleware<Input, Output>;
      step: "finalizeRequest";
      priority?: number;
      tags?: { [tag: string]: any };
    }
  | {
      middleware: DeserializeMiddleware<Input, Output>;
      step: "deserialize";
      priority?: number;
      tags?: { [tag: string]: any };
    };

// export type InjectableMiddleware<
//   Input extends object = any,
//   Output extends object = any
//   > = {
//     middleware: Middleware<Input, Output> | SerializeMiddleware<Input, Output> | FinalizeRequestMiddleware<Input, Output> | DeserializeMiddleware<Input, Output>
//     options: HandlerOptions & { step?: "initialize" } | SerializeHandlerOptions | BuildHandlerOptions | FinalizeRequestHandlerOptions | DeserializeHandlerOptions
//   }
