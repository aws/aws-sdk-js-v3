// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JSONRPC10ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JSONRPC10Client";
import { ContentTypeParametersInput, ContentTypeParametersOutput } from "../models/models_0";
import { ContentTypeParameters } from "../schemas/schemas_3_OperationWith";

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
 * import { JSONRPC10Client, ContentTypeParametersCommand } from "@aws-sdk/aws-protocoltests-json-10"; // ES Modules import
 * // const { JSONRPC10Client, ContentTypeParametersCommand } = require("@aws-sdk/aws-protocoltests-json-10"); // CommonJS import
 * // import type { JSONRPC10ClientConfig } from "@aws-sdk/aws-protocoltests-json-10";
 * const config = {}; // type is JSONRPC10ClientConfig
 * const client = new JSONRPC10Client(config);
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
 * @see {@link JSONRPC10ClientResolvedConfig | config} for JSONRPC10Client's `config` shape.
 *
 * @throws {@link JSONRPC10ServiceException}
 * <p>Base exception class for all service exceptions from JSONRPC10 service.</p>
 *
 *
 * @public
 */
export class ContentTypeParametersCommand extends $Command
  .classBuilder<
    ContentTypeParametersCommandInput,
    ContentTypeParametersCommandOutput,
    JSONRPC10ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JSONRPC10ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonRpc10", "ContentTypeParameters", {})
  .n("JSONRPC10Client", "ContentTypeParametersCommand")
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
