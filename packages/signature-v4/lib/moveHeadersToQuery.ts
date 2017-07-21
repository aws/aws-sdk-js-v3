import {cloneRequest} from "./cloneRequest";
import {HOST_HEADER} from "./constants";
import {HttpRequest, QueryParameterBag} from "@aws/types";

export function moveHeadersToQuery<StreamType>(
    request: HttpRequest<StreamType>
): HttpRequest<StreamType> & {query: QueryParameterBag} {
    const {headers, query = {} as QueryParameterBag} = cloneRequest(request);
    for (let name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.substr(0, 5) === 'x-amz') {
            query[name] = headers[name];
        }

        if (lname !== HOST_HEADER) {
            delete headers[name];
        }
    }

    return {
        ...request,
        headers,
        query,
    };
}
