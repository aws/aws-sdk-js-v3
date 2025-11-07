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
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.machinelearning";
export const n0 = "com.amazonaws.machinelearning";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticMapSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  InternalServerException as __InternalServerException,
  InvalidInputException as __InvalidInputException,
  LimitExceededException as __LimitExceededException,
  PredictorNotMountedException as __PredictorNotMountedException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import { MachineLearningServiceException as __MachineLearningServiceException } from "../models/MachineLearningServiceException";

/* eslint no-var: 0 */

export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m, _c],
  [0, 1],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var InvalidInputException: StaticErrorSchema = [
  -3,
  n0,
  _IIE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m, _c],
  [0, 1],
];
TypeRegistry.for(n0).registerError(InvalidInputException, __InvalidInputException);

export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _cl,
    [_hE]: 417,
  },
  [_m, _c],
  [0, 1],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var PredictInput: StaticStructureSchema = [3, n0, _PI, 0, [_MLMI, _R, _PE], [0, 128 | 0, 0]];
export var Prediction: StaticStructureSchema = [3, n0, _P, 0, [_pL, _pV, _pS, _d], [0, 1, 128 | 1, 128 | 0]];
export var PredictorNotMountedException: StaticErrorSchema = [
  -3,
  n0,
  _PNME,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(PredictorNotMountedException, __PredictorNotMountedException);

export var PredictOutput: StaticStructureSchema = [3, n0, _PO, 0, [_P], [() => Prediction]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
  },
  [_m, _c],
  [0, 1],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var __Unit = "unit" as const;

export var MachineLearningServiceException: StaticErrorSchema = [-3, _sm, "MachineLearningServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(MachineLearningServiceException, __MachineLearningServiceException);

export var DetailsMap = 128 | 0;

export var _Record = 128 | 0;

export var ScoreValuePerLabelMap = 128 | 1;

export var Predict: StaticOperationSchema = [9, n0, _Pr, 0, () => PredictInput, () => PredictOutput];
