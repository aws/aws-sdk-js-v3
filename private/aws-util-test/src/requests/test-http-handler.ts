import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { Client, HttpHandlerOptions, RequestHandler, RequestHandlerOutput } from "@smithy/types";
import { expect } from "vitest";

/**
 * Instructs {@link TestHttpHandler} how to match the handled request and the expected request.
 * @internal
 */
export type Matcher = string | number | boolean | RegExp | null | undefined | ((value: any) => void);

/**
 * @internal
 */
export type HttpRequestMatcher = {
  // endpoint
  protocol?: Matcher;
  hostname?: Matcher;
  port?: Matcher;
  path?: Matcher;
  query?: Record<string, Matcher> | Map<RegExp | string, Matcher>;

  // message
  headers?: Record<string, Matcher> | Map<RegExp | string, Matcher>;
  body?: Matcher;
  method?: Matcher;

  // debug option
  log?: boolean;
};

/**
 * Supplied to test clients to assert correct requests.
 * @internal
 */
export class TestHttpHandler implements HttpHandler {
  private static WATCHER = Symbol("TestHttpHandler_WATCHER");

  public readonly matchers: HttpRequestMatcher[];

  private originalSend?: Function;
  private originalRequestHandler?: RequestHandler<any, any, any>;
  private client?: Client<any, any, any>;
  private responseQueue: HttpResponse[] = [];
  private assertions = 0;

  public constructor(...matchers: HttpRequestMatcher[]) {
    this.matchers = matchers;
    const RESERVED_ENVIRONMENT_VARIABLES = {
      AWS_DEFAULT_REGION: 1,
      AWS_REGION: 1,
      AWS_PROFILE: 1,
      AWS_ACCESS_KEY_ID: 1,
      AWS_SECRET_ACCESS_KEY: 1,
      AWS_SESSION_TOKEN: 1,
      AWS_CREDENTIAL_EXPIRATION: 1,
      AWS_CREDENTIAL_SCOPE: 1,
      AWS_EC2_METADATA_DISABLED: 1,
      AWS_WEB_IDENTITY_TOKEN_FILE: 1,
      AWS_ROLE_ARN: 1,
      AWS_CONTAINER_CREDENTIALS_FULL_URI: 1,
      AWS_CONTAINER_CREDENTIALS_RELATIVE_URI: 1,
      AWS_CONTAINER_AUTHORIZATION_TOKEN: 1,
      AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE: 1,
    };
    for (const key in RESERVED_ENVIRONMENT_VARIABLES) {
      delete process.env[key];
    }
    process.env.AWS_ACCESS_KEY_ID = "INTEGRATION_TEST_MOCK";
    process.env.AWS_SECRET_ACCESS_KEY = "INTEGRATION_TEST_MOCK";
  }

  /**
   * @param client - to watch for requests.
   * @param matchers - optional override of this instance's matchers.
   *
   * Temporarily hooks the client.send call to check the outgoing request.
   */
  public watch(client: Client<any, any, any>): TestHttpHandler {
    this.client = client;
    this.originalRequestHandler = client.config.requestHandler;

    client.config.requestHandler = this;
    if (!(client as any)[TestHttpHandler.WATCHER]) {
      (client as any)[TestHttpHandler.WATCHER] = true;
      const originalSend = (this.originalSend = client.send as any);
      client.send = async function (...args: any[]) {
        return originalSend.apply(client, args).catch((e: unknown) => {
          if ((e as any).id === TestHttpHandlerSuccess.ID) {
          } else {
            throw e;
          }
        });
      };
    }

    return this;
  }

  /**
   * @param httpResponses - to enqueue for mock responses.
   */
  public respondWith(...httpResponses: HttpResponse[]): TestHttpHandler {
    this.responseQueue.push(...httpResponses);
    return this;
  }

  /**
   * @throws TestHttpHandlerSuccess to indicate success (only way to control it).
   * @throws Error any other exception to indicate failure.
   */
  public async handle(
    request: HttpRequest,
    handlerOptions?: HttpHandlerOptions
  ): Promise<RequestHandlerOutput<HttpResponse>> {
    const m = this.matchers.length > 1 ? this.matchers.shift()! : this.matchers[0];

    if (m.log) {
      console.log(request);
    }

    this.check(m.protocol, request.protocol);
    this.check(m.hostname, request.hostname);
    this.check(m.port, request.port);
    this.check(m.path, request.path);
    this.checkAll(m.query ?? {}, request.query, "query");

    this.checkAll(m.headers ?? {}, request.headers, "header");
    this.check(m.body, request.body);
    this.check(m.method, request.method);

    if (this.assertions === 0) {
      throw new Error("Request handled with no assertions, empty matcher?");
    }

    if (this.responseQueue.length > 1) {
      return {
        response: this.responseQueue.shift()!,
      };
    } else {
      if (this.responseQueue.length === 1) {
        return {
          response: this.responseQueue[0],
        };
      }
    }

    throw new TestHttpHandlerSuccess();
  }

  public async destroy(): Promise<void> {
    (this.client as any).config.requestHandler = this.originalRequestHandler;
    (this.client as any).send = this.originalSend as any;
  }

  updateHttpClientConfig(key: never, value: never): void {}

  httpHandlerConfigs() {
    return {};
  }

  private check(matcher?: Matcher, observed?: any) {
    if (matcher === undefined) {
      return;
    }
    switch (typeof matcher) {
      case "string":
        if (matcher.startsWith("/") && matcher.endsWith("/")) {
          expect(String(observed)).toMatch(new RegExp(matcher));
        } else {
          expect(observed).toEqual(matcher);
        }
        break;
      case "number":
      case "bigint":
      case "boolean":
        expect(observed).toEqual(matcher);
        break;
      case "object":
        if (matcher instanceof RegExp) {
          expect(String(observed)).toMatch(matcher);
        }
        break;
      case "function":
        matcher(observed);
        break;
      default:
        throw new Error("Matcher did not create assertion");
    }
    this.assertions++;
  }

  private checkAll(
    matchers: Record<string, Matcher> | Map<RegExp | string, Matcher>,
    observed: any,
    type: "header" | "query"
  ) {
    if (matchers == null) {
      return;
    }
    let key: string | RegExp;

    for (const [_key, matcher] of matchers instanceof Map ? matchers : Object.entries(matchers)) {
      key = _key;
      if (typeof key === "string") {
        if (key.startsWith("/") && key.endsWith("/")) {
          key = new RegExp(key);
        } else {
          const matchingValue =
            type === "header"
              ? observed[Object.keys(observed).find((k) => k.toLowerCase() === String(key).toLowerCase()) ?? ""]
              : observed[key];
          this.check(matcher, matchingValue);
        }
      }
      if (key instanceof RegExp) {
        for (const [observedKey, observedValue] of Object.entries(observed)) {
          if (key.test(observedKey)) {
            this.check(matcher, observedValue);
          }
        }
      }
    }
  }
}

/**
 * This is used as an interrupt signal for success.
 * It does not indicate a true error.
 *
 * @internal
 */
export class TestHttpHandlerSuccess extends Error {
  public static readonly ID = Symbol("TestHttpHandlerSuccess");
  public readonly id = TestHttpHandlerSuccess.ID;
}

/**
 * @internal
 */
export const requireRequestsFrom = (client: Client<any, any, any>) => {
  return {
    toMatch(...matchers: HttpRequestMatcher[]) {
      return new TestHttpHandler(...matchers).watch(client);
    },
  };
};
