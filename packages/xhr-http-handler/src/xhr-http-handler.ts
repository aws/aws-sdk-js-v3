import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { buildQueryString } from "@smithy/querystring-builder";
import { HttpHandlerOptions, Provider } from "@smithy/types";
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
}

/**
 * Events emitted by the XhrHttpHandler class as an EventEmitter.
 */
export type XhrHttpHandlerEvents = {
  /**
   * Emitted for xhr on progress.
   * Payload is the native ProgressEvent and the HttpRequest to allow
   * differentiation of multiple concurrent request events.
   */
  readonly PROGRESS: "xhr.progress";

  /**
   * Emitted for xhr.upload on progress.
   * Payload is the native ProgressEvent and the HttpRequest to allow
   * differentiation of multiple concurrent request events.
   */
  readonly UPLOAD_PROGRESS: "xhr.upload.progress";

  /**
   * Emits with the xhr object after it is instantiated with new.
   * You can attach additional custom event listeners at this point.
   */
  readonly XHR_INSTANTIATED: "after.xhr.new";

  /**
   * Emits with the xhr object before the send method is called on it.
   * You can attach additional custom event listeners at this point.
   */
  readonly BEFORE_XHR_SEND: "before.xhr.send";
};

const EVENTS: XhrHttpHandlerEvents = {
  get PROGRESS(): "xhr.progress" {
    return "xhr.progress";
  },
  get UPLOAD_PROGRESS(): "xhr.upload.progress" {
    return "xhr.upload.progress";
  },
  get XHR_INSTANTIATED(): "after.xhr.new" {
    return "after.xhr.new";
  },
  get BEFORE_XHR_SEND(): "before.xhr.send" {
    return "before.xhr.send";
  },
};

/**
 * An implementation of HttpHandler that uses XMLHttpRequest, which is
 * traditionally associated with browsers.
 */
export class XhrHttpHandler extends EventEmitter implements HttpHandler {
  public static readonly EVENTS: XhrHttpHandlerEvents = EVENTS;
  public static readonly ERROR_IDENTIFIER = "XHR_HTTP_HANDLER_ERROR";

  private config?: XhrHttpHandlerOptions;
  private readonly configProvider: Promise<XhrHttpHandlerOptions>;

  public constructor(options?: XhrHttpHandlerOptions | Provider<XhrHttpHandlerOptions>) {
    super();
    if (typeof options === "function") {
      this.configProvider = options();
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
  }

  public destroy(): void {
    // Do nothing. Connection pooling is handled by the browser.
  }

  public async handle(
    request: HttpRequest,
    { abortSignal }: HttpHandlerOptions = {}
  ): Promise<{ response: HttpResponse }> {
    if (!this.config) {
      this.config = await this.configProvider;
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

    const xhr = new XMLHttpRequest();

    this.emit(EVENTS.XHR_INSTANTIATED, xhr);

    const raceOfPromises: Promise<{ response: HttpResponse }>[] = [
      new Promise((resolve, reject) => {
        let streamCursor = 0;
        let stream: TransformStream<string, string>;
        let writer: WritableStreamDefaultWriter;

        xhr.upload.addEventListener("progress", (event: ProgressEvent) => {
          this.emit(XhrHttpHandler.EVENTS.UPLOAD_PROGRESS, event, request);
        });
        xhr.addEventListener("progress", (event: ProgressEvent) => {
          this.emit(XhrHttpHandler.EVENTS.PROGRESS, event, request);
        });
        xhr.addEventListener("error", (err) => {
          const error = new Error(XhrHttpHandler.ERROR_IDENTIFIER + ": " + err);
          reject(error);
        });
        xhr.addEventListener("timeout", () => {
          reject(new Error("XMLHttpRequest timed out."));
        });
        xhr.addEventListener("readystatechange", () => {
          const isArrayBuffer: boolean = xhr.responseType === "arraybuffer" && xhr.response;
          const isText = !isArrayBuffer && typeof xhr.responseText === "string";

          if (isText && !stream) {
            ({ stream, writer } = this.initializeTransformStream());
          }

          switch (xhr.readyState) {
            case XMLHttpRequest.LOADING:
              if (isText) {
                writer.write(streamCursor > 0 ? xhr.responseText.slice(streamCursor) : xhr.responseText);
                streamCursor = xhr.responseText.length;
              }
              break;
            case XMLHttpRequest.DONE:
              const body = (() => {
                if (isArrayBuffer) {
                  return new Blob([xhr.response]);
                }

                if (isText) {
                  streamCursor !== xhr.responseText.length &&
                    writer.write?.(streamCursor > 0 ? xhr.responseText.slice(streamCursor) : xhr.responseText);
                  writer.releaseLock();
                  stream.writable.close();
                  return stream.readable;
                }

                reject(new Error(`Unexpected XHR response type ${xhr.responseType}. Expected string or arraybuffer.`));
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
          if (!isForbiddenRequestHeader(header)) {
            xhr.setRequestHeader(header, value);
          }
        }
        this.emit(EVENTS.BEFORE_XHR_SEND, xhr);
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

  /**
   * @returns a stream and its default writer to be used to map the xhr response text to a readable stream.
   */
  private initializeTransformStream(): {
    stream: TransformStream<string, string>;
    writer: WritableStreamDefaultWriter;
  } {
    const textEncoder = new TextEncoder();
    const stream = new TransformStream({
      start() {},
      async transform(chunk: any, controller: TransformStreamDefaultController) {
        controller.enqueue(textEncoder.encode(String(chunk)));
      },
      flush() {},
    });
    const writer = stream.writable.getWriter();
    return {
      stream,
      writer,
    };
  }
}

/**
 * Used to omit headers that will be ignored by XHR to prevent excessive logging.
 * @private
 */
const isForbiddenRequestHeader = (header: string): boolean => {
  header = header.toLowerCase();
  if (header.startsWith("proxy-")) {
    return true;
  }
  if (header.startsWith("sec-")) {
    return true;
  }
  return forbiddenHeaders.includes(header);
};

/**
 * @private
 */
const forbiddenHeaders = [
  "Accept-Charset",
  "Accept-Encoding",
  "Access-Control-Request-Headers",
  "Access-Control-Request-Method",
  "Connection",
  "Content-Length",
  "Cookie",
  "Date",
  "DNT",
  "Expect",
  "Feature-Policy",
  "Host",
  "Keep-Alive",
  "Origin",
  "Referer",
  "TE",
  "Trailer",
  "Transfer-Encoding",
  "Upgrade",
  "Via",
].map((_) => _.toLowerCase());
