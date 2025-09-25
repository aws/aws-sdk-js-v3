// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _,
  _a,
  _AQST,
  _AQSTI,
  _B,
  _b_,
  _BL,
  _bL,
  _Bo,
  _cN,
  _D,
  _DL,
  _E,
  _EL,
  _eL,
  _EPI,
  _F,
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
  _fNM,
  _fSL,
  _FXM,
  _FXMR,
  _FXMRl,
  _hB,
  _hBL,
  _hD,
  _hEe,
  _hEL,
  _HEP,
  _hF,
  _hFB,
  _hH,
  _hI,
  _hIL,
  _hl,
  _hLe,
  _hm_,
  _hQ,
  _hS,
  _hSe,
  _hSL,
  _hSS,
  _hTB,
  _hTL,
  _http_,
  _I,
  _IAOWH,
  _IAOWHIO,
  _IE,
  _iE,
  _IEL,
  _iEL,
  _iEM,
  _iEn,
  _iEnt,
  _iES,
  _IL,
  _iL,
  _IS,
  _it,
  _L,
  _LWMN,
  _LWN,
  _mM,
  _mSL,
  _NM,
  _nM,
  _NSL,
  _nSL,
  _NXM,
  _NXMR,
  _NXMRe,
  _o,
  _p,
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
  _qPMOS,
  _qS,
  _qSL,
  _qSS,
  _qSu,
  _qT,
  _qTL,
  _r,
  _RLM,
  _rLM,
  _S,
  _Sh,
  _SL,
  _sL,
  _SLMt,
  _SLt,
  _sLt,
  _SS,
  _sS,
  _T,
  _TL,
  _tL,
  _v,
  _XB,
  _XB_,
  _XB__,
  _XB___,
  _XD,
  _XE,
  _XE_,
  _XEL,
  _XELR,
  _XELRm,
  _XEm,
  _XER,
  _XERm,
  _xF,
  _XF_,
  _XI,
  _XI_,
  _XIE,
  _XIER,
  _XIERm,
  _XL,
  _XLm,
  _XLR,
  _XLRm,
  _xN,
  _xNm,
  _XS,
  _XS_,
  _XS__,
  _XS___,
  _XT,
  n0,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllQueryStringTypesInput = struct(
  n1,
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
    _qPMOS,
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
    [128 | 0, 64],
  ]
);
export var EnumPayloadInput = struct(n1, _EPI, 0, [_p], [[0, 16]]);
export var FlattenedXmlMapRequest = struct(
  n1,
  _FXMR,
  0,
  [_mM],
  [
    [
      128 | 0,
      {
        [_xF]: 1,
      },
    ],
  ]
);
export var FlattenedXmlMapResponse = struct(
  n1,
  _FXMRl,
  0,
  [_mM],
  [
    [
      128 | 0,
      {
        [_xF]: 1,
      },
    ],
  ]
);
export var InputAndOutputWithHeadersIO = struct(
  n1,
  _IAOWHIO,
  0,
  [_hS, _hB, _hSe, _hI, _hLe, _hF, _hD, _hTB, _hFB, _hSL, _hSS, _hIL, _hBL, _hTL, _hEe, _hEL],
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
  ]
);
export var NestedXmlMapsRequest = struct(
  n1,
  _NXMR,
  0,
  [_nM, _fNM],
  [
    map(n1, _NM, 0, 0, 128 | 0),
    [
      map(n1, _NM, 0, 0, 128 | 0),
      {
        [_xF]: 1,
      },
    ],
  ]
);
export var NestedXmlMapsResponse = struct(
  n1,
  _NXMRe,
  0,
  [_nM, _fNM],
  [
    map(n1, _NM, 0, 0, 128 | 0),
    [
      map(n1, _NM, 0, 0, 128 | 0),
      {
        [_xF]: 1,
      },
    ],
  ]
);
export var StructureListMember = struct(
  n1,
  _SLMt,
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
export var XmlEmptyListsRequest = struct(
  n1,
  _XELR,
  0,
  [_sL, _sS, _iL, _bL, _tL, _eL, _iEL, _nSL, _rLM, _fL, _fLl, _fLWMN, _fLWN, _sLt, _fSL],
  [
    64 | 0,
    64 | 0,
    64 | 1,
    64 | 2,
    64 | 4,
    64 | 0,
    64 | 1,
    list(n0, _NSL, 0, 64 | 0),
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
    [
      () => StructureList,
      {
        [_xF]: 1,
      },
    ],
  ]
);
export var XmlEmptyListsResponse = struct(
  n1,
  _XELRm,
  0,
  [_sL, _sS, _iL, _bL, _tL, _eL, _iEL, _nSL, _rLM, _fL, _fLl, _fLWMN, _fLWN, _sLt, _fSL],
  [
    64 | 0,
    64 | 0,
    64 | 1,
    64 | 2,
    64 | 4,
    64 | 0,
    64 | 1,
    list(n0, _NSL, 0, 64 | 0),
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
    [
      () => StructureList,
      {
        [_xF]: 1,
      },
    ],
  ]
);
export var XmlEnumsRequest = struct(
  n1,
  _XER,
  0,
  [_fE, _fEo, _fEoo, _fEL, _fES, _fEM],
  [0, 0, 0, 64 | 0, 64 | 0, 128 | 0]
);
export var XmlEnumsResponse = struct(
  n1,
  _XERm,
  0,
  [_fE, _fEo, _fEoo, _fEL, _fES, _fEM],
  [0, 0, 0, 64 | 0, 64 | 0, 128 | 0]
);
export var XmlIntEnumsRequest = struct(
  n1,
  _XIER,
  0,
  [_iE, _iEn, _iEnt, _iEL, _iES, _iEM],
  [1, 1, 1, 64 | 1, 64 | 1, 128 | 1]
);
export var XmlIntEnumsResponse = struct(
  n1,
  _XIERm,
  0,
  [_iE, _iEn, _iEnt, _iEL, _iES, _iEM],
  [1, 1, 1, 64 | 1, 64 | 1, 128 | 1]
);
export var XmlListsRequest = struct(
  n1,
  _XLR,
  0,
  [_sL, _sS, _iL, _bL, _tL, _eL, _iEL, _nSL, _rLM, _fL, _fLl, _fLWMN, _fLWN, _sLt, _fSL],
  [
    64 | 0,
    64 | 0,
    64 | 1,
    64 | 2,
    64 | 4,
    64 | 0,
    64 | 1,
    list(n0, _NSL, 0, 64 | 0),
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
    [
      () => StructureList,
      {
        [_xF]: 1,
      },
    ],
  ]
);
export var XmlListsResponse = struct(
  n1,
  _XLRm,
  0,
  [_sL, _sS, _iL, _bL, _tL, _eL, _iEL, _nSL, _rLM, _fL, _fLl, _fLWMN, _fLWN, _sLt, _fSL],
  [
    64 | 0,
    64 | 0,
    64 | 1,
    64 | 2,
    64 | 4,
    64 | 0,
    64 | 1,
    list(n0, _NSL, 0, 64 | 0),
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
    [
      () => StructureList,
      {
        [_xF]: 1,
      },
    ],
  ]
);
export var Unit = "unit" as const;

export var ListWithMemberNamespace = list(
  n1,
  _LWMN,
  {
    [_xNm]: [_, _hl],
  },
  [
    0,
    {
      [_xNm]: [_, _hm_],
    },
  ]
);
export var ListWithNamespace = list(
  n1,
  _LWN,
  {
    [_xNm]: [_, _hl],
  },
  0
);
export var RenamedListMembers = list(n1, _RLM, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var StructureList = list(n1, _SLt, 0, [
  () => StructureListMember,
  {
    [_xN]: _it,
  },
]);
export var BooleanList = 64 | 2;

export var DoubleList = 64 | 1;

export var FooEnumList = 64 | 0;

export var FooEnumSet = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerEnumSet = 64 | 1;

export var IntegerList = 64 | 1;

export var IntegerSet = 64 | 1;

export var NestedStringList = list(n0, _NSL, 0, 64 | 0);
export var StringSet = 64 | 0;

export var TimestampList = 64 | 4;

export var NestedMap = map(n1, _NM, 0, 0, 128 | 0);
export var FooEnumMap = 128 | 0;

export var IntegerEnumMap = 128 | 1;

export var AllQueryStringTypes = op(
  n1,
  _AQST,
  {
    [_http_]: ["GET", "/AllQueryStringTypesInput", 200],
  },
  () => AllQueryStringTypesInput,
  () => Unit
);
export var FlattenedXmlMap = op(
  n1,
  _FXM,
  {
    [_http_]: ["POST", "/FlattenedXmlMap", 200],
  },
  () => FlattenedXmlMapRequest,
  () => FlattenedXmlMapResponse
);
export var HttpEnumPayload = op(
  n1,
  _HEP,
  {
    [_http_]: ["POST", "/EnumPayload", 200],
  },
  () => EnumPayloadInput,
  () => EnumPayloadInput
);
export var InputAndOutputWithHeaders = op(
  n1,
  _IAOWH,
  {
    [_http_]: ["POST", "/InputAndOutputWithHeaders", 200],
  },
  () => InputAndOutputWithHeadersIO,
  () => InputAndOutputWithHeadersIO
);
export var NestedXmlMaps = op(
  n1,
  _NXM,
  {
    [_http_]: ["POST", "/NestedXmlMaps", 200],
  },
  () => NestedXmlMapsRequest,
  () => NestedXmlMapsResponse
);
export var XmlEmptyLists = op(
  n1,
  _XEL,
  {
    [_http_]: ["PUT", "/XmlEmptyLists", 200],
  },
  () => XmlEmptyListsRequest,
  () => XmlEmptyListsResponse
);
export var XmlEnums = op(
  n1,
  _XEm,
  {
    [_http_]: ["PUT", "/XmlEnums", 200],
  },
  () => XmlEnumsRequest,
  () => XmlEnumsResponse
);
export var XmlIntEnums = op(
  n1,
  _XIE,
  {
    [_http_]: ["PUT", "/XmlIntEnums", 200],
  },
  () => XmlIntEnumsRequest,
  () => XmlIntEnumsResponse
);
export var XmlLists = op(
  n1,
  _XLm,
  {
    [_http_]: ["PUT", "/XmlLists", 200],
  },
  () => XmlListsRequest,
  () => XmlListsResponse
);
