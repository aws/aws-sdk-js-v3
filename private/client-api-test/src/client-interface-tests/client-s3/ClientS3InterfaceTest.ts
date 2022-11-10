import { S3Client, S3ClientResolvedConfig } from "@aws-sdk/client-s3";

import { ClientInterfaceTest } from "../ClientInterfaceTest";
import { initializeWithMaximalConfiguration } from "./impl/initializeWithMaximalConfiguration";
import { initializeWithMinimalConfiguration } from "./impl/initializeWithMinimalConfiguration";

export class ClientS3InterfaceTest implements ClientInterfaceTest<S3Client> {
  optionalConfigFieldsCanBeVoided(): void {
    const s3 = new S3Client({});
    const resolvedConfig: S3ClientResolvedConfig = s3.config;
    /**
     * Endpoint is no longer guaranteed as of endpoints 2.0 (rulesets).
     * @see https://github.com/aws/aws-sdk-js-v3/issues/4122
     */
    resolvedConfig.endpoint = void 0;
    resolvedConfig.isCustomEndpoint = void 0;
    resolvedConfig.customUserAgent = void 0;
  }
  initializeWithMinimalConfiguration(): S3Client {
    return initializeWithMinimalConfiguration();
  }
  initializeWithMaximalConfiguration(): S3Client {
    return initializeWithMaximalConfiguration();
  }
}
