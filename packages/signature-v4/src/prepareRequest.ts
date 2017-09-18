import {Credentials, HttpRequest} from "@aws/types";
import {cloneRequest} from "./cloneRequest";
import {
    GENERATED_HEADERS,
    HOST_HEADER,
} from "./constants";

export function prepareRequest<StreamType>(
    request: HttpRequest<StreamType>
): HttpRequest<StreamType> {
    // Create a clone of the request object that does not clone the body
    request = cloneRequest(request);

    for (let headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }

    if (!(HOST_HEADER in request.headers)) {
        request.headers[HOST_HEADER] = request.hostname;
    }

    return request;
}
