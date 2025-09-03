// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _d,
  _dFe,
  _DO,
  _DOO,
  _dTa,
  _dTOT,
  _eSOT,
  _eSp,
  _FS,
  _FSO,
  _hDOT,
  _hDt,
  _hH,
  _HRWLATF,
  _HRWLATFI,
  _ht,
  _JT,
  _JTIO,
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
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_15_Json";

/* eslint no-var: 0 */

export var DatetimeOffsetsOutput = struct(n0, _DOO, 0, [_d], [5]);
export var FractionalSecondsOutput = struct(n0, _FSO, 0, [_d], [5]);
export var HttpRequestWithLabelsAndTimestampFormatInput = struct(
  n0,
  _HRWLATFI,
  0,
  [_mES, _mHD, _mDT, _dFe, _tES, _tHD, _tDT],
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
export var JsonTimestampsInputOutput = struct(
  n0,
  _JTIO,
  0,
  [_no, _dTa, _dTOT, _eSp, _eSOT, _hDt, _hDOT],
  [4, 5, 5, 7, 7, 6, 6]
);
export var TimestampFormatHeadersIO = struct(
  n0,
  _TFHIO,
  0,
  [_mES, _mHD, _mDT, _dFe, _tES, _tHD, _tDT],
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
export var DatetimeOffsets = op(
  n0,
  _DO,
  {
    [_ht]: ["POST", "/DatetimeOffsets", 200],
  },
  () => Unit,
  () => DatetimeOffsetsOutput
);
export var FractionalSeconds = op(
  n0,
  _FS,
  {
    [_ht]: ["POST", "/FractionalSeconds", 200],
  },
  () => Unit,
  () => FractionalSecondsOutput
);
export var HttpRequestWithLabelsAndTimestampFormat = op(
  n0,
  _HRWLATF,
  {
    [_ht]: [
      "GET",
      "/HttpRequestWithLabelsAndTimestampFormat/{memberEpochSeconds}/{memberHttpDate}/{memberDateTime}/{defaultFormat}/{targetEpochSeconds}/{targetHttpDate}/{targetDateTime}",
      200,
    ],
  },
  () => HttpRequestWithLabelsAndTimestampFormatInput,
  () => Unit
);
export var JsonTimestamps = op(
  n0,
  _JT,
  {
    [_ht]: ["POST", "/JsonTimestamps", 200],
  },
  () => JsonTimestampsInputOutput,
  () => JsonTimestampsInputOutput
);
export var TimestampFormatHeaders = op(
  n0,
  _TFH,
  {
    [_ht]: ["POST", "/TimestampFormatHeaders", 200],
  },
  () => TimestampFormatHeadersIO,
  () => TimestampFormatHeadersIO
);
