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
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.machinelearning";
const _se = "server";
const n0 = "com.amazonaws.machinelearning";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticMapSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  InternalServerException,
  InvalidInputException,
  LimitExceededException,
  PredictorNotMountedException,
  ResourceNotFoundException,
} from "../models/errors";
import { MachineLearningServiceException } from "../models/MachineLearningServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var MachineLearningServiceException$: StaticErrorSchema = [-3, _s, "MachineLearningServiceException", 0, [], []];
_s_registry.registerError(MachineLearningServiceException$, MachineLearningServiceException);
const n0_registry = TypeRegistry.for(n0);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _c],
  [0, 1]
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var InvalidInputException$: StaticErrorSchema = [-3, n0, _IIE,
  { [_e]: _cl, [_hE]: 400 },
  [_m, _c],
  [0, 1]
];
n0_registry.registerError(InvalidInputException$, InvalidInputException);
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE,
  { [_e]: _cl, [_hE]: 417 },
  [_m, _c],
  [0, 1]
];
n0_registry.registerError(LimitExceededException$, LimitExceededException);
export var PredictorNotMountedException$: StaticErrorSchema = [-3, n0, _PNME,
  { [_e]: _cl, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(PredictorNotMountedException$, PredictorNotMountedException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _cl, [_hE]: 404 },
  [_m, _c],
  [0, 1]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var PredictInput$: StaticStructureSchema = [3, n0, _PI,
  0,
  [_MLMI, _R, _PE],
  [0, 128 | 0, 0], 3
];
export var Prediction$: StaticStructureSchema = [3, n0, _P,
  0,
  [_pL, _pV, _pS, _d],
  [0, 1, 128 | 1, 128 | 0]
];
export var PredictOutput$: StaticStructureSchema = [3, n0, _PO,
  0,
  [_P],
  [() => Prediction$]
];
var DetailsMap = 128 | 0;
var _Record = 128 | 0;
var ScoreValuePerLabelMap = 128 | 1;
export var Predict$: StaticOperationSchema = [9, n0, _Pr,
  0, () => PredictInput$, () => PredictOutput$
];
