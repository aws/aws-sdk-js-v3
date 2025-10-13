// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedByteInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { MalformedByte } from "../schemas/schemas_0";

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
 * import { RestJsonProtocolClient, MalformedByteCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedByteCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson-schema";
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "MalformedByte", {})
  .n("RestJsonProtocolClient", "MalformedByteCommand")
  .sc(MalformedByte)
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
