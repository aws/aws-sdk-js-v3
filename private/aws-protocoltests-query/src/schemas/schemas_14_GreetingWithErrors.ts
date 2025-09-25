// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ComplexError as __ComplexError,
  CustomCodeError as __CustomCodeError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import { _aQE, _c, _CCE, _CE, _CNED, _e, _F, _g, _GWE, _GWEO, _IG, _M, _N, _TL, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_Xml";

/* eslint no-var: 0 */

export var ComplexError = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_TL, _N],
  [0, () => ComplexNestedErrorData],

  __ComplexError
);
export var ComplexNestedErrorData = struct(n0, _CNED, 0, [_F], [0]);
export var CustomCodeError = error(
  n0,
  _CCE,
  {
    [_e]: _c,
    [_aQE]: [`Customized`, 402],
  },
  [_M],
  [0],

  __CustomCodeError
);
export var GreetingWithErrorsOutput = struct(n0, _GWEO, 0, [_g], [0]);
export var InvalidGreeting = error(
  n0,
  _IG,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidGreeting
);
export var GreetingWithErrors = op(
  n0,
  _GWE,
  0,
  () => Unit,
  () => GreetingWithErrorsOutput
);
