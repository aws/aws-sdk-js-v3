import { HttpRequest } from "@smithy/protocol-http";
import { Client } from "@smithy/smithy-client";
import {
  BuildHandlerArguments,
  FinalizeHandlerArguments,
  MetadataBearer,
  SerializeHandlerArguments,
} from "@smithy/types";

import { fooClient, httpRequest, InputTypesUnion, operationCommand, OperationInput } from "./foo.fixture";
import { createRequest } from "./index";

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
