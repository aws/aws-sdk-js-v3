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
const _s = "string";
const _sm = "smithy.ts.sdk.synthetic.aws.test.generic";
const n0 = "aws.test.generic";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { EchoServiceServiceException } from "../models/EchoServiceServiceException";
import { PalindromeException } from "../models/errors";

/* eslint no-var: 0 */
export var EchoInput$: StaticStructureSchema = [3, n0, _EI,
  0,
  [_s],
  [0]
];
export var EchoOutput$: StaticStructureSchema = [3, n0, _EO,
  0,
  [_s],
  [0]
];
export var LengthInput$: StaticStructureSchema = [3, n0, _LI,
  0,
  [_s],
  [[0, 1]]
];
export var LengthOutput$: StaticStructureSchema = [3, n0, _LO,
  0,
  [_l],
  [1]
];
export var PalindromeException$: StaticErrorSchema = [-3, n0, _PE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(PalindromeException$, PalindromeException);
export var EchoServiceServiceException$: StaticErrorSchema = [-3, _sm, "EchoServiceServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(EchoServiceServiceException$, EchoServiceServiceException);
export var Echo$: StaticOperationSchema = [9, n0, _E,
  { [_h]: ["POST", "/echo", 200] }, () => EchoInput$, () => EchoOutput$
];
export var Length$: StaticOperationSchema = [9, n0, _L,
  { [_h]: ["GET", "/length/{string}", 200] }, () => LengthInput$, () => LengthOutput$
];
