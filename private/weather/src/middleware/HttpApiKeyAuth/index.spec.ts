// smithy-typescript generated code
// Please do not touch this file. It's generated from a template in:
// https://github.com/awslabs/smithy-typescript/blob/main/smithy-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/integration/http-api-key-auth.spec.ts
import { HttpRequest } from "@smithy/protocol-http";
import { MiddlewareStack } from "@smithy/types";
import { vi } from "vitest";

import { getHttpApiKeyAuthPlugin, httpApiKeyAuthMiddleware, resolveHttpApiKeyAuthConfig } from "./index";

describe("resolveHttpApiKeyAuthConfig", () => {
  it("should return the input unchanged", () => {
    const config = {
      apiKey: () => Promise.resolve("example-api-key"),
    };
    expect(resolveHttpApiKeyAuthConfig(config)).toEqual(config);
  });
});

describe("getHttpApiKeyAuthPlugin", () => {
  it("should apply the middleware to the stack", () => {
    const plugin = getHttpApiKeyAuthPlugin(
      {
        apiKey: () => Promise.resolve("example-api-key"),
      },
      {
        in: "query",
        name: "key",
      }
    );

    const mockApplied = vi.fn();
    const mockOther = vi.fn();

    // TODO there's got to be a better way to do this mocking
    plugin.applyToStack({
      addRelativeTo: mockApplied,
      // We don't expect any of these others to be called.
      add: mockOther,
      concat: mockOther,
      resolve: mockOther,
      applyToStack: mockOther,
      use: mockOther,
      clone: mockOther,
      remove: mockOther,
      removeByTag: mockOther,
    } as unknown as MiddlewareStack<any, any>);

    expect(mockApplied.mock.calls.length).toEqual(1);
    expect(mockOther.mock.calls.length).toEqual(0);
  });
});

describe("httpApiKeyAuthMiddleware", () => {
  describe("returned middleware function", () => {
    const mockNextHandler = vi.fn();

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("should set the query parameter if the location is `query`", async () => {
      const middleware = httpApiKeyAuthMiddleware(
        {
          apiKey: () => Promise.resolve("example-api-key"),
        },
        {
          in: "query",
          name: "key",
        }
      );

      const handler = middleware(mockNextHandler, {});

      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      expect(mockNextHandler.mock.calls.length).toEqual(1);
      expect(mockNextHandler.mock.calls[0][0].request.query.key).toBe("example-api-key");
    });

    it("should skip if the api key has not been set", async () => {
      const middleware = httpApiKeyAuthMiddleware(
        {},
        {
          in: "header",
          name: "auth",
          scheme: "scheme",
        }
      );

      const handler = middleware(mockNextHandler, {});

      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      expect(mockNextHandler.mock.calls.length).toEqual(1);
    });

    it("should skip if the request is not an HttpRequest", async () => {
      const middleware = httpApiKeyAuthMiddleware(
        {},
        {
          in: "header",
          name: "Authorization",
        }
      );

      const handler = middleware(mockNextHandler, {});

      await handler({
        input: {},
        request: {},
      });

      expect(mockNextHandler.mock.calls.length).toEqual(1);
    });

    it("should set the API key in the lower-cased named header", async () => {
      const middleware = httpApiKeyAuthMiddleware(
        {
          apiKey: () => Promise.resolve("example-api-key"),
        },
        {
          in: "header",
          name: "Authorization",
        }
      );

      const handler = middleware(mockNextHandler, {});

      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      expect(mockNextHandler.mock.calls.length).toEqual(1);
      expect(mockNextHandler.mock.calls[0][0].request.headers.authorization).toBe("example-api-key");
    });

    it("should set the API key in the named header with the provided scheme", async () => {
      const middleware = httpApiKeyAuthMiddleware(
        {
          apiKey: () => Promise.resolve("example-api-key"),
        },
        {
          in: "header",
          name: "authorization",
          scheme: "exampleScheme",
        }
      );
      const handler = middleware(mockNextHandler, {});

      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      expect(mockNextHandler.mock.calls.length).toEqual(1);
      expect(mockNextHandler.mock.calls[0][0].request.headers.authorization).toBe("exampleScheme example-api-key");
    });
  });
});
