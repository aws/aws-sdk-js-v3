const _CE = "ComplexError";
const _CNED = "ComplexNestedErrorData";
const _COD = "ClientOptionalDefaults";
const _D = "Defaults";
const _DSM = "DenseSetMap";
const _DSMe = "DenseStructMap";
const _EIO = "EmptyInputOutput";
const _ES = "EmptyStructure";
const _F = "Foo";
const _FO = "Float16Output";
const _FS = "FractionalSeconds";
const _FSO = "FractionalSecondsOutput";
const _Fl = "Float16";
const _GS = "GreetingStruct";
const _GWE = "GreetingWithErrors";
const _GWEO = "GreetingWithErrorsOutput";
const _IG = "InvalidGreeting";
const _M = "Message";
const _N = "Nested";
const _NIO = "NoInputOutput";
const _NSL = "NestedStringList";
const _OIO = "OptionalInputOutput";
const _OWD = "OperationWithDefaults";
const _OWDI = "OperationWithDefaultsInput";
const _OWDO = "OperationWithDefaultsOutput";
const _RS = "RecursiveShapes";
const _RSIO = "RecursiveShapesInputOutput";
const _RSION = "RecursiveShapesInputOutputNested1";
const _RSIONe = "RecursiveShapesInputOutputNested2";
const _RVCDM = "RpcV2CborDenseMaps";
const _RVCDMIO = "RpcV2CborDenseMapsInputOutput";
const _RVCL = "RpcV2CborLists";
const _RVCLIO = "RpcV2CborListInputOutput";
const _RVCSM = "RpcV2CborSparseMaps";
const _RVCSMIO = "RpcV2CborSparseMapsInputOutput";
const _SBM = "SparseBooleanMap";
const _SL = "StructureList";
const _SLM = "StructureListMember";
const _SNM = "SparseNumberMap";
const _SNO = "SparseNullsOperation";
const _SNOIO = "SparseNullsOperationInputOutput";
const _SS = "SimpleStructure";
const _SSL = "SparseStringList";
const _SSM = "SparseSetMap";
const _SSMp = "SparseStructMap";
const _SSMpa = "SparseStringMap";
const _SSP = "SimpleScalarProperties";
const _SSS = "SimpleScalarStructure";
const _TL = "TopLevel";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _a = "a";
const _b = "bar";
const _bL = "booleanList";
const _bLl = "blobList";
const _bV = "byteValue";
const _bVl = "blobValue";
const _b_ = "b";
const _c = "client";
const _cOD = "clientOptionalDefaults";
const _d = "datetime";
const _dB = "defaultBoolean";
const _dBM = "denseBooleanMap";
const _dBe = "defaultBlob";
const _dBef = "defaultByte";
const _dD = "defaultDouble";
const _dE = "defaultEnum";
const _dF = "defaultFloat";
const _dI = "defaultInteger";
const _dIE = "defaultIntEnum";
const _dL = "defaultList";
const _dLe = "defaultLong";
const _dM = "defaultMap";
const _dNM = "denseNumberMap";
const _dS = "defaultString";
const _dSM = "denseStructMap";
const _dSMe = "denseStringMap";
const _dSMen = "denseSetMap";
const _dSe = "defaultShort";
const _dT = "defaultTimestamp";
const _dV = "doubleValue";
const _de = "defaults";
const _e = "error";
const _eB = "emptyBlob";
const _eL = "enumList";
const _eS = "emptyString";
const _f = "foo";
const _fB = "falseBoolean";
const _fBV = "falseBooleanValue";
const _fL = "fieldList";
const _fV = "floatValue";
const _g = "greeting";
const _h = "hi";
const _iEL = "intEnumList";
const _iL = "integerList";
const _iV = "integerValue";
const _lV = "longValue";
const _m = "message";
const _me = "member";
const _n = "nested";
const _nSL = "nestedStringList";
const _oTLD = "otherTopLevelDefault";
const _p = "path";
const _rM = "recursiveMember";
const _s = "sparse";
const _sBM = "sparseBooleanMap";
const _sC = "smithy.ts.sdk.synthetic.smithy.protocoltests.rpcv2Cbor";
const _sL = "stringList";
const _sLt = "structureList";
const _sNM = "sparseNumberMap";
const _sS = "stringSet";
const _sSL = "sparseStringList";
const _sSM = "sparseStructMap";
const _sSMp = "sparseStringMap";
const _sSMpa = "sparseSetMap";
const _sV = "shortValue";
const _sVt = "stringValue";
const _tBV = "trueBooleanValue";
const _tL = "timestampList";
const _tLD = "topLevelDefault";
const _v = "value";
const _zB = "zeroByte";
const _zD = "zeroDouble";
const _zF = "zeroFloat";
const _zI = "zeroInteger";
const _zL = "zeroLong";
const _zS = "zeroShort";
const n0 = "smithy.framework";
const n1 = "smithy.protocoltests.rpcv2Cbor";
const n2 = "smithy.protocoltests.shared";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ComplexError as __ComplexError,
  InvalidGreeting as __InvalidGreeting,
  ValidationException as __ValidationException,
} from "../models/errors";
import { RpcV2ProtocolServiceException as __RpcV2ProtocolServiceException } from "../models/RpcV2ProtocolServiceException";

