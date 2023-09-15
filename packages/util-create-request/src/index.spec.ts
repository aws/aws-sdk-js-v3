import { constructStack } from "@smithy/middleware-stack";
import { HttpRequest } from "@smithy/protocol-http";
import { Client, Command } from "@smithy/smithy-client";
import {
  BuildHandlerArguments,
  FinalizeHandlerArguments,
  MetadataBearer,
  MiddlewareStack,
  SerializeHandlerArguments,
} from "@smithy/types";

import { createRequest } from "./index";

export interface OperationInput {
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

export const fooClient: Client<any, InputTypesUnion, OutputTypesUnion, any> = {
  config: {},
  middlewareStack: constructStack<InputTypesUnion, OutputTypesUnion>(),
  send: (command: Command<InputTypesUnion, OutputTypesUnion, any, OperationInput, OperationOutput>) =>
    command.resolveMiddleware(fooClient.middlewareStack, fooClient.config, undefined)({ input }),
  destroy: () => {},
};

export const operationCommand: Command<InputTypesUnion, OutputTypesUnion, any, OperationInput, MetadataBearer> = {
  middlewareStack: constructStack<OperationInput, OutputTypesUnion>(),
  input: {} as any,
  // @ts-ignore
  resolveMiddleware: (stack: MiddlewareStack<InputTypesUnion, OutputTypesUnion>) => {
    const concatStack = stack.concat(operationCommand.middlewareStack);
    return concatStack.resolve(() => Promise.resolve({ output, response: {} }), {} as any);
  },
};

export const httpRequest = new HttpRequest({
  protocol: "https:",
  path: "/foo",
  hostname: "foo-service.us-east-1.amazonaws.com",
  headers: {},
  method: "GET",
  body: "",
});

describe("create-request", () => {
  it("should concat initialize and serialize middlewares from client and command", async () => {
    operationCommand.middlewareStack.add(
      (next) => (args) => {
        const request = (args as any).request || httpRequest;
        request.body += "1";
        return next(<SerializeHandlerArguments<OperationInput>>{
          ...args,
          request,
        });
      },
      {
        step: "initialize",
      }
    );
    operationCommand.middlewareStack.add(
      (next) => (args: SerializeHandlerArguments<OperationInput>) => {
        if (HttpRequest.isInstance(args.request)) {
          args.request.body += "2";
        }
        return next(args);
      },
      {
        step: "serialize",
      }
    );
    operationCommand.middlewareStack.add(
      (next) => (args: BuildHandlerArguments<OperationInput>) => {
        if (HttpRequest.isInstance(args.request)) {
          args.request.body += "3";
        }
        return next(args);
      },
      {
        step: "build",
      }
    );
    operationCommand.middlewareStack.add(
      (next) => (args: FinalizeHandlerArguments<OperationInput>) => {
        if (HttpRequest.isInstance(args.request)) {
          args.request.body += "4";
        }
        return next(args);
      },
      {
        step: "finalizeRequest",
      }
    );

    fooClient.middlewareStack.add(
      (next) => (args) => {
        const request = (args as any).request || httpRequest;
        request.body += "A";
        return next(<SerializeHandlerArguments<OperationInput>>{
          ...args,
          request,
        });
      },
      {
        step: "initialize",
      }
    );
    fooClient.middlewareStack.add(
      (next) => (args: SerializeHandlerArguments<OperationInput>) => {
        if (HttpRequest.isInstance(args.request)) {
          args.request.body += "B";
        }
        return next(args);
      },
      {
        step: "serialize",
      }
    );
    fooClient.middlewareStack.add(
      (next) => (args: BuildHandlerArguments<OperationInput>) => {
        if (HttpRequest.isInstance(args.request)) {
          args.request.body += "C";
        }
        return next(args);
      },
      {
        step: "build",
      }
    );
    fooClient.middlewareStack.add(
      (next) => (args: FinalizeHandlerArguments<OperationInput>) => {
        if (HttpRequest.isInstance(args.request)) {
          args.request.body += "D";
        }
        return next(args);
      },
      {
        step: "finalizeRequest",
      }
    );
    const request = await createRequest(
      fooClient as unknown as Client<any, InputTypesUnion, MetadataBearer, any>,
      operationCommand
    );
    expect(request).toEqual({
      ...httpRequest,
      body: "A1B2C3",
    });
  });
});
