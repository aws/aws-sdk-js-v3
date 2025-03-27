// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { de_EmptyOperationCommand, se_EmptyOperationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EmptyOperationCommand}.
 */
export interface EmptyOperationCommandInput {}
/**
 * @public
 *
 * The output of {@link EmptyOperationCommand}.
 */
export interface EmptyOperationCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, EmptyOperationCommand } from "@aws-sdk/aws-protocoltests-json"; // ES Modules import
 * // const { JsonProtocolClient, EmptyOperationCommand } = require("@aws-sdk/aws-protocoltests-json"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = {};
 * const command = new EmptyOperationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EmptyOperationCommandInput - {@link EmptyOperationCommandInput}
 * @returns {@link EmptyOperationCommandOutput}
 * @see {@link EmptyOperationCommandInput} for command's `input` shape.
 * @see {@link EmptyOperationCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 */
export class EmptyOperationCommand extends $Command
  .classBuilder<
    EmptyOperationCommandInput,
    EmptyOperationCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("JsonProtocol", "EmptyOperation", {})
  .n("JsonProtocolClient", "EmptyOperationCommand")
  .f(void 0, void 0)
  .ser(se_EmptyOperationCommand)
  .de(de_EmptyOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EmptyOperationCommandInput;
      output: EmptyOperationCommandOutput;
    };
  };
}
