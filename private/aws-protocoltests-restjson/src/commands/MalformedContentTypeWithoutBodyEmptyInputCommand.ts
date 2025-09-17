// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MalformedContentTypeWithoutBodyEmptyInputInput } from "../models/models_0";
import {
  de_MalformedContentTypeWithoutBodyEmptyInputCommand,
  se_MalformedContentTypeWithoutBodyEmptyInputCommand,
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
 * The input for {@link MalformedContentTypeWithoutBodyEmptyInputCommand}.
 */
export interface MalformedContentTypeWithoutBodyEmptyInputCommandInput
  extends MalformedContentTypeWithoutBodyEmptyInputInput {}
/**
 * @public
 *
 * The output of {@link MalformedContentTypeWithoutBodyEmptyInputCommand}.
 */
export interface MalformedContentTypeWithoutBodyEmptyInputCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, MalformedContentTypeWithoutBodyEmptyInputCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, MalformedContentTypeWithoutBodyEmptyInputCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
 * const client = new RestJsonProtocolClient(config);
 * const input = { // MalformedContentTypeWithoutBodyEmptyInputInput
 *   header: "STRING_VALUE",
 * };
 * const command = new MalformedContentTypeWithoutBodyEmptyInputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param MalformedContentTypeWithoutBodyEmptyInputCommandInput - {@link MalformedContentTypeWithoutBodyEmptyInputCommandInput}
 * @returns {@link MalformedContentTypeWithoutBodyEmptyInputCommandOutput}
 * @see {@link MalformedContentTypeWithoutBodyEmptyInputCommandInput} for command's `input` shape.
 * @see {@link MalformedContentTypeWithoutBodyEmptyInputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 */
export class MalformedContentTypeWithoutBodyEmptyInputCommand extends $Command
  .classBuilder<
    MalformedContentTypeWithoutBodyEmptyInputCommandInput,
    MalformedContentTypeWithoutBodyEmptyInputCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RestJson", "MalformedContentTypeWithoutBodyEmptyInput", {})
  .n("RestJsonProtocolClient", "MalformedContentTypeWithoutBodyEmptyInputCommand")
  .f(void 0, void 0)
  .ser(se_MalformedContentTypeWithoutBodyEmptyInputCommand)
  .de(de_MalformedContentTypeWithoutBodyEmptyInputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MalformedContentTypeWithoutBodyEmptyInputInput;
      output: {};
    };
    sdk: {
      input: MalformedContentTypeWithoutBodyEmptyInputCommandInput;
      output: MalformedContentTypeWithoutBodyEmptyInputCommandOutput;
    };
  };
}
