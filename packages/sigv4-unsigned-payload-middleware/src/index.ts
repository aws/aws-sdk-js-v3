import {
    BuildHandler,
    BuildHandlerArguments,
    BuildMiddleware,
    HeaderBag,
} from '@aws/types';

const SIGV4_CHECKSUM_HEADER_NAME = 'X-Amz-Content-Sha256';
const LOWERCASE_SIGV4_CHECKSUM_HEADER_NAME = SIGV4_CHECKSUM_HEADER_NAME.toLowerCase();
const UNSIGNED_PAYLOAD_CHECKSUM = 'UNSIGNED_PAYLOAD';

export const sigV4UnsignedPayloadMiddleware: BuildMiddleware<any, any, any> = <
    Output extends object
>(
    next: BuildHandler<any, Output, any>
): BuildHandler<any, Output, any> => async (
    args: BuildHandlerArguments<any, any>
): Promise<Output> => {
    const {request} = args;

    const headers = {...request.headers};
    if (!hasChecksumHeader(headers)) {
        headers[SIGV4_CHECKSUM_HEADER_NAME] = UNSIGNED_PAYLOAD_CHECKSUM;
    }

    return next({
        ...args,
        request: {
            ...request,
            headers,
        },
    });
}

function hasChecksumHeader(headers: HeaderBag): boolean {
    for (const headerName of Object.keys(headers)) {
        if (LOWERCASE_SIGV4_CHECKSUM_HEADER_NAME === headerName.toLowerCase()) {
            return true;
        }
    }

    return false;
}
