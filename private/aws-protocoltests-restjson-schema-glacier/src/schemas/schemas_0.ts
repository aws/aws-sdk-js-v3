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
const _c = "client";
const _ch = "checksum";
const _co = "code";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _l = "location";
const _m = "message";
const _r = "range";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.glacier";
const _se = "server";
const _st = "streaming";
const _t = "type";
const _uI = "uploadId";
const _vN = "vaultName";
const _xaad = "x-amz-archive-description";
const _xaai = "x-amz-archive-id";
const _xasth = "x-amz-sha256-tree-hash";
const n0 = "com.amazonaws.glacier";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InvalidParameterValueException,
  MissingParameterValueException,
  RequestTimeoutException,
  ResourceNotFoundException,
  ServiceUnavailableException,
} from "../models/errors";
import { GlacierServiceException } from "../models/GlacierServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var GlacierServiceException$: StaticErrorSchema = [-3, _s, "GlacierServiceException", 0, [], []];
_s_registry.registerError(GlacierServiceException$, GlacierServiceException);
const n0_registry = TypeRegistry.for(n0);
export var InvalidParameterValueException$: StaticErrorSchema = [-3, n0, _IPVE,
  { [_e]: _c, [_hE]: 400 },
  [_t, _co, _m],
  [0, 0, 0]
];
n0_registry.registerError(InvalidParameterValueException$, InvalidParameterValueException);
export var MissingParameterValueException$: StaticErrorSchema = [-3, n0, _MPVE,
  { [_e]: _c, [_hE]: 400 },
  [_t, _co, _m],
  [0, 0, 0]
];
n0_registry.registerError(MissingParameterValueException$, MissingParameterValueException);
export var RequestTimeoutException$: StaticErrorSchema = [-3, n0, _RTE,
  { [_e]: _c, [_hE]: 408 },
  [_t, _co, _m],
  [0, 0, 0]
];
n0_registry.registerError(RequestTimeoutException$, RequestTimeoutException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_t, _co, _m],
  [0, 0, 0]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceUnavailableException$: StaticErrorSchema = [-3, n0, _SUE,
  { [_e]: _se, [_hE]: 500 },
  [_t, _co, _m],
  [0, 0, 0]
];
n0_registry.registerError(ServiceUnavailableException$, ServiceUnavailableException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var _Stream: StaticSimpleSchema = [0, n0, _S, { [_st]: 1 }, 42];
export var ArchiveCreationOutput$: StaticStructureSchema = [3, n0, _ACO,
  0,
  [_l, _ch, _aI],
  [[0, { [_hH]: _L }], [0, { [_hH]: _xasth }], [0, { [_hH]: _xaai }]]
];
export var UploadArchiveInput$: StaticStructureSchema = [3, n0, _UAI,
  0,
  [_vN, _aIc, _aD, _ch, _b],
  [[0, 1], [0, 1], [0, { [_hH]: _xaad }], [0, { [_hH]: _xasth }], [() => _Stream, 16]], 2
];
export var UploadMultipartPartInput$: StaticStructureSchema = [3, n0, _UMPI,
  0,
  [_aIc, _vN, _uI, _ch, _r, _b],
  [[0, 1], [0, 1], [0, 1], [0, { [_hH]: _xasth }], [0, { [_hH]: _CR }], [() => _Stream, 16]], 3
];
export var UploadMultipartPartOutput$: StaticStructureSchema = [3, n0, _UMPO,
  0,
  [_ch],
  [[0, { [_hH]: _xasth }]]
];
export var UploadArchive$: StaticOperationSchema = [9, n0, _UA,
  { [_h]: ["POST", "/{accountId}/vaults/{vaultName}/archives", 201] }, () => UploadArchiveInput$, () => ArchiveCreationOutput$
];
export var UploadMultipartPart$: StaticOperationSchema = [9, n0, _UMP,
  { [_h]: ["PUT", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", 204] }, () => UploadMultipartPartInput$, () => UploadMultipartPartOutput$
];
