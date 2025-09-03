// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bV,
  _DD,
  _dV,
  _eQN,
  _eSV,
  _fBV,
  _fV,
  _iV,
  _lV,
  _N,
  _NS,
  _NSI,
  _OA,
  _RA,
  _SA,
  _SAt,
  _SSXP,
  _SSXPO,
  _sV,
  _sVh,
  _tBV,
  _xN,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var NestedStructuresInput = struct(n0, _NSI, 0, [_N], [() => StructArg]);
export var SimpleScalarXmlPropertiesOutput = struct(
  n0,
  _SSXPO,
  0,
  [_sV, _eSV, _tBV, _fBV, _bV, _sVh, _iV, _lV, _fV, _dV],
  [
    [
      0,
      {
        [_eQN]: `IgnoreMe`,
      },
    ],
    0,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    [
      1,
      {
        [_xN]: _DD,
      },
    ],
  ]
);
export var StructArg = struct(n0, _SA, 0, [_SAt, _OA, _RA], [0, 2, () => StructArg]);
export var NestedStructures = op(
  n0,
  _NS,
  0,
  () => NestedStructuresInput,
  () => Unit
);
export var SimpleScalarXmlProperties = op(
  n0,
  _SSXP,
  0,
  () => Unit,
  () => SimpleScalarXmlPropertiesOutput
);
