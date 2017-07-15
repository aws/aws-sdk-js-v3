import {
    HeaderBag,
    HttpEndpoint,
    HttpMessage,
    HttpRequest,
    QueryParameterBag,
} from '@aws/types';

/**
 * Clone an HTTP request without cloning the body
 */
export function cloneRequest<StreamType>(
    request: HttpRequest<StreamType>
): HttpRequest<StreamType> {
    return {
        ...request,
        headers: cloneHeaders(request),
        query: cloneQuery(request),
    };
}

function cloneHeaders({headers}: HttpMessage<any>): HeaderBag {
    return Object.keys(headers).reduce((
        carry: HeaderBag,
        headerName: string
    ) => ({
        ...carry,
        [headerName.toLowerCase()]: headers[headerName],
    }), {});
}

function cloneQuery({query}: HttpEndpoint): QueryParameterBag|undefined {
    if (query) {
        return Object.keys(query)
            .reduce((carry: QueryParameterBag, paramName: string) => {
                const param = query[paramName];
                return {
                    ...carry,
                        [paramName]: Array.isArray(param)
                        ? [...param]
                        : param
                    };
            }, {});
    }
}
