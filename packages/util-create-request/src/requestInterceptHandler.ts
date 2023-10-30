import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import {
  Client,
  HandlerExecutionContext,
  HttpHandlerOptions,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  RequestHandlerOutput,
} from "@smithy/types";

/**
 * @public
 *
 * @param client - client to modify. The client's operations will return the HttpRequest
 * generated instead of making the request. You can use this to see how to construct
 * requests. The client cannot be used to make regular requests after calling this!
 *
 */
export function returnHttpRequest(client: Client<any, any, any>) {
  client.config.requestHandler = new RequestInterceptHandler();
  client.middlewareStack.add(requestInterceptMiddleware, requestInterceptMiddlewareOptions);
}

const errorIdentifier = Symbol("AWS_SDK_REQUEST_DEBUG");

/**
 * @internal
 */
export class RequestInterceptHandler implements HttpHandler<any> {
  public async handle(
    request: HttpRequest,
    handlerOptions?: HttpHandlerOptions
  ): Promise<RequestHandlerOutput<HttpResponse>> {
    throw {
      [errorIdentifier]: true,
      request: request,
    };
  }
  updateHttpClientConfig(key: any, value: any): void {}
  httpHandlerConfigs(): any {
    return {};
  }
}

/**
 * @internal
 */
export const requestInterceptMiddleware =
  (next: InitializeHandler<any, any>, context: HandlerExecutionContext): InitializeHandler<any, any> =>
  async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<any>> => {
    try {
      return await next(args);
    } catch (e) {
      if (e[errorIdentifier]) {
        return {
          output: e.request,
        } as any;
      }
      throw e;
    }
  };

/**
 * @internal
 */
export const requestInterceptMiddlewareOptions: InitializeHandlerOptions = {
  name: "requestErrorCatcher",
  step: "initialize",
  tags: [],
  override: true,
};
