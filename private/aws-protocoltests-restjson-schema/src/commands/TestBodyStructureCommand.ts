// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TestBodyStructureInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { TestBodyStructure } from "../schemas/schemas_0";

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
 * import { RestJsonProtocolClient, TestBodyStructureCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, TestBodyStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "TestBodyStructure", {})
  .n("RestJsonProtocolClient", "TestBodyStructureCommand")
  .sc(TestBodyStructure)
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
