// smithy-typescript generated code
import type { HttpHandlerExtensionConfiguration } from "@smithy/protocol-http";
import type { DefaultExtensionConfiguration } from "@smithy/types";

import type { HttpAuthExtensionConfiguration } from "./auth/httpAuthExtensionConfiguration";

/**
 * @internal
 */
export interface EchoServiceExtensionConfiguration
  extends HttpHandlerExtensionConfiguration,
    DefaultExtensionConfiguration,
    HttpAuthExtensionConfiguration {}
