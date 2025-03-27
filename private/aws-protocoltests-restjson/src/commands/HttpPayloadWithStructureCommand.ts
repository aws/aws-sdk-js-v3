// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { HttpPayloadWithStructureInputOutput } from "../models/models_0";
import { de_HttpPayloadWithStructureCommand, se_HttpPayloadWithStructureCommand } from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link HttpPayloadWithStructureCommand}.
 */
export interface HttpPayloadWithStructureCommandInput extends HttpPayloadWithStructureInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadWithStructureCommand}.
 */
export interface HttpPayloadWithStructureCommandOutput extends HttpPayloadWithStructureInputOutput, __MetadataBearer {}

/**
 * This example serializes a structure in the payload.
 *
 * Note that serializing a structure changes the wrapper element name
 * to match the targeted structure.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadWithStructureCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadWithStructureCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadWithStructureInputOutput
 *   nested: { // NestedPayload
 *     greeting: "STRING_VALUE",
 *     name: "STRING_VALUE",
 *   },
 * };
 * const command = new HttpPayloadWithStructureCommand(input);
 * const response = await client.send(command);
 * // { // HttpPayloadWithStructureInputOutput
 * //   nested: { // NestedPayload
 * //     greeting: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param HttpPayloadWithStructureCommandInput - {@link HttpPayloadWithStructureCommandInput}
 * @returns {@link HttpPayloadWithStructureCommandOutput}
 * @see {@link HttpPayloadWithStructureCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadWithStructureCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class HttpPayloadWithStructureCommand extends $Command
  .classBuilder<
    HttpPayloadWithStructureCommandInput,
    HttpPayloadWithStructureCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestJson", "HttpPayloadWithStructure", {})
  .n("RestJsonProtocolClient", "HttpPayloadWithStructureCommand")
  .f(void 0, void 0)
  .ser(se_HttpPayloadWithStructureCommand)
  .de(de_HttpPayloadWithStructureCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: HttpPayloadWithStructureInputOutput;
      output: HttpPayloadWithStructureInputOutput;
    };
    sdk: {
      input: HttpPayloadWithStructureCommandInput;
      output: HttpPayloadWithStructureCommandOutput;
    };
  };
}
