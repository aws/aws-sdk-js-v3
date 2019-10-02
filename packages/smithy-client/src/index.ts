import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { Protocol, Command, MetadataBearer } from "@aws-sdk/types";

export interface SmithyConfiguration<HandlerOptions> {
  protocol: Protocol<any, any, HandlerOptions>;
}

export type SmithyResolvedConfiguration<HandlerOptions> = SmithyConfiguration<
  HandlerOptions
>;

export class SmithyClient<
  HandlerOptions = any,
  ClientInput extends object = any,
  ClientOutput extends MetadataBearer = any
> {
  public middlewareStack = new MiddlewareStack<ClientInput, ClientOutput>();
  readonly config: SmithyResolvedConfiguration<HandlerOptions>;
  constructor(config: SmithyConfiguration<HandlerOptions>) {
    this.config = config;
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
