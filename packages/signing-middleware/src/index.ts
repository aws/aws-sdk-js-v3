import {
    FinalizeHandler,
    FinalizeHandlerArguments,
    RequestSigner,
} from '@aws/types';

export function signingMiddleware<
    Input extends object,
    Output extends object,
    Stream
>(
    signer: RequestSigner,
    next: FinalizeHandler<Input, Output, Stream>
): FinalizeHandler<Input, Output, Stream> {
    return async (
        {request, ...rest}: FinalizeHandlerArguments<Input, Stream>
    ): Promise<Output> => next({
        ...rest,
        request: await signer.sign(request),
    });
}
