// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedBlobInput } from "../models/models_0";
import { de_MalformedBlobCommand, se_MalformedBlobCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedBlobCommand}.
 */
export interface MalformedBlobCommandInput extends MalformedBlobInput {}
/**
 * @public
 *
 * The output of {@link MalformedBlobCommand}.
 */
export interface MalformedBlobCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedBlobCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedBlobCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedBlobInput
 *   blob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new MalformedBlobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedBlobCommandInput - {@link MalformedBlobCommandInput}
 * @returns {@link MalformedBlobCommandOutput}
 * @see {@link MalformedBlobCommandInput} for command's `input` shape.
 * @see {@link MalformedBlobCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedBlobCommand extends $Command
  .classBuilder<
    MalformedBlobCommandInput,
    MalformedBlobCommandOutput,
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
  .s("RestJson", "MalformedBlob", {})
  .n("RestJsonProtocolClient", "MalformedBlobCommand")
  .f(void 0, void 0)
  .ser(se_MalformedBlobCommand)
  .de(de_MalformedBlobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedBlobInput;
      output: {};
    };
    sdk: {
      input: MalformedBlobCommandInput;
      output: MalformedBlobCommandOutput;
    };
  };
}