/* eslint no-var: 0 */

export var __Unit = "unit" as const;

export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_p, _m], [0, 0]];
export var ClientOptionalDefaults: StaticStructureSchema = [3, n1, _COD, 0, [_me], [1]];
export var ComplexError: StaticErrorSchema = [
  -3,
  n1,
  _CE,
  {
    [_e]: _c,
  },
  [_TL, _N],
  [0, () => ComplexNestedErrorData],
];
TypeRegistry.for(n1).registerError(ComplexError, __ComplexError);

export var ComplexNestedErrorData: StaticStructureSchema = [3, n1, _CNED, 0, [_F], [0]];
export var Defaults: StaticStructureSchema = [
  3,
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
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1],
];
export var EmptyStructure: StaticStructureSchema = [3, n1, _ES, 0, [], []];
export var Float16Output: StaticStructureSchema = [3, n1, _FO, 0, [_v], [1]];
export var FractionalSecondsOutput: StaticStructureSchema = [3, n1, _FSO, 0, [_d], [5]];
export var GreetingWithErrorsOutput: StaticStructureSchema = [3, n1, _GWEO, 0, [_g], [0]];
export var InvalidGreeting: StaticErrorSchema = [
  -3,
  n1,
  _IG,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n1).registerError(InvalidGreeting, __InvalidGreeting);

export var OperationWithDefaultsInput: StaticStructureSchema = [
  3,
  n1,
  _OWDI,
  0,
  [_de, _cOD, _tLD, _oTLD],
  [() => Defaults, () => ClientOptionalDefaults, 0, 1],
];
export var OperationWithDefaultsOutput: StaticStructureSchema = [
  3,
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
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1],
];
export var RecursiveShapesInputOutput: StaticStructureSchema = [
  3,
  n1,
  _RSIO,
  0,
  [_n],
  [() => RecursiveShapesInputOutputNested1],
];
export var RecursiveShapesInputOutputNested1: StaticStructureSchema = [
  3,
  n1,
  _RSION,
  0,
  [_f, _n],
  [0, () => RecursiveShapesInputOutputNested2],
];
export var RecursiveShapesInputOutputNested2: StaticStructureSchema = [
  3,
  n1,
  _RSIONe,
  0,
  [_b, _rM],
  [0, () => RecursiveShapesInputOutputNested1],
];
export var RpcV2CborDenseMapsInputOutput: StaticStructureSchema = [
  3,
  n1,
  _RVCDMIO,
  0,
  [_dSM, _dNM, _dBM, _dSMe, _dSMen],
  [() => DenseStructMap, 128 | 1, 128 | 2, 128 | 0, [2, n1, _DSM, 0, 0, 64 | 0]],
];
export var RpcV2CborListInputOutput: StaticStructureSchema = [
  3,
  n1,
  _RVCLIO,
  0,
  [_sL, _sS, _iL, _bL, _tL, _eL, _iEL, _nSL, _sLt, _bLl],
  [64 | 0, 64 | 0, 64 | 1, 64 | 2, 64 | 4, 64 | 0, 64 | 1, [1, n2, _NSL, 0, 64 | 0], () => StructureList, 64 | 21],
];
export var RpcV2CborSparseMapsInputOutput: StaticStructureSchema = [
  3,
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
  ],
];
export var SimpleScalarStructure: StaticStructureSchema = [
  3,
  n1,
  _SSS,
  0,
  [_tBV, _fBV, _bV, _dV, _fV, _iV, _lV, _sV, _sVt, _bVl],
  [2, 2, 1, 1, 1, 1, 1, 1, 0, 21],
];
export var SimpleStructure: StaticStructureSchema = [3, n1, _SS, 0, [_v], [0]];
export var SparseNullsOperationInputOutput: StaticStructureSchema = [
  3,
  n1,
  _SNOIO,
  0,
  [_sSL, _sSMp],
  [
    [() => SparseStringList, 0],
    [() => SparseStringMap, 0],
  ],
];
export var StructureListMember: StaticStructureSchema = [3, n1, _SLM, 0, [_a, _b_], [0, 0]];
export var GreetingStruct: StaticStructureSchema = [3, n2, _GS, 0, [_h], [0]];
export var RpcV2ProtocolServiceException: StaticErrorSchema = [-3, _sC, "RpcV2ProtocolServiceException", 0, [], []];
TypeRegistry.for(_sC).registerError(RpcV2ProtocolServiceException, __RpcV2ProtocolServiceException);

