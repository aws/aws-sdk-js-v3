import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeMiddleware,
  RequestSigner,
  FinalizeHandlerOutput,
  HttpRequest
} from "@aws-sdk/types";

export function signingMiddleware<Input extends object, Output extends object>(
  signer: RequestSigner
): FinalizeMiddleware<Input, Output> {
  return (
    next: FinalizeHandler<Input, Output>
  ): FinalizeHandler<Input, Output> => async (
    args: FinalizeHandlerArguments<Input>
  ): Promise<FinalizeHandlerOutput<Output>> =>
    //TODO: check if request is HttpRequest instance
    next({
      ...args,
      request: await signer.sign(args.request as HttpRequest)
    });
}
