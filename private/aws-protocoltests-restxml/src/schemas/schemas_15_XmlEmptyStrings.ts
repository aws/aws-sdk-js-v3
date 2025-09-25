// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eS, _http_, _XES, _XESR, _XESRm, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var XmlEmptyStringsRequest = struct(n1, _XESR, 0, [_eS], [0]);
export var XmlEmptyStringsResponse = struct(n1, _XESRm, 0, [_eS], [0]);
export var XmlEmptyStrings = op(
  n1,
  _XES,
  {
    [_http_]: ["PUT", "/XmlEmptyStrings", 200],
  },
  () => XmlEmptyStringsRequest,
  () => XmlEmptyStringsResponse
);