export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var StructureList: StaticListSchema = [1, n1, _SL, 0, () => StructureListMember];
export var TestStringList = 64 | 0;

export var BlobList = 64 | 21;

export var BooleanList = 64 | 2;

export var FooEnumList = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerList = 64 | 1;

export var NestedStringList: StaticListSchema = [1, n2, _NSL, 0, 64 | 0];
export var SparseStringList: StaticListSchema = [
  1,
  n2,
  _SSL,
  {
    [_s]: 1,
  },
  0,
];
export var StringList = 64 | 0;

export var StringSet = 64 | 0;

export var TimestampList = 64 | 4;

export var DenseBooleanMap = 128 | 2;

export var DenseNumberMap = 128 | 1;

export var DenseSetMap: StaticMapSchema = [2, n1, _DSM, 0, 0, 64 | 0];
export var DenseStringMap = 128 | 0;

export var DenseStructMap: StaticMapSchema = [2, n1, _DSMe, 0, 0, () => GreetingStruct];
export var SparseBooleanMap: StaticMapSchema = [
  2,
  n1,
  _SBM,
  {
    [_s]: 1,
  },
  0,
  2,
];
export var SparseNumberMap: StaticMapSchema = [
  2,
  n1,
  _SNM,
  {
    [_s]: 1,
  },
  0,
  1,
];
export var SparseSetMap: StaticMapSchema = [
  2,
  n1,
  _SSM,
  {
    [_s]: 1,
  },
  0,
  64 | 0,
];
export var SparseStructMap: StaticMapSchema = [
  2,
  n1,
  _SSMp,
  {
    [_s]: 1,
  },
  0,
  () => GreetingStruct,
];
export var TestStringMap = 128 | 0;

export var SparseStringMap: StaticMapSchema = [
  2,
  n2,
  _SSMpa,
  {
    [_s]: 1,
  },
  0,
  0,
];
export var EmptyInputOutput: StaticOperationSchema = [9, n1, _EIO, 0, () => EmptyStructure, () => EmptyStructure];
export var Float16: StaticOperationSchema = [9, n1, _Fl, 0, () => __Unit, () => Float16Output];
export var FractionalSeconds: StaticOperationSchema = [9, n1, _FS, 0, () => __Unit, () => FractionalSecondsOutput];
export var GreetingWithErrors: StaticOperationSchema = [9, n1, _GWE, 2, () => __Unit, () => GreetingWithErrorsOutput];
export var NoInputOutput: StaticOperationSchema = [9, n1, _NIO, 0, () => __Unit, () => __Unit];
export var OperationWithDefaults: StaticOperationSchema = [
  9,
  n1,
  _OWD,
  0,
  () => OperationWithDefaultsInput,
  () => OperationWithDefaultsOutput,
];
export var OptionalInputOutput: StaticOperationSchema = [9, n1, _OIO, 0, () => SimpleStructure, () => SimpleStructure];
export var RecursiveShapes: StaticOperationSchema = [
  9,
  n1,
  _RS,
  0,
  () => RecursiveShapesInputOutput,
  () => RecursiveShapesInputOutput,
];
export var RpcV2CborDenseMaps: StaticOperationSchema = [
  9,
  n1,
  _RVCDM,
  0,
  () => RpcV2CborDenseMapsInputOutput,
  () => RpcV2CborDenseMapsInputOutput,
];
export var RpcV2CborLists: StaticOperationSchema = [
  9,
  n1,
  _RVCL,
  2,
  () => RpcV2CborListInputOutput,
  () => RpcV2CborListInputOutput,
];
export var RpcV2CborSparseMaps: StaticOperationSchema = [
  9,
  n1,
  _RVCSM,
  0,
  () => RpcV2CborSparseMapsInputOutput,
  () => RpcV2CborSparseMapsInputOutput,
];
export var SimpleScalarProperties: StaticOperationSchema = [
  9,
  n1,
  _SSP,
  0,
  () => SimpleScalarStructure,
  () => SimpleScalarStructure,
];
export var SparseNullsOperation: StaticOperationSchema = [
  9,
  n1,
  _SNO,
  0,
  () => SparseNullsOperationInputOutput,
  () => SparseNullsOperationInputOutput,
];
