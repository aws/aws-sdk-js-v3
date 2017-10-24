import {EMPTY_DATA_SHA_256, SHA256_HEADER, UNSIGNED_PAYLOAD} from "./constants";
import {HashConstructor, HttpRequest} from "@aws/types";
import {isArrayBuffer} from "@aws/is-array-buffer";
import {toHex} from '@aws/util-hex-encoding';

/**
 * @internal
 */
export async function getPayloadHash(
    {headers, body}: HttpRequest<any>,
    hashConstructor: HashConstructor
): Promise<string> {
    if (SHA256_HEADER in headers) {
        return headers[SHA256_HEADER];
    }

    if (body == undefined) {
        return toHex(EMPTY_DATA_SHA_256);
    } else if (
        typeof body === 'string'
        || ArrayBuffer.isView(body)
        || isArrayBuffer(body)
    ) {
        const hashCtor = new hashConstructor();
        hashCtor.update(body);
        return toHex(await hashCtor.digest());
    }

    // As any defined body that is not a string or binary data is a stream, this
    // body is unsignable. Attempt to send the request with an unsigned payload,
    // which may or may not be accepted by the service.
    return UNSIGNED_PAYLOAD;
}
