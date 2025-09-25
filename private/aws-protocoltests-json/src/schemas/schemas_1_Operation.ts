// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  ComplexError as __ComplexError,
  ErrorWithMembers as __ErrorWithMembers,
  ErrorWithoutMembers as __ErrorWithoutMembers,
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import {
  _a,
  _B,
  _Bo,
  _bV,
  _bVl,
  _C,
  _c,
  _CD,
  _CE,
  _CE_,
  _CNED,
  _co,
  _D,
  _da,
  _e,
  _en,
  _end,
  _ES,
  _eV,
  _EWHLO,
  _EWM,
  _EWMr,
  _F,
  _FE,
  _fE,
  _fEL,
  _fEM,
  _fEo,
  _fEoo,
  _fES,
  _Fl,
  _Fo,
  _g,
  _GS,
  _GWE,
  _GWEO,
  _h,
  _hH,
  _hL,
  _HLI,
  _HT,
  _I,
  _iE,
  _iEL,
  _iEM,
  _iEn,
  _iEnt,
  _iES,
  _IF,
  _IG,
  _IT,
  _JE,
  _JEIO,
  _JIE,
  _JIEIO,
  _jN,
  _JU,
  _JV,
  _KS,
  _KSO,
  _L,
  _l,
  _LF,
  _LOKS,
  _LOL,
  _LOLOS,
  _LOMOS,
  _LOS,
  _LOSi,
  _lV,
  _M,
  _MF,
  _MOKS,
  _MOLOS,
  _MOM,
  _MOMOS,
  _MOS,
  _MOSa,
  _mT,
  _MU,
  _mV,
  _N,
  _NO,
  _NOIO,
  _nV,
  _OWOIO,
  _OWOIOI,
  _OWOIOO,
  _PWCE,
  _PWCEI,
  _RL,
  _RM,
  _RMe,
  _RS,
  _S,
  _s,
  _SF,
  _SNO,
  _SNOIO,
  _sp,
  _SS,
  _SSL,
  _sSL,
  _SSM,
  _sSM,
  _st,
  _sV,
  _sVt,
  _SWJN,
  _T,
  _TL,
  _tV,
  _UIO,
  _UT,
  _V,
  n0,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var JsonValue = sim(n0, _JV, 0, {
  [_mT]: _a,
});
export var ComplexError = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_TL, _N],
  [0, [() => ComplexNestedErrorData, 0]],

  __ComplexError
);
export var ComplexNestedErrorData = struct(
  n0,
  _CNED,
  0,
  [_F],
  [
    [
      0,
      {
        [_jN]: _Fo,
      },
    ],
  ]
);
export var EmptyStruct = struct(n0, _ES, 0, [], []);
export var ErrorWithMembers = error(
  n0,
  _EWM,
  {
    [_e]: _c,
  },
  [_C, _CD, _IF, _LF, _MF, _M, _SF],
  [0, [() => KitchenSink, 0], 1, 64 | 0, 128 | 0, 0, 0],

  __ErrorWithMembers
);
export var ErrorWithoutMembers = error(
  n0,
  _EWMr,
  {
    [_e]: _s,
  },
  [],
  [],

  __ErrorWithoutMembers
);
export var FooError = error(
  n0,
  _FE,
  {
    [_e]: _s,
  },
  [],
  [],

  __FooError
);
export var GreetingWithErrorsOutput = struct(n0, _GWEO, 0, [_g], [0]);
export var HostLabelInput = struct(
  n0,
  _HLI,
  0,
  [_l],
  [
    [
      0,
      {
        [_hL]: 1,
      },
    ],
  ]
);
export var InvalidGreeting = error(
  n0,
  _IG,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidGreeting
);
export var JsonEnumsInputOutput = struct(
  n0,
  _JEIO,
  0,
  [_fE, _fEo, _fEoo, _fEL, _fES, _fEM],
  [0, 0, 0, 64 | 0, 64 | 0, 128 | 0]
);
export var JsonIntEnumsInputOutput = struct(
  n0,
  _JIEIO,
  0,
  [_iE, _iEn, _iEnt, _iEL, _iES, _iEM],
  [1, 1, 1, 64 | 1, 64 | 1, 128 | 1]
);
export var KitchenSink = struct(
  n0,
  _KS,
  0,
  [
    _B,
    _Bo,
    _D,
    _ES,
    _Fl,
    _HT,
    _I,
    _IT,
    _JV,
    _LOL,
    _LOMOS,
    _LOS,
    _LOSi,
    _L,
    _MOLOS,
    _MOM,
    _MOS,
    _MOSa,
    _RL,
    _RM,
    _RS,
    _SS,
    _S,
    _SWJN,
    _T,
    _UT,
  ],
  [
    21,
    2,
    1,
    () => EmptyStruct,
    1,
    6,
    1,
    5,
    [() => JsonValue, 0],
    list(n0, _LOLOS, 0, 64 | 0),
    list(n0, _LOMOS, 0, 128 | 0),
    64 | 0,
    () => ListOfStructs,
    1,
    map(n0, _MOLOS, 0, 0, 64 | 0),
    map(n0, _MOMOS, 0, 0, 128 | 0),
    128 | 0,
    () => MapOfStructs,
    [() => ListOfKitchenSinks, 0],
    [() => MapOfKitchenSinks, 0],
    [() => KitchenSink, 0],
    () => SimpleStruct,
    0,
    [() => StructWithJsonName, 0],
    4,
    7,
  ]
);
export var NullOperationInputOutput = struct(n0, _NOIO, 0, [_st], [0]);
export var OperationWithOptionalInputOutputInput = struct(n0, _OWOIOI, 0, [_V], [0]);
export var OperationWithOptionalInputOutputOutput = struct(n0, _OWOIOO, 0, [_V], [0]);
export var PutWithContentEncodingInput = struct(
  n0,
  _PWCEI,
  0,
  [_en, _da],
  [
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
    0,
  ]
);
export var SimpleStruct = struct(n0, _SS, 0, [_V], [0]);
export var SparseNullsOperationInputOutput = struct(
  n0,
  _SNOIO,
  0,
  [_sSL, _sSM],
  [
    [() => SparseStringList, 0],
    [() => SparseStringMap, 0],
  ]
);
export var StructWithJsonName = struct(
  n0,
  _SWJN,
  0,
  [_V],
  [
    [
      0,
      {
        [_jN]: _RMe,
      },
    ],
  ]
);
export var UnionInputOutput = struct(n0, _UIO, 0, [_co], [() => MyUnion]);
export var GreetingStruct = struct(n1, _GS, 0, [_h], [0]);
export var Unit = "unit" as const;

