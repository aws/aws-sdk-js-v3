import {
  AWSClient,
  Structure,
  MetadataBearer,
  ClientResolvedConfigurationBase,
  Command,
  CommandInput,
  Handler
} from "@aws-sdk/types";
import { Readable } from "stream";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";

interface OperationInput extends CommandInput {
  String: string;
}

type InputTypesUnion = OperationInput;

interface OperationOutput extends MetadataBearer {
  Data: string;
  $metadata: {};
}

type OutputTypesUnion = OperationOutput;

const output: OperationOutput = { Data: "data", $metadata: {} };

const input: OperationInput = { String: "input" };

export class FooClient
  implements AWSClient<InputTypesUnion, OutputTypesUnion, Readable> {
  readonly config = {};
  readonly middlewareStack = new MiddlewareStack<
    InputTypesUnion,
    OutputTypesUnion,
    Readable
  >();
  send(
    command: Command<
      InputTypesUnion,
      OperationInput,
      OutputTypesUnion,
      OperationOutput,
      ClientResolvedConfigurationBase<OutputTypesUnion, Readable>,
      Readable
    >
  ): Promise<OperationOutput> {
    return command.resolveMiddleware(this.middlewareStack, this.config)({
      input
    });
  }
}

export class OperationCommand
  implements
    Command<
      InputTypesUnion,
      OperationInput,
      OutputTypesUnion,
      OperationOutput,
      ClientResolvedConfigurationBase<OutputTypesUnion, Readable>,
      Readable
    > {
  readonly middlewareStack = new MiddlewareStack<
    InputTypesUnion,
    OutputTypesUnion,
    Readable
  >();
  readonly model: any = {};
  constructor(readonly input) {}
  resolveMiddleware(
    stack: MiddlewareStack<InputTypesUnion, OutputTypesUnion, Readable>
  ): Handler<OperationInput, OperationOutput> {
    return () => Promise.resolve(output);
  }
}
