// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a_,
  _AQST,
  _AQSTI,
  _B,
  _b_,
  _bIB,
  _bIH,
  _bIP,
  _bIQ,
  _BL,
  _bL,
  _Bo,
  _bo,
  _bV,
  _bVl,
  _bVo,
  _COD,
  _cOD,
  _con,
  _D,
  _dB,
  _dBe,
  _dBef,
  _dBM,
  _DD,
  _dD,
  _dDB,
  _dDL,
  _dDM,
  _dDS,
  _De,
  _dE,
  _de,
  _dF,
  _dI,
  _dIE,
  _DL,
  _dL,
  _dLe,
  _dM,
  _dND,
  _dNM,
  _do,
  _dS,
  _dSe,
  _DSM,
  _dSM,
  _DSMe,
  _dSMe,
  _dSMen,
  _dT,
  _dVo,
  _E,
  _eB,
  _EL,
  _eL,
  _eS,
  _eV,
  _F,
  _fB,
  _fBV,
  _fl,
  _fo,
  _fV,
  _GS,
  _hB,
  _hBL,
  _hD,
  _hEe,
  _hEL,
  _hF,
  _hFB,
  _hH,
  _hI,
  _hIE,
  _hIEL,
  _hIL,
  _hLe,
  _hQ,
  _HRWL,
  _HRWLI,
  _hS,
  _hSe,
  _hSL,
  _hSS,
  _ht,
  _hTB,
  _hTL,
  _I,
  _IAOWH,
  _IAOWHIO,
  _IE,
  _IEL,
  _iELn,
  _IL,
  _iL,
  _in,
  _IS,
  _iV,
  _JL,
  _JLIO,
  _JM,
  _JMIO,
  _jN,
  _JU,
  _L,
  _lo,
  _lV,
  _lVi,
  _m,
  _MBa,
  _MBIa,
  _mSL,
  _MU,
  _mV,
  _NSL,
  _nSL,
  _nVu,
  _o,
  _OSEL,
  _OSELI,
  _oTLD,
  _OWD,
  _OWDI,
  _OWDO,
  _qB,
  _qBL,
  _qBu,
  _qD,
  _qDL,
  _qE,
  _qEL,
  _qF,
  _qI,
  _qIE,
  _qIEL,
  _qIL,
  _qIS,
  _qL,
  _qPMOSL,
  _qS,
  _qSL,
  _qSS,
  _qSu,
  _qT,
  _qTL,
  _rSV,
  _S,
  _sa,
  _SBM,
  _sBM,
  _Sh,
  _sh,
  _SJM,
  _SJMIO,
  _SL,
  _sL,
  _SLM,
  _SLMt,
  _SLt,
  _sLt,
  _SNM,
  _sNM,
  _sp,
  _SS,
  _sS,
  _SSM,
  _sSM,
  _SSMp,
  _sSMp,
  _SSMpa,
  _sSMpa,
  _SSP,
  _SSPIO,
  _st,
  _sV,
  _sVh,
  _sVt,
  _T,
  _tBV,
  _ti,
  _TL,
  _tL,
  _tLD,
  _tV,
  _UIO,
  _v,
  _XB,
  _XB_,
  _XB__,
  _XB___,
  _XD,
  _XE,
  _XE_,
  _XF,
  _XF_,
  _XI,
  _XI_,
  _XI__,
  _XI___,
  _XL,
  _XS,
  _XS_,
  _XS__,
  _XS___,
  _XT,
  _zB,
  _zD,
  _zF,
  _zI,
  _zL,
  _zS,
  n0,
  n1,
  n2,
} from "./schemas_0";
import { Unit } from "./schemas_15_Json";
import { GreetingStruct } from "./schemas_32_Json";

/* eslint no-var: 0 */

