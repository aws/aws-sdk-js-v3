import {HttpRequest, HeaderBag} from "@aws/types";
import {HOST_HEADER, UNSIGNABLE_HEADERS} from "./constants";

export function getCanonicalHeaders(
    {headers, hostname}: HttpRequest<any>
): HeaderBag {
    const canonical: HeaderBag = {};
    for (let headerName of Object.keys(headers).sort()) {
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in UNSIGNABLE_HEADERS) {
            continue;
        }

        canonical[canonicalHeaderName] = headers[headerName].trim();
    }

    return canonical;
}
