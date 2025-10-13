// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ContentTypeParametersInput, ContentTypeParametersOutput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { ContentTypeParameters } from "../schemas/schemas_0";

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
 * import { RestXmlProtocolClient, ContentTypeParametersCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, ContentTypeParametersCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "ContentTypeParameters", {})
  .n("RestXmlProtocolClient", "ContentTypeParametersCommand")
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
