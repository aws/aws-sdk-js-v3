// smithy-typescript generated code
import {
  HandlerExecutionContext,
  HttpAuthOption,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { getSmithyContext } from "@smithy/util-middleware";

import { RpcV2ProtocolClientResolvedConfig } from "../RpcV2ProtocolClient";

/**
 * @internal
 */
export interface RpcV2ProtocolHttpAuthSchemeParameters extends HttpAuthSchemeParameters {}

/**
 * @internal
 */
export interface RpcV2ProtocolHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    RpcV2ProtocolClientResolvedConfig,
    HandlerExecutionContext,
    RpcV2ProtocolHttpAuthSchemeParameters,
    object
  > {}

/**
 * @internal
 */
export const defaultRpcV2ProtocolHttpAuthSchemeParametersProvider = async (
  config: RpcV2ProtocolClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
): Promise<RpcV2ProtocolHttpAuthSchemeParameters> => {
  return {
    operation: getSmithyContext(context).operation as string,
  };
};

function createSmithyApiNoAuthHttpAuthOption(authParameters: RpcV2ProtocolHttpAuthSchemeParameters): HttpAuthOption {
  return {
    schemeId: "smithy.api#noAuth",
  };
}

/**
 * @internal
 */
export interface RpcV2ProtocolHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<RpcV2ProtocolHttpAuthSchemeParameters> {}

/**
 * @internal
 */
export const defaultRpcV2ProtocolHttpAuthSchemeProvider: RpcV2ProtocolHttpAuthSchemeProvider = (authParameters) => {
  const options: HttpAuthOption[] = [];
  switch (authParameters.operation) {
    default: {
      options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
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
  httpAuthSchemeProvider?: RpcV2ProtocolHttpAuthSchemeProvider;
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
  readonly httpAuthSchemeProvider: RpcV2ProtocolHttpAuthSchemeProvider;
}

/**
 * @internal
 */
export const resolveHttpAuthSchemeConfig = <T, R extends object>(
  config: T & HttpAuthSchemeInputConfig,
  { client }: { client: () => { config: R } }
): T & HttpAuthSchemeResolvedConfig => {
  return {
    ...config,
  } as T & HttpAuthSchemeResolvedConfig;
};
