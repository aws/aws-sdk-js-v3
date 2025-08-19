// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { UnitInputAndOutput } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnitInputAndOutputCommand}.
 */
export interface UnitInputAndOutputCommandInput {}
/**
 * @public
 *
 * The output of {@link UnitInputAndOutputCommand}.
 */
export interface UnitInputAndOutputCommandOutput extends __MetadataBearer {}

/**
 * This test is similar to NoInputAndNoOutput, but uses explicit Unit types.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, UnitInputAndOutputCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, UnitInputAndOutputCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new UnitInputAndOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnitInputAndOutputCommandInput - {@link UnitInputAndOutputCommandInput}
 * @returns {@link UnitInputAndOutputCommandOutput}
 * @see {@link UnitInputAndOutputCommandInput} for command's `input` shape.
 * @see {@link UnitInputAndOutputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class UnitInputAndOutputCommand extends $Command
  .classBuilder<
    UnitInputAndOutputCommandInput,
    UnitInputAndOutputCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "UnitInputAndOutput", {})
  .n("RestJsonProtocolClient", "UnitInputAndOutputCommand")
  .sc(UnitInputAndOutput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: UnitInputAndOutputCommandInput;
      output: UnitInputAndOutputCommandOutput;
    };
  };
}
