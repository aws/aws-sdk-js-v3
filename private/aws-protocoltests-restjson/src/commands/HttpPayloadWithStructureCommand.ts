// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HttpPayloadWithStructureInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpPayloadWithStructure } from "../schemas/schemas_44_HttpPayloadWithStructure";

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
 * // import type { RestJsonProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restjson";
 * const config = {}; // type is RestJsonProtocolClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "HttpPayloadWithStructure", {})
  .n("RestJsonProtocolClient", "HttpPayloadWithStructureCommand")
  .sc(HttpPayloadWithStructure)
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
