// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { IgnoreQueryParamsInResponseOutput } from "../models/models_0";
import { de_IgnoreQueryParamsInResponseCommand, se_IgnoreQueryParamsInResponseCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

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
 * import { RestXmlProtocolClient, IgnoreQueryParamsInResponseCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, IgnoreQueryParamsInResponseCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
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
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class IgnoreQueryParamsInResponseCommand extends $Command
  .classBuilder<
    IgnoreQueryParamsInResponseCommandInput,
    IgnoreQueryParamsInResponseCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "IgnoreQueryParamsInResponse", {})
  .n("RestXmlProtocolClient", "IgnoreQueryParamsInResponseCommand")
  .f(void 0, void 0)
  .ser(se_IgnoreQueryParamsInResponseCommand)
  .de(de_IgnoreQueryParamsInResponseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: IgnoreQueryParamsInResponseOutput;
    };
    sdk: {
      input: IgnoreQueryParamsInResponseCommandInput;
      output: IgnoreQueryParamsInResponseCommandOutput;
    };
  };
}
