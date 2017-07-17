import {
    HeaderBag,
    HttpRequest,
    QueryParameterBag,
} from '@aws/types';

/**
 * Clone an HTTP request without cloning the body
 */
export function cloneRequest<StreamType>(
    {headers, query, ...rest}: HttpRequest<StreamType>
): HttpRequest<StreamType> {
    return {
        ...rest,
        headers: cloneHeaders(headers),
        query: query ? cloneQuery(query) : undefined,
    };
}

function cloneHeaders(headers: HeaderBag): HeaderBag {
    return Object.keys(headers).reduce((
        carry: HeaderBag,
        headerName: string
    ) => ({
        ...carry,
        [headerName.toLowerCase()]: headers[headerName],
    }), {});
}

function cloneQuery(query: QueryParameterBag): QueryParameterBag {
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
