export const _CE = "ComplexError";
export const _CE_ = "Content-Encoding";
export const _CNED = "ComplexNestedErrorData";
export const _COD = "ClientOptionalDefaults";
export const _CTP = "ContentTypeParameters";
export const _CTPI = "ContentTypeParametersInput";
export const _CTPO = "ContentTypeParametersOutput";
export const _D = "Defaults";
export const _DL = "DialogList";
export const _DM = "DialogMap";
export const _Di = "Dialog";
export const _EIAEO = "EmptyInputAndEmptyOutput";
export const _EIAEOI = "EmptyInputAndEmptyOutputInput";
export const _EIAEOO = "EmptyInputAndEmptyOutputOutput";
export const _EO = "EndpointOperation";
export const _EWHLO = "EndpointWithHostLabelOperation";
export const _EWHLOI = "EndpointWithHostLabelOperationInput";
export const _F = "Foo";
export const _FE = "FooError";
export const _Fa = "Farewell";
export const _Fo = "Fooooo";
export const _GS = "GreetingStruct";
export const _GWE = "GreetingWithErrors";
export const _GWEI = "GreetingWithErrorsInput";
export const _GWEO = "GreetingWithErrorsOutput";
export const _HWPO = "HostWithPathOperation";
export const _IG = "InvalidGreeting";
export const _JU = "JsonUnions";
export const _JUI = "JsonUnionsInput";
export const _JUO = "JsonUnionsOutput";
export const _M = "Message";
export const _MU = "MyUnion";
export const _N = "Nested";
export const _NIANO = "NoInputAndNoOutput";
export const _NIAO = "NoInputAndOutput";
export const _NIAOO = "NoInputAndOutputOutput";
export const _OWD = "OperationWithDefaults";
export const _OWDI = "OperationWithDefaultsInput";
export const _OWDO = "OperationWithDefaultsOutput";
export const _OWNS = "OperationWithNestedStructure";
export const _OWNSI = "OperationWithNestedStructureInput";
export const _OWNSO = "OperationWithNestedStructureOutput";
export const _OWRM = "OperationWithRequiredMembers";
export const _OWRMO = "OperationWithRequiredMembersOutput";
export const _OWRMWD = "OperationWithRequiredMembersWithDefaults";
export const _OWRMWDO = "OperationWithRequiredMembersWithDefaultsOutput";
export const _PWCE = "PutWithContentEncoding";
export const _PWCEI = "PutWithContentEncodingInput";
export const _QIO = "QueryIncompatibleOperation";
export const _SSP = "SimpleScalarProperties";
export const _SSPI = "SimpleScalarPropertiesInput";
export const _SSPO = "SimpleScalarPropertiesOutput";
export const _TL = "TopLevel";
export const _bV = "booleanValue";
export const _bVl = "blobValue";
export const _c = "client";
export const _cOD = "clientOptionalDefaults";
export const _co = "contents";
export const _d = "defaults";
export const _dB = "defaultBoolean";
export const _dBe = "defaultBlob";
export const _dBef = "defaultByte";
export const _dD = "defaultDouble";
export const _dDB = "defaultDocumentBoolean";
export const _dDL = "defaultDocumentList";
export const _dDM = "defaultDocumentMap";
export const _dDS = "defaultDocumentString";
export const _dE = "defaultEnum";
export const _dF = "defaultFloat";
export const _dI = "defaultInteger";
export const _dIE = "defaultIntEnum";
export const _dL = "defaultList";
export const _dLe = "defaultLong";
export const _dLi = "dialogList";
export const _dM = "defaultMap";
export const _dMi = "dialogMap";
export const _dND = "defaultNullDocument";
export const _dS = "defaultString";
export const _dSe = "defaultShort";
export const _dT = "defaultTimestamp";
export const _dV = "doubleValue";
export const _da = "data";
export const _di = "dialog";
export const _e = "error";
export const _eB = "emptyBlob";
export const _eS = "emptyString";
export const _eV = "enumValue";
export const _en = "encoding";
export const _end = "endpoint";
export const _f = "farewell";
export const _fB = "falseBoolean";
export const _fV = "floatValue";
export const _g = "greeting";
export const _h = "hi";
export const _hH = "httpHeader";
export const _hL = "hostLabel";
export const _iEV = "intEnumValue";
export const _jN = "jsonName";
export const _l = "language";
export const _lV = "listValue";
export const _la = "label";
export const _m = "member";
export const _mV = "mapValue";
export const _nV = "numberValue";
export const _oTLD = "otherTopLevelDefault";
export const _p = "phrase";
export const _rB = "requiredBoolean";
export const _rBe = "requiredBlob";
export const _rBeq = "requiredByte";
export const _rD = "requiredDouble";
export const _rE = "requiredEnum";
export const _rF = "requiredFloat";
export const _rI = "requiredInteger";
export const _rIE = "requiredIntEnum";
export const _rL = "requiredList";
export const _rLe = "requiredLong";
export const _rM = "requiredMap";
export const _rS = "requiredString";
export const _rSe = "requiredShort";
export const _rT = "requiredTimestamp";
export const _s = "server";
export const _sV = "stringValue";
export const _sVt = "structureValue";
export const _sm = "smithy.ts.sdk.synthetic.aws.protocoltests.json10";
export const _tL = "topLevel";
export const _tLD = "topLevelDefault";
export const _tV = "timestampValue";
export const _v = "value";
export const _zB = "zeroByte";
export const _zD = "zeroDouble";
export const _zF = "zeroFloat";
export const _zI = "zeroInteger";
export const _zL = "zeroLong";
export const _zS = "zeroShort";
export const n0 = "aws.protocoltests.json10";
export const n1 = "aws.protocoltests.shared";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ComplexError as __ComplexError,
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import { JSONRPC10ServiceException as __JSONRPC10ServiceException } from "../models/JSONRPC10ServiceException";

