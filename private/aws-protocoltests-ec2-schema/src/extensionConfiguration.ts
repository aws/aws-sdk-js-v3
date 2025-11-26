// smithy-typescript generated code
import type { AwsRegionExtensionConfiguration } from "@aws-sdk/types";
import type { HttpHandlerExtensionConfiguration } from "@smithy/protocol-http";
import type { DefaultExtensionConfiguration } from "@smithy/types";

import type { HttpAuthExtensionConfiguration } from "./auth/httpAuthExtensionConfiguration";

/**
 * @internal
 */
export interface EC2ProtocolExtensionConfiguration
  extends HttpHandlerExtensionConfiguration,
    DefaultExtensionConfiguration,
    AwsRegionExtensionConfiguration,
    HttpAuthExtensionConfiguration {}
