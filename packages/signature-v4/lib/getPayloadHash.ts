import {EMPTY_DATA_SHA_256, SHA256_HEADER, UNSIGNED_PAYLOAD} from "./constants";
import {HashConstructor, HttpRequest} from "@aws/types";
import {isArrayBuffer} from "@aws/is-array-buffer";
import {toHex} from '@aws/util-hex-encoding';

export function getPayloadHash(
    {headers, body}: HttpRequest<any>,
    hashConstructor: HashConstructor
): Promise<string> {
    if (SHA256_HEADER in headers) {
        return Promise.resolve(headers[SHA256_HEADER]);
    }

    let hashPromise: Promise<Uint8Array>;

    if (body == undefined) {
        hashPromise = Promise.resolve(EMPTY_DATA_SHA_256);
    } else {
        const hash = new hashConstructor();

        if (
            typeof body === 'string'
            || ArrayBuffer.isView(body)
            || isArrayBuffer(body)
        ) {
            hash.update(body);
            hashPromise = hash.digest();
        } else {
            // As any body that is not a string or binary data is a stream, this
            // body is unsignable. Attempt to send the request with an unsigned
            // payload, which may or may not be accepted by the service.
            return Promise.resolve(UNSIGNED_PAYLOAD);
        }
    }

    return hashPromise.then(toHex);
}
