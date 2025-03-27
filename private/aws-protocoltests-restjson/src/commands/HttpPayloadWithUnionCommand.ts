// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpPayloadWithUnionInputOutput } from "../models/models_0";
import { de_HttpPayloadWithUnionCommand, se_HttpPayloadWithUnionCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

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
 * import { RestJsonProtocolClient, HttpPayloadWithUnionCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadWithUnionCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
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
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithUnionCommand extends $Command
  .classBuilder<
    HttpPayloadWithUnionCommandInput,
    HttpPayloadWithUnionCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "HttpPayloadWithUnion", {})
  .n("RestJsonProtocolClient", "HttpPayloadWithUnionCommand")
  .f(void 0, void 0)
  .ser(se_HttpPayloadWithUnionCommand)
  .de(de_HttpPayloadWithUnionCommand)
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
