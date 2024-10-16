// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { TestNoPayloadInputOutput } from "../models/models_0";
import { de_TestPostNoPayloadCommand, se_TestPostNoPayloadCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestPostNoPayloadCommand}.
 */
export interface TestPostNoPayloadCommandInput extends TestNoPayloadInputOutput {}
/**
 * @public
 *
 * The output of {@link TestPostNoPayloadCommand}.
 */
export interface TestPostNoPayloadCommandOutput extends TestNoPayloadInputOutput, __MetadataBearer {}

/**
 * This example POST operation serializes a request without a modeled HTTP body.
 *
 * These tests are to ensure we do not attach a body or related headers
 * (Content-Type) to a POST operation with no modeled payload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestPostNoPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TestPostNoPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // TestNoPayloadInputOutput
 *   testId: "STRING_VALUE",
 * };
 * const command = new TestPostNoPayloadCommand(input);
 * const response = await client.send(command);
 * // { // TestNoPayloadInputOutput
 * //   testId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestPostNoPayloadCommandInput - {@link TestPostNoPayloadCommandInput}
 * @returns {@link TestPostNoPayloadCommandOutput}
 * @see {@link TestPostNoPayloadCommandInput} for command's `input` shape.
 * @see {@link TestPostNoPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class TestPostNoPayloadCommand extends $Command
  .classBuilder<
    TestPostNoPayloadCommandInput,
    TestPostNoPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "TestPostNoPayload", {})
  .n("RestJsonProtocolClient", "TestPostNoPayloadCommand")
  .f(void 0, void 0)
  .ser(se_TestPostNoPayloadCommand)
  .de(de_TestPostNoPayloadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestNoPayloadInputOutput;
      output: TestNoPayloadInputOutput;
    };
    sdk: {
      input: TestPostNoPayloadCommandInput;
      output: TestPostNoPayloadCommandOutput;
    };
  };
}
