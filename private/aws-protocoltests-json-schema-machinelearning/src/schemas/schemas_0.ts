const _IIE = "InvalidInputException";
const _ISE = "InternalServerException";
const _LEE = "LimitExceededException";
const _MLMI = "MLModelId";
const _P = "Prediction";
const _PE = "PredictEndpoint";
const _PI = "PredictInput";
const _PNME = "PredictorNotMountedException";
const _PO = "PredictOutput";
const _Pr = "Predict";
const _R = "Record";
const _RNFE = "ResourceNotFoundException";
const _c = "code";
const _cl = "client";
const _d = "details";
const _e = "error";
const _hE = "httpError";
const _m = "message";
const _pL = "predictedLabel";
const _pS = "predictedScores";
const _pV = "predictedValue";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.machinelearning";
const n0 = "com.amazonaws.machinelearning";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticMapSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  InternalServerException as __InternalServerException,
  InvalidInputException as __InvalidInputException,
  LimitExceededException as __LimitExceededException,
  PredictorNotMountedException as __PredictorNotMountedException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/errors";
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
