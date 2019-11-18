import { HttpRequest } from "@aws-sdk/types";
import { GENERATED_HEADERS, HOST_HEADER } from "./constants";

/**
 * @internal
 */
export function prepareRequest(request: HttpRequest): HttpRequest {
  // Create a clone of the request object that does not clone the body
  request = request.clone();

  for (let headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }

  if (!(HOST_HEADER in request.headers)) {
    request.headers[HOST_HEADER] = request.hostname;
  }

  return request;
}
