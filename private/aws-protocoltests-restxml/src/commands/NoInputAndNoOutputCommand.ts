// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { de_NoInputAndNoOutputCommand, se_NoInputAndNoOutputCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NoInputAndNoOutputCommand}.
 */
export interface NoInputAndNoOutputCommandInput {}
/**
 * @public
 *
 * The output of {@link NoInputAndNoOutputCommand}.
 */
export interface NoInputAndNoOutputCommandOutput extends __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there's
 * no request or response payload because the operation has no input or output.
 * While this should be rare, code generators must support this.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, NoInputAndNoOutputCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, NoInputAndNoOutputCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = {};
 * const command = new NoInputAndNoOutputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NoInputAndNoOutputCommandInput - {@link NoInputAndNoOutputCommandInput}
 * @returns {@link NoInputAndNoOutputCommandOutput}
 * @see {@link NoInputAndNoOutputCommandInput} for command's `input` shape.
 * @see {@link NoInputAndNoOutputCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class NoInputAndNoOutputCommand extends $Command
  .classBuilder<
    NoInputAndNoOutputCommandInput,
    NoInputAndNoOutputCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "NoInputAndNoOutput", {})
  .n("RestXmlProtocolClient", "NoInputAndNoOutputCommand")
  .f(void 0, void 0)
  .ser(se_NoInputAndNoOutputCommand)
  .de(de_NoInputAndNoOutputCommand)
  .build() {}
