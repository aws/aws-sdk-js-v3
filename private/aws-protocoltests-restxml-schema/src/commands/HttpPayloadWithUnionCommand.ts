// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HttpPayloadWithUnionInputOutput } from "../models/models_0";
import type {
  RestXmlProtocolClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RestXmlProtocolClient";
import { HttpPayloadWithUnion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithUnionCommand}.
 */
export interface HttpPayloadWithUnionCommandInput extends HttpPayloadWithUnionInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithUnionCommand}.
 */
export interface HttpPayloadWithUnionCommandOutput extends HttpPayloadWithUnionInputOutput, __MetadataBearer {}

/**
 * This example serializes a union in the payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, HttpPayloadWithUnionCommand } from "@aws-sdk/aws-protocoltests-restxml-schema"; // ES Modules import
 * // const { RestXmlProtocolClient, HttpPayloadWithUnionCommand } = require("@aws-sdk/aws-protocoltests-restxml-schema"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml-schema";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = { // HttpPayloadWithUnionInputOutput
 *   nested: { // UnionPayload Union: only one key present
 *     greeting: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithUnionCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithUnionInputOutput
 * //   nested: { // UnionPayload Union: only one key present
 * //     greeting: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithUnionCommandInput - {@link HttpPayloadWithUnionCommandInput}
 * @returns {@link HttpPayloadWithUnionCommandOutput}
 * @see {@link HttpPayloadWithUnionCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithUnionCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithUnionCommand extends $Command
  .classBuilder<
    HttpPayloadWithUnionCommandInput,
    HttpPayloadWithUnionCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "HttpPayloadWithUnion", {})
  .n("RestXmlProtocolClient", "HttpPayloadWithUnionCommand")
  .sc(HttpPayloadWithUnion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithUnionInputOutput;
      output: HttpPayloadWithUnionInputOutput;
    };
    sdk: {
      input: HttpPayloadWithUnionCommandInput;
      output: HttpPayloadWithUnionCommandOutput;
    };
  };
}
