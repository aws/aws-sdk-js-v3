import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { Command as ICommand, MetadataBearer, Handler } from "@aws-sdk/types";

export abstract class Command<
  ClientInput extends object,
  Input extends ClientInput,
  ClientOutput extends MetadataBearer,
  Output extends ClientOutput,
  ResolvedClientConfiguration
>
  implements
    ICommand<
      ClientInput,
      Input,
      ClientOutput,
      Output,
      ResolvedClientConfiguration
    > {
  abstract input: Input;
  readonly middlewareStack = new MiddlewareStack<Input, Output>();
  abstract resolveMiddleware(
    stack: MiddlewareStack<ClientInput, ClientOutput>,
    configuration: ResolvedClientConfiguration,
    options: any
  ): Handler<Input, Output>;
}
