import {
  CommandInput,
  FinalizeHandler,
  FinalizeHandlerArguments,
  HttpRequest,
  AWSClient,
  Command as ICommand,
  MetadataBearer,
  ClientResolvedConfigurationBase
} from "@aws-sdk/types";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";

export async function createRequest<
  InputTypes extends {},
  InputType extends InputTypes,
  OutputTypes extends MetadataBearer,
  OutputType extends OutputTypes
>(
  client: AWSClient<InputTypes, OutputTypes, any>,
  command: ICommand<
    InputTypes,
    InputType,
    OutputTypes,
    OutputType,
    ClientResolvedConfigurationBase<OutputTypes, any>,
    any
  >
): Promise<HttpRequest> {
  const presignHandler: FinalizeHandler<any, HttpRequest, any> = async (
    args: FinalizeHandlerArguments<CommandInput>
  ): Promise<HttpRequest> => {
    return Promise.resolve(args.request);
  };
  //cast to middleware stack interface instead of the one from @aws-sdk/types
  const clientStack = client.middlewareStack.clone() as MiddlewareStack<
    InputTypes,
    OutputTypes
  >;
  const commandStack = command.middlewareStack.clone() as MiddlewareStack<
    InputType,
    any
  >;
  const concatenatedStack = clientStack
    .concat(commandStack)
    .filter(middlewareStats => {
      return (
        middlewareStats.step === "initialize" ||
        middlewareStats.step === "serialize"
      );
    });

  const handler = concatenatedStack.resolve(presignHandler, {
    model: command.model,
    logger: {} as any
  });
  return await handler(command);
}