export var AllQueryStringTypesInput = struct(
  n0,
  _AQSTI,
  0,
  [
    _qS,
    _qSL,
    _qSS,
    _qB,
    _qSu,
    _qI,
    _qIL,
    _qIS,
    _qL,
    _qF,
    _qD,
    _qDL,
    _qBu,
    _qBL,
    _qT,
    _qTL,
    _qE,
    _qEL,
    _qIE,
    _qIEL,
    _qPMOSL,
  ],
  [
    [
      0,
      {
        [_hQ]: _S,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _SL,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _SS,
      },
    ],
    [
      1,
      {
        [_hQ]: _B,
      },
    ],
    [
      1,
      {
        [_hQ]: _Sh,
      },
    ],
    [
      1,
      {
        [_hQ]: _I,
      },
    ],
    [
      64 | 1,
      {
        [_hQ]: _IL,
      },
    ],
    [
      64 | 1,
      {
        [_hQ]: _IS,
      },
    ],
    [
      1,
      {
        [_hQ]: _L,
      },
    ],
    [
      1,
      {
        [_hQ]: _F,
      },
    ],
    [
      1,
      {
        [_hQ]: _D,
      },
    ],
    [
      64 | 1,
      {
        [_hQ]: _DL,
      },
    ],
    [
      2,
      {
        [_hQ]: _Bo,
      },
    ],
    [
      64 | 2,
      {
        [_hQ]: _BL,
      },
    ],
    [
      4,
      {
        [_hQ]: _T,
      },
    ],
    [
      64 | 4,
      {
        [_hQ]: _TL,
      },
    ],
    [
      0,
      {
        [_hQ]: _E,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _EL,
      },
    ],
    [
      1,
      {
        [_hQ]: _IE,
      },
    ],
    [
      64 | 1,
      {
        [_hQ]: _IEL,
      },
    ],
    [map(n1, _SLM, 0, 0, 64 | 0), 64],
  ]
);
export var ClientOptionalDefaults = struct(n0, _COD, 0, [_m], [1]);
export var Defaults = struct(
  n0,
  _De,
  0,
  [
    _dS,
    _dB,
    _dL,
    _dDM,
    _dDS,
    _dDB,
    _dDL,
    _dND,
    _dT,
    _dBe,
    _dBef,
    _dSe,
    _dI,
    _dLe,
    _dF,
    _dD,
    _dM,
    _dE,
    _dIE,
    _eS,
    _fB,
    _eB,
    _zB,
    _zS,
    _zI,
    _zL,
    _zF,
    _zD,
  ],
  [0, 2, 64 | 0, 15, 15, 15, 15, 15, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1]
);
export var HttpRequestWithLabelsInput = struct(
  n0,
  _HRWLI,
  0,
  [_st, _sh, _in, _lo, _fl, _do, _bo, _ti],
  [
    [0, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [2, 1],
    [4, 1],
  ]
);
export var InputAndOutputWithHeadersIO = struct(
  n0,
  _IAOWHIO,
  0,
  [_hS, _hB, _hSe, _hI, _hLe, _hF, _hD, _hTB, _hFB, _hSL, _hSS, _hIL, _hBL, _hTL, _hEe, _hEL, _hIE, _hIEL],
  [
    [
      0,
      {
        [_hH]: _XS,
      },
    ],
    [
      1,
      {
        [_hH]: _XB,
      },
    ],
    [
      1,
      {
        [_hH]: _XS_,
      },
    ],
    [
      1,
      {
        [_hH]: _XI,
      },
    ],
    [
      1,
      {
        [_hH]: _XL,
      },
    ],
    [
      1,
      {
        [_hH]: _XF_,
      },
    ],
    [
      1,
      {
        [_hH]: _XD,
      },
    ],
    [
      2,
      {
        [_hH]: _XB_,
      },
    ],
    [
      2,
      {
        [_hH]: _XB__,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _XS__,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _XS___,
      },
    ],
    [
      64 | 1,
      {
        [_hH]: _XI_,
      },
    ],
    [
      64 | 2,
      {
        [_hH]: _XB___,
      },
    ],
    [
      64 | 4,
      {
        [_hH]: _XT,
      },
    ],
    [
      0,
      {
        [_hH]: _XE,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _XE_,
      },
    ],
    [
      1,
      {
        [_hH]: _XI__,
      },
    ],
    [
      64 | 1,
      {
        [_hH]: _XI___,
      },
    ],
  ]
);
export var JsonListsInputOutput = struct(
  n0,
  _JLIO,
  0,
  [_sL, _sS, _iL, _bL, _tL, _eL, _iELn, _nSL, _sLt],
  [
    64 | 0,
    64 | 0,
    64 | 1,
    64 | 2,
    64 | 4,
    64 | 0,
    64 | 1,
    list(n1, _NSL, 0, 64 | 0),
    [
      () => StructureList,
      {
        [_jN]: _mSL,
      },
    ],
  ]
);
export var JsonMapsInputOutput = struct(
  n0,
  _JMIO,
  0,
  [_dSM, _dNM, _dBM, _dSMe, _dSMen],
  [() => DenseStructMap, 128 | 1, 128 | 2, 128 | 0, map(n0, _DSM, 0, 0, 64 | 0)]
);
export var MalformedBooleanInput = struct(
  n0,
  _MBIa,
  0,
  [_bIB, _bIP, _bIQ, _bIH],
  [
    2,
    [2, 1],
    [
      2,
      {
        [_hQ]: _bIQ,
      },
    ],
    [
      2,
      {
        [_hH]: _bIH,
      },
    ],
  ]
);
export var OmitsSerializingEmptyListsInput = struct(
  n0,
  _OSELI,
  0,
  [_qSL, _qIL, _qDL, _qBL, _qTL, _qEL, _qIEL],
  [
    [
      64 | 0,
      {
        [_hQ]: _SL,
      },
    ],
    [
      64 | 1,
      {
        [_hQ]: _IL,
      },
    ],
    [
      64 | 1,
      {
        [_hQ]: _DL,
      },
    ],
    [
      64 | 2,
      {
        [_hQ]: _BL,
      },
    ],
    [
      64 | 4,
      {
        [_hQ]: _TL,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _EL,
      },
    ],
    [
      64 | 1,
      {
        [_hQ]: _IEL,
      },
    ],
  ]
);
export var OperationWithDefaultsInput = struct(
  n0,
  _OWDI,
  0,
  [_de, _cOD, _tLD, _oTLD],
  [() => Defaults, () => ClientOptionalDefaults, 0, 1]
);
export var OperationWithDefaultsOutput = struct(
  n0,
  _OWDO,
  0,
  [
    _dS,
    _dB,
    _dL,
    _dDM,
    _dDS,
    _dDB,
    _dDL,
    _dND,
    _dT,
    _dBe,
    _dBef,
    _dSe,
    _dI,
    _dLe,
    _dF,
    _dD,
    _dM,
    _dE,
    _dIE,
    _eS,
    _fB,
    _eB,
    _zB,
    _zS,
    _zI,
    _zL,
    _zF,
    _zD,
  ],
  [0, 2, 64 | 0, 15, 15, 15, 15, 15, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1]
);
export var SimpleScalarPropertiesInputOutput = struct(
  n0,
  _SSPIO,
  0,
  [_fo, _sV, _tBV, _fBV, _bV, _sVh, _iV, _lV, _fV, _dVo],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    0,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    [
      1,
      {
        [_jN]: _DD,
      },
    ],
  ]
);
export var SparseJsonMapsInputOutput = struct(
  n0,
  _SJMIO,
  0,
  [_sSM, _sNM, _sBM, _sSMp, _sSMpa],
  [
    [() => SparseStructMap, 0],
    [() => SparseNumberMap, 0],
    [() => SparseBooleanMap, 0],
    [() => SparseStringMap, 0],
    [() => SparseSetMap, 0],
  ]
);
export var StructureListMember = struct(
  n0,
  _SLMt,
  0,
  [_a_, _b_],
  [
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var UnionInputOutput = struct(n0, _UIO, 0, [_con], [() => MyUnion]);
export var GreetingStruct_n2 = struct(n2, _GS, 0, [_sa], [0]);
export var StructureList = list(n0, _SLt, 0, [() => StructureListMember, 0]);
export var TestStringList = 64 | 0;

export var BooleanList = 64 | 2;

export var DoubleList = 64 | 1;

export var IntegerList = 64 | 1;

export var IntegerSet = 64 | 1;

export var NestedStringList = list(n1, _NSL, 0, 64 | 0);
export var StringSet = 64 | 0;

export var TimestampList = 64 | 4;

export var DenseBooleanMap = 128 | 2;

export var DenseNumberMap = 128 | 1;

export var DenseSetMap = map(n0, _DSM, 0, 0, 64 | 0);
export var DenseStringMap = 128 | 0;

export var DenseStructMap = map(n0, _DSMe, 0, 0, () => GreetingStruct);
export var SparseBooleanMap = map(
  n0,
  _SBM,
  {
    [_sp]: 1,
  },
  0,
  2
);
export var SparseNumberMap = map(
  n0,
  _SNM,
  {
    [_sp]: 1,
  },
  0,
  1
);
export var SparseSetMap = map(
  n0,
  _SSM,
  {
    [_sp]: 1,
  },
  0,
  64 | 0
);
export var SparseStructMap = map(
  n0,
  _SSMp,
  {
    [_sp]: 1,
  },
  0,
  () => GreetingStruct
);
export var TestStringMap = 128 | 0;

export var SparseStringMap = map(
  n1,
  _SSMpa,
  {
    [_sp]: 1,
  },
  0,
  0
);
export var MyUnion = uni(
  n0,
  _MU,
  0,
  [_sV, _bVo, _nVu, _bVl, _tV, _eV, _lVi, _mV, _sVt, _rSV],
  [0, 2, 1, 21, 4, 0, 64 | 0, 128 | 0, () => GreetingStruct, () => GreetingStruct_n2]
);
export var AllQueryStringTypes = op(
  n0,
  _AQST,
  {
    [_ht]: ["GET", "/AllQueryStringTypesInput", 200],
  },
  () => AllQueryStringTypesInput,
  () => Unit
);
export var HttpRequestWithLabels = op(
  n0,
  _HRWL,
  {
    [_ht]: [
      "GET",
      "/HttpRequestWithLabels/{string}/{short}/{integer}/{long}/{float}/{double}/{boolean}/{timestamp}",
      200,
    ],
  },
  () => HttpRequestWithLabelsInput,
  () => Unit
);
export var InputAndOutputWithHeaders = op(
  n0,
  _IAOWH,
  {
    [_ht]: ["POST", "/InputAndOutputWithHeaders", 200],
  },
  () => InputAndOutputWithHeadersIO,
  () => InputAndOutputWithHeadersIO
);
export var JsonLists = op(
  n0,
  _JL,
  {
    [_ht]: ["PUT", "/JsonLists", 200],
  },
  () => JsonListsInputOutput,
  () => JsonListsInputOutput
);
export var JsonMaps = op(
  n0,
  _JM,
  {
    [_ht]: ["POST", "/JsonMaps", 200],
  },
  () => JsonMapsInputOutput,
  () => JsonMapsInputOutput
);
export var JsonUnions = op(
  n0,
  _JU,
  {
    [_ht]: ["PUT", "/JsonUnions", 200],
  },
  () => UnionInputOutput,
  () => UnionInputOutput
);
export var MalformedBoolean = op(
  n0,
  _MBa,
  {
    [_ht]: ["POST", "/MalformedBoolean/{booleanInPath}", 200],
  },
  () => MalformedBooleanInput,
  () => Unit
);
export var OmitsSerializingEmptyLists = op(
  n0,
  _OSEL,
  {
    [_ht]: ["POST", "/OmitsSerializingEmptyLists", 200],
  },
  () => OmitsSerializingEmptyListsInput,
  () => Unit
);
export var OperationWithDefaults = op(
  n0,
  _OWD,
  {
    [_ht]: ["POST", "/OperationWithDefaults", 200],
  },
  () => OperationWithDefaultsInput,
  () => OperationWithDefaultsOutput
);
export var SimpleScalarProperties = op(
  n0,
  _SSP,
  {
    [_ht]: ["PUT", "/SimpleScalarProperties", 200],
  },
  () => SimpleScalarPropertiesInputOutput,
  () => SimpleScalarPropertiesInputOutput
);
export var SparseJsonMaps = op(
  n0,
  _SJM,
  {
    [_ht]: ["POST", "/SparseJsonMaps", 200],
  },
  () => SparseJsonMapsInputOutput,
  () => SparseJsonMapsInputOutput
);
