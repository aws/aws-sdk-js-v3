// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bl,
  _CT,
  _cT,
  _da,
  _fo,
  _hH,
  _HPT,
  _HPTIO,
  _ht,
  _JBIO,
  _JBs,
  _MB,
  _MBI,
  _TPBe,
  _TPBIO,
  _XF,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var HttpPayloadTraitsInputOutput = struct(
  n0,
  _HPTIO,
  0,
  [_fo, _bl],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    [21, 16],
  ]
);
export var JsonBlobsInputOutput = struct(n0, _JBIO, 0, [_da], [21]);
export var MalformedBlobInput = struct(n0, _MBI, 0, [_bl], [21]);
export var TestPayloadBlobInputOutput = struct(
  n0,
  _TPBIO,
  0,
  [_cT, _da],
  [
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [21, 16],
  ]
);
export var HttpPayloadTraits = op(
  n0,
  _HPT,
  {
    [_ht]: ["POST", "/HttpPayloadTraits", 200],
  },
  () => HttpPayloadTraitsInputOutput,
  () => HttpPayloadTraitsInputOutput
);
export var JsonBlobs = op(
  n0,
  _JBs,
  {
    [_ht]: ["POST", "/JsonBlobs", 200],
  },
  () => JsonBlobsInputOutput,
  () => JsonBlobsInputOutput
);
export var MalformedBlob = op(
  n0,
  _MB,
  {
    [_ht]: ["POST", "/MalformedBlob", 200],
  },
  () => MalformedBlobInput,
  () => Unit
);
export var TestPayloadBlob = op(
  n0,
  _TPBe,
  {
    [_ht]: ["POST", "/blob_payload", 200],
  },
  () => TestPayloadBlobInputOutput,
  () => TestPayloadBlobInputOutput
);
