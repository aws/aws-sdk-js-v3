// smithy-typescript generated code
import { error, op, struct, TypeRegistry } from "@smithy/core/schema";

import {
  ComplexError as __ComplexError,
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import {
  _c,
  _CE,
  _CNED,
  _e,
  _FE,
  _Fo,
  _Foo,
  _g,
  _GWE,
  _GWEO,
  _H,
  _hE,
  _hH,
  _ht,
  _IG,
  _jN,
  _M,
  _N,
  _se,
  _TLo,
  _XG,
  _XH,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var ComplexError = error(
  n0,
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
    [() => ComplexNestedErrorData, 0],
  ],
  null
);
TypeRegistry.for(n0).registerError(ComplexError, __ComplexError);

export var ComplexNestedErrorData = struct(
  n0,
  _CNED,
  0,
  [_Fo],
  [
    [
      0,
      {
        [_jN]: _Foo,
      },
    ],
  ]
);
export var FooError = error(
  n0,
  _FE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [],
  [],
  null
);
TypeRegistry.for(n0).registerError(FooError, __FooError);

export var GreetingWithErrorsOutput = struct(
  n0,
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
  n0,
  _IG,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
  null
);
TypeRegistry.for(n0).registerError(InvalidGreeting, __InvalidGreeting);

export var GreetingWithErrors = op(
  n0,
  _GWE,
  {
    [_ht]: ["PUT", "/GreetingWithErrors", 200],
  },
  () => Unit,
  () => GreetingWithErrorsOutput
);
