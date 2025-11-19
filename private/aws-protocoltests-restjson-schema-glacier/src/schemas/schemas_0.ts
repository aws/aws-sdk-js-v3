const _ACO = "ArchiveCreationOutput";
const _CR = "Content-Range";
const _IPVE = "InvalidParameterValueException";
const _L = "Location";
const _MPVE = "MissingParameterValueException";
const _RNFE = "ResourceNotFoundException";
const _RTE = "RequestTimeoutException";
const _S = "Stream";
const _SUE = "ServiceUnavailableException";
const _UA = "UploadArchive";
const _UAI = "UploadArchiveInput";
const _UMP = "UploadMultipartPart";
const _UMPI = "UploadMultipartPartInput";
const _UMPO = "UploadMultipartPartOutput";
const _aD = "archiveDescription";
const _aI = "archiveId";
const _aIc = "accountId";
const _b = "body";
const _c = "checksum";
const _cl = "client";
const _co = "code";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _l = "location";
const _m = "message";
const _r = "range";
const _s = "streaming";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.glacier";
const _t = "type";
const _uI = "uploadId";
const _vN = "vaultName";
const _xaad = "x-amz-archive-description";
const _xaai = "x-amz-archive-id";
const _xasth = "x-amz-sha256-tree-hash";
const n0 = "com.amazonaws.glacier";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticOperationSchema, StaticSimpleSchema, StaticStructureSchema } from "@smithy/types";

import {
  InvalidParameterValueException as __InvalidParameterValueException,
  MissingParameterValueException as __MissingParameterValueException,
  RequestTimeoutException as __RequestTimeoutException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
} from "../models/errors";
import { GlacierServiceException as __GlacierServiceException } from "../models/GlacierServiceException";

/* eslint no-var: 0 */

export var _Stream: StaticSimpleSchema = [
  0,
  n0,
  _S,
  {
    [_s]: 1,
  },
  42,
];
export var ArchiveCreationOutput: StaticStructureSchema = [
  3,
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
  ],
];
export var InvalidParameterValueException: StaticErrorSchema = [
  -3,
  n0,
  _IPVE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_t, _co, _m],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(InvalidParameterValueException, __InvalidParameterValueException);

export var MissingParameterValueException: StaticErrorSchema = [
  -3,
  n0,
  _MPVE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_t, _co, _m],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(MissingParameterValueException, __MissingParameterValueException);

export var RequestTimeoutException: StaticErrorSchema = [
  -3,
  n0,
  _RTE,
  {
    [_e]: _cl,
    [_hE]: 408,
  },
  [_t, _co, _m],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(RequestTimeoutException, __RequestTimeoutException);

export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
  },
  [_t, _co, _m],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_t, _co, _m],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);

export var UploadArchiveInput: StaticStructureSchema = [
  3,
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
  ],
];
export var UploadMultipartPartInput: StaticStructureSchema = [
  3,
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
  ],
];
export var UploadMultipartPartOutput: StaticStructureSchema = [
  3,
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
  ],
];
export var GlacierServiceException: StaticErrorSchema = [-3, _sm, "GlacierServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(GlacierServiceException, __GlacierServiceException);

export var UploadArchive: StaticOperationSchema = [
  9,
  n0,
  _UA,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/archives", 201],
  },
  () => UploadArchiveInput,
  () => ArchiveCreationOutput,
];
export var UploadMultipartPart: StaticOperationSchema = [
  9,
  n0,
  _UMP,
  {
    [_h]: ["PUT", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", 204],
  },
  () => UploadMultipartPartInput,
  () => UploadMultipartPartOutput,
];
