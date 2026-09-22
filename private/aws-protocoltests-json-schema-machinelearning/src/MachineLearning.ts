// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { type PredictCommandInput, type PredictCommandOutput, PredictCommand } from "./commands/PredictCommand";
import { MachineLearningClient } from "./MachineLearningClient";

const commands = {
  PredictCommand,
};

/**
 * @public
 */
export interface MachineLearningRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MachineLearning {
  /**
   * @see {@link PredictCommand}
   */
  predict(
    args: PredictCommandInput,
    options?: MachineLearningRequestOptions
  ): Promise<PredictCommandOutput>;
  predict(
    args: PredictCommandInput,
    cb: (err: any, data?: PredictCommandOutput) => void
  ): void;
  predict(
    args: PredictCommandInput,
    options: MachineLearningRequestOptions,
    cb: (err: any, data?: PredictCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class MachineLearning extends MachineLearningClient implements MachineLearning {}
createAggregatedClient(commands, MachineLearning);
