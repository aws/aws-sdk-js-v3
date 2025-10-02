// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedByteInput } from "../models/models_0";
import { de_MalformedByteCommand, se_MalformedByteCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MalformedByteCommand}.
 */
export interface MalformedByteCommandInput extends MalformedByteInput {}
/**
 * @public
 *
 * The output of {@link MalformedByteCommand}.
 */
export interface MalformedByteCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedByteCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedByteCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedByteInput
 *   byteInBody: 0, // BYTE_VALUE
 *   byteInPath: 0, // BYTE_VALUE // required
 *   byteInQuery: 0, // BYTE_VALUE
 *   byteInHeader: 0, // BYTE_VALUE
 * };
 * const command = new MalformedByteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedByteCommandInput - {@link MalformedByteCommandInput}
 * @returns {@link MalformedByteCommandOutput}
 * @see {@link MalformedByteCommandInput} for command's `input` shape.
 * @see {@link MalformedByteCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedByteCommand extends $Command
  .classBuilder<
    MalformedByteCommandInput,
    MalformedByteCommandOutput,
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
  .s("RestJson", "MalformedByte", {})
  .n("RestJsonProtocolClient", "MalformedByteCommand")
  .f(void 0, void 0)
  .ser(se_MalformedByteCommand)
  .de(de_MalformedByteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedByteInput;
      output: {};
    };
    sdk: {
      input: MalformedByteCommandInput;
      output: MalformedByteCommandOutput;
    };
  };
}
