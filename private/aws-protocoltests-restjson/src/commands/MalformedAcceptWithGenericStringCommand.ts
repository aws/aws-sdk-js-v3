// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { MalformedAcceptWithGenericStringOutput } from "../models/models_0";
import {
  de_MalformedAcceptWithGenericStringCommand,
  se_MalformedAcceptWithGenericStringCommand,
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
 * The input for {@link MalformedAcceptWithGenericStringCommand}.
 */
export interface MalformedAcceptWithGenericStringCommandInput {}
/**
 * @public
 *
 * The output of {@link MalformedAcceptWithGenericStringCommand}.
 */
export interface MalformedAcceptWithGenericStringCommandOutput
  extends MalformedAcceptWithGenericStringOutput,
    __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedAcceptWithGenericStringCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedAcceptWithGenericStringCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new MalformedAcceptWithGenericStringCommand(input);
 * const response = await client.send(command);
 * // { // MalformedAcceptWithGenericStringOutput
 * //   payload: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MalformedAcceptWithGenericStringCommandInput - {@link MalformedAcceptWithGenericStringCommandInput}
 * @returns {@link MalformedAcceptWithGenericStringCommandOutput}
 * @see {@link MalformedAcceptWithGenericStringCommandInput} for command's `input` shape.
 * @see {@link MalformedAcceptWithGenericStringCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedAcceptWithGenericStringCommand extends $Command
  .classBuilder<
    MalformedAcceptWithGenericStringCommandInput,
    MalformedAcceptWithGenericStringCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "MalformedAcceptWithGenericString", {})
  .n("RestJsonProtocolClient", "MalformedAcceptWithGenericStringCommand")
  .f(void 0, void 0)
  .ser(se_MalformedAcceptWithGenericStringCommand)
  .de(de_MalformedAcceptWithGenericStringCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: MalformedAcceptWithGenericStringOutput;
    };
    sdk: {
      input: MalformedAcceptWithGenericStringCommandInput;
      output: MalformedAcceptWithGenericStringCommandOutput;
    };
  };
}
