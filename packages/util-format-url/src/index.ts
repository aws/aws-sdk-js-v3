import {
    HttpRequest,
    QueryParameterBag,
} from '@aws/types';
import {
    escapeUri,
    escapeUriPath,
} from "@aws/util-uri-escape";

export function formatUrl(request: HttpRequest): string {
    let {
        protocol, 
        path,
        hostname,
        port,
        query
    } = request;
    if(protocol && protocol.substr(-1) !== ':') {
        protocol += ':';
    }
    if (port) {
        hostname += `:${port}`;
    }
    path = escapeUriPath(path);
    if (path && path.charAt(0) !== '/') {
        path = `/${path}`
    }
    let queryString = query ? generateQueryString(query) : '';
    if (queryString && queryString[0] !== '?') {
        queryString = `?${queryString}`
    }
    return `${protocol}//${hostname}${path}${queryString}`
}

function generateQueryString(query: QueryParameterBag): string {
    const parts: string[] = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = escapeUri(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${escapeUri(value[i])}`);
            }
        } else {
            let qsEntry = key;
            if (value || typeof value === 'string') {
                qsEntry += `=${escapeUri(value)}`;
            }
            parts.push(qsEntry);
        }
    }

    return parts.join('&');
}
