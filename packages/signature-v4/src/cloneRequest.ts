import {
    HttpRequest,
    QueryParameterBag,
} from '@aws-sdk/types';

/**
 * @internal
 */
export function cloneRequest<StreamType>(
    {headers, query, ...rest}: HttpRequest<StreamType>
): HttpRequest<StreamType> {
    return {
        ...rest,
        headers: {...headers},
        query: query ? cloneQuery(query) : undefined,
    };
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