/* eslint no-var: 0 */

export var ClientOptionalDefaults: StaticStructureSchema = [3, n0, _COD, 0, [_m], [1]];
export var ComplexError: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_TL, _N],
  [0, [() => ComplexNestedErrorData, 0]],
];
TypeRegistry.for(n0).registerError(ComplexError, __ComplexError);

export var ComplexNestedErrorData: StaticStructureSchema = [
  3,
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
  ],
];
export var ContentTypeParametersInput: StaticStructureSchema = [3, n0, _CTPI, 0, [_v], [1]];
export var ContentTypeParametersOutput: StaticStructureSchema = [3, n0, _CTPO, 0, [], []];
export var Defaults: StaticStructureSchema = [
  3,
  n0,
  _D,
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
  [0, 2, 64 | 0, 15, 15, 15, 15, 15, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1],
];
export var Dialog: StaticStructureSchema = [3, n0, _Di, 0, [_l, _g, _f], [0, 0, () => Farewell]];
export var EmptyInputAndEmptyOutputInput: StaticStructureSchema = [3, n0, _EIAEOI, 0, [], []];
export var EmptyInputAndEmptyOutputOutput: StaticStructureSchema = [3, n0, _EIAEOO, 0, [], []];
export var EndpointWithHostLabelOperationInput: StaticStructureSchema = [
  3,
  n0,
  _EWHLOI,
  0,
  [_la],
  [
    [
      0,
      {
        [_hL]: 1,
      },
    ],
  ],
];
export var Farewell: StaticStructureSchema = [3, n0, _Fa, 0, [_p], [0]];
export var FooError: StaticErrorSchema = [
  -3,
  n0,
  _FE,
  {
    [_e]: _s,
  },
  [],
  [],
];
TypeRegistry.for(n0).registerError(FooError, __FooError);

export var GreetingWithErrorsInput: StaticStructureSchema = [3, n0, _GWEI, 0, [_g], [0]];
export var GreetingWithErrorsOutput: StaticStructureSchema = [3, n0, _GWEO, 0, [_g], [0]];
export var InvalidGreeting: StaticErrorSchema = [
  -3,
  n0,
  _IG,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidGreeting, __InvalidGreeting);

export var JsonUnionsInput: StaticStructureSchema = [3, n0, _JUI, 0, [_co], [() => MyUnion]];
export var JsonUnionsOutput: StaticStructureSchema = [3, n0, _JUO, 0, [_co], [() => MyUnion]];
export var NoInputAndOutputOutput: StaticStructureSchema = [3, n0, _NIAOO, 0, [], []];
export var OperationWithDefaultsInput: StaticStructureSchema = [
  3,
  n0,
  _OWDI,
  0,
  [_d, _cOD, _tLD, _oTLD],
  [() => Defaults, () => ClientOptionalDefaults, 0, 1],
];
export var OperationWithDefaultsOutput: StaticStructureSchema = [
  3,
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
  [0, 2, 64 | 0, 15, 15, 15, 15, 15, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1],
];
export var OperationWithNestedStructureInput: StaticStructureSchema = [3, n0, _OWNSI, 0, [_tL], [() => TopLevel]];
export var OperationWithNestedStructureOutput: StaticStructureSchema = [
  3,
  n0,
  _OWNSO,
  0,
  [_di, _dLi, _dMi],
  [() => Dialog, () => DialogList, () => DialogMap],
];
export var OperationWithRequiredMembersOutput: StaticStructureSchema = [
  3,
  n0,
  _OWRMO,
  0,
  [_rS, _rB, _rL, _rT, _rBe, _rBeq, _rSe, _rI, _rLe, _rF, _rD, _rM],
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0],
];
export var OperationWithRequiredMembersWithDefaultsOutput: StaticStructureSchema = [
  3,
  n0,
  _OWRMWDO,
  0,
  [_rS, _rB, _rL, _rT, _rBe, _rBeq, _rSe, _rI, _rLe, _rF, _rD, _rM, _rE, _rIE],
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1],
];
export var PutWithContentEncodingInput: StaticStructureSchema = [
  3,
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
  ],
];
export var SimpleScalarPropertiesInput: StaticStructureSchema = [3, n0, _SSPI, 0, [_fV, _dV], [1, 1]];
export var SimpleScalarPropertiesOutput: StaticStructureSchema = [3, n0, _SSPO, 0, [_fV, _dV], [1, 1]];
export var TopLevel: StaticStructureSchema = [
  3,
  n0,
  _TL,
  0,
  [_di, _dLi, _dMi],
  [() => Dialog, () => DialogList, () => DialogMap],
];
export var GreetingStruct: StaticStructureSchema = [3, n1, _GS, 0, [_h], [0]];
export var __Unit = "unit" as const;

