// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DT, _DTAMV, _DTAMVIO, _DTAP, _DTAPIO, _DTIO, _dV, _dVM, _ht, _sV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DocumentTypeAsMapValueInputOutput = struct(n0, _DTAMVIO, 0, [_dVM], [128 | 15]);
export var DocumentTypeAsPayloadInputOutput = struct(n0, _DTAPIO, 0, [_dV], [[15, 16]]);
export var DocumentTypeInputOutput = struct(n0, _DTIO, 0, [_sV, _dV], [0, 15]);
export var DocumentValuedMap = 128 | 15;

export var DocumentType = op(
  n0,
  _DT,
  {
    [_ht]: ["PUT", "/DocumentType", 200],
  },
  () => DocumentTypeInputOutput,
  () => DocumentTypeInputOutput
);
export var DocumentTypeAsMapValue = op(
  n0,
  _DTAMV,
  {
    [_ht]: ["PUT", "/DocumentTypeAsMapValue", 200],
  },
  () => DocumentTypeAsMapValueInputOutput,
  () => DocumentTypeAsMapValueInputOutput
);
export var DocumentTypeAsPayload = op(
  n0,
  _DTAP,
  {
    [_ht]: ["PUT", "/DocumentTypeAsPayload", 200],
  },
  () => DocumentTypeAsPayloadInputOutput,
  () => DocumentTypeAsPayloadInputOutput
);
