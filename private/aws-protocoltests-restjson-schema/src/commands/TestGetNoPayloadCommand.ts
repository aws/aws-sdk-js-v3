// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TestNoPayloadInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { TestGetNoPayload } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestGetNoPayloadCommand}.
 */
export interface TestGetNoPayloadCommandInput extends TestNoPayloadInputOutput {}
/**
 * @public
 *
 * The output of {@link TestGetNoPayloadCommand}.
 */
export interface TestGetNoPayloadCommandOutput extends TestNoPayloadInputOutput, __MetadataBearer {}

/**
 * This example GET operation serializes a request without a modeled HTTP body.
 *
 * These tests are to ensure we do not attach a body or related headers
 * (Content-Length, Content-Type) to operations that semantically
 * cannot produce an HTTP body.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestGetNoPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, TestGetNoPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // TestNoPayloadInputOutput
 *   testId: "STRING_VALUE",
 * };
 * const command = new TestGetNoPayloadCommand(input);
 * const response = await client.send(command);
 * // { // TestNoPayloadInputOutput
 * //   testId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestGetNoPayloadCommandInput - {@link TestGetNoPayloadCommandInput}
 * @returns {@link TestGetNoPayloadCommandOutput}
 * @see {@link TestGetNoPayloadCommandInput} for command's `input` shape.
 * @see {@link TestGetNoPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class TestGetNoPayloadCommand extends $Command
  .classBuilder<
    TestGetNoPayloadCommandInput,
    TestGetNoPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "TestGetNoPayload", {})
  .n("RestJsonProtocolClient", "TestGetNoPayloadCommand")
  .f(void 0, void 0)
  .sc(TestGetNoPayload)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestNoPayloadInputOutput;
      output: TestNoPayloadInputOutput;
    };
    sdk: {
      input: TestGetNoPayloadCommandInput;
      output: TestGetNoPayloadCommandOutput;
    };
  };
}
