// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { IgnoreQueryParamsInResponseOutput } from "../models/models_0";
import {
  de_IgnoreQueryParamsInResponseCommand,
  se_IgnoreQueryParamsInResponseCommand,
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
 * The input for {@link IgnoreQueryParamsInResponseCommand}.
 */
export interface IgnoreQueryParamsInResponseCommandInput {}
/**
 * @public
 *
 * The output of {@link IgnoreQueryParamsInResponseCommand}.
 */
export interface IgnoreQueryParamsInResponseCommandOutput extends IgnoreQueryParamsInResponseOutput, __MetadataBearer {}

/**
 * This example ensures that query string bound request parameters are
 * serialized in the body of responses if the structure is used in both
 * the request and response.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, IgnoreQueryParamsInResponseCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, IgnoreQueryParamsInResponseCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = {};
 * const command = new IgnoreQueryParamsInResponseCommand(input);
 * const response = await client.send(command);
 * // { // IgnoreQueryParamsInResponseOutput
 * //   baz: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param IgnoreQueryParamsInResponseCommandInput - {@link IgnoreQueryParamsInResponseCommandInput}
 * @returns {@link IgnoreQueryParamsInResponseCommandOutput}
 * @see {@link IgnoreQueryParamsInResponseCommandInput} for command's `input` shape.
 * @see {@link IgnoreQueryParamsInResponseCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 * @public
 */
export class IgnoreQueryParamsInResponseCommand extends $Command
  .classBuilder<
    IgnoreQueryParamsInResponseCommandInput,
    IgnoreQueryParamsInResponseCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "IgnoreQueryParamsInResponse", {})
  .n("RestJsonProtocolClient", "IgnoreQueryParamsInResponseCommand")
  .f(void 0, void 0)
  .ser(se_IgnoreQueryParamsInResponseCommand)
  .de(de_IgnoreQueryParamsInResponseCommand)
  .build() {}
