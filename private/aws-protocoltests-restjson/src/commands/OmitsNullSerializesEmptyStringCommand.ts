// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { OmitsNullSerializesEmptyStringInput } from "../models/models_0";
import {
  de_OmitsNullSerializesEmptyStringCommand,
  se_OmitsNullSerializesEmptyStringCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, OmitsNullSerializesEmptyStringCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, OmitsNullSerializesEmptyStringCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
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
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "OmitsNullSerializesEmptyString", {})
  .n("RestJsonProtocolClient", "OmitsNullSerializesEmptyStringCommand")
  .f(void 0, void 0)
  .ser(se_OmitsNullSerializesEmptyStringCommand)
  .de(de_OmitsNullSerializesEmptyStringCommand)
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
