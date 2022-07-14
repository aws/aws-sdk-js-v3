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
}

/**
 * Events emitted as an EventEmitter.
 */
const EVENTS = {
  /**
   * Emitted for xhr on progress.
   * Payload is the native ProgressEvent.
   */
  get PROGRESS() {
    return "xhr.progress";
  },
  /**
   * Emitted for xhr.upload on progress.
   * Payload is the native ProgressEvent.
   */
  get UPLOAD_PROGRESS() {
    return "xhr.upload.progress";
  },

  /**
   * Emits with the xhr object after it is instantiated with new.
   * You can attach additional custom event listeners at this point.
   */
  get XHR_INSTANTIATED() {
    return "after.xhr.new";
  },

  /**
   * Emits with the xhr object before the send method is called on it.
   * You can attach additional custom event listeners at this point.
   */
  get BEFORE_XHR_SEND() {
    return "before.xhr.send";
  },
};

/**
 * An implementation of HttpHandler that uses XMLHttpRequest, which is
 * traditionally associated with browsers.
 */
export class XhrHttpHandler extends EventEmitter implements HttpHandler {
  public static readonly EVENTS = EVENTS;

  private config?: XhrHttpHandlerOptions;
  private readonly configProvider: Promise<XhrHttpHandlerOptions>;

  public constructor(options?: XhrHttpHandlerOptions | Provider<XhrHttpHandlerOptions | undefined>) {
    super();
    this.configProvider = new Promise((resolve, reject) => {
      if (typeof options === "function") {
        (options as () => Promise<XhrHttpHandlerOptions>)().then(resolve).catch(reject);
      } else {
        resolve(options || {});
      }
    });
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
        xhr.addEventListener("error", reject);
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
                writer.write(xhr.responseText.slice(streamCursor));
                streamCursor = xhr.responseText.length;
              }
              break;
            case XMLHttpRequest.DONE:
              const body = (() => {
                if (isArrayBuffer) {
                  return new Blob([xhr.response]);
                }

                if (isText) {
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
