// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  ComplexError as __ComplexError,
  InvalidGreeting as __InvalidGreeting,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _b,
  _b_,
  _bL,
  _bLl,
  _bV,
  _bVl,
  _c,
  _CE,
  _CNED,
  _COD,
  _cOD,
  _D,
  _dB,
  _dBe,
  _dBef,
  _dBM,
  _dD,
  _dE,
  _de,
  _dF,
  _dI,
  _dIE,
  _dL,
  _dLe,
  _dM,
  _dNM,
  _dS,
  _dSe,
  _DSM,
  _dSM,
  _DSMe,
  _dSMe,
  _dSMen,
  _dT,
  _dV,
  _e,
  _eB,
  _eL,
  _eS,
  _F,
  _f,
  _fB,
  _fBV,
  _fL,
  _fV,
  _g,
  _GS,
  _GWE,
  _GWEO,
  _h,
  _iEL,
  _IG,
  _iL,
  _iV,
  _lV,
  _M,
  _m,
  _me,
  _N,
  _n,
  _NSL,
  _nSL,
  _OIO,
  _oTLD,
  _OWD,
  _OWDI,
  _OWDO,
  _p,
  _rM,
  _RS,
  _RSIO,
  _RSION,
  _RSIONe,
  _RVCDM,
  _RVCDMIO,
  _RVCL,
  _RVCLIO,
  _RVCSM,
  _RVCSMIO,
  _s,
  _SBM,
  _sBM,
  _SL,
  _sL,
  _SLM,
  _sLt,
  _SNM,
  _sNM,
  _SNO,
  _SNOIO,
  _SS,
  _sS,
  _SSL,
  _sSL,
  _SSM,
  _sSM,
  _SSMp,
  _sSMp,
  _SSMpa,
  _sSMpa,
  _SSP,
  _SSS,
  _sV,
  _sVt,
  _tBV,
  _TL,
  _tL,
  _tLD,
  _v,
  _VE,
  _VEF,
  _VEFL,
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

/* eslint no-var: 0 */

export var Unit = "unit" as const;

