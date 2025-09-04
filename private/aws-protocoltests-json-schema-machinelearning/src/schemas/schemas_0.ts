export const _IIE = "InvalidInputException";
export const _ISE = "InternalServerException";
export const _LEE = "LimitExceededException";
export const _MLMI = "MLModelId";
export const _P = "Prediction";
export const _PE = "PredictEndpoint";
export const _PI = "PredictInput";
export const _PNME = "PredictorNotMountedException";
export const _PO = "PredictOutput";
export const _Pr = "Predict";
export const _R = "Record";
export const _RNFE = "ResourceNotFoundException";
export const _c = "code";
export const _cl = "client";
export const _d = "details";
export const _e = "error";
export const _hE = "httpError";
export const _m = "message";
export const _pL = "predictedLabel";
export const _pS = "predictedScores";
export const _pV = "predictedValue";
export const _s = "server";
export const n0 = "com.amazonaws.machinelearning";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { MachineLearningServiceException as __MachineLearningServiceException } from "../models/MachineLearningServiceException";

/* eslint no-var: 0 */

export var MachineLearningServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.machinelearning",
  "MachineLearningServiceException",
  0,
  [],
  [],
  __MachineLearningServiceException
);
