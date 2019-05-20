import {
  AWSClient,
  MetadataBearer,
  ClientResolvedConfigurationBase,
  Command,
  CommandInput,
  HttpRequest
} from "@aws-sdk/types";
import { Readable } from "stream";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";

export interface OperationInput extends CommandInput {
  String: string;
}

export type InputTypesUnion = OperationInput;

export interface OperationOutput extends MetadataBearer {
  Data: string;
  $metadata: {};
}

export type OutputTypesUnion = OperationOutput;

const output: OperationOutput = { Data: "data", $metadata: {} };

const input: OperationInput = { String: "input" };

export const fooClient: AWSClient<
  InputTypesUnion,
  OutputTypesUnion,
  Readable
> = {
  config: {},
  middlewareStack: new MiddlewareStack<
    InputTypesUnion,
    OutputTypesUnion,
    Readable
  >(),
  send: (
    command: Command<
      InputTypesUnion,
      OperationInput,
      OutputTypesUnion,
      OperationOutput,
      ClientResolvedConfigurationBase<OutputTypesUnion, Readable>,
      Readable
    >
  ) => {
    return command.resolveMiddleware(this.middlewareStack, this.config)({
      input
    });
  }
};

export const operationCommand: Command<
  InputTypesUnion,
  OperationInput,
  OutputTypesUnion,
  OperationOutput,
  ClientResolvedConfigurationBase<OutputTypesUnion, Readable>,
  Readable
> = {
  middlewareStack: new MiddlewareStack<object, OutputTypesUnion, Readable>(),
  model: {} as any,
  input: {} as any,
  resolveMiddleware: (
    stack: MiddlewareStack<InputTypesUnion, OutputTypesUnion, Readable>
  ) => {
    return () => Promise.resolve(output);
  }
};

export const httpRequest: HttpRequest<Readable> = {
  protocol: "https:",
  path: "/foo",
  hostname: "foo-service.us-east-1.amazonaws.com",
  headers: {},
  method: "GET",
  body: ""
};
