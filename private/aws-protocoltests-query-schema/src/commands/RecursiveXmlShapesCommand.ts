// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RecursiveXmlShapesOutput } from "../models/models_0";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";
import { RecursiveXmlShapes } from "../schemas/schemas_4_RecursiveXmlShapes";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecursiveXmlShapesCommand}.
 */
export interface RecursiveXmlShapesCommandInput {}
/**
 * @public
 *
 * The output of {@link RecursiveXmlShapesCommand}.
 */
export interface RecursiveXmlShapesCommandOutput extends RecursiveXmlShapesOutput, __MetadataBearer {}

/**
 * Recursive shapes
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QueryProtocolClient, RecursiveXmlShapesCommand } from "@aws-sdk/aws-protocoltests-query-schema"; // ES Modules import
 * // const { QueryProtocolClient, RecursiveXmlShapesCommand } = require("@aws-sdk/aws-protocoltests-query-schema"); // CommonJS import
 * const client = new QueryProtocolClient(config);
 * const input = {};
 * const command = new RecursiveXmlShapesCommand(input);
 * const response = await client.send(command);
 * // { // RecursiveXmlShapesOutput
 * //   nested: { // RecursiveXmlShapesOutputNested1
 * //     foo: "STRING_VALUE",
 * //     nested: { // RecursiveXmlShapesOutputNested2
 * //       bar: "STRING_VALUE",
 * //       recursiveMember: {
 * //         foo: "STRING_VALUE",
 * //         nested: {
 * //           bar: "STRING_VALUE",
 * //           recursiveMember: "<RecursiveXmlShapesOutputNested1>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RecursiveXmlShapesCommandInput - {@link RecursiveXmlShapesCommandInput}
 * @returns {@link RecursiveXmlShapesCommandOutput}
 * @see {@link RecursiveXmlShapesCommandInput} for command's `input` shape.
 * @see {@link RecursiveXmlShapesCommandOutput} for command's `response` shape.
 * @see {@link QueryProtocolClientResolvedConfig | config} for QueryProtocolClient's `config` shape.
 *
 * @throws {@link QueryProtocolServiceException}
 * <p>Base exception class for all service exceptions from QueryProtocol service.</p>
 *
 *
 * @public
 */
export class RecursiveXmlShapesCommand extends $Command
  .classBuilder<
    RecursiveXmlShapesCommandInput,
    RecursiveXmlShapesCommandOutput,
    QueryProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QueryProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsQuery", "RecursiveXmlShapes", {})
  .n("QueryProtocolClient", "RecursiveXmlShapesCommand")
  .sc(RecursiveXmlShapes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: RecursiveXmlShapesOutput;
    };
    sdk: {
      input: RecursiveXmlShapesCommandInput;
      output: RecursiveXmlShapesCommandOutput;
    };
  };
}
