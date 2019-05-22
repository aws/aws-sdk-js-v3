import {
  CommandInput,
  FinalizeHandler,
  FinalizeHandlerArguments,
  HttpRequest,
  AWSClient,
  Command,
  MetadataBearer,
  MiddlewareStack
} from "@aws-sdk/types";

export async function createRequest<
  InputTypesUnion extends object,
  InputType extends InputTypesUnion,
  StreamType,
  OutputType extends MetadataBearer = MetadataBearer
>(
  client: AWSClient<InputTypesUnion, MetadataBearer, StreamType>,
  command: Command<
    InputTypesUnion,
    InputType,
    MetadataBearer,
    OutputType,
    any,
    StreamType
  >
): Promise<HttpRequest<StreamType>> {
  const presignHandler: FinalizeHandler<
    any,
    HttpRequest<StreamType>,
    StreamType
  > = async (
    args: FinalizeHandlerArguments<CommandInput>
  ): Promise<HttpRequest<StreamType>> => Promise.resolve(args.request);
  const clientStack = client.middlewareStack.clone();
  const commandStack = (command.middlewareStack.clone() as unknown) as MiddlewareStack<
    InputType,
    any,
    StreamType
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