export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_p, _m], [0, 0]);
export var ClientOptionalDefaults = struct(n1, _COD, 0, [_me], [1]);
export var ComplexError = error(
  n1,
  _CE,
  {
    [_e]: _c,
  },
  [_TL, _N],
  [0, () => ComplexNestedErrorData],

  __ComplexError
);
export var ComplexNestedErrorData = struct(n1, _CNED, 0, [_F], [0]);
export var Defaults = struct(
  n1,
  _D,
  0,
  [
    _dS,
    _dB,
    _dL,
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
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1]
);
export var GreetingWithErrorsOutput = struct(n1, _GWEO, 0, [_g], [0]);
export var InvalidGreeting = error(
  n1,
  _IG,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidGreeting
);
export var OperationWithDefaultsInput = struct(
  n1,
  _OWDI,
  0,
  [_de, _cOD, _tLD, _oTLD],
  [() => Defaults, () => ClientOptionalDefaults, 0, 1]
);
export var OperationWithDefaultsOutput = struct(
  n1,
  _OWDO,
  0,
  [
    _dS,
    _dB,
    _dL,
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
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1]
);
export var RecursiveShapesInputOutput = struct(n1, _RSIO, 0, [_n], [() => RecursiveShapesInputOutputNested1]);
export var RecursiveShapesInputOutputNested1 = struct(
  n1,
  _RSION,
  0,
  [_f, _n],
  [0, () => RecursiveShapesInputOutputNested2]
);
export var RecursiveShapesInputOutputNested2 = struct(
  n1,
  _RSIONe,
  0,
  [_b, _rM],
  [0, () => RecursiveShapesInputOutputNested1]
);
export var RpcV2CborDenseMapsInputOutput = struct(
  n1,
  _RVCDMIO,
  0,
  [_dSM, _dNM, _dBM, _dSMe, _dSMen],
  [() => DenseStructMap, 128 | 1, 128 | 2, 128 | 0, map(n1, _DSM, 0, 0, 64 | 0)]
);
export var RpcV2CborListInputOutput = struct(
  n1,
  _RVCLIO,
  0,
  [_sL, _sS, _iL, _bL, _tL, _eL, _iEL, _nSL, _sLt, _bLl],
  [64 | 0, 64 | 0, 64 | 1, 64 | 2, 64 | 4, 64 | 0, 64 | 1, list(n2, _NSL, 0, 64 | 0), () => StructureList, 64 | 21]
);
export var RpcV2CborSparseMapsInputOutput = struct(
  n1,
  _RVCSMIO,
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
export var SimpleScalarStructure = struct(
  n1,
  _SSS,
  0,
  [_tBV, _fBV, _bV, _dV, _fV, _iV, _lV, _sV, _sVt, _bVl],
  [2, 2, 1, 1, 1, 1, 1, 1, 0, 21]
);
export var SimpleStructure = struct(n1, _SS, 0, [_v], [0]);
export var SparseNullsOperationInputOutput = struct(
  n1,
  _SNOIO,
  0,
  [_sSL, _sSMp],
  [
    [() => SparseStringList, 0],
    [() => SparseStringMap, 0],
  ]
);
export var StructureListMember = struct(n1, _SLM, 0, [_a, _b_], [0, 0]);
export var GreetingStruct = struct(n2, _GS, 0, [_h], [0]);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var StructureList = list(n1, _SL, 0, () => StructureListMember);
export var TestStringList = 64 | 0;

export var BlobList = 64 | 21;

export var BooleanList = 64 | 2;

export var FooEnumList = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerList = 64 | 1;

export var NestedStringList = list(n2, _NSL, 0, 64 | 0);
export var SparseStringList = list(
  n2,
  _SSL,
  {
    [_s]: 1,
  },
  0
);
export var StringList = 64 | 0;

export var StringSet = 64 | 0;

export var TimestampList = 64 | 4;

export var DenseBooleanMap = 128 | 2;

export var DenseNumberMap = 128 | 1;

export var DenseSetMap = map(n1, _DSM, 0, 0, 64 | 0);
export var DenseStringMap = 128 | 0;

export var DenseStructMap = map(n1, _DSMe, 0, 0, () => GreetingStruct);
export var SparseBooleanMap = map(
  n1,
  _SBM,
  {
    [_s]: 1,
  },
  0,
  2
);
export var SparseNumberMap = map(
  n1,
  _SNM,
  {
    [_s]: 1,
  },
  0,
  1
);
export var SparseSetMap = map(
  n1,
  _SSM,
  {
    [_s]: 1,
  },
  0,
  64 | 0
);
export var SparseStructMap = map(
  n1,
  _SSMp,
  {
    [_s]: 1,
  },
  0,
  () => GreetingStruct
);
export var TestStringMap = 128 | 0;

export var SparseStringMap = map(
  n2,
  _SSMpa,
  {
    [_s]: 1,
  },
  0,
  0
);
export var GreetingWithErrors = op(
  n1,
  _GWE,
  2,
  () => Unit,
  () => GreetingWithErrorsOutput
);
export var OperationWithDefaults = op(
  n1,
  _OWD,
  0,
  () => OperationWithDefaultsInput,
  () => OperationWithDefaultsOutput
);
export var OptionalInputOutput = op(
  n1,
  _OIO,
  0,
  () => SimpleStructure,
  () => SimpleStructure
);
export var RecursiveShapes = op(
  n1,
  _RS,
  0,
  () => RecursiveShapesInputOutput,
  () => RecursiveShapesInputOutput
);
export var RpcV2CborDenseMaps = op(
  n1,
  _RVCDM,
  0,
  () => RpcV2CborDenseMapsInputOutput,
  () => RpcV2CborDenseMapsInputOutput
);
export var RpcV2CborLists = op(
  n1,
  _RVCL,
  2,
  () => RpcV2CborListInputOutput,
  () => RpcV2CborListInputOutput
);
export var RpcV2CborSparseMaps = op(
  n1,
  _RVCSM,
  0,
  () => RpcV2CborSparseMapsInputOutput,
  () => RpcV2CborSparseMapsInputOutput
);
export var SimpleScalarProperties = op(
  n1,
  _SSP,
  0,
  () => SimpleScalarStructure,
  () => SimpleScalarStructure
);
export var SparseNullsOperation = op(
  n1,
  _SNO,
  0,
  () => SparseNullsOperationInputOutput,
  () => SparseNullsOperationInputOutput
);
