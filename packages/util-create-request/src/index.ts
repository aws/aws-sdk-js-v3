import {
  CommandInput,
  FinalizeHandler,
  FinalizeHandlerArguments,
  HttpRequest,
  AWSClient,
  Command as ICommand,
  MetadataBearer,
  ClientResolvedConfigurationBase,
  OperationModel
} from "@aws-sdk/types";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";

interface AbstractCommand<
  InputTypesUnion extends object,
  InputType extends InputTypesUnion,
  OutputTypesUnion extends object,
  OutputType extends OutputTypesUnion,
  StreamType = Uint8Array
> {
  readonly input: InputType;
  readonly model: OperationModel;
  readonly middlewareStack: MiddlewareStack<InputType, OutputType, StreamType>;
}

export async function createRequest<
  InputTypesUnion extends object,
  InputType extends InputTypesUnion,
  OutputType extends MetadataBearer
>(
  client: AWSClient<InputTypesUnion, MetadataBearer, any>,
  command: AbstractCommand<
    InputTypesUnion,
    InputType,
    MetadataBearer,
    OutputType,
    any
  >
): Promise<HttpRequest> {
  const presignHandler: FinalizeHandler<any, HttpRequest, any> = async (
    args: FinalizeHandlerArguments<CommandInput>
  ): Promise<HttpRequest> => {
    return Promise.resolve(args.request);
  };
  const clientStack = client.middlewareStack.clone();
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
