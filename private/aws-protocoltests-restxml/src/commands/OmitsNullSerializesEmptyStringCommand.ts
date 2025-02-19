// smithy-typescript generated code
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { OmitsNullSerializesEmptyStringInput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { OmitsNullSerializesEmptyString } from "../schemas/aws.protocoltests.restxml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OmitsNullSerializesEmptyStringCommand}.
 */
export interface OmitsNullSerializesEmptyStringCommandInput extends OmitsNullSerializesEmptyStringInput {}
/**
 * @public
 *
 * The output of {@link OmitsNullSerializesEmptyStringCommand}.
 */
export interface OmitsNullSerializesEmptyStringCommandOutput extends __MetadataBearer {}

/**
 * Omits null, but serializes empty string value.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, OmitsNullSerializesEmptyStringCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, OmitsNullSerializesEmptyStringCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // OmitsNullSerializesEmptyStringInput
 *   nullValue: "STRING_VALUE",
 *   emptyString: "STRING_VALUE",
 * };
 * const command = new OmitsNullSerializesEmptyStringCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param OmitsNullSerializesEmptyStringCommandInput - {@link OmitsNullSerializesEmptyStringCommandInput}
 * @returns {@link OmitsNullSerializesEmptyStringCommandOutput}
 * @see {@link OmitsNullSerializesEmptyStringCommandInput} for command's `input` shape.
 * @see {@link OmitsNullSerializesEmptyStringCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class OmitsNullSerializesEmptyStringCommand extends $Command
  .classBuilder<
    OmitsNullSerializesEmptyStringCommandInput,
    OmitsNullSerializesEmptyStringCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [];
  })
  .s("RestXml", "OmitsNullSerializesEmptyString", {})
  .n("RestXmlProtocolClient", "OmitsNullSerializesEmptyStringCommand")
  .f(void 0, void 0)
  .sc(OmitsNullSerializesEmptyString)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OmitsNullSerializesEmptyStringInput;
      output: {};
    };
    sdk: {
      input: OmitsNullSerializesEmptyStringCommandInput;
      output: OmitsNullSerializesEmptyStringCommandOutput;
    };
  };
}
