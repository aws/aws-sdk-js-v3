import {EMPTY_DATA_SHA_256, SHA256_HEADER, UNSIGNED_PAYLOAD} from "./constants";
import {HashConstructor, HttpRequest, StreamCollector} from "@aws/types";
import {isArrayBuffer} from "@aws/is-array-buffer";
import {toHex} from '@aws/util-hex-encoding';

export function getPayloadHash<StreamType>(
    request: HttpRequest<StreamType>,
    hashConstructor: HashConstructor,
    streamCollector?: StreamCollector<StreamType>
): Promise<string> {
    if (SHA256_HEADER in request.headers) {
        return Promise.resolve(request.headers[SHA256_HEADER]);
    }

    const {body} = request;
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
            if (streamCollector) {
                hashPromise = streamCollector(body)
                    .then(data => {
                        // The stream may not be replayable, so replace the
                        // request's streaming body with the collected
                        // binary buffer
                        request.body = data;
                        hash.update(data);
                    }).then(() => hash.digest());
            } else {
                // If no stream collector was provided, this body is
                // unsignable. Attempt to send the request with an unsigned
                // payload, which may or may not be accepted by the service.
                return Promise.resolve(UNSIGNED_PAYLOAD);
            }
        }
    }

    return hashPromise.then(toHex);
}
