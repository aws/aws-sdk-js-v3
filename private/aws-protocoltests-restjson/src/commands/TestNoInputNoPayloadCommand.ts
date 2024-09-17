// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { TestNoPayloadInputOutput } from "../models/models_0";
import { de_TestNoInputNoPayloadCommand, se_TestNoInputNoPayloadCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestNoInputNoPayloadCommand}.
 */
export interface TestNoInputNoPayloadCommandInput {}
/**
 * @public
 *
 * The output of {@link TestNoInputNoPayloadCommand}.
 */
export interface TestNoInputNoPayloadCommandOutput extends TestNoPayloadInputOutput, __MetadataBearer {}

/**
 * This example operation has no input and serializes a request without an HTTP body.
 *
 * These tests are to ensure we do not attach a body or related headers
 * (Content-Length, Content-Type) to operations that semantically
 * cannot produce an HTTP body.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestNoInputNoPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TestNoInputNoPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new TestNoInputNoPayloadCommand(input);
 * const response = await client.send(command);
 * // { // TestNoPayloadInputOutput
 * //   testId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestNoInputNoPayloadCommandInput - {@link TestNoInputNoPayloadCommandInput}
 * @returns {@link TestNoInputNoPayloadCommandOutput}
 * @see {@link TestNoInputNoPayloadCommandInput} for command's `input` shape.
 * @see {@link TestNoInputNoPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class TestNoInputNoPayloadCommand extends $Command
  .classBuilder<
    TestNoInputNoPayloadCommandInput,
    TestNoInputNoPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "TestNoInputNoPayload", {})
  .n("RestJsonProtocolClient", "TestNoInputNoPayloadCommand")
  .f(void 0, void 0)
  .ser(se_TestNoInputNoPayloadCommand)
  .de(de_TestNoInputNoPayloadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: TestNoPayloadInputOutput;
    };
    sdk: {
      input: TestNoInputNoPayloadCommandInput;
      output: TestNoInputNoPayloadCommandOutput;
    };
  };
}
