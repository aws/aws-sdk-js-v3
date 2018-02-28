import {
    FinalizeHandler,
    FinalizeHandlerArguments,
    FinalizeMiddleware,
    RequestSigner,
} from '@aws/types';

export function signingMiddleware<StreamType>(
    signer: RequestSigner
): FinalizeMiddleware<any, any, StreamType> {
    return <Output extends object>(
        next: FinalizeHandler<any, Output, StreamType>
    ): FinalizeHandler<any, Output, StreamType> => async (
        args: FinalizeHandlerArguments<any, StreamType>
    ): Promise<Output> => next({
        ...args,
        request: await signer.sign(args.request),
    });
}
