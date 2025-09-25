// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _,
  _b,
  _ba,
  _fM,
  _fo,
  _h,
  _HEPH,
  _HEPHI,
  _HEPHO,
  _hH,
  _HPH,
  _hPH,
  _HPHI,
  _HPHIR,
  _HPHIRI,
  _HPHIRO,
  _HPHO,
  _hQ,
  _ht,
  _pH,
  _QP,
  _QPI,
  _sH,
  _xf,
  _xf_,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var HttpEmptyPrefixHeadersInput = struct(
  n0,
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
  n0,
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
export var HttpPrefixHeadersInput = struct(
  n0,
  _HPHI,
  0,
  [_fo, _fM],
  [
    [
      0,
      {
        [_hH]: _xf,
      },
    ],
    [
      128 | 0,
      {
        [_hPH]: _xf_,
      },
    ],
  ]
);
export var HttpPrefixHeadersInResponseInput = struct(n0, _HPHIRI, 0, [], []);
export var HttpPrefixHeadersInResponseOutput = struct(
  n0,
  _HPHIRO,
  0,
  [_pH],
  [
    [
      128 | 0,
      {
        [_hPH]: _,
      },
    ],
  ]
);
export var HttpPrefixHeadersOutput = struct(
  n0,
  _HPHO,
  0,
  [_fo, _fM],
  [
    [
      0,
      {
        [_hH]: _xf,
      },
    ],
    [
      128 | 0,
      {
        [_hPH]: _xf_,
      },
    ],
  ]
);
export var QueryPrecedenceInput = struct(
  n0,
  _QPI,
  0,
  [_fo, _b],
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
  n0,
  _HEPH,
  {
    [_ht]: ["GET", "/HttpEmptyPrefixHeaders", 200],
  },
  () => HttpEmptyPrefixHeadersInput,
  () => HttpEmptyPrefixHeadersOutput
);
export var HttpPrefixHeaders = op(
  n0,
  _HPH,
  {
    [_ht]: ["GET", "/HttpPrefixHeaders", 200],
  },
  () => HttpPrefixHeadersInput,
  () => HttpPrefixHeadersOutput
);
export var HttpPrefixHeadersInResponse = op(
  n0,
  _HPHIR,
  {
    [_ht]: ["GET", "/HttpPrefixHeadersResponse", 200],
  },
  () => HttpPrefixHeadersInResponseInput,
  () => HttpPrefixHeadersInResponseOutput
);
export var QueryPrecedence = op(
  n0,
  _QP,
  {
    [_ht]: ["POST", "/Precedence", 200],
  },
  () => QueryPrecedenceInput,
  () => Unit
);
