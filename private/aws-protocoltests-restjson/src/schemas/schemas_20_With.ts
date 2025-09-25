// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _hH,
  _hQ,
  _ht,
  _MS,
  _MSI,
  _sIB,
  _sIH,
  _sIP,
  _sIQ,
  _SJL,
  _SJLIO,
  _sp,
  _SSL,
  _sSL,
  _SSLp,
  _sSLp,
  n0,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var MalformedShortInput = struct(
  n0,
  _MSI,
  0,
  [_sIB, _sIP, _sIQ, _sIH],
  [
    1,
    [1, 1],
    [
      1,
      {
        [_hQ]: _sIQ,
      },
    ],
    [
      1,
      {
        [_hH]: _sIH,
      },
    ],
  ]
);
export var SparseJsonListsInputOutput = struct(
  n0,
  _SJLIO,
  0,
  [_sSL, _sSLp],
  [
    [() => SparseStringList, 0],
    [() => SparseShortList, 0],
  ]
);
export var SparseShortList = list(
  n1,
  _SSL,
  {
    [_sp]: 1,
  },
  1
);
export var SparseStringList = list(
  n1,
  _SSLp,
  {
    [_sp]: 1,
  },
  0
);
export var MalformedShort = op(
  n0,
  _MS,
  {
    [_ht]: ["POST", "/MalformedShort/{shortInPath}", 200],
  },
  () => MalformedShortInput,
  () => Unit
);
export var SparseJsonLists = op(
  n0,
  _SJL,
  {
    [_ht]: ["PUT", "/SparseJsonLists", 200],
  },
  () => SparseJsonListsInputOutput,
  () => SparseJsonListsInputOutput
);
