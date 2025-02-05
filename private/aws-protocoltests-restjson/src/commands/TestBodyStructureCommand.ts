// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { TestBodyStructureInputOutput } from "../models/models_0";
import { de_TestBodyStructureCommand, se_TestBodyStructureCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestBodyStructureCommand}.
 */
export interface TestBodyStructureCommandInput extends TestBodyStructureInputOutput {}
/**
 * @public
 *
 * The output of {@link TestBodyStructureCommand}.
 */
export interface TestBodyStructureCommandOutput extends TestBodyStructureInputOutput, __MetadataBearer {}

/**
 * This example operation serializes a structure in the HTTP body.
 *
 * It should ensure Content-Type: application/json is
 * used in all requests and that an "empty" body is
 * an empty JSON document (\{\}).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestBodyStructureCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, TestBodyStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RestJsonProtocolClient(config);
 * const input = { // TestBodyStructureInputOutput
 *   testId: "STRING_VALUE",
 *   testConfig: { // TestConfig
 *     timeout: Number("int"),
 *   },
 * };
 * const command = new TestBodyStructureCommand(input);
 * const response = await client.send(command);
 * // { // TestBodyStructureInputOutput
 * //   testId: "STRING_VALUE",
 * //   testConfig: { // TestConfig
 * //     timeout: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param TestBodyStructureCommandInput - {@link TestBodyStructureCommandInput}
 * @returns {@link TestBodyStructureCommandOutput}
 * @see {@link TestBodyStructureCommandInput} for command's `input` shape.
 * @see {@link TestBodyStructureCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class TestBodyStructureCommand extends $Command
  .classBuilder<
    TestBodyStructureCommandInput,
    TestBodyStructureCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "TestBodyStructure", {})
  .n("RestJsonProtocolClient", "TestBodyStructureCommand")
  .f(void 0, void 0)
  .ser(se_TestBodyStructureCommand)
  .de(de_TestBodyStructureCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestBodyStructureInputOutput;
      output: TestBodyStructureInputOutput;
    };
    sdk: {
      input: TestBodyStructureCommandInput;
      output: TestBodyStructureCommandOutput;
    };
  };
}
