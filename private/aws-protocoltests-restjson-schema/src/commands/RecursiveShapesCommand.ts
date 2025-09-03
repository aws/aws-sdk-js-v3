// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RecursiveShapesInputOutput } from "../models/models_0";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { RecursiveShapes } from "../schemas/schemas_31_RecursiveShapes";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecursiveShapesCommand}.
 */
export interface RecursiveShapesCommandInput extends RecursiveShapesInputOutput {}
/**
 * @public
 *
 * The output of {@link RecursiveShapesCommand}.
 */
export interface RecursiveShapesCommandOutput extends RecursiveShapesInputOutput, __MetadataBearer {}

/**
 * Recursive shapes
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, RecursiveShapesCommand } from "@aws-sdk/aws-protocoltests-restjson-schema"; // ES Modules import
 * // const { RestJsonProtocolClient, RecursiveShapesCommand } = require("@aws-sdk/aws-protocoltests-restjson-schema"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // RecursiveShapesInputOutput
 *   nested: { // RecursiveShapesInputOutputNested1
 *     foo: "STRING_VALUE",
 *     nested: { // RecursiveShapesInputOutputNested2
 *       bar: "STRING_VALUE",
 *       recursiveMember: {
 *         foo: "STRING_VALUE",
 *         nested: {
 *           bar: "STRING_VALUE",
 *           recursiveMember: "<RecursiveShapesInputOutputNested1>",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new RecursiveShapesCommand(input);
 * const response = await client.send(command);
 * // { // RecursiveShapesInputOutput
 * //   nested: { // RecursiveShapesInputOutputNested1
 * //     foo: "STRING_VALUE",
 * //     nested: { // RecursiveShapesInputOutputNested2
 * //       bar: "STRING_VALUE",
 * //       recursiveMember: {
 * //         foo: "STRING_VALUE",
 * //         nested: {
 * //           bar: "STRING_VALUE",
 * //           recursiveMember: "<RecursiveShapesInputOutputNested1>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RecursiveShapesCommandInput - {@link RecursiveShapesCommandInput}
 * @returns {@link RecursiveShapesCommandOutput}
 * @see {@link RecursiveShapesCommandInput} for command's `input` shape.
 * @see {@link RecursiveShapesCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 * @throws {@link RestJsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestJsonProtocol service.</p>
 *
 *
 * @public
 */
export class RecursiveShapesCommand extends $Command
  .classBuilder<
    RecursiveShapesCommandInput,
    RecursiveShapesCommandOutput,
    RestJsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RestJsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RestJson", "RecursiveShapes", {})
  .n("RestJsonProtocolClient", "RecursiveShapesCommand")
  .sc(RecursiveShapes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RecursiveShapesInputOutput;
      output: RecursiveShapesInputOutput;
    };
    sdk: {
      input: RecursiveShapesCommandInput;
      output: RecursiveShapesCommandOutput;
    };
  };
}
