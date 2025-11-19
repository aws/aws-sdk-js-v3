// smithy-typescript generated code
import { DetailsAttributes } from "./enums";

/**
 * @public
 */
export interface PredictInput {
  MLModelId: string | undefined;
  Record: Record<string, string> | undefined;
  PredictEndpoint: string | undefined;
}

/**
 * @public
 */
export interface Prediction {
  predictedLabel?: string | undefined;
  predictedValue?: number | undefined;
  predictedScores?: Record<string, number> | undefined;
  details?: Partial<Record<DetailsAttributes, string>> | undefined;
}

/**
 * @public
 */
export interface PredictOutput {
  Prediction?: Prediction | undefined;
}
