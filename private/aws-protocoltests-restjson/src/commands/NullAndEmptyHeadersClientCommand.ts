// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { NullAndEmptyHeadersIO } from "../models/models_0";
import { de_NullAndEmptyHeadersClientCommand, se_NullAndEmptyHeadersClientCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NullAndEmptyHeadersClientCommand}.
 */
export interface NullAndEmptyHeadersClientCommandInput extends NullAndEmptyHeadersIO {}
/**
 * @public
 *
 * The output of {@link NullAndEmptyHeadersClientCommand}.
 */
export interface NullAndEmptyHeadersClientCommandOutput extends NullAndEmptyHeadersIO, __MetadataBearer {}

/**
 * Null headers are not sent over the wire, empty headers are serialized to ""
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, NullAndEmptyHeadersClientCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, NullAndEmptyHeadersClientCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // NullAndEmptyHeadersIO
 *   a: "STRING_VALUE",
 *   b: "STRING_VALUE",
 *   c: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NullAndEmptyHeadersClientCommand(input);
 * const response = await client.send(command);
 * // { // NullAndEmptyHeadersIO
 * //   a: "STRING_VALUE",
 * //   b: "STRING_VALUE",
 * //   c: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param NullAndEmptyHeadersClientCommandInput - {@link NullAndEmptyHeadersClientCommandInput}
 * @returns {@link NullAndEmptyHeadersClientCommandOutput}
 * @see {@link NullAndEmptyHeadersClientCommandInput} for command's `input` shape.
 * @see {@link NullAndEmptyHeadersClientCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class NullAndEmptyHeadersClientCommand extends $Command
  .classBuilder<
    NullAndEmptyHeadersClientCommandInput,
    NullAndEmptyHeadersClientCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "NullAndEmptyHeadersClient", {})
  .n("RestJsonProtocolClient", "NullAndEmptyHeadersClientCommand")
  .f(void 0, void 0)
  .ser(se_NullAndEmptyHeadersClientCommand)
  .de(de_NullAndEmptyHeadersClientCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NullAndEmptyHeadersIO;
      output: NullAndEmptyHeadersIO;
    };
    sdk: {
      input: NullAndEmptyHeadersClientCommandInput;
      output: NullAndEmptyHeadersClientCommandOutput;
    };
  };
}
