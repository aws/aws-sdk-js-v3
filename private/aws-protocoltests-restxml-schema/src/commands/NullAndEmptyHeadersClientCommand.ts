// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { NullAndEmptyHeadersIO } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { NullAndEmptyHeadersClient } from "../schemas/schemas_7_Headers";

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
 * import { RestXmlProtocolClient, NullAndEmptyHeadersClientCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, NullAndEmptyHeadersClientCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
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
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class NullAndEmptyHeadersClientCommand extends $Command
  .classBuilder<
    NullAndEmptyHeadersClientCommandInput,
    NullAndEmptyHeadersClientCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "NullAndEmptyHeadersClient", {})
  .n("RestXmlProtocolClient", "NullAndEmptyHeadersClientCommand")
  .sc(NullAndEmptyHeadersClient)
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