export var JSONRPC10ServiceException: StaticErrorSchema = [-3, _sm, "JSONRPC10ServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(JSONRPC10ServiceException, __JSONRPC10ServiceException);

export var DialogList: StaticListSchema = [1, n0, _DL, 0, () => Dialog];
export var RequiredStringList = 64 | 0;

export var TestStringList = 64 | 0;

export var StringList = 64 | 0;

export var DialogMap: StaticMapSchema = [2, n0, _DM, 0, 0, () => Dialog];
export var RequiredStringMap = 128 | 0;

export var TestStringMap = 128 | 0;

export var StringMap = 128 | 0;

export var MyUnion: StaticStructureSchema = [
  3,
  n0,
  _MU,
  0,
  [_sV, _bV, _nV, _bVl, _tV, _eV, _iEV, _lV, _mV, _sVt],
  [0, 2, 1, 21, 4, 0, 1, 64 | 0, 128 | 0, () => GreetingStruct],
];
export var ContentTypeParameters: StaticOperationSchema = [
  9,
  n0,
  _CTP,
  0,
  () => ContentTypeParametersInput,
  () => ContentTypeParametersOutput,
];
export var EmptyInputAndEmptyOutput: StaticOperationSchema = [
  9,
  n0,
  _EIAEO,
  0,
  () => EmptyInputAndEmptyOutputInput,
  () => EmptyInputAndEmptyOutputOutput,
];
export var EndpointOperation: StaticOperationSchema = [
  9,
  n0,
  _EO,
  {
    [_end]: ["foo."],
  },
  () => __Unit,
  () => __Unit,
];
export var EndpointWithHostLabelOperation: StaticOperationSchema = [
  9,
  n0,
  _EWHLO,
  {
    [_end]: ["foo.{label}."],
  },
  () => EndpointWithHostLabelOperationInput,
  () => __Unit,
];
export var GreetingWithErrors: StaticOperationSchema = [
  9,
  n0,
  _GWE,
  2,
  () => GreetingWithErrorsInput,
  () => GreetingWithErrorsOutput,
];
export var HostWithPathOperation: StaticOperationSchema = [9, n0, _HWPO, 0, () => __Unit, () => __Unit];
export var JsonUnions: StaticOperationSchema = [9, n0, _JU, 2, () => JsonUnionsInput, () => JsonUnionsOutput];
export var NoInputAndNoOutput: StaticOperationSchema = [9, n0, _NIANO, 0, () => __Unit, () => __Unit];
export var NoInputAndOutput: StaticOperationSchema = [9, n0, _NIAO, 0, () => __Unit, () => NoInputAndOutputOutput];
export var OperationWithDefaults: StaticOperationSchema = [
  9,
  n0,
  _OWD,
  0,
  () => OperationWithDefaultsInput,
  () => OperationWithDefaultsOutput,
];
export var OperationWithNestedStructure: StaticOperationSchema = [
  9,
  n0,
  _OWNS,
  0,
  () => OperationWithNestedStructureInput,
  () => OperationWithNestedStructureOutput,
];
export var OperationWithRequiredMembers: StaticOperationSchema = [
  9,
  n0,
  _OWRM,
  0,
  () => __Unit,
  () => OperationWithRequiredMembersOutput,
];
export var OperationWithRequiredMembersWithDefaults: StaticOperationSchema = [
  9,
  n0,
  _OWRMWD,
  0,
  () => __Unit,
  () => OperationWithRequiredMembersWithDefaultsOutput,
];
export var PutWithContentEncoding: StaticOperationSchema = [
  9,
  n0,
  _PWCE,
  0,
  () => PutWithContentEncodingInput,
  () => __Unit,
];
export var QueryIncompatibleOperation: StaticOperationSchema = [9, n0, _QIO, 2, () => __Unit, () => __Unit];
export var SimpleScalarProperties: StaticOperationSchema = [
  9,
  n0,
  _SSP,
  0,
  () => SimpleScalarPropertiesInput,
  () => SimpleScalarPropertiesOutput,
];
