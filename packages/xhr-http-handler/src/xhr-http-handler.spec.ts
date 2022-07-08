import { AbortController } from "@aws-sdk/abort-controller";
import { HttpRequest } from "@aws-sdk/protocol-http";

import { requestTimeout } from "./request-timeout";
import { XhrHttpHandler } from "./xhr-http-handler";

describe.skip(XhrHttpHandler.name, () => {
  beforeEach(() => {
    (global as any).AbortController = void 0;
    (global as any).XMLHttpRequest = class XhrMock {
      public readyState = 0;
      public responseType = '';
      public response = '';
      public status = 200;

      public captures = [];
      
      getAllResponseHeaeders() {}
      setRequestHeader(key, value) {}
      open() {}
      send() {}
      abort() {}
      addEventListener() {}
    }
  });

  afterEach(() => {
  });

  it("makes requests using Xhr", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob(["FOO"])),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).XMLHttpRequest = mockFetch;
    const xhrHttpHandler = new XhrHttpHandler();

    const response = await xhrHttpHandler.handle({} as any, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    expect(await blobToText(response.response.body)).toBe("FOO");
  });

  it("properly constructs url", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;

    const httpRequest = new HttpRequest({
      headers: {},
      hostname: "foo.amazonaws.com",
      method: "GET",
      path: "/test/?bar=baz",
      protocol: "https:",
      port: 443,
    });
    const xhrHttpHandler = new XhrHttpHandler();

    await xhrHttpHandler.handle(httpRequest, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    const requestCall = mockRequest.mock.calls[0];
    expect(requestCall[0]).toBe("https://foo.amazonaws.com:443/test/?bar=baz");
  });

  it("will omit body if method is GET", async () => {
    const mockResponse = {
      headers: { entries: jest.fn().mockReturnValue([]) },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;

    const httpRequest = new HttpRequest({
      headers: {},
      hostname: "foo.amazonaws.com",
      method: "GET",
      path: "/",
      body: "will be omitted",
    });
    const xhrHttpHandler = new XhrHttpHandler();

    await xhrHttpHandler.handle(httpRequest, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    const requestCall = mockRequest.mock.calls[0];
    expect(requestCall[1].body).toBeUndefined();
  });

  it("will omit body if method is HEAD", async () => {
    const mockResponse = {
      headers: { entries: jest.fn().mockReturnValue([]) },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;

    const httpRequest = new HttpRequest({
      headers: {},
      hostname: "foo.amazonaws.com",
      method: "HEAD",
      path: "/",
      body: "will be omitted",
    });
    const xhrHttpHandler = new XhrHttpHandler();

    await xhrHttpHandler.handle(httpRequest, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    const requestCall = mockRequest.mock.calls[0];
    expect(requestCall[1].body).toBeUndefined();
  });

  it("will not make request if already aborted", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);

    (global as any).fetch = mockFetch;
    const xhrHttpHandler = new XhrHttpHandler();

    await expect(
      xhrHttpHandler.handle({} as any, {
        abortSignal: {
          aborted: true,
          onabort: null,
        },
      })
    ).rejects.toHaveProperty("name", "AbortError");

    expect(mockFetch.mock.calls.length).toBe(0);
  });

  it("will pass abortSignal to fetch if supported", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    (global as any).fetch = mockFetch;
    (global as any).AbortController = jest.fn();
    const xhrHttpHandler = new XhrHttpHandler();

    await xhrHttpHandler.handle({} as any, {
      abortSignal: {
        aborted: false,
        onabort: null,
      },
    });

    expect(mockRequest.mock.calls[0][1]).toHaveProperty("signal");
    expect(mockFetch.mock.calls.length).toBe(1);
  });

  it("will pass timeout to request timeout", async () => {
    const mockResponse = {
      headers: {
        entries: jest.fn().mockReturnValue([
          ["foo", "bar"],
          ["bizz", "bazz"],
        ]),
      },
      blob: jest.fn().mockResolvedValue(new Blob()),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    (global as any).fetch = mockFetch;

    timeoutSpy = jest.spyOn({ requestTimeout }, "requestTimeout");
    const xhrHttpHandler = new XhrHttpHandler({
      requestTimeout: 500,
    });

    await xhrHttpHandler.handle({} as any, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    expect(timeoutSpy.mock.calls[0][0]).toBe(500);
  });

  it("will pass timeout from a provider to request timeout", async () => {
    const mockResponse = {
      headers: {
        entries: () => [],
      },
      blob: new Blob(),
    };
    const mockFetch = jest.fn().mockResolvedValue(mockResponse);
    (global as any).fetch = mockFetch;

    timeoutSpy = jest.spyOn({ requestTimeout }, "requestTimeout");
    const xhrHttpHandler = new XhrHttpHandler(async () => ({
      requestTimeout: 500,
    }));

    await xhrHttpHandler.handle({} as any, {});

    expect(mockFetch.mock.calls.length).toBe(1);
    expect(timeoutSpy.mock.calls[0][0]).toBe(500);
  });

  it("will throw timeout error it timeout finishes before request", async () => {
    const mockFetch = jest.fn(() => {
      return new Promise(() => {});
    });
    (global as any).fetch = mockFetch;
    const xhrHttpHandler = new XhrHttpHandler({
      requestTimeout: 5,
    });

    await expect(xhrHttpHandler.handle({} as any, {})).rejects.toHaveProperty("name", "TimeoutError");
    expect(mockFetch.mock.calls.length).toBe(1);
  });

  it("can be aborted before fetch completes", async () => {
    const abortController = new AbortController();

    const mockFetch = jest.fn(() => {
      return new Promise(() => {});
    });
    (global as any).fetch = mockFetch;

    setTimeout(() => {
      abortController.abort();
    }, 100);
    const xhrHttpHandler = new XhrHttpHandler();

    await expect(
      xhrHttpHandler.handle({} as any, {
        abortSignal: abortController.signal,
      })
    ).rejects.toHaveProperty("name", "AbortError");

    // ensure that fetch's built-in mechanism isn't being used
    expect(mockRequest.mock.calls[0][1]).not.toHaveProperty("signal");
  });

  describe("#destroy", () => {
    it("should be callable and return nothing", () => {
      const httpHandler = new XhrHttpHandler();
      expect(httpHandler.destroy()).toBeUndefined();
    });
  });

  // The Blob implementation does not implement Blob.text, so we deal with it here.
  async function blobToText(blob: Blob): Promise<string> {
    const reader = new FileReader();

    return new Promise((resolve) => {
      // This fires after the blob has been read/loaded.
      reader.addEventListener("loadend", (e) => {
        const text = e.target!.result as string;
        resolve(text);
      });

      // Start reading the blob as text.
      reader.readAsText(blob);
    });
  }
});
