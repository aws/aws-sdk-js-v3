// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _,
  _b,
  _ba,
  _f,
  _h,
  _HEPH,
  _HEPHI,
  _HEPHO,
  _hH,
  _hPH,
  _hQ,
  _http_,
  _pH,
  _QP,
  _QPI,
  _sH,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var HttpEmptyPrefixHeadersInput = struct(
  n1,
  _HEPHI,
  0,
  [_pH, _sH],
  [
    [
      128 | 0,
      {
        [_hPH]: _,
      },
    ],
    [
      0,
      {
        [_hH]: _h,
      },
    ],
  ]
);
export var HttpEmptyPrefixHeadersOutput = struct(
  n1,
  _HEPHO,
  0,
  [_pH, _sH],
  [
    [
      128 | 0,
      {
        [_hPH]: _,
      },
    ],
    [
      0,
      {
        [_hH]: _h,
      },
    ],
  ]
);
export var QueryPrecedenceInput = struct(
  n1,
  _QPI,
  0,
  [_f, _b],
  [
    [
      0,
      {
        [_hQ]: _ba,
      },
    ],
    [128 | 0, 64],
  ]
);
export var StringMap = 128 | 0;

export var HttpEmptyPrefixHeaders = op(
  n1,
  _HEPH,
  {
    [_http_]: ["GET", "/HttpEmptyPrefixHeaders", 200],
  },
  () => HttpEmptyPrefixHeadersInput,
  () => HttpEmptyPrefixHeadersOutput
);
export var QueryPrecedence = op(
  n1,
  _QP,
  {
    [_http_]: ["POST", "/Precedence", 200],
  },
  () => QueryPrecedenceInput,
  () => Unit
);
