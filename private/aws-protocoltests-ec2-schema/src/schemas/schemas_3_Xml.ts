// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dT, _dTOT, _eM, _eS, _eSOT, _eT, _hD, _hDOT, _nF, _no, _QT, _QTI, _XT, _XTO, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var QueryTimestampsInput = struct(n0, _QTI, 0, [_nF, _eM, _eT], [4, 7, 7]);
export var XmlTimestampsOutput = struct(n0, _XTO, 0, [_no, _dT, _dTOT, _eS, _eSOT, _hD, _hDOT], [4, 5, 5, 7, 7, 6, 6]);
export var QueryTimestamps = op(
  n0,
  _QT,
  0,
  () => QueryTimestampsInput,
  () => Unit
);
export var XmlTimestamps = op(
  n0,
  _XT,
  0,
  () => Unit,
  () => XmlTimestampsOutput
);
