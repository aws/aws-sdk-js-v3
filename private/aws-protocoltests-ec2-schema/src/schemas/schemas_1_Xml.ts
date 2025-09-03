// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _,
  _a,
  _B,
  _b_,
  _Ba,
  _Bam,
  _bL,
  _Bo,
  _cN,
  _eL,
  _eQN,
  _F,
  _FE,
  _fE,
  _fEL,
  _fEM,
  _fEo,
  _fEoo,
  _fES,
  _fL,
  _fLl,
  _fLWMN,
  _fLWN,
  _FV,
  _hl,
  _hm,
  _HQAXN,
  _hQAXN,
  _HQN,
  _i,
  _iE,
  _iEL,
  _iEM,
  _iEn,
  _iEnt,
  _iES,
  _iL,
  _LWMN,
  _LWN,
  _mSL,
  _NSL,
  _nSL,
  _o,
  _Q,
  _r,
  _RLM,
  _rLM,
  _SIP,
  _SIPI,
  _SL,
  _sL,
  _SLM,
  _sLt,
  _sS,
  _tL,
  _UXN,
  _uXN,
  _v,
  _XE,
  _XEL,
  _XEO,
  _xF,
  _XIE,
  _XIEO,
  _XL,
  _XLO,
  _xN,
  _xNm,
  n0,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SimpleInputParamsInput = struct(
  n0,
  _SIPI,
  0,
  [_F, _B, _Ba, _Bam, _FV, _Bo, _Q, _FE, _HQN, _HQAXN, _UXN],
  [
    0,
    0,
    2,
    1,
    1,
    1,
    21,
    0,
    [
      0,
      {
        [_eQN]: `HasQueryName`,
      },
    ],
    [
      0,
      {
        [_eQN]: `HasQueryAndXmlName`,
        [_xN]: _hQAXN,
      },
    ],
    [
      0,
      {
        [_xN]: _uXN,
      },
    ],
  ]
);
export var StructureListMember = struct(
  n0,
  _SLM,
  0,
  [_a, _b_],
  [
    [
      0,
      {
        [_xN]: _v,
      },
    ],
    [
      0,
      {
        [_xN]: _o,
      },
    ],
  ]
);
export var XmlEnumsOutput = struct(
  n0,
  _XEO,
  0,
  [_fE, _fEo, _fEoo, _fEL, _fES, _fEM],
  [0, 0, 0, 64 | 0, 64 | 0, 128 | 0]
);
export var XmlIntEnumsOutput = struct(
  n0,
  _XIEO,
  0,
  [_iE, _iEn, _iEnt, _iEL, _iES, _iEM],
  [1, 1, 1, 64 | 1, 64 | 1, 128 | 1]
);
export var XmlListsOutput = struct(
  n0,
  _XLO,
  0,
  [_sL, _sS, _iL, _bL, _tL, _eL, _iEL, _nSL, _rLM, _fL, _fLl, _fLWMN, _fLWN, _sLt],
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
      () => RenamedListMembers,
      {
        [_xN]: _r,
      },
    ],
    [
      () => RenamedListMembers,
      {
        [_xF]: 1,
      },
    ],
    [
      () => RenamedListMembers,
      {
        [_xN]: _cN,
        [_xF]: 1,
      },
    ],
    [
      () => ListWithMemberNamespace,
      {
        [_xF]: 1,
      },
    ],
    [
      () => ListWithNamespace,
      {
        [_xF]: 1,
      },
    ],
    [
      () => StructureList,
      {
        [_xN]: _mSL,
      },
    ],
  ]
);
export var Unit = "unit" as const;

export var ListWithMemberNamespace = list(
  n0,
  _LWMN,
  {
    [_xNm]: [_, _hl],
  },
  [
    0,
    {
      [_xNm]: [_, _hm],
    },
  ]
);
export var ListWithNamespace = list(
  n0,
  _LWN,
  {
    [_xNm]: [_, _hl],
  },
  0
);
export var RenamedListMembers = list(n0, _RLM, 0, [
  0,
  {
    [_xN]: _i,
  },
]);
export var StructureList = list(n0, _SL, 0, [
  () => StructureListMember,
  {
    [_xN]: _i,
  },
]);
export var BooleanList = 64 | 2;

export var FooEnumList = 64 | 0;

export var FooEnumSet = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerEnumSet = 64 | 1;

export var IntegerList = 64 | 1;

export var NestedStringList = list(n1, _NSL, 0, 64 | 0);
export var StringSet = 64 | 0;

export var TimestampList = 64 | 4;

export var FooEnumMap = 128 | 0;

export var IntegerEnumMap = 128 | 1;

export var SimpleInputParams = op(
  n0,
  _SIP,
  0,
  () => SimpleInputParamsInput,
  () => Unit
);
export var XmlEmptyLists = op(
  n0,
  _XEL,
  0,
  () => Unit,
  () => XmlListsOutput
);
export var XmlEnums = op(
  n0,
  _XE,
  0,
  () => Unit,
  () => XmlEnumsOutput
);
export var XmlIntEnums = op(
  n0,
  _XIE,
  0,
  () => Unit,
  () => XmlIntEnumsOutput
);
export var XmlLists = op(
  n0,
  _XL,
  0,
  () => Unit,
  () => XmlListsOutput
);
