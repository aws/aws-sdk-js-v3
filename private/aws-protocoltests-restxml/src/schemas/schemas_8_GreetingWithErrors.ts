// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ComplexError as __ComplexError, InvalidGreeting as __InvalidGreeting } from "../models/index";
import {
  _c,
  _CE,
  _CNED,
  _e,
  _Fo,
  _g,
  _GWE,
  _GWEO,
  _H,
  _hE,
  _hH,
  _http_,
  _IG,
  _M,
  _N,
  _TLo,
  _XG,
  _XH,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var ComplexError = error(
  n1,
  _CE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_H, _TLo, _N],
  [
    [
      0,
      {
        [_hH]: _XH,
      },
    ],
    0,
    () => ComplexNestedErrorData,
  ],

  __ComplexError
);
export var ComplexNestedErrorData = struct(n1, _CNED, 0, [_Fo], [0]);
export var GreetingWithErrorsOutput = struct(
  n1,
  _GWEO,
  0,
  [_g],
  [
    [
      0,
      {
        [_hH]: _XG,
      },
    ],
  ]
);
export var InvalidGreeting = error(
  n1,
  _IG,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidGreeting
);
export var GreetingWithErrors = op(
  n1,
  _GWE,
  {
    [_http_]: ["PUT", "/GreetingWithErrors", 200],
  },
  () => Unit,
  () => GreetingWithErrorsOutput
);
