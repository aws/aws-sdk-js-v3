import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { RequestHandler, MetadataBearer, Command, Client as IClient } from "@aws-sdk/types";

export interface SmithyConfiguration<HandlerOptions> {
  requestHandler: RequestHandler<any, any, HandlerOptions>;
  readonly apiVersion: string;
}

export type SmithyResolvedConfiguration<HandlerOptions> = SmithyConfiguration<HandlerOptions>;

export class Client<
  HandlerOptions,
  ClientInput extends object,
  ClientOutput extends MetadataBearer,
  ResolvedClientConfiguration extends SmithyResolvedConfiguration<HandlerOptions>
> implements IClient<ClientInput, ClientOutput, ResolvedClientConfiguration> {
  public middlewareStack = new MiddlewareStack<ClientInput, ClientOutput>();
  readonly config: ResolvedClientConfiguration;
  constructor(config: ResolvedClientConfiguration) {
    this.config = config;
  }
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<ClientInput, InputType, ClientOutput, OutputType, SmithyResolvedConfiguration<HandlerOptions>>,
    options?: HandlerOptions
  ): Promise<OutputType>;
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<ClientInput, InputType, ClientOutput, OutputType, SmithyResolvedConfiguration<HandlerOptions>>,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<ClientInput, InputType, ClientOutput, OutputType, SmithyResolvedConfiguration<HandlerOptions>>,
    options: HandlerOptions,
    cb: (err: any, data?: OutputType) => void
  ): void;
  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<ClientInput, InputType, ClientOutput, OutputType, SmithyResolvedConfiguration<HandlerOptions>>,
    optionsOrCb?: HandlerOptions | ((err: any, data?: OutputType) => void),
    cb?: (err: any, data?: OutputType) => void
  ): Promise<OutputType> | void {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
    const callback = typeof optionsOrCb === "function" ? (optionsOrCb as (err: any, data?: OutputType) => void) : cb;
    const handler = command.resolveMiddleware(this.middlewareStack as any, this.config, options);
    if (callback) {
      handler(command)
        .then(
          result => callback(null, result.output),
          (err: any) => callback(err)
        )
        .catch(
          // prevent any errors thrown in the callback from triggering an
          // unhandled promise rejection
          () => {}
        );
    } else {
      return handler(command).then(result => result.output);
    }
  }

  destroy() {
    if (this.config.requestHandler.destroy) this.config.requestHandler.destroy();
  }
}
