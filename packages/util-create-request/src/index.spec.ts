import { createRequest } from "./index";
import {
  fooClient,
  operationCommand,
  InputTypesUnion,
  OperationInput,
  OperationOutput,
  OutputTypesUnion,
  httpRequest
} from "./foo.fixture";
import {
  HandlerArguments,
  HandlerExecutionContext,
  MetadataBearer,
  AWSClient,
  SerializeHandlerArguments,
  BuildHandlerArguments,
  FinalizeHandlerArguments
} from "@aws-sdk/types";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3-node";
import { Readable } from "stream";

describe("create-request", () => {
  it("should concat initialize and serialize middlewares from client and command", async () => {
    operationCommand.middlewareStack.add(
      next => args => {
        const request = (args as any).request || httpRequest;
        request.body += "1";
        return next(<SerializeHandlerArguments<OperationInput>>{
          ...args,
          request
        });
      },
      {
        step: "initialize"
      }
    );
    operationCommand.middlewareStack.add(
      next => (args: SerializeHandlerArguments<OperationInput>) => {
        args.request.body += "2";
        return next(args);
      },
      {
        step: "serialize"
      }
    );
    operationCommand.middlewareStack.add(
      next => (args: BuildHandlerArguments<OperationInput>) => {
        args.request.body += "3";
        return next(args);
      },
      {
        step: "build"
      }
    );
    operationCommand.middlewareStack.add(
      next => (args: FinalizeHandlerArguments<OperationInput>) => {
        args.request.body += "4";
        return next(args);
      },
      {
        step: "finalize"
      }
    );

    fooClient.middlewareStack.add(
      next => args => {
        const request = (args as any).request || httpRequest;
        request.body += "A";
        return next(<SerializeHandlerArguments<OperationInput>>{
          ...args,
          request
        });
      },
      {
        step: "initialize"
      }
    );
    fooClient.middlewareStack.add(
      next => (args: SerializeHandlerArguments<OperationInput>) => {
        args.request.body += "B";
        return next(args);
      },
      {
        step: "serialize"
      }
    );
    fooClient.middlewareStack.add(
      next => (args: BuildHandlerArguments<OperationInput>) => {
        args.request.body += "C";
        return next(args);
      },
      {
        step: "build"
      }
    );
    fooClient.middlewareStack.add(
      next => (args: FinalizeHandlerArguments<OperationInput>) => {
        args.request.body += "D";
        return next(args);
      },
      {
        step: "finalize"
      }
    );
    const request = await createRequest(
      fooClient as AWSClient<InputTypesUnion, MetadataBearer, Readable>,
      operationCommand
    );
    expect(request).toEqual({
      ...httpRequest,
      body: "1A2B"
    });
  });
});
