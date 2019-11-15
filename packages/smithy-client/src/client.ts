import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import {
  RequestHandler,
  MetadataBearer,
  Command,
  Client as IClient
} from "@aws-sdk/types";

export interface SmithyConfiguration<HandlerOptions> {
  requestHandler: RequestHandler<any, any, HandlerOptions>;
}

export type SmithyResolvedConfiguration<HandlerOptions> = SmithyConfiguration<
  HandlerOptions
>;

export class Client<
  HandlerOptions,
  ClientInput extends object,
  ClientOutput extends MetadataBearer,
  ResolvedClientConfiguration extends SmithyResolvedConfiguration<
    HandlerOptions
  >
> implements IClient<ClientInput, ClientOutput, ResolvedClientConfiguration> {
  public middlewareStack = new MiddlewareStack<ClientInput, ClientOutput>();
  readonly config: ResolvedClientConfiguration;
  constructor(config: ResolvedClientConfiguration) {
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
  ): Promise<OutputType> {
    const handler = command.resolveMiddleware(
      this.middlewareStack as any,
      this.config,
      options
    );
    return handler(command).then(result => result.output);
  }
}
