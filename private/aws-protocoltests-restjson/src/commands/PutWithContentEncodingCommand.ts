// smithy-typescript generated code
import { getCompressionPlugin } from "@smithy/middleware-compression";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { PutWithContentEncodingInput } from "../models/models_0";
import { de_PutWithContentEncodingCommand, se_PutWithContentEncodingCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutWithContentEncodingCommand}.
 */
export interface PutWithContentEncodingCommandInput extends PutWithContentEncodingInput {}
/**
 * @public
 *
 * The output of {@link PutWithContentEncodingCommand}.
 */
export interface PutWithContentEncodingCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, PutWithContentEncodingCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, PutWithContentEncodingCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // PutWithContentEncodingInput
 *   encoding: "STRING_VALUE",
 *   data: "STRING_VALUE",
 * };
 * const command = new PutWithContentEncodingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutWithContentEncodingCommandInput - {@link PutWithContentEncodingCommandInput}
 * @returns {@link PutWithContentEncodingCommandOutput}
 * @see {@link PutWithContentEncodingCommandInput} for command's `input` shape.
 * @see {@link PutWithContentEncodingCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class PutWithContentEncodingCommand extends $Command
  .classBuilder<
    PutWithContentEncodingCommandInput,
    PutWithContentEncodingCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getCompressionPlugin(config, {
        encodings: ["gzip"],
      }),
    ];
  })
  .s("RestJson", "PutWithContentEncoding", {})
  .n("RestJsonProtocolClient", "PutWithContentEncodingCommand")
  .f(void 0, void 0)
  .ser(se_PutWithContentEncodingCommand)
  .de(de_PutWithContentEncodingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutWithContentEncodingInput;
      output: {};
    };
    sdk: {
      input: PutWithContentEncodingCommandInput;
      output: PutWithContentEncodingCommandOutput;
    };
  };
}
