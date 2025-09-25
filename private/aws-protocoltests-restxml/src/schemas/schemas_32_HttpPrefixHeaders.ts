// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _f, _fM, _hH, _HPH, _hPH, _HPHIO, _http_, _xf, _xf_, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpPrefixHeadersInputOutput = struct(
  n1,
  _HPHIO,
  0,
  [_f, _fM],
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
export var FooPrefixHeaders = 128 | 0;

export var HttpPrefixHeaders = op(
  n1,
  _HPH,
  {
    [_http_]: ["GET", "/HttpPrefixHeaders", 200],
  },
  () => HttpPrefixHeadersInputOutput,
  () => HttpPrefixHeadersInputOutput
);
