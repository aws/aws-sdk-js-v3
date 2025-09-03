// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hH, _ht, _TGNINP, _TGNP, _tI, _TNPIO, _TPNINP, _TPNP, _XATI, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var TestNoPayloadInputOutput = struct(
  n0,
  _TNPIO,
  0,
  [_tI],
  [
    [
      0,
      {
        [_hH]: _XATI,
      },
    ],
  ]
);
export var TestGetNoInputNoPayload = op(
  n0,
  _TGNINP,
  {
    [_ht]: ["GET", "/no_input_no_payload", 200],
  },
  () => Unit,
  () => TestNoPayloadInputOutput
);
export var TestGetNoPayload = op(
  n0,
  _TGNP,
  {
    [_ht]: ["GET", "/no_payload", 200],
  },
  () => TestNoPayloadInputOutput,
  () => TestNoPayloadInputOutput
);
export var TestPostNoInputNoPayload = op(
  n0,
  _TPNINP,
  {
    [_ht]: ["POST", "/no_input_no_payload", 200],
  },
  () => Unit,
  () => TestNoPayloadInputOutput
);
export var TestPostNoPayload = op(
  n0,
  _TPNP,
  {
    [_ht]: ["POST", "/no_payload", 200],
  },
  () => TestNoPayloadInputOutput,
  () => TestNoPayloadInputOutput
);
