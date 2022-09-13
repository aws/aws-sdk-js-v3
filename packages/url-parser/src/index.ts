import { parseQueryString } from "@aws-sdk/querystring-parser";
import { Endpoint, QueryParameterBag, UrlParser } from "@aws-sdk/types";

export const parseUrl: UrlParser = (url: string | URL): Endpoint => {
  if (typeof url === 'string') {
    return parseUrl(new URL(url))
  }
  const { hostname, pathname, port, protocol, search } = url as URL;

  let query: QueryParameterBag | undefined;
  if (search) {
    query = parseQueryString(search);
  }

  return {
    hostname,
    port: port ? parseInt(port) : undefined,
    protocol,
    path: pathname,
    query,
  };
};
