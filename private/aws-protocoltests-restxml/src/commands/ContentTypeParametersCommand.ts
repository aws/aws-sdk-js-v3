// smithy-typescript generated code
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ContentTypeParametersInput, ContentTypeParametersOutput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { ContentTypeParameters } from "../schemas/aws.protocoltests.restxml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ContentTypeParametersCommand}.
 */
export interface ContentTypeParametersCommandInput extends ContentTypeParametersInput {}
/**
 * @public
 *
 * The output of {@link ContentTypeParametersCommand}.
 */
export interface ContentTypeParametersCommandOutput extends ContentTypeParametersOutput, __MetadataBearer {}

/**
 * The example tests how servers must support requests
 * containing a `Content-Type` header with parameters.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, ContentTypeParametersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, ContentTypeParametersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // ContentTypeParametersInput
 *   value: Number("int"),
 * };
 * const command = new ContentTypeParametersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ContentTypeParametersCommandInput - {@link ContentTypeParametersCommandInput}
 * @returns {@link ContentTypeParametersCommandOutput}
 * @see {@link ContentTypeParametersCommandInput} for command's `input` shape.
 * @see {@link ContentTypeParametersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 * @public
 */
export class ContentTypeParametersCommand extends $Command
  .classBuilder<
    ContentTypeParametersCommandInput,
    ContentTypeParametersCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [];
  })
  .s("RestXml", "ContentTypeParameters", {})
  .n("RestXmlProtocolClient", "ContentTypeParametersCommand")
  .f(void 0, void 0)
  .sc(ContentTypeParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ContentTypeParametersInput;
      output: {};
    };
    sdk: {
      input: ContentTypeParametersCommandInput;
      output: ContentTypeParametersCommandOutput;
    };
  };
}
