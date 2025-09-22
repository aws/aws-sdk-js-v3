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
export const _t = "type";
export const _uI = "uploadId";
export const _vN = "vaultName";
export const _xaad = "x-amz-archive-description";
export const _xaai = "x-amz-archive-id";
export const _xasth = "x-amz-sha256-tree-hash";
export const n0 = "com.amazonaws.glacier";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { GlacierServiceException as __GlacierServiceException } from "../models/GlacierServiceException";

/* eslint no-var: 0 */

export var GlacierServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.glacier",
  "GlacierServiceException",
  0,
  [],
  [],
  __GlacierServiceException
);
