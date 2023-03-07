import { HttpRequest } from "@aws-sdk/types";

import { cloneRequest } from "./cloneRequest";
import { GENERATED_HEADERS } from "./constants";

/**
 * @private
 */
export const prepareRequest = (request: HttpRequest): HttpRequest => {
  // Create a clone of the request object that does not clone the body
  request = typeof (request as any).clone === "function" ? (request as any).clone() : cloneRequest(request);

  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }

  // When the request is an HttpRequest instance, it will have a destination
  // property which is used to get/set the path. It uses the URL interface, which
  // automatically encodes pathnames when necessary. During signing, the pathname
  // is meant to be signed as it was set on the HttpRequest object, but since URL
  // may have encoded it, we may have to decode it.
  let path = request.path;
  const url: URL | undefined = (request as any)?.destination;
  if (url != null) {
    let decodedPathname: string;
    try {
      decodedPathname = decodeURIComponent(url.pathname);
    } catch (e) {
      // If the pathname fails to decode, it wasn't encoded in the first place.
      decodedPathname = url.pathname;
    }
    // If URL modifies the decoded pathname, we know the original pathname was encoded.
    if (new URL(decodedPathname, url.origin).pathname !== decodedPathname) {
      path = decodedPathname;
    }
  }

  return {
    ...request,
    path,
  };
};
