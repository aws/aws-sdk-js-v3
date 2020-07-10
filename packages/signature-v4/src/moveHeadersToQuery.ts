import { cloneRequest } from "./cloneRequest";
import { HttpRequest, QueryParameterBag } from "@aws-sdk/types";

/**
 * @internal
 */
export function moveHeadersToQuery(request: HttpRequest): HttpRequest & { query: QueryParameterBag } {
  const { headers, query = {} as QueryParameterBag } =
    typeof (request as any).clone === "function" ? (request as any).clone() : cloneRequest(request);
  for (let name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.substr(0, 6) === "x-amz-") {
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
