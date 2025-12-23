// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { PredictCommand, PredictCommandInput, PredictCommandOutput } from "./commands/PredictCommand";
import { MachineLearningClient } from "./MachineLearningClient";

const commands = {
  PredictCommand,
};

export interface MachineLearning {
  /**
   * @see {@link PredictCommand}
   */
  predict(
    args: PredictCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PredictCommandOutput>;
  predict(
    args: PredictCommandInput,
    cb: (err: any, data?: PredictCommandOutput) => void
  ): void;
  predict(
    args: PredictCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PredictCommandOutput) => void
  ): void;
}

/**
 * @public
 */
export class MachineLearning extends MachineLearningClient implements MachineLearning {}
createAggregatedClient(commands, MachineLearning);
