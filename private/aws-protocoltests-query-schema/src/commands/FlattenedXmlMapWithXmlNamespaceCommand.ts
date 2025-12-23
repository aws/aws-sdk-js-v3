// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FlattenedXmlMapWithXmlNamespaceOutput } from "../models/models_0";
import type { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { FlattenedXmlMapWithXmlNamespace$ } from "../schemas/schemas_0";

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
export interface FlattenedXmlMapWithXmlNamespaceCommandOutput extends FlattenedXmlMapWithXmlNamespaceOutput, __MetadataBearer {}

/**
 * Flattened maps with @xmlNamespace and @xmlName
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, FlattenedXmlMapWithXmlNamespaceCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * // import type { QueryProtocolClientConfig } from "@aws-sdk/aws-protocoltests-query-schema";
 * const config = {}; // type is QueryProtocolClientConfig
 * const client = new QueryProtocolClient(config);
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
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class FlattenedXmlMapWithXmlNamespaceCommand extends $Command
  .classBuilder<
    FlattenedXmlMapWithXmlNamespaceCommandInput,
    FlattenedXmlMapWithXmlNamespaceCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsQuery", "FlattenedXmlMapWithXmlNamespace", {})
  .n("QueryProtocolClient", "FlattenedXmlMapWithXmlNamespaceCommand")
  .sc(FlattenedXmlMapWithXmlNamespace$)
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
