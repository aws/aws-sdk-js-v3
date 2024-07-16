// smithy-typescript generated code
import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
  resolveAwsSdkSigV4Config,
} from "@aws-sdk/core";
import {
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { getSmithyContext, normalizeProvider } from "@smithy/util-middleware";

import { RestXmlProtocolClientConfig, RestXmlProtocolClientResolvedConfig } from "../RestXmlProtocolClient";

/**
 * @internal
 */
export interface RestXmlProtocolHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface RestXmlProtocolHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    RestXmlProtocolClientResolvedConfig,
    HandlerExecutionContext,
    RestXmlProtocolHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultRestXmlProtocolHttpAuthSchemeParametersProvider = async (
  config: RestXmlProtocolClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<RestXmlProtocolHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(authParameters: RestXmlProtocolHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "restxml",
      region: authParameters.region,
    },
    propertiesExtractor: (config: Partial<RestXmlProtocolClientConfig>, context) => ({
      /**
       * @internal
       */
      signingProperties: {
        config,
        context,
      },
    }),
  };
}

/**
 * @internal
 */
export interface RestXmlProtocolHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<RestXmlProtocolHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultRestXmlProtocolHttpAuthSchemeProvider: RestXmlProtocolHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
};

/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  /**
   * experimentalIdentityAndAuth: Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * experimentalIdentityAndAuth: Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: RestXmlProtocolHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {
  /**
   * experimentalIdentityAndAuth: Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * experimentalIdentityAndAuth: Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: RestXmlProtocolHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
): T & HttpAuthSchemeResolvedConfig => {
  const config_0 = resolveAwsSdkSigV4Config(config);
  return {
    ...config_0,
  } as T & HttpAuthSchemeResolvedConfig;
};
