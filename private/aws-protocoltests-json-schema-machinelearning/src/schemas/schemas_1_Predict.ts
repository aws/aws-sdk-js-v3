// smithy-typescript generated code
import { error, op, struct, TypeRegistry } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  InvalidInputException as __InvalidInputException,
  LimitExceededException as __LimitExceededException,
  PredictorNotMountedException as __PredictorNotMountedException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _c,
  _cl,
  _d,
  _e,
  _hE,
  _IIE,
  _ISE,
  _LEE,
  _m,
  _MLMI,
  _P,
  _PE,
  _PI,
  _pL,
  _PNME,
  _PO,
  _Pr,
  _pS,
  _pV,
  _R,
  _RNFE,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m, _c],
  [0, 1],
  null
);
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var InvalidInputException = error(
  n0,
  _IIE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m, _c],
  [0, 1],
  null
);
TypeRegistry.for(n0).registerError(InvalidInputException, __InvalidInputException);

export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _cl,
    [_hE]: 417,
  },
  [_m, _c],
  [0, 1],
  null
);
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var PredictInput = struct(n0, _PI, 0, [_MLMI, _R, _PE], [0, 128 | 0, 0]);
export var Prediction = struct(n0, _P, 0, [_pL, _pV, _pS, _d], [0, 1, 128 | 1, 128 | 0]);
export var PredictorNotMountedException = error(
  n0,
  _PNME,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],
  null
);
TypeRegistry.for(n0).registerError(PredictorNotMountedException, __PredictorNotMountedException);

export var PredictOutput = struct(n0, _PO, 0, [_P], [() => Prediction]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
  },
  [_m, _c],
  [0, 1],
  null
);
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var Unit = "unit" as const;

export var DetailsMap = 128 | 0;

export var _Record = 128 | 0;

export var ScoreValuePerLabelMap = 128 | 1;

export var Predict = op(
  n0,
  _Pr,
  0,
  () => PredictInput,
  () => PredictOutput
);