export var ListOfKitchenSinks = list(n0, _LOKS, 0, [() => KitchenSink, 0]);
export var ListOfListOfStrings = list(n0, _LOLOS, 0, 64 | 0);
export var ListOfMapsOfStrings = list(n0, _LOMOS, 0, 128 | 0);
export var ListOfStrings = 64 | 0;

export var ListOfStructs = list(n0, _LOSi, 0, () => SimpleStruct);
export var FooEnumList = 64 | 0;

export var FooEnumSet = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerEnumSet = 64 | 1;

export var SparseStringList = list(
  n1,
  _SSL,
  {
    [_sp]: 1,
  },
  0
);
export var StringList = 64 | 0;

export var MapOfKitchenSinks = map(n0, _MOKS, 0, [0, 0], [() => KitchenSink, 0]);
export var MapOfListsOfStrings = map(n0, _MOLOS, 0, 0, 64 | 0);
export var MapOfMapOfStrings = map(n0, _MOMOS, 0, 0, 128 | 0);
export var MapOfStrings = 128 | 0;

export var MapOfStructs = map(n0, _MOSa, 0, 0, () => SimpleStruct);
export var FooEnumMap = 128 | 0;

export var IntegerEnumMap = 128 | 1;

export var SparseStringMap = map(
  n1,
  _SSM,
  {
    [_sp]: 1,
  },
  0,
  0
);
export var StringMap = 128 | 0;

export var MyUnion = uni(
  n0,
  _MU,
  0,
  [_sV, _bV, _nV, _bVl, _tV, _eV, _lV, _mV, _sVt],
  [0, 2, 1, 21, 4, 0, 64 | 0, 128 | 0, () => GreetingStruct]
);
export var EndpointWithHostLabelOperation = op(
  n0,
  _EWHLO,
  {
    [_end]: ["foo.{label}."],
  },
  () => HostLabelInput,
  () => Unit
);
export var GreetingWithErrors = op(
  n0,
  _GWE,
  2,
  () => Unit,
  () => GreetingWithErrorsOutput
);
export var JsonEnums = op(
  n0,
  _JE,
  2,
  () => JsonEnumsInputOutput,
  () => JsonEnumsInputOutput
);
export var JsonIntEnums = op(
  n0,
  _JIE,
  2,
  () => JsonIntEnumsInputOutput,
  () => JsonIntEnumsInputOutput
);
export var JsonUnions = op(
  n0,
  _JU,
  2,
  () => UnionInputOutput,
  () => UnionInputOutput
);
export var KitchenSinkOperation = op(
  n0,
  _KSO,
  0,
  () => KitchenSink,
  () => KitchenSink
);
export var NullOperation = op(
  n0,
  _NO,
  0,
  () => NullOperationInputOutput,
  () => NullOperationInputOutput
);
export var OperationWithOptionalInputOutput = op(
  n0,
  _OWOIO,
  0,
  () => OperationWithOptionalInputOutputInput,
  () => OperationWithOptionalInputOutputOutput
);
export var PutWithContentEncoding = op(
  n0,
  _PWCE,
  0,
  () => PutWithContentEncodingInput,
  () => Unit
);
export var SparseNullsOperation = op(
  n0,
  _SNO,
  0,
  () => SparseNullsOperationInputOutput,
  () => SparseNullsOperationInputOutput
);
