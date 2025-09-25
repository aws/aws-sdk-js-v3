// smithy-typescript generated code
import { PalindromeException as __PalindromeException } from "../models/index";
import { _E, _EI, _EO, _L, _LI, _LO, _PE, _c, _e, _h, _hE, _l, _m, _s, n0 } from "./schemas_0";
import { error, op, struct } from "@smithy/core/schema";

/* eslint no-var: 0 */

export var EchoInput = struct(n0, _EI, 0, [_s], [0]);
export var EchoOutput = struct(n0, _EO, 0, [_s], [0]);
export var LengthInput = struct(n0, _LI, 0, [_s], [[0, 1]]);
export var LengthOutput = struct(n0, _LO, 0, [_l], [1]);
export var PalindromeException = error(
  n0,
  _PE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __PalindromeException
);
export var Echo = op(
  n0,
  _E,
  {
    [_h]: ["POST", "/echo", 200],
  },
  () => EchoInput,
  () => EchoOutput
);
export var Length = op(
  n0,
  _L,
  {
    [_h]: ["GET", "/length/{string}", 200],
  },
  () => LengthInput,
  () => LengthOutput
);
