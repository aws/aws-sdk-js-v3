import {Credentials, HttpRequest} from "@aws/types";
import {cloneRequest} from "./cloneRequest";
import {
    AMZ_DATE_HEADER, GENERATED_HEADERS, HOST_HEADER,
    TOKEN_HEADER
} from "./constants";

export function prepareRequest<StreamType>(
    request: HttpRequest<StreamType>,
    credentials: Credentials,
    longDate: string
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

    if (credentials.sessionToken) {
        request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }

    request.headers[AMZ_DATE_HEADER] = longDate;

    return request;
}
