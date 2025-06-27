// smithy-typescript generated code
import { HttpAuthExtensionConfiguration } from "./auth/httpAuthExtensionConfiguration";
import { HttpHandlerExtensionConfiguration } from "@smithy/protocol-http";
import { DefaultExtensionConfiguration } from "@smithy/types";

/**
 * @internal
 */
export interface EchoServiceExtensionConfiguration
  extends HttpHandlerExtensionConfiguration,
    DefaultExtensionConfiguration,
    HttpAuthExtensionConfiguration {}
