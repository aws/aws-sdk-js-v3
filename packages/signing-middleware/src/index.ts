import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeRequestMiddleware,
  RequestSigner,
  FinalizeHandlerOutput,
  HttpRequest,
  InjectableMiddleware
} from "@aws-sdk/types";

export function signingMiddleware<Input extends object, Output extends object>(
  signer: RequestSigner
): FinalizeRequestMiddleware<Input, Output> {
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

export function signingPlugin<Input extends object, Output extends object>(
  signer: RequestSigner
): InjectableMiddleware<Input, Output> {
  return {
    middleware: signingMiddleware<Input, Output>(signer),
    step: "finalizeRequest",
    tags: { SIGNATURE: true }
  };
}
