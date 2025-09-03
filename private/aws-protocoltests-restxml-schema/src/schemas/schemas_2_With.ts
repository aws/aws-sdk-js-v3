// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _dF,
  _dT,
  _dTOT,
  _eSOT,
  _eSp,
  _hDOT,
  _hDt,
  _hH,
  _HRWLATF,
  _HRWLATFI,
  _http_,
  _mDT,
  _mES,
  _mHD,
  _no,
  _tDT,
  _tES,
  _TFH,
  _TFHIO,
  _tHD,
  _Xd,
  _Xm,
  _Xm_,
  _Xm__,
  _Xt,
  _Xt_,
  _Xt__,
  _XTm,
  _XTR,
  _XTRm,
  n1,
} from "./schemas_0";
import { Unit } from "./schemas_3_Xml";

/* eslint no-var: 0 */

export var HttpRequestWithLabelsAndTimestampFormatInput = struct(
  n1,
  _HRWLATFI,
  0,
  [_mES, _mHD, _mDT, _dF, _tES, _tHD, _tDT],
  [
    [7, 1],
    [6, 1],
    [5, 1],
    [4, 1],
    [7, 1],
    [6, 1],
    [5, 1],
  ]
);
export var TimestampFormatHeadersIO = struct(
  n1,
  _TFHIO,
  0,
  [_mES, _mHD, _mDT, _dF, _tES, _tHD, _tDT],
  [
    [
      7,
      {
        [_hH]: _Xm,
      },
    ],
    [
      6,
      {
        [_hH]: _Xm_,
      },
    ],
    [
      5,
      {
        [_hH]: _Xm__,
      },
    ],
    [
      4,
      {
        [_hH]: _Xd,
      },
    ],
    [
      7,
      {
        [_hH]: _Xt,
      },
    ],
    [
      6,
      {
        [_hH]: _Xt_,
      },
    ],
    [
      5,
      {
        [_hH]: _Xt__,
      },
    ],
  ]
);
export var XmlTimestampsRequest = struct(
  n1,
  _XTR,
  0,
  [_no, _dT, _dTOT, _eSp, _eSOT, _hDt, _hDOT],
  [4, 5, 5, 7, 7, 6, 6]
);
export var XmlTimestampsResponse = struct(
  n1,
  _XTRm,
  0,
  [_no, _dT, _dTOT, _eSp, _eSOT, _hDt, _hDOT],
  [4, 5, 5, 7, 7, 6, 6]
);
export var HttpRequestWithLabelsAndTimestampFormat = op(
  n1,
  _HRWLATF,
  {
    [_http_]: [
      "GET",
      "/HttpRequestWithLabelsAndTimestampFormat/{memberEpochSeconds}/{memberHttpDate}/{memberDateTime}/{defaultFormat}/{targetEpochSeconds}/{targetHttpDate}/{targetDateTime}",
      200,
    ],
  },
  () => HttpRequestWithLabelsAndTimestampFormatInput,
  () => Unit
);
export var TimestampFormatHeaders = op(
  n1,
  _TFH,
  {
    [_http_]: ["POST", "/TimestampFormatHeaders", 200],
  },
  () => TimestampFormatHeadersIO,
  () => TimestampFormatHeadersIO
);
export var XmlTimestamps = op(
  n1,
  _XTm,
  {
    [_http_]: ["POST", "/XmlTimestamps", 200],
  },
  () => XmlTimestampsRequest,
  () => XmlTimestampsResponse
);
