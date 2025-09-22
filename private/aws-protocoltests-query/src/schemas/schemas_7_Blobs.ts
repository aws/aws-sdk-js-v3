// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _da, _XB, _XBO, _XEB, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var XmlBlobsOutput = struct(n0, _XBO, 0, [_da], [21]);
export var XmlBlobs = op(
  n0,
  _XB,
  0,
  () => Unit,
  () => XmlBlobsOutput
);
export var XmlEmptyBlobs = op(
  n0,
  _XEB,
  0,
  () => Unit,
  () => XmlBlobsOutput
);
