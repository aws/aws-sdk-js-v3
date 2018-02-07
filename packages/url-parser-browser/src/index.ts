import { parseQueryString } from '@aws/querystring-parser';
import { HttpEndpoint, QueryParameterBag, UrlParser } from '@aws/types';

export const parseUrl: UrlParser = (url: string): HttpEndpoint => {
    const {
        hostname,
        pathname,
        port,
        protocol,
        search,
    } = new URL(url);

    let query: QueryParameterBag|undefined;
    if (search) {
        query = parseQueryString(search);
    }

    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    }
}
