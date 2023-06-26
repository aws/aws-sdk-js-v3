import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { Client, HttpHandlerOptions, RequestHandler, RequestHandlerOutput } from "@smithy/types";

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
 * @internal
 */
const MOCK_CREDENTIALS = {
  accessKeyId: "MOCK_ACCESS_KEY_ID",
  secretAccessKey: "MOCK_SECRET_ACCESS_KEY_ID",
};

/**
 * Supplied to test clients to assert correct requests.
 * @internal
 */
export class TestHttpHandler implements HttpHandler {
  private static WATCHER = Symbol("TestHttpHandler_WATCHER");
  private originalSend?: Function;
  private originalRequestHandler?: RequestHandler<any, any, any>;
  private client?: Client<any, any, any>;
  private assertions = 0;

  public constructor(public readonly matcher: HttpRequestMatcher) {}

  /**
   * @param client - to watch for requests.
   * @param matcher - optional override of this instance's matchers.
   *
   * Temporarily hooks the client.send call to check the outgoing request.
   */
  public watch(client: Client<any, any, any>, matcher: HttpRequestMatcher = this.matcher) {
    this.client = client;
    this.originalRequestHandler = client.config.originalRequestHandler;
    // mock credentials to avoid default chain lookup.
    client.config.credentials = async () => MOCK_CREDENTIALS;
    client.config.credentialDefaultProvider = () => {
      return async () => {
        return MOCK_CREDENTIALS;
      };
    };
    const signerProvider = client.config.signer;
    if (typeof signerProvider === "function") {
      client.config.signer = async () => {
        const _signer = await signerProvider();
        if (typeof _signer.credentialProvider === "function") {
          // signer is instance of SignatureV4
          _signer.credentialProvider = async () => {
            return MOCK_CREDENTIALS;
          };
        }
        return _signer;
      };
    }

    client.config.requestHandler = new TestHttpHandler(matcher);
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
  }

  /**
   * @throws TestHttpHandlerSuccess to indicate success (only way to control it).
   * @throws Error any other exception to indicate failure.
   */
  public async handle(
    request: HttpRequest,
    handlerOptions?: HttpHandlerOptions
  ): Promise<RequestHandlerOutput<HttpResponse>> {
    const m = this.matcher;

    if (m.log) {
      console.log(request);
    }

    this.check(m.protocol, request.protocol);
    this.check(m.hostname, request.hostname);
    this.check(m.port, request.port);
    this.check(m.path, request.path);
    this.checkAll(m.query, request.query);

    this.checkAll(m.headers, request.headers);
    this.check(m.body, request.body);
    this.check(m.method, request.method);

    if (this.assertions === 0) {
      throw new Error("Request handled with no assertions, empty matcher?");
    }

    throw new TestHttpHandlerSuccess();
  }

  public async destroy(): Promise<void> {
    (this.client as any).config.requestHandler = this.originalRequestHandler;
    (this.client as any).send = this.originalSend as any;
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

  private checkAll(matchers?: Record<string, Matcher> | Map<RegExp | string, Matcher>, observed?: any) {
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
          this.check(matcher, observed[key]);
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
    toMatch(matcher: HttpRequestMatcher) {
      return new TestHttpHandler(matcher).watch(client);
    },
  };
};
