// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _f, _IM, _IWXN, _IWXNO, _xN, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var IgnoresWrappingXmlNameOutput = struct(
  n0,
  _IWXNO,
  {
    [_xN]: _IM,
  },
  [_f],
  [0]
);
export var IgnoresWrappingXmlName = op(
  n0,
  _IWXN,
  0,
  () => Unit,
  () => IgnoresWrappingXmlNameOutput
);
