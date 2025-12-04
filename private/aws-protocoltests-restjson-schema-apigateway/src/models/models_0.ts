// smithy-typescript generated code
import type { ApiKeySourceType, EndpointType } from "./enums";

/**
 * @public
 */
export interface GetRestApisRequest {
  position?: string | undefined;
  limit?: number | undefined;
}

/**
 * @public
 */
export interface EndpointConfiguration {
  types?: EndpointType[] | undefined;
  vpcEndpointIds?: string[] | undefined;
}

/**
 * @public
 */
export interface RestApi {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  createdDate?: Date | undefined;
  version?: string | undefined;
  warnings?: string[] | undefined;
  binaryMediaTypes?: string[] | undefined;
  minimumCompressionSize?: number | undefined;
  apiKeySource?: ApiKeySourceType | undefined;
  endpointConfiguration?: EndpointConfiguration | undefined;
  policy?: string | undefined;
  tags?: Record<string, string> | undefined;
  disableExecuteApiEndpoint?: boolean | undefined;
}

/**
 * @public
 */
export interface RestApis {
  items?: RestApi[] | undefined;
  position?: string | undefined;
}
