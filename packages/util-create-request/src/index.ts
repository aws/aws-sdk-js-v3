import {
  HttpRequest,
  MetadataBearer,
  SerializeMiddleware
} from "@aws-sdk/types";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import { Client, Command } from "@aws-sdk/smithy-client";

export async function createRequest<
  InputTypesUnion extends object,
  InputType extends InputTypesUnion,
  OutputType extends MetadataBearer = MetadataBearer
>(
  client: Client<any, InputTypesUnion, MetadataBearer, any>,
  command: Command<InputType, OutputType, any, InputTypesUnion, MetadataBearer>
): Promise<HttpRequest> {
  const presignMiddleware: SerializeMiddleware<
    InputType,
    OutputType
  > = next => async args => {
    return { output: { request: args.request } as any, response: undefined };
  };
  const clientStack = client.middlewareStack.clone();
  const commandStack = command.middlewareStack.clone();
  const concatenatedStack = clientStack.concat(commandStack) as MiddlewareStack<
    InputType,
    OutputType
  >;
  //add middleware to the last of 'build' step
  concatenatedStack.add(presignMiddleware, {
    step: "serialize",
    priority: "low"
  });

  const handler = concatenatedStack.resolve((() => {}) as any, {
    logger: {} as any
  });
  //@ts-ignore
  return await handler(command).then(output => output.output.request);
}
