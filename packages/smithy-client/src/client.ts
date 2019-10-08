import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import {
  Protocol,
  Command,
  MetadataBearer,
  InjectableMiddleware,
  HandlerOptions as InjectOptions
} from "@aws-sdk/types";

export interface SmithyConfiguration<HandlerOptions> {
  protocol: Protocol<any, any, HandlerOptions>;
}

export type SmithyResolvedConfiguration<HandlerOptions> = SmithyConfiguration<
  HandlerOptions
>;

export class Client<
  HandlerOptions = any,
  ClientInput extends object = any,
  ClientOutput extends MetadataBearer = any
> {
  public middlewareStack = new MiddlewareStack<ClientInput, ClientOutput>();
  readonly config: SmithyResolvedConfiguration<HandlerOptions>;
  constructor(config: SmithyConfiguration<HandlerOptions>) {
    this.config = config;
  }
  use(
    injectable: InjectableMiddleware<ClientInput, ClientOutput>,
    options: InjectOptions = {}
  ) {
    const { middleware, step, priority, tags } = injectable;
    this.middlewareStack.add(
      // @ts-ignore -- Middleware and option type matching safety is enforced by InjectableMiddleware types
      middleware,
      {
        step: options.step || step,
        priority: options.priority || priority,
        tags: { ...tags, ...options.tags }
      }
    );
  }
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<
      ClientInput,
      InputType,
      ClientOutput,
      OutputType,
      SmithyResolvedConfiguration<HandlerOptions>
    >,
    options?: HandlerOptions
  ): Promise<OutputType>;
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<
      ClientInput,
      InputType,
      ClientOutput,
      OutputType,
      SmithyResolvedConfiguration<HandlerOptions>
    >,
    options: HandlerOptions,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<
      ClientInput,
      InputType,
      ClientOutput,
      OutputType,
      SmithyResolvedConfiguration<HandlerOptions>
    >,
    options?: HandlerOptions,
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void {
    const handler = command.resolveMiddleware(
      this.middlewareStack as any,
      this.config,
      options
    );
    if (cb) {
      handler(command)
        .then(result => cb(null, result.output), (err: any) => cb(err))
        .catch(
          // prevent any errors thrown in the callback from triggering an
          // unhandled promise rejection
          () => {}
        );
    } else {
      return handler(command).then(result => result.output);
    }
  }
}
