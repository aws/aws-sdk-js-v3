// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TestNoPayloadInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { TestPostNoInputNoPayload } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestPostNoInputNoPayloadCommand}.
 */
export interface TestPostNoInputNoPayloadCommandInput {}
/**
 * @public
 *
 * The output of {@link TestPostNoInputNoPayloadCommand}.
 */
export interface TestPostNoInputNoPayloadCommandOutput extends TestNoPayloadInputOutput, __MetadataBearer {}

/**
 * This example POST operation has no input and serializes a request without a HTTP body.
 *
 * These tests are to ensure we do not attach a body or related headers
 * (Content-Type) to a POST operation with no modeled input.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestPostNoInputNoPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, TestPostNoInputNoPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new TestPostNoInputNoPayloadCommand(input);
 * const response = await client.send(command);
 * // { // TestNoPayloadInputOutput
 * //   testId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestPostNoInputNoPayloadCommandInput - {@link TestPostNoInputNoPayloadCommandInput}
 * @returns {@link TestPostNoInputNoPayloadCommandOutput}
 * @see {@link TestPostNoInputNoPayloadCommandInput} for command's `input` shape.
 * @see {@link TestPostNoInputNoPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class TestPostNoInputNoPayloadCommand extends $Command
  .classBuilder<
    TestPostNoInputNoPayloadCommandInput,
    TestPostNoInputNoPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "TestPostNoInputNoPayload", {})
  .n("RestJsonProtocolClient", "TestPostNoInputNoPayloadCommand")
  .sc(TestPostNoInputNoPayload)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: TestNoPayloadInputOutput;
    };
    sdk: {
      input: TestPostNoInputNoPayloadCommandInput;
      output: TestPostNoInputNoPayloadCommandOutput;
    };
  };
}
