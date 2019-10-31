import { Logger } from "./logger";

export interface InitializeHandlerArguments<Input extends object> {
  /**
   * User input to a command. Reflects the userland representation of the
   * union of data types the command can effectively handle.
   */
  input: Input;
}

export interface InitializeHandlerOutput<Output extends object>
  extends DeserializeHandlerOutput<Output> {
  output: Output;
}

export interface SerializeHandlerArguments<Input extends object>
  extends InitializeHandlerArguments<Input> {
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
  extends InitializeHandlerOutput<Output> {}

export interface BuildHandlerArguments<Input extends object>
  extends FinalizeHandlerArguments<Input> {}

export interface BuildHandlerOutput<Output extends object>
  extends InitializeHandlerOutput<Output> {}

export interface FinalizeHandlerArguments<Input extends object>
  extends SerializeHandlerArguments<Input> {
  /**
   * The user input serialized as a request.
   */
  request: unknown;
}

export interface FinalizeHandlerOutput<Output extends object>
  extends InitializeHandlerOutput<Output> {}

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

export interface InitializeHandler<
  Input extends object,
  Output extends object
> {
  /**
   * Asynchronously converts an input object into an output object.
   *
   * @param args  An object containing a input to the command as well as any
   *              associated or previously generated execution artifacts.
   */
  (args: InitializeHandlerArguments<Input>): Promise<
    InitializeHandlerOutput<Output>
  >;
}

export type Handler<
  Input extends object,
  Output extends object
> = InitializeHandler<Input, Output>;

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

export interface BuildHandler<Input extends object, Output extends object> {
  (args: BuildHandlerArguments<Input>): Promise<BuildHandlerOutput<Output>>;
}

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
export interface InitializeMiddleware<
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
    next: InitializeHandler<Input, Output>,
    context: HandlerExecutionContext
  ): InitializeHandler<Input, Output>;
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

export interface BuildMiddleware<Input extends object, Output extends object> {
  (
    next: BuildHandler<Input, Output>,
    context: HandlerExecutionContext
  ): BuildHandler<Input, Output>;
}

export interface DeserializeMiddleware<
  Input extends object,
  Output extends object
> {
  (
    next: DeserializeHandler<Input, Output>,
    context: HandlerExecutionContext
  ): DeserializeHandler<Input, Output>;
}

export type MiddlewareType<Input extends object, Output extends object> =
  | InitializeMiddleware<Input, Output>
  | SerializeMiddleware<Input, Output>
  | BuildMiddleware<Input, Output>
  | FinalizeRequestMiddleware<Input, Output>
  | DeserializeMiddleware<Input, Output>;

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
   * A list of strings to any that identify the general purpose or important
   * characteristics of a given handler.
   */
  tags?: Array<string>;
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
  unshift(
    middleware: InitializeMiddleware<Input, Output>,
    name: string,
    options: HandlerOptions & { step?: "initialize" } & {
      beforeMiddleware?: InitializeMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: SerializeMiddleware<Input, Output>,
    name: string,
    options: SerializeHandlerOptions & {
      beforeMiddleware?: SerializeMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: BuildMiddleware<Input, Output>,
    name: string,
    options: BuildHandlerOptions & {
      beforeMiddleware?: BuildMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    name: string,
    options: FinalizeRequestHandlerOptions & {
      beforeMiddleware?: FinalizeRequestMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: DeserializeMiddleware<Input, Output>,
    name: string,
    options: DeserializeHandlerOptions & {
      beforeMiddleware?: DeserializeMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: SerializeMiddleware<Input, Output>,
    name: string,
    options: SerializeHandlerOptions & {
      afterMiddleware?: SerializeMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: BuildMiddleware<Input, Output>,
    name: string,
    options: BuildHandlerOptions & {
      afterMiddleware?: BuildMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    name: string,
    options: FinalizeRequestHandlerOptions & {
      afterMiddleware?: FinalizeRequestMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: DeserializeMiddleware<Input, Output>,
    name: string,
    options: DeserializeHandlerOptions & {
      afterMiddleware?: DeserializeMiddleware<Input, Output> | string;
    }
  ): void;

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
  ): InitializeHandler<InputType, OutputType>;
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

export interface Pluggable<Input extends object, Output extends object> {
  /**
   * A function that mutate the passed in middleware stack. Functions implementing
   * this interface can add, remove, modify existing middleware stack from clients
   * or commands
   */
  applyToStack: (stack: MiddlewareStack<Input, Output>) => void;
}
