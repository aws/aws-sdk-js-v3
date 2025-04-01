// smithy-typescript generated code
import { WeatherClientResolvedConfig } from "../WeatherClient";
import { doesIdentityRequireRefresh, isIdentityExpired, memoizeIdentityProvider } from "@smithy/core";
import {
  ApiKeyIdentity,
  ApiKeyIdentityProvider,
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  HandlerExecutionContext,
  HttpApiKeyAuthLocation,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
  TokenIdentity,
  TokenIdentityProvider,
  Provider as __Provider,
} from "@smithy/types";
import { getSmithyContext, normalizeProvider } from "@smithy/util-middleware";

/**
 * @internal
 */
export interface WeatherHttpAuthSchemeParameters extends HttpAuthSchemeParameters {
  region?: string;
}

/**
 * @internal
 */
export interface WeatherHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    WeatherClientResolvedConfig,
    HandlerExecutionContext,
    WeatherHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultWeatherHttpAuthSchemeParametersProvider = async (
  config: WeatherClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<WeatherHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
    region:
      (await normalizeProvider(config.region)()) ||
      (() => {
        throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
      })(),
  };
};

function createAwsAuthSigv4HttpAuthOption(authParameters: WeatherHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "weather",
      region: authParameters.region,
    },
    propertiesExtractor: (config, context) => {
      return {
        /**
         * @internal
         */
        signingProperties: {
          context,
          sha256: (config as any).sha256,
        },
      };
    },
  };
}

function createExampleWeatherCustomAuthHttpAuthOption(authParameters: WeatherHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "example.weather#customAuth",
  };
}

function createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters: WeatherHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#httpApiKeyAuth",
    signingProperties: {
      name: "X-Api-Key",
      in: HttpApiKeyAuthLocation.HEADER,
      scheme: undefined,
    },
  };
}

function createSmithyApiHttpBearerAuthHttpAuthOption(authParameters: WeatherHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#httpBearerAuth",
  };
}

function createSmithyApiNoAuthHttpAuthOption(authParameters: WeatherHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#noAuth",
  };
}

/**
 * @internal
 */
export interface WeatherHttpAuthSchemeProvider extends HttpAuthSchemeProvider<WeatherHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultWeatherHttpAuthSchemeProvider: WeatherHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    case "OnlyCustomAuth": {
      options.push(createExampleWeatherCustomAuthHttpAuthOption(authParameters));
      break;
    }
    case "OnlyCustomAuthOptional": {
      options.push(createExampleWeatherCustomAuthHttpAuthOption(authParameters));
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    }
    case "OnlyHttpApiKeyAndBearerAuth": {
      options.push(createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters));
      options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
      break;
    }
    case "OnlyHttpApiKeyAndBearerAuthReversed": {
      options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
      options.push(createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters));
      break;
    }
    case "OnlyHttpApiKeyAuth": {
      options.push(createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters));
      break;
    }
    case "OnlyHttpApiKeyAuthOptional": {
      options.push(createSmithyApiHttpApiKeyAuthHttpAuthOption(authParameters));
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    }
    case "OnlyHttpBearerAuth": {
      options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
      break;
    }
    case "OnlyHttpBearerAuthOptional": {
      options.push(createSmithyApiHttpBearerAuthHttpAuthOption(authParameters));
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    }
    case "OnlySigv4AuthOptional": {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
      break;
    }
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
};

/**
 * @internal
 */
export interface HttpAuthSchemeInputConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  httpAuthSchemes?: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  httpAuthSchemeProvider?: WeatherHttpAuthSchemeProvider;

  /**
   * The API key to use when making requests.
   */
  apiKey?: ApiKeyIdentity | ApiKeyIdentityProvider;
  /**
   * The credentials used to sign requests.
   */
  credentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  /**
   * The AWS region to which this client will send requests.
   */
  region?: string | __Provider<string>;
  /**
   * The token used to authenticate requests.
   */
  token?: TokenIdentity | TokenIdentityProvider;
}

/**
 * @internal
 */
export interface HttpAuthSchemeResolvedConfig {
  /**
   * Configuration of HttpAuthSchemes for a client which provides default identity providers and signers per auth scheme.
   * @internal
   */
  readonly httpAuthSchemes: HttpAuthScheme[];

  /**
   * Configuration of an HttpAuthSchemeProvider for a client which resolves which HttpAuthScheme to use.
   * @internal
   */
  readonly httpAuthSchemeProvider: WeatherHttpAuthSchemeProvider;

  /**
   * The API key to use when making requests.
   */
  readonly apiKey?: ApiKeyIdentityProvider;
  /**
   * The credentials used to sign requests.
   */
  readonly credentials?: AwsCredentialIdentityProvider;
  /**
   * The AWS region to which this client will send requests.
   */
  readonly region?: __Provider<string>;
  /**
   * The token used to authenticate requests.
   */
  readonly token?: TokenIdentityProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T>(
  config: T & HttpAuthSchemeInputConfig
): T & HttpAuthSchemeResolvedConfig => {
  const apiKey = memoizeIdentityProvider(config.apiKey, isIdentityExpired, doesIdentityRequireRefresh);
  const credentials = memoizeIdentityProvider(config.credentials, isIdentityExpired, doesIdentityRequireRefresh);
  const region = config.region ? normalizeProvider(config.region) : undefined;
  const token = memoizeIdentityProvider(config.token, isIdentityExpired, doesIdentityRequireRefresh);
  return Object.assign(config, {
    apiKey,
    credentials,
    region,
    token,
  }) as T & HttpAuthSchemeResolvedConfig;
};
