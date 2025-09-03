// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { NullAndEmptyHeadersIO } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { NullAndEmptyHeadersServer } from "../schemas/schemas_22_Headers";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NullAndEmptyHeadersServerCommand}.
 */
export interface NullAndEmptyHeadersServerCommandInput extends NullAndEmptyHeadersIO {}
/**
 * @public
 *
 * The output of {@link NullAndEmptyHeadersServerCommand}.
 */
export interface NullAndEmptyHeadersServerCommandOutput extends NullAndEmptyHeadersIO, __MetadataBearer {}

/**
 * Null headers are not sent over the wire, empty headers are serialized to ""
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, NullAndEmptyHeadersServerCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, NullAndEmptyHeadersServerCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // NullAndEmptyHeadersIO
 *   a: "STRING_VALUE",
 *   b: "STRING_VALUE",
 *   c: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NullAndEmptyHeadersServerCommand(input);
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
 * @param NullAndEmptyHeadersServerCommandInput - {@link NullAndEmptyHeadersServerCommandInput}
 * @returns {@link NullAndEmptyHeadersServerCommandOutput}
 * @see {@link NullAndEmptyHeadersServerCommandInput} for command's `input` shape.
 * @see {@link NullAndEmptyHeadersServerCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class NullAndEmptyHeadersServerCommand extends $Command
  .classBuilder<
    NullAndEmptyHeadersServerCommandInput,
    NullAndEmptyHeadersServerCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "NullAndEmptyHeadersServer", {})
  .n("RestJsonProtocolClient", "NullAndEmptyHeadersServerCommand")
  .sc(NullAndEmptyHeadersServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NullAndEmptyHeadersIO;
      output: NullAndEmptyHeadersIO;
    };
    sdk: {
      input: NullAndEmptyHeadersServerCommandInput;
      output: NullAndEmptyHeadersServerCommandOutput;
    };
  };
}
