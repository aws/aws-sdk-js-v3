// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FlattenedXmlMapWithXmlNamespaceOutput } from "../models/models_0";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { FlattenedXmlMapWithXmlNamespace } from "../schemas/schemas_9_FlattenedXmlMapWithXmlNamespace";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FlattenedXmlMapWithXmlNamespaceCommand}.
 */
export interface FlattenedXmlMapWithXmlNamespaceCommandInput {}
/**
 * @public
 *
 * The output of {@link FlattenedXmlMapWithXmlNamespaceCommand}.
 */
export interface FlattenedXmlMapWithXmlNamespaceCommandOutput
  extends FlattenedXmlMapWithXmlNamespaceOutput,
    __MetadataBearer {}

/**
 * Flattened maps with @xmlNamespace and @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * // import type { RestXmlProtocolClientConfig } from "@aws-sdk/aws-protocoltests-restxml";
 * const config = {}; // type is RestXmlProtocolClientConfig
 * const client = new RestXmlProtocolClient(config);
 * const input = {};
 * const command = new FlattenedXmlMapWithXmlNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // FlattenedXmlMapWithXmlNamespaceOutput
 * //   myMap: { // FlattenedXmlMapWithXmlNamespaceOutputMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param FlattenedXmlMapWithXmlNamespaceCommandInput - {@link FlattenedXmlMapWithXmlNamespaceCommandInput}
 * @returns {@link FlattenedXmlMapWithXmlNamespaceCommandOutput}
 * @see {@link FlattenedXmlMapWithXmlNamespaceCommandInput} for command's `input` shape.
 * @see {@link FlattenedXmlMapWithXmlNamespaceCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 *
 * @public
 */
export class FlattenedXmlMapWithXmlNamespaceCommand extends $Command
  .classBuilder<
    FlattenedXmlMapWithXmlNamespaceCommandInput,
    FlattenedXmlMapWithXmlNamespaceCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestXml", "FlattenedXmlMapWithXmlNamespace", {})
  .n("RestXmlProtocolClient", "FlattenedXmlMapWithXmlNamespaceCommand")
  .sc(FlattenedXmlMapWithXmlNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: FlattenedXmlMapWithXmlNamespaceOutput;
    };
    sdk: {
      input: FlattenedXmlMapWithXmlNamespaceCommandInput;
      output: FlattenedXmlMapWithXmlNamespaceCommandOutput;
    };
  };
}
