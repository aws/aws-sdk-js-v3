import {HttpRequest, HeaderBag} from "@aws/types";
import {UNSIGNABLE_HEADERS} from "./constants";

export function getCanonicalHeaders(
    {headers}: HttpRequest<any>,
    unsignableHeaders: {[key: string]: any} = UNSIGNABLE_HEADERS
): HeaderBag {
    const canonical: HeaderBag = {};
    for (let headerName of Object.keys(headers).sort()) {
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in unsignableHeaders) {
            continue;
        }

        canonical[canonicalHeaderName] = headers[headerName].trim();
    }

    return canonical;
}
