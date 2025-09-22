// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _a, _amth, _bl, _hH, _ht, _JHS, _MSa, _MSIa, _mT, n0 } from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var JsonHeaderString = sim(n0, _JHS, 0, {
  [_mT]: _a,
});
export var MalformedStringInput = struct(
  n0,
  _MSIa,
  0,
  [_bl],
  [
    [
      () => JsonHeaderString,
      {
        [_hH]: _amth,
      },
    ],
  ]
);
export var MalformedString = op(
  n0,
  _MSa,
  {
    [_ht]: ["POST", "/MalformedString", 200],
  },
  () => MalformedStringInput,
  () => Unit
);
