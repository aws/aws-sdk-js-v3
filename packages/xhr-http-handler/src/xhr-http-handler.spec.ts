import { HttpRequest } from "@smithy/protocol-http";
import { afterAll, afterEach, beforeAll, describe, expect, test as it, vi } from "vitest";

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
    (...args: any[]) => {
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
  setRequestHeader(...args: any[]) {
    return this.captureArgs("setRequestHeader")(...args);
  }
  open(...args: any[]) {
    return this.captureArgs("open")(...args);
  }
  send(...args: any[]) {
    this.captureArgs("send")(...args);
    this.eventListeners["readystatechange"][0]();
  }
  abort(...args: any[]) {
    return this.captureArgs("abort")(...args);
  }
  addEventListener(...args: any[]) {
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
            releaseLock: vi.fn(),
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
      xhr.eventListeners.error.forEach((handler: any) => handler(new Error("Network Failure")));
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
    const abortController = new AbortController();

    const p1 = handler.handle(
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
      { abortSignal: abortController.signal }
    );

    try {
      abortController.abort();
      await p1;
    } catch (e) {
      expect(e.toString()).toContain("Request aborted");
    }

    expect(XhrMock.captures).toEqual([
      ["upload.addEventListener", "progress", expect.anything()],
      ["addEventListener", "progress", expect.anything()],
      ["addEventListener", "error", expect.anything()],
      ["addEventListener", "timeout", expect.anything()],
      ["addEventListener", "readystatechange", expect.anything()],
      ["open", "PUT", "http://localhost:3000/api?k=v"],
      ["setRequestHeader", "h", "1"],
      ["send", "hello"],
      ["getAllResponseHeaders"],
      ["abort"],
    ]);
  });

  it("should allow an AbortSignal to abort multiple requests", async () => {
    const handler = new XhrHttpHandler();
    const abortController = new AbortController();

    expect(abortController.signal.addEventListener).toBeInstanceOf(Function);

    const xhrs = [] as XMLHttpRequest[];
    handler.on(XhrHttpHandler.EVENTS.BEFORE_XHR_SEND, (xhr) => {
      xhrs.push(xhr);
    });

    const request = () =>
      handler.handle(
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
        { abortSignal: abortController.signal }
      );

    const p1 = request().catch((_) => _);
    const p2 = request().catch((_) => _);
    const p3 = request().catch((_) => _);
    abortController.abort();
    await p1;
    await p2;
    await p3;
    await request().catch((_) => _);
    await request().catch((_) => _);

    expect(xhrs.length).toEqual(3);
    expect(XhrMock.captures.filter(([source]) => source === "abort")).toEqual([["abort"], ["abort"], ["abort"]]);
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

  describe("per-request requestTimeout", () => {
    it("should use per-request timeout over handler config timeout", async () => {
      const handler = new XhrHttpHandler({ requestTimeout: 5000 });

      const requestTimeoutSpy = vi.spyOn(await import("./request-timeout"), "requestTimeout");

      const mockRequest = new HttpRequest({
        method: "GET",
        hostname: "example.com",
        protocol: "https:",
        path: "/",
        headers: {},
      });

      class TimeoutXhrMock extends XhrMock {
        send(...args: any[]) {
          this.captureArgs("send")(...args);
          // let it timeout
        }
      }

      (global as any).XMLHttpRequest = TimeoutXhrMock;

      try {
        await handler.handle(mockRequest, { requestTimeout: 100 });
      } catch (error) {
        // expected to timeout
      }

      // verify requestTimeout function was called with per-request timeout (100), not handler timeout (5000)
      expect(requestTimeoutSpy).toHaveBeenCalledWith(100);

      requestTimeoutSpy.mockRestore();
      (global as any).XMLHttpRequest = XhrMock; // restore original mock
    });

    it("should fall back to handler config timeout when per-request timeout not provided", async () => {
      const handler = new XhrHttpHandler({ requestTimeout: 200 });

      const requestTimeoutSpy = vi.spyOn(await import("./request-timeout"), "requestTimeout");

      const mockRequest = new HttpRequest({
        method: "GET",
        hostname: "example.com",
        protocol: "https:",
        path: "/",
        headers: {},
      });

      class TimeoutXhrMock extends XhrMock {
        send(...args: any[]) {
          this.captureArgs("send")(...args);
        }
      }

      (global as any).XMLHttpRequest = TimeoutXhrMock;

      try {
        await handler.handle(mockRequest, {});
      } catch (error) {}

      expect(requestTimeoutSpy).toHaveBeenCalledWith(200);

      requestTimeoutSpy.mockRestore();
      (global as any).XMLHttpRequest = XhrMock;
    });

    it("should handle zero timeout correctly", async () => {
      const handler = new XhrHttpHandler({ requestTimeout: 1000 });

      const requestTimeoutSpy = vi.spyOn(await import("./request-timeout"), "requestTimeout");

      const mockRequest = new HttpRequest({
        method: "GET",
        hostname: "example.com",
        protocol: "https:",
        path: "/",
        headers: {},
      });

      try {
        await handler.handle(mockRequest, { requestTimeout: 0 });
      } catch (error) {}

      expect(requestTimeoutSpy).toHaveBeenCalledWith(0);

      requestTimeoutSpy.mockRestore();
    });
  });
});
