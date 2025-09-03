// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { OmitsNullSerializesEmptyStringInput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { OmitsNullSerializesEmptyString } from "../schemas/schemas_63_OmitsNullSerializesEmptyString";

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
 * import { RestJsonProtocolClient, OmitsNullSerializesEmptyStringCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, OmitsNullSerializesEmptyStringCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class OmitsNullSerializesEmptyStringCommand extends $Command
  .classBuilder<
    OmitsNullSerializesEmptyStringCommandInput,
    OmitsNullSerializesEmptyStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "OmitsNullSerializesEmptyString", {})
  .n("RestJsonProtocolClient", "OmitsNullSerializesEmptyStringCommand")
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
