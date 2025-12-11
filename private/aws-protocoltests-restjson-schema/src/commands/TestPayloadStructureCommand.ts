// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TestPayloadStructureInputOutput } from "../models/models_0";
import type {
  RestJsonProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestJsonProtocolClient";
import { TestPayloadStructure } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestPayloadStructureCommand}.
 */
export interface TestPayloadStructureCommandInput extends TestPayloadStructureInputOutput {}
/**
 * @public
 *
 * The output of {@link TestPayloadStructureCommand}.
 */
export interface TestPayloadStructureCommandOutput extends TestPayloadStructureInputOutput, __MetadataBearer {}

/**
 * This example operation serializes a payload targeting a structure.
 *
 * This enforces the same requirements as TestBodyStructure
 * but with the body specified by the @httpPayload trait.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, TestPayloadStructureCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, TestPayloadStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // TestPayloadStructureInputOutput
 *   testId: "STRING_VALUE",
 *   payloadConfig: { // PayloadConfig
 *     data: Number("int"),
 *   },
 * };
 * const command = new TestPayloadStructureCommand(input);
 * const response = await client.send(command);
 * // { // TestPayloadStructureInputOutput
 * //   testId: "STRING_VALUE",
 * //   payloadConfig: { // PayloadConfig
 * //     data: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param TestPayloadStructureCommandInput - {@link TestPayloadStructureCommandInput}
 * @returns {@link TestPayloadStructureCommandOutput}
 * @see {@link TestPayloadStructureCommandInput} for command's `input` shape.
 * @see {@link TestPayloadStructureCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class TestPayloadStructureCommand extends $Command
  .classBuilder<
    TestPayloadStructureCommandInput,
    TestPayloadStructureCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "TestPayloadStructure", {})
  .n("RestJsonProtocolClient", "TestPayloadStructureCommand")
  .sc(TestPayloadStructure)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestPayloadStructureInputOutput;
      output: TestPayloadStructureInputOutput;
    };
    sdk: {
      input: TestPayloadStructureCommandInput;
      output: TestPayloadStructureCommandOutput;
    };
  };
}
