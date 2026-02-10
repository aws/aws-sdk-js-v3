const _E = "Echo";
const _EI = "EchoInput";
const _EO = "EchoOutput";
const _L = "Length";
const _LI = "LengthInput";
const _LO = "LengthOutput";
const _PE = "PalindromeException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _l = "length";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.aws.test.generic";
const _st = "string";
const n0 = "aws.test.generic";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { EchoServiceServiceException } from "../models/EchoServiceServiceException";
import { PalindromeException } from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var EchoServiceServiceException$: StaticErrorSchema = [-3, _s, "EchoServiceServiceException", 0, [], []];
_s_registry.registerError(EchoServiceServiceException$, EchoServiceServiceException);
const n0_registry = TypeRegistry.for(n0);
export var PalindromeException$: StaticErrorSchema = [-3, n0, _PE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(PalindromeException$, PalindromeException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var EchoInput$: StaticStructureSchema = [3, n0, _EI,
  0,
  [_st],
  [0]
];
export var EchoOutput$: StaticStructureSchema = [3, n0, _EO,
  0,
  [_st],
  [0]
];
export var LengthInput$: StaticStructureSchema = [3, n0, _LI,
  0,
  [_st],
  [[0, 1]], 1
];
export var LengthOutput$: StaticStructureSchema = [3, n0, _LO,
  0,
  [_l],
  [1]
];
export var Echo$: StaticOperationSchema = [9, n0, _E,
  { [_h]: ["POST", "/echo", 200] }, () => EchoInput$, () => EchoOutput$
];
export var Length$: StaticOperationSchema = [9, n0, _L,
  { [_h]: ["GET", "/length/{string}", 200] }, () => LengthInput$, () => LengthOutput$
];
