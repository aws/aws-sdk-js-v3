import { HttpRequest, QueryParameterBag } from "@aws-sdk/types";

/**
 * @internal
 */
export const cloneRequest = ({ headers, query, ...rest }: HttpRequest): HttpRequest => ({
  ...rest,
  headers: { ...headers },
  query: query ? cloneQuery(query) : undefined,
});

export const cloneQuery = (query: QueryParameterBag): QueryParameterBag =>
  Object.keys(query).reduce((carry: QueryParameterBag, paramName: string) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param,
    };
  }, {});
