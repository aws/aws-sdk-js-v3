export const _ACO = "ArchiveCreationOutput";
export const _CR = "Content-Range";
export const _IPVE = "InvalidParameterValueException";
export const _L = "Location";
export const _MPVE = "MissingParameterValueException";
export const _RNFE = "ResourceNotFoundException";
export const _RTE = "RequestTimeoutException";
export const _S = "Stream";
export const _SUE = "ServiceUnavailableException";
export const _UA = "UploadArchive";
export const _UAI = "UploadArchiveInput";
export const _UMP = "UploadMultipartPart";
export const _UMPI = "UploadMultipartPartInput";
export const _UMPO = "UploadMultipartPartOutput";
export const _aD = "archiveDescription";
export const _aI = "archiveId";
export const _aIc = "accountId";
export const _b = "body";
export const _c = "checksum";
export const _cl = "client";
export const _co = "code";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _l = "location";
export const _m = "message";
export const _r = "range";
export const _s = "streaming";
export const _se = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.glacier";
export const _t = "type";
export const _uI = "uploadId";
export const _vN = "vaultName";
export const _xaad = "x-amz-archive-description";
export const _xaai = "x-amz-archive-id";
export const _xasth = "x-amz-sha256-tree-hash";
export const n0 = "com.amazonaws.glacier";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticOperationSchema, StaticSimpleSchema, StaticStructureSchema } from "@smithy/types";

import { GlacierServiceException as __GlacierServiceException } from "../models/GlacierServiceException";
import {
  InvalidParameterValueException as __InvalidParameterValueException,
  MissingParameterValueException as __MissingParameterValueException,
  RequestTimeoutException as __RequestTimeoutException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
} from "../models/index";

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
