import { AbortSignal } from "@smithy/abort-controller";
import { HttpRequest } from "@smithy/protocol-http";

import { XhrHttpHandler } from "./xhr-http-handler";

const originalXMLHttpRequest = global.XMLHttpRequest;
const originalTextEncoder = global.TextEncoder;
const originalTransformStream = global.TransformStream;

class XhrMock {
  public static reset() {
    XhrMock.captures = [];
  }
  public static captures: any[] = [];
  public static DONE = 4;

  private captureArgs =
    (caller: string) =>
    (...args) => {
      XhrMock.captures.push([caller, ...args]);
    };

  public upload = {
    addEventListener: this.captureArgs("upload.addEventListener"),
  };
  public readyState = 4;
  public responseType = "text";
  public response = "hello, world";
  public responseText = "hello, world";
  public status = 200;

  private eventListeners: Record<string, (() => void)[]> = {};

  getAllResponseHeaders() {
    this.captureArgs("getAllResponseHeaders")();
    return `responseHeaderKey: responseHeaderValue\r\nrk2: rv2`;
  }
  setRequestHeader = this.captureArgs("setRequestHeader");
  open = this.captureArgs("open");
  send(...args) {
    this.captureArgs("send")(...args);
    this.eventListeners["readystatechange"][0]();
  }
  abort = this.captureArgs("abort");
  addEventListener(...args) {
    this.captureArgs("addEventListener")(...args);
    const [event, callback] = args;
    this.eventListeners[event] = [callback];
  }
}

describe(XhrHttpHandler.name, () => {
  beforeAll(() => {
    (global as any).XMLHttpRequest = XhrMock;
    (global as any).TextEncoder = class {};
    (global as any).TransformStream = class {
      public writable = {
        getWriter() {
          return {
            releaseLock: jest.fn(),
          };
        },
        close() {},
      };
      public readable = {};
    };
  });

  afterEach(() => {
    XhrMock.reset();
  });

  afterAll(() => {
    global.XMLHttpRequest = originalXMLHttpRequest;
    global.TextEncoder = originalTextEncoder;
    global.TransformStream = originalTransformStream;
  });

  it("should wrap errors in a consistent SDK identifier", async () => {
    const handler = new XhrHttpHandler();

    handler.on(XhrHttpHandler.EVENTS.BEFORE_XHR_SEND, (xhr) => {
      xhr.eventListeners.error.forEach((handler) => handler(new Error("Network Failure")));
    });

    try {
      await handler.handle(
        new HttpRequest({
          method: "PUT",
          hostname: "localhost",
          port: 3000,
          query: { k: "v" },
          headers: { h: "1" },
          body: "hello",
          protocol: "http:",
          path: "/api",
        })
      );
      expect("this line").toBe("not reached");
    } catch (e) {
      expect(e.toString()).toContain(XhrHttpHandler.ERROR_IDENTIFIER);
      expect(e.toString()).toBe(`Error: XHR_HTTP_HANDLER_ERROR: Error: Network Failure`);
    }
  });

  it("should use global XMLHttpRequest to handle requests by default", async () => {
    const handler = new XhrHttpHandler();

    await handler.handle(
      new HttpRequest({
        method: "PUT",
        hostname: "localhost",
        port: 3000,
        query: { k: "v" },
        headers: { h: "1" },
        body: "hello",
        protocol: "http:",
        path: "/api",
      })
    );

    expect(XhrMock.captures).toEqual([
      ["upload.addEventListener", "progress", expect.any(Function)],
      ["addEventListener", "progress", expect.any(Function)],
      ["addEventListener", "error", expect.any(Function)],
      ["addEventListener", "timeout", expect.any(Function)],
      ["addEventListener", "readystatechange", expect.any(Function)],
      ["open", "PUT", "http://localhost:3000/api?k=v"],
      ["setRequestHeader", "h", "1"],
      ["send", "hello"],
      ["getAllResponseHeaders"],
    ]);
  });

  it("should respond to AbortSignal", async () => {
    const handler = new XhrHttpHandler();
    const abortSignal = new AbortSignal();

    await handler.handle(
      new HttpRequest({
        method: "PUT",
        hostname: "localhost",
        port: 3000,
        query: { k: "v" },
        headers: { h: "1" },
        body: "hello",
        protocol: "http:",
        path: "/api",
      }),
      { abortSignal }
    );

    try {
      abortSignal.abort();
    } catch (e) {
      expect(e.toString()).toContain("Request aborted");
    }

    expect(XhrMock.captures).toEqual([
      ["upload.addEventListener", "progress", expect.any(Function)],
      ["addEventListener", "progress", expect.any(Function)],
      ["addEventListener", "error", expect.any(Function)],
      ["addEventListener", "timeout", expect.any(Function)],
      ["addEventListener", "readystatechange", expect.any(Function)],
      ["open", "PUT", "http://localhost:3000/api?k=v"],
      ["setRequestHeader", "h", "1"],
      ["send", "hello"],
      ["getAllResponseHeaders"],
      ["abort"],
    ]);
  });

  it("should ignore forbidden request headers", async () => {
    const handler = new XhrHttpHandler();

    await handler.handle(
      new HttpRequest({
        method: "PUT",
        hostname: "localhost",
        port: 3000,
        query: { k: "v" },
        headers: { Host: "1", Origin: "1", Referer: "1" },
        body: "hello",
        protocol: "http:",
        path: "/api",
      })
    );

    expect(XhrMock.captures).toEqual([
      ["upload.addEventListener", "progress", expect.any(Function)],
      ["addEventListener", "progress", expect.any(Function)],
      ["addEventListener", "error", expect.any(Function)],
      ["addEventListener", "timeout", expect.any(Function)],
      ["addEventListener", "readystatechange", expect.any(Function)],
      ["open", "PUT", "http://localhost:3000/api?k=v"],
      ["send", "hello"],
      ["getAllResponseHeaders"],
    ]);
  });
});
