import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { buildQueryString } from "@aws-sdk/querystring-builder";
import { HttpHandlerOptions, Provider } from "@aws-sdk/types";
import { EventEmitter } from "events";

import { requestTimeout } from "./request-timeout";

/**
 * Represents the http options that can be passed to the xhr http client.
 */
export interface XhrHttpHandlerOptions {
  /**
   * The number of milliseconds a request can take before being automatically
   * terminated.
   */
  requestTimeout?: number;

  /**
   * Optionally way to provide instances of xhr.
   * The default is `new XMLHttpRequest()` from the global scope.
   * This can be used to attach listeners or other customization.
   */
  xhrFactory?: () => XMLHttpRequest | Promise<XMLHttpRequest>;

  /**
   * Will be called with the xhr instance before calling xhr.send.
   * Can be used to attach additional event listeners.
   */
  xhrBeforeSend?: (xhr: XMLHttpRequest) => void;
}

/**
 * An implementation of HttpHandler that uses XMLHttpRequest, which is
 * traditionally associated with browsers.
 */
export class XhrHttpHandler extends EventEmitter implements HttpHandler {
  /**
   * Events emitted as an EventEmitter.
   */
  public static EVENTS = {
    /**
     * Emitted for xhr on progress.
     * Payload is the native ProgressEvent.
     */
    PROGRESS: "progress",
    /**
     * Emitted for xhr.upload on progress.
     * Payload is the native ProgressEvent.
     */
    UPLOAD_PROGRESS: "upload.progress",
  };

  public static PROGRESS_EVENT_NAME = "progress";

  private config?: XhrHttpHandlerOptions;
  private readonly configProvider?: Provider<XhrHttpHandlerOptions>;

  public constructor(options?: XhrHttpHandlerOptions | Provider<XhrHttpHandlerOptions | undefined>) {
    super();
    if (typeof options === "function") {
      this.configProvider = async () => (await options()) || {};
    } else {
      this.config = options ?? {};
    }
  }

  public destroy(): void {
    // Do nothing. Connection pooling is handled by the browser.
  }

  public async handle(
    request: HttpRequest,
    { abortSignal }: HttpHandlerOptions = {}
  ): Promise<{ response: HttpResponse }> {
    if (!this.config && this.configProvider) {
      this.config = await this.configProvider();
    }
    const requestTimeoutInMs = Number(this.config!.requestTimeout) | 0;

    // if the request was already aborted, prevent doing extra work
    if (abortSignal?.aborted) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      throw abortError;
    }

    let path: string = request.path;
    if (request.query) {
      const queryString = buildQueryString(request.query);
      if (queryString) {
        path += `?${queryString}`;
      }
    }

    const { port, method } = request;
    const url = `${request.protocol}//${request.hostname}${port ? `:${port}` : ""}${path}`;
    const body = method === "GET" || method === "HEAD" ? undefined : request.body;

    const xhr: XMLHttpRequest =
      typeof this.config!.xhrFactory === "function" ? await this.config!.xhrFactory() : new XMLHttpRequest();

    const raceOfPromises: Promise<{ response: HttpResponse }>[] = [
      new Promise((resolve) => {
        xhr.upload.addEventListener("progress", (event: ProgressEvent) => {
          this.emit(XhrHttpHandler.EVENTS.UPLOAD_PROGRESS, event, request);
        });
        xhr.addEventListener("progress", (event: ProgressEvent) => {
          this.emit(XhrHttpHandler.EVENTS.PROGRESS, event, request);
        });
        xhr.addEventListener("readystatechange", () => {
          switch (xhr.readyState) {
            case XMLHttpRequest.DONE:
              const body = (() => {
                switch (xhr.responseType) {
                  case "document":
                  case "json":
                  case "text":
                  default:
                    const data = xhr.responseText.split("");
                    return new Blob(data);
                  case "arraybuffer":
                  case "blob":
                    return xhr.response;
                }
              })();
              resolve({
                response: new HttpResponse({
                  headers: this.responseHeaders(xhr.getAllResponseHeaders()),
                  statusCode: xhr.status,
                  body,
                }),
              });
              break;
          }
        });

        xhr.open(method, url);
        for (const [header, value] of Object.entries(request.headers)) {
          xhr.setRequestHeader(header, value);
        }
        if (typeof this.config!.xhrBeforeSend === "function") {
          this.config!.xhrBeforeSend(xhr);
        }
        xhr.send(body);
      }),
      requestTimeout(requestTimeoutInMs),
    ];
    if (abortSignal) {
      raceOfPromises.push(
        new Promise<never>((resolve, reject) => {
          abortSignal.onabort = () => {
            xhr.abort();
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };
        })
      );
    }
    return Promise.race(raceOfPromises);
  }

  /**
   * Converts XHR response headers to a map.
   * @param xhrHeaders - string to be parsed.
   */
  private responseHeaders(xhrHeaders: string): Record<string, string> {
    if (!xhrHeaders) {
      return {};
    }
    return xhrHeaders.split("\r\n").reduce((headerMap: Record<string, string>, line: string) => {
      const parts = line.split(": ");
      const header = parts.shift()!;
      const value = parts.join(": ");
      headerMap[header] = value;
      return headerMap;
    }, {});
  }
}
