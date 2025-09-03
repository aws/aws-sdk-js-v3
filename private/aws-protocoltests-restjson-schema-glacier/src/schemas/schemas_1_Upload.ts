// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidParameterValueException as __InvalidParameterValueException,
  MissingParameterValueException as __MissingParameterValueException,
  RequestTimeoutException as __RequestTimeoutException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
} from "../models/index";
import {
  _ACO,
  _aD,
  _aI,
  _aIc,
  _b,
  _c,
  _cl,
  _co,
  _CR,
  _e,
  _h,
  _hE,
  _hH,
  _IPVE,
  _L,
  _l,
  _m,
  _MPVE,
  _r,
  _RNFE,
  _RTE,
  _S,
  _s,
  _se,
  _SUE,
  _t,
  _UA,
  _UAI,
  _uI,
  _UMP,
  _UMPI,
  _UMPO,
  _vN,
  _xaad,
  _xaai,
  _xasth,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var _Stream = sim(n0, _S, 42, {
  [_s]: 1,
});
export var ArchiveCreationOutput = struct(
  n0,
  _ACO,
  0,
  [_l, _c, _aI],
  [
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _xasth,
      },
    ],
    [
      0,
      {
        [_hH]: _xaai,
      },
    ],
  ]
);
export var InvalidParameterValueException = error(
  n0,
  _IPVE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __InvalidParameterValueException
);
export var MissingParameterValueException = error(
  n0,
  _MPVE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __MissingParameterValueException
);
export var RequestTimeoutException = error(
  n0,
  _RTE,
  {
    [_e]: _cl,
    [_hE]: 408,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __RequestTimeoutException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __ServiceUnavailableException
);
export var UploadArchiveInput = struct(
  n0,
  _UAI,
  0,
  [_vN, _aIc, _aD, _c, _b],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xaad,
      },
    ],
    [
      0,
      {
        [_hH]: _xasth,
      },
    ],
    [() => _Stream, 16],
  ]
);
export var UploadMultipartPartInput = struct(
  n0,
  _UMPI,
  0,
  [_aIc, _vN, _uI, _c, _r, _b],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xasth,
      },
    ],
    [
      0,
      {
        [_hH]: _CR,
      },
    ],
    [() => _Stream, 16],
  ]
);
export var UploadMultipartPartOutput = struct(
  n0,
  _UMPO,
  0,
  [_c],
  [
    [
      0,
      {
        [_hH]: _xasth,
      },
    ],
  ]
);
export var UploadArchive = op(
  n0,
  _UA,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/archives", 201],
  },
  () => UploadArchiveInput,
  () => ArchiveCreationOutput
);
export var UploadMultipartPart = op(
  n0,
  _UMP,
  {
    [_h]: ["PUT", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", 204],
  },
  () => UploadMultipartPartInput,
  () => UploadMultipartPartOutput
);
