import {
    FinalizeHandler,
    FinalizeHandlerArguments,
    FinalizeMiddleware,
    RequestSigner,
} from '@aws/types';

export function signingMiddleware<
    Input extends object,
    Output extends object,
    Stream
>(signer: RequestSigner): FinalizeMiddleware<Input, Output, Stream> {
    return (
        next: FinalizeHandler<Input, Output, Stream>
    ): FinalizeHandler<Input, Output, Stream> => async (
        args: FinalizeHandlerArguments<Input, Stream>
    ): Promise<Output> => next({
        ...args,
        request: await signer.sign(args.request),
    });
}
