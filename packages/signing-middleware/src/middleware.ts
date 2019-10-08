import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeRequestMiddleware,
  FinalizeHandlerOutput,
  InjectableMiddleware
} from "@aws-sdk/types";
import { AwsAuthConfiguration } from "./configurations";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function signingMiddleware<Input extends object, Output extends object>(
  options: AwsAuthConfiguration.Resolved
): FinalizeRequestMiddleware<Input, Output> {
  return (
    next: FinalizeHandler<Input, Output>
  ): FinalizeHandler<Input, Output> =>
    async function(
      args: FinalizeHandlerArguments<Input>
    ): Promise<FinalizeHandlerOutput<Output>> {
      if (!HttpRequest.isInstance(args.request)) return next(args);
      return next({
        ...args,
        request: await options.signer.sign(args.request)
      });
    };
}

export function signingPlugin<Input extends object, Output extends object>(
  options: AwsAuthConfiguration.Resolved
): InjectableMiddleware<Input, Output> {
  return {
    middleware: signingMiddleware<Input, Output>(options),
    step: "finalizeRequest",
    tags: { SIGNATURE: true }
  };
}
