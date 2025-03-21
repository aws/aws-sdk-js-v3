// smithy-typescript generated code
// Please do not touch this file. It's generated from a template in:
// https://github.com/awslabs/smithy-typescript/blob/main/smithy-typescript-codegen/src/main/resources/software/amazon/smithy/aws/typescript/codegen/integration/http-api-key-auth.ts
// derived from https://github.com/aws/aws-sdk-js-v3/blob/e35f78c97fa6710ff9c444351893f0f06755e771/packages/middleware-endpoint-discovery/src/endpointDiscoveryMiddleware.ts

import { HttpRequest } from "@smithy/protocol-http";
import { BuildMiddleware, Pluggable, Provider, RelativeMiddlewareOptions } from "@smithy/types";
import { normalizeProvider } from "@smithy/util-middleware";

interface HttpApiKeyAuthMiddlewareConfig {
  /**
   * Where to put the API key.
   *
   * If the value is `header`, the API key will be transported in the named header,
   * optionally prefixed with the provided scheme.
   *
   * If the value is `query`, the API key will be transported in the named query parameter.
   */
  in: "header" | "query";

  /**
   * The name of the header / query parameter to use for the transporting the API key.
   */
  name: string;

  /**
   * The scheme to use. Only supported when `in` is `header`.
   */
  scheme?: string;
}

export interface HttpApiKeyAuthInputConfig {
  /**
   * The API key to use when making requests.
   *
   * This is optional because some operations may not require an API key.
   */
  apiKey?: string | Provider<string>;
}

export interface ApiKeyPreviouslyResolved {}

export interface HttpApiKeyAuthResolvedConfig {
  /**
   * The API key to use when making requests.
   *
   * This is optional because some operations may not require an API key.
   */
  apiKey?: Provider<string>;
}

// We have to provide a resolve function when we have config, even if it doesn't
// actually do anything to the input value. "If any of inputConfig, resolvedConfig,
// or resolveFunction are set, then all of inputConfig, resolvedConfig, and
// resolveFunction must be set."
export function resolveHttpApiKeyAuthConfig<T>(
  input: T & ApiKeyPreviouslyResolved & HttpApiKeyAuthInputConfig
): T & HttpApiKeyAuthResolvedConfig {
  return {
    ...input,
    apiKey: input.apiKey ? normalizeProvider(input.apiKey) : undefined,
  };
}

/**
 * Middleware to inject the API key into the HTTP request.
 *
 * The middleware will inject the client's configured API key into the
 * request as defined by the `@httpApiKeyAuth` trait. If the trait says to
 * put the API key into a named header, that header will be used, optionally
 * prefixed with a scheme. If the trait says to put the API key into a named
 * query parameter, that query parameter will be used.
 *
 * @param pluginConfig the client configuration. Includes the function that will return the API key value.
 * @param middlewareConfig the plugin options (location of the parameter, name, and optional scheme)
 * @returns a function that processes the HTTP request and passes it on to the next handler
 */
export const httpApiKeyAuthMiddleware =
  <Input extends object, Output extends object>(
    pluginConfig: HttpApiKeyAuthResolvedConfig,
    middlewareConfig: HttpApiKeyAuthMiddlewareConfig
  ): BuildMiddleware<Input, Output> =>
  (next) =>
  async (args) => {
    if (!HttpRequest.isInstance(args.request)) return next(args);

    const apiKey = pluginConfig.apiKey && (await pluginConfig.apiKey());

    // This middleware will not be injected if the operation has the @optionalAuth trait.
    // We don't know if we're the only auth middleware, so let the service deal with the
    // absence of the API key (or let other middleware do its job).
    if (!apiKey) {
      return next(args);
    }

    return next({
      ...args,
      request: {
        ...args.request,
        headers: {
          ...args.request.headers,
          ...(middlewareConfig.in === "header" && {
            // Set the header, even if it's already been set.
            [middlewareConfig.name.toLowerCase()]: middlewareConfig.scheme
              ? `${middlewareConfig.scheme} ${apiKey}`
              : apiKey,
          }),
        },
        query: {
          ...args.request.query,
          // Set the query parameter, even if it's already been set.
          ...(middlewareConfig.in === "query" && { [middlewareConfig.name]: apiKey }),
        },
      },
    });
  };

export const httpApiKeyAuthMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "httpApiKeyAuthMiddleware",
  tags: ["APIKEY", "AUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

export const getHttpApiKeyAuthPlugin = (
  pluginConfig: HttpApiKeyAuthResolvedConfig,
  middlewareConfig: HttpApiKeyAuthMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(
      httpApiKeyAuthMiddleware(pluginConfig, middlewareConfig),
      httpApiKeyAuthMiddlewareOptions
    );
  },
});
