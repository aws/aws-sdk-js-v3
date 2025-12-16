// smithy-typescript generated code
import {
  type ApiKeyIdentity,
  type ApiKeyIdentityProvider,
  type HttpAuthScheme,
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  TokenIdentity,
  TokenIdentityProvider,
} from "@smithy/types";

import type { WeatherHttpAuthSchemeProvider } from "./httpAuthSchemeProvider";

/**
 * @internal
 */
export interface HttpAuthExtensionConfiguration {
  setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void;
  httpAuthSchemes(): HttpAuthScheme[];
  setHttpAuthSchemeProvider(httpAuthSchemeProvider: WeatherHttpAuthSchemeProvider): void;
  httpAuthSchemeProvider(): WeatherHttpAuthSchemeProvider;
  setApiKey(apiKey: ApiKeyIdentity | ApiKeyIdentityProvider): void;
  apiKey(): ApiKeyIdentity | ApiKeyIdentityProvider | undefined;
  setCredentials(credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider): void;
  credentials(): AwsCredentialIdentity | AwsCredentialIdentityProvider | undefined;
  setToken(token: TokenIdentity | TokenIdentityProvider): void;
  token(): TokenIdentity | TokenIdentityProvider | undefined;
}

/**
 * @internal
 */
export type HttpAuthRuntimeConfig = Partial<{
  httpAuthSchemes: HttpAuthScheme[];
  httpAuthSchemeProvider: WeatherHttpAuthSchemeProvider;
  apiKey: ApiKeyIdentity | ApiKeyIdentityProvider;
  credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider;
  token: TokenIdentity | TokenIdentityProvider;
}>;

/**
 * @internal
 */
export const getHttpAuthExtensionConfiguration = (
  runtimeConfig: HttpAuthRuntimeConfig
): HttpAuthExtensionConfiguration => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes!;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider!;
  let _apiKey = runtimeConfig.apiKey;
  let _credentials = runtimeConfig.credentials;
  let _token = runtimeConfig.token;
  return {
    setHttpAuthScheme(httpAuthScheme: HttpAuthScheme): void {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes(): HttpAuthScheme[] {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider: WeatherHttpAuthSchemeProvider): void {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider(): WeatherHttpAuthSchemeProvider {
      return _httpAuthSchemeProvider;
    },
    setApiKey(apiKey: ApiKeyIdentity | ApiKeyIdentityProvider): void {
      _apiKey = apiKey;
    },
    apiKey(): ApiKeyIdentity | ApiKeyIdentityProvider | undefined {
      return _apiKey;
    },
    setCredentials(credentials: AwsCredentialIdentity | AwsCredentialIdentityProvider): void {
      _credentials = credentials;
    },
    credentials(): AwsCredentialIdentity | AwsCredentialIdentityProvider | undefined {
      return _credentials;
    },
    setToken(token: TokenIdentity | TokenIdentityProvider): void {
      _token = token;
    },
    token(): TokenIdentity | TokenIdentityProvider | undefined {
      return _token;
    },
  };
};

/**
 * @internal
 */
export const resolveHttpAuthRuntimeConfig = (config: HttpAuthExtensionConfiguration): HttpAuthRuntimeConfig => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    apiKey: config.apiKey(),
    credentials: config.credentials(),
    token: config.token(),
  };
};
