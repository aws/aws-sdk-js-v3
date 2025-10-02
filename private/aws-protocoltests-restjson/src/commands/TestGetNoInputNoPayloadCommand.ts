// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TestNoPayloadInputOutput } from "../models/models_0";
import { de_TestGetNoInputNoPayloadCommand, se_TestGetNoInputNoPayloadCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestGetNoInputNoPayloadCommand}.
 */
export interface TestGetNoInputNoPayloadCommandInput {}
/**
 * @public
 *
 * The output of {@link TestGetNoInputNoPayloadCommand}.
 */
export interface TestGetNoInputNoPayloadCommandOutput extends TestNoPayloadInputOutput, __MetadataBearer {}

/**
 * This example GET operation has no input and serializes a request without a HTTP body.
 *
 * These tests are to ensure we do not attach a body or related headers
 * (Content-Length, Content-Type) to operations that semantically
 * cannot produce an HTTP body.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestGetNoInputNoPayloadCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TestGetNoInputNoPayloadCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new TestGetNoInputNoPayloadCommand(input);
 * const response = await client.send(command);
 * // { // TestNoPayloadInputOutput
 * //   testId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TestGetNoInputNoPayloadCommandInput - {@link TestGetNoInputNoPayloadCommandInput}
 * @returns {@link TestGetNoInputNoPayloadCommandOutput}
 * @see {@link TestGetNoInputNoPayloadCommandInput} for command's `input` shape.
 * @see {@link TestGetNoInputNoPayloadCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class TestGetNoInputNoPayloadCommand extends $Command
  .classBuilder<
    TestGetNoInputNoPayloadCommandInput,
    TestGetNoInputNoPayloadCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "TestGetNoInputNoPayload", {})
  .n("RestJsonProtocolClient", "TestGetNoInputNoPayloadCommand")
  .f(void 0, void 0)
  .ser(se_TestGetNoInputNoPayloadCommand)
  .de(de_TestGetNoInputNoPayloadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: TestNoPayloadInputOutput;
    };
    sdk: {
      input: TestGetNoInputNoPayloadCommandInput;
      output: TestGetNoInputNoPayloadCommandOutput;
    };
  };
}
