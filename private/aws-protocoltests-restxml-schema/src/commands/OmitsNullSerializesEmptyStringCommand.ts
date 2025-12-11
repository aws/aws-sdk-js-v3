// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { OmitsNullSerializesEmptyStringInput } from "../models/models_0";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";
import { OmitsNullSerializesEmptyString } from "../schemas/schemas_0";

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
 * import { RestXmlProtocolClient, OmitsNullSerializesEmptyStringCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, OmitsNullSerializesEmptyStringCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "OmitsNullSerializesEmptyString", {})
  .n("RestXmlProtocolClient", "OmitsNullSerializesEmptyStringCommand")
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
