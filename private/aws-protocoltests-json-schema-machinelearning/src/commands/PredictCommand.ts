// smithy-typescript generated code
import { getPredictEndpointPlugin } from "@aws-sdk/middleware-sdk-machinelearning";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MachineLearningClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MachineLearningClient";
import type { PredictInput, PredictOutput } from "../models/models_0";
import { Predict$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PredictCommand}.
 */
export interface PredictCommandInput extends PredictInput {}
/**
 * @public
 *
 * The output of {@link PredictCommand}.
 */
export interface PredictCommandOutput extends PredictOutput, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, PredictCommand } from "@aws-sdk/aws-protocoltests-json-schema-machinelearning"; // ES Modules import
 * // const { MachineLearningClient, PredictCommand } = require("@aws-sdk/aws-protocoltests-json-schema-machinelearning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/aws-protocoltests-json-schema-machinelearning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // PredictInput
 *   MLModelId: "STRING_VALUE", // required
 *   Record: { // Record // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PredictEndpoint: "STRING_VALUE", // required
 * };
 * const command = new PredictCommand(input);
 * const response = await client.send(command);
 * // { // PredictOutput
 * //   Prediction: { // Prediction
 * //     predictedLabel: "STRING_VALUE",
 * //     predictedValue: Number("float"),
 * //     predictedScores: { // ScoreValuePerLabelMap
 * //       "<keys>": Number("float"),
 * //     },
 * //     details: { // DetailsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PredictCommandInput - {@link PredictCommandInput}
 * @returns {@link PredictCommandOutput}
 * @see {@link PredictCommandInput} for command's `input` shape.
 * @see {@link PredictCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * @throws {@link PredictorNotMountedException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 *
 */
export class PredictCommand extends $Command
  .classBuilder<
    PredictCommandInput,
    PredictCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getPredictEndpointPlugin(config)];
  })
  .s("AmazonML_20141212", "Predict", {})
  .n("MachineLearningClient", "PredictCommand")
  .sc(Predict$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PredictInput;
      output: PredictOutput;
    };
    sdk: {
      input: PredictCommandInput;
      output: PredictCommandOutput;
    };
  };
}
