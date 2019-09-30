import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { Protocol, Command } from "@aws-sdk/types";

export interface SmithyConfiguration<HandlerOptions> {
  protocol: Protocol<any, any, HandlerOptions>;
}

export type SmithyResolvedConfiguration<HandlerOptions> = SmithyConfiguration<
  HandlerOptions
>;

export class SmithyClient<HandlerOptions> {
  public middlewareStack = new MiddlewareStack<any, any>();
  readonly config: SmithyResolvedConfiguration<HandlerOptions>;
  constructor(config: SmithyConfiguration<HandlerOptions>) {
    this.config = config;
  }
  send<InputType, OutputType>(
    command: Command<
      any,
      InputType,
      any,
      OutputType,
      SmithyResolvedConfiguration<HandlerOptions>
    >,
    options?: HandlerOptions
  ): Promise<OutputType>;
  send<InputType, OutputType>(
    command: Command<
      any,
      InputType,
      any,
      OutputType,
      SmithyResolvedConfiguration<HandlerOptions>
    >,
    options: HandlerOptions,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType, OutputType>(
    command: Command<
      any,
      InputType,
      any,
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
