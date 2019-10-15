import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeRequestMiddleware,
  FinalizeHandlerOutput,
  Injectable
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

export const signingPlugin = (
  options: AwsAuthConfiguration.Resolved
): Injectable<any, any> => ({
  injectedMiddleware: [
    {
      middleware: signingMiddleware(options),
      step: "finalizeRequest",
      tags: { SIGNATURE: true }
    }
  ]
});
