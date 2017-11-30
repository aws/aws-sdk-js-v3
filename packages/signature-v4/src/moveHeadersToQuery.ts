import {cloneRequest} from "./cloneRequest";
import {HOST_HEADER} from "./constants";
import {HttpRequest, QueryParameterBag} from "@aws/types";

/**
 * @internal
 */
export function moveHeadersToQuery<StreamType>(
    request: HttpRequest<StreamType>
): HttpRequest<StreamType> & {query: QueryParameterBag} {
    const {headers, query = {} as QueryParameterBag} = cloneRequest(request);
    for (let name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.substr(0, 6) === 'x-amz-') {
            query[name] = headers[name];
            delete headers[name];
        }
    }

    return {
        ...request,
        headers,
        query,
    };
}
