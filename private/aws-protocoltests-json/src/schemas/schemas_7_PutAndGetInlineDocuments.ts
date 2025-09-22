// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _iD, _PAGID, _PAGIDIO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutAndGetInlineDocumentsInputOutput = struct(n0, _PAGIDIO, 0, [_iD], [15]);
export var PutAndGetInlineDocuments = op(
  n0,
  _PAGID,
  0,
  () => PutAndGetInlineDocumentsInputOutput,
  () => PutAndGetInlineDocumentsInputOutput
);
