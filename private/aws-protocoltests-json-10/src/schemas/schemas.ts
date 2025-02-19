const _B = "Boolean";
const _Bl = "Blob";
const _By = "Byte";
const _CE = "ComplexError";
const _CE_ = "Content-Encoding";
const _CNED = "ComplexNestedErrorData";
const _COD = "ClientOptionalDefaults";
const _CTP = "ContentTypeParameters";
const _CTPI = "ContentTypeParametersInput";
const _CTPO = "ContentTypeParametersOutput";
const _D = "Double";
const _DL = "DialogList";
const _DM = "DialogMap";
const _De = "Defaults";
const _Di = "Dialog";
const _EIAEO = "EmptyInputAndEmptyOutput";
const _EIAEOI = "EmptyInputAndEmptyOutputInput";
const _EIAEOO = "EmptyInputAndEmptyOutputOutput";
const _EO = "EndpointOperation";
const _EWHLO = "EndpointWithHostLabelOperation";
const _EWHLOI = "EndpointWithHostLabelOperationInput";
const _F = "Float";
const _FE = "FooEnum";
const _FEo = "FooError";
const _Fa = "Farewell";
const _Fo = "Foo";
const _Foo = "Fooooo";
const _GS = "GreetingStruct";
const _GWE = "GreetingWithErrors";
const _GWEI = "GreetingWithErrorsInput";
const _GWEO = "GreetingWithErrorsOutput";
const _HWPO = "HostWithPathOperation";
const _I = "Integer";
const _IE = "IntegerEnum";
const _IG = "InvalidGreeting";
const _JU = "JsonUnions";
const _JUI = "JsonUnionsInput";
const _JUO = "JsonUnionsOutput";
const _L = "Long";
const _M = "Message";
const _MU = "MyUnion";
const _N = "Nested";
const _NIANO = "NoInputAndNoOutput";
const _NIAO = "NoInputAndOutput";
const _NIAOO = "NoInputAndOutputOutput";
const _OWD = "OperationWithDefaults";
const _OWDI = "OperationWithDefaultsInput";
const _OWDO = "OperationWithDefaultsOutput";
const _OWNS = "OperationWithNestedStructure";
const _OWNSI = "OperationWithNestedStructureInput";
const _OWNSO = "OperationWithNestedStructureOutput";
const _OWRM = "OperationWithRequiredMembers";
const _OWRMO = "OperationWithRequiredMembersOutput";
const _OWRMWD = "OperationWithRequiredMembersWithDefaults";
const _OWRMWDO = "OperationWithRequiredMembersWithDefaultsOutput";
const _PWCE = "PutWithContentEncoding";
const _PWCEI = "PutWithContentEncodingInput";
const _RE = "RequiredEnum";
const _RIE = "RequiredIntEnum";
const _RSL = "RequiredStringList";
const _RSM = "RequiredStringMap";
const _S = "String";
const _SL = "StringList";
const _SM = "StringMap";
const _SSP = "SimpleScalarProperties";
const _SSPI = "SimpleScalarPropertiesInput";
const _SSPO = "SimpleScalarPropertiesOutput";
const _Sh = "Short";
const _T = "Timestamp";
const _TE = "TestEnum";
const _TIE = "TestIntEnum";
const _TL = "TopLevel";
const _TSL = "TestStringList";
const _TSM = "TestStringMap";
const _bV = "booleanValue";
const _bVl = "blobValue";
const _c = "client";
const _cOD = "clientOptionalDefaults";
const _co = "contents";
const _d = "defaults";
const _dB = "defaultBoolean";
const _dBe = "defaultBlob";
const _dBef = "defaultByte";
const _dD = "defaultDouble";
const _dDB = "defaultDocumentBoolean";
const _dDL = "defaultDocumentList";
const _dDM = "defaultDocumentMap";
const _dDS = "defaultDocumentString";
const _dE = "defaultEnum";
const _dF = "defaultFloat";
const _dI = "defaultInteger";
const _dIE = "defaultIntEnum";
const _dL = "defaultList";
const _dLe = "defaultLong";
const _dLi = "dialogList";
const _dM = "defaultMap";
const _dMi = "dialogMap";
const _dND = "defaultNullDocument";
const _dS = "defaultString";
const _dSe = "defaultShort";
const _dT = "defaultTimestamp";
const _dV = "doubleValue";
const _da = "data";
const _di = "dialog";
const _e = "error";
const _eB = "emptyBlob";
const _eS = "emptyString";
const _eV = "enumValue";
const _en = "encoding";
const _end = "endpoint";
const _f = "farewell";
const _fB = "falseBoolean";
const _fV = "floatValue";
const _g = "greeting";
const _h = "hi";
const _hH = "httpHeader";
const _hL = "hostLabel";
const _iEV = "intEnumValue";
const _jN = "jsonName";
const _l = "language";
const _lV = "listValue";
const _la = "label";
const _m = "member";
const _mV = "mapValue";
const _nV = "numberValue";
const _oTLD = "otherTopLevelDefault";
const _p = "phrase";
const _rB = "requiredBoolean";
const _rBe = "requiredBlob";
const _rBeq = "requiredByte";
const _rD = "requiredDouble";
const _rE = "requiredEnum";
const _rF = "requiredFloat";
const _rI = "requiredInteger";
const _rIE = "requiredIntEnum";
const _rL = "requiredList";
const _rLe = "requiredLong";
const _rM = "requiredMap";
const _rS = "requiredString";
const _rSe = "requiredShort";
const _rT = "requiredTimestamp";
const _s = "server";
const _sV = "stringValue";
const _sVt = "structureValue";
const _tL = "topLevel";
const _tLD = "topLevelDefault";
const _tV = "timestampValue";
const _v = "value";
const _zB = "zeroByte";
const _zD = "zeroDouble";
const _zF = "zeroFloat";
const _zI = "zeroInteger";
const _zL = "zeroLong";
const _zS = "zeroShort";
const n0 = "aws.protocoltests.json10";
const n1 = "aws.protocoltests.shared";

// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ComplexError as __ComplexError,
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import { JSONRPC10ServiceException as __JSONRPC10ServiceException } from "../models/JSONRPC10ServiceException";

/* eslint no-var: 0 */

export var ClientOptionalDefaults = struct(n0, _COD, 0, [_m], [1]);
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
  [_Fo],
  [
    [
      0,
      {
        [_jN]: _Foo,
      },
    ],
  ]
);
export var ContentTypeParametersInput = struct(n0, _CTPI, 0, [_v], [1]);
export var ContentTypeParametersOutput = struct(n0, _CTPO, 0, [], []);
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
export var Dialog = struct(n0, _Di, 0, [_l, _g, _f], [0, 0, () => Farewell]);
export var EmptyInputAndEmptyOutputInput = struct(n0, _EIAEOI, 0, [], []);
export var EmptyInputAndEmptyOutputOutput = struct(n0, _EIAEOO, 0, [], []);
export var EndpointWithHostLabelOperationInput = struct(
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
  ]
);
export var Farewell = struct(n0, _Fa, 0, [_p], [0]);
export var FooError = error(
  n0,
  _FEo,
  {
    [_e]: _s,
  },
  [],
  [],

  __FooError
);
export var GreetingWithErrorsInput = struct(n0, _GWEI, 0, [_g], [0]);
export var GreetingWithErrorsOutput = struct(n0, _GWEO, 0, [_g], [0]);
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
export var JsonUnionsInput = struct(n0, _JUI, 0, [_co], [() => MyUnion]);
export var JsonUnionsOutput = struct(n0, _JUO, 0, [_co], [() => MyUnion]);
export var NoInputAndOutputOutput = struct(n0, _NIAOO, 0, [], []);
export var OperationWithDefaultsInput = struct(
  n0,
  _OWDI,
  0,
  [_d, _cOD, _tLD, _oTLD],
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
export var OperationWithNestedStructureInput = struct(n0, _OWNSI, 0, [_tL], [() => TopLevel]);
export var OperationWithNestedStructureOutput = struct(
  n0,
  _OWNSO,
  0,
  [_di, _dLi, _dMi],
  [() => Dialog, () => DialogList, () => DialogMap]
);
export var OperationWithRequiredMembersOutput = struct(
  n0,
  _OWRMO,
  0,
  [_rS, _rB, _rL, _rT, _rBe, _rBeq, _rSe, _rI, _rLe, _rF, _rD, _rM],
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0]
);
export var OperationWithRequiredMembersWithDefaultsOutput = struct(
  n0,
  _OWRMWDO,
  0,
  [_rS, _rB, _rL, _rT, _rBe, _rBeq, _rSe, _rI, _rLe, _rF, _rD, _rM, _rE, _rIE],
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1]
);
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
export var SimpleScalarPropertiesInput = struct(n0, _SSPI, 0, [_fV, _dV], [1, 1]);
export var SimpleScalarPropertiesOutput = struct(n0, _SSPO, 0, [_fV, _dV], [1, 1]);
export var TopLevel = struct(n0, _TL, 0, [_di, _dLi, _dMi], [() => Dialog, () => DialogList, () => DialogMap]);
export var GreetingStruct = struct(n1, _GS, 0, [_h], [0]);
export var Unit = "unit" as const;

export var JSONRPC10ServiceException = error(
  "awssdkjs.synthetic.aws.protocoltests.json10",
  "JSONRPC10ServiceException",
  0,
  [],
  [],
  __JSONRPC10ServiceException
);
export var DialogList = list(n0, _DL, 0, () => Dialog);
export var RequiredStringList = 64 | 0;

export var TestStringList = 64 | 0;

export var StringList = 64 | 0;

export var DialogMap = map(n0, _DM, 0, 0, () => Dialog);
export var RequiredStringMap = 128 | 0;

export var TestStringMap = 128 | 0;

export var StringMap = 128 | 0;

export var MyUnion = uni(
  n0,
  _MU,
  0,
  [_sV, _bV, _nV, _bVl, _tV, _eV, _iEV, _lV, _mV, _sVt],
  [0, 2, 1, 21, 4, 0, 1, 64 | 0, 128 | 0, () => GreetingStruct]
);
export var ContentTypeParameters = op(
  n0,
  _CTP,
  0,
  () => ContentTypeParametersInput,
  () => ContentTypeParametersOutput
);
export var EmptyInputAndEmptyOutput = op(
  n0,
  _EIAEO,
  0,
  () => EmptyInputAndEmptyOutputInput,
  () => EmptyInputAndEmptyOutputOutput
);
export var EndpointOperation = op(
  n0,
  _EO,
  {
    [_end]: ["foo."],
  },
  () => Unit,
  () => Unit
);
export var EndpointWithHostLabelOperation = op(
  n0,
  _EWHLO,
  {
    [_end]: ["foo.{label}."],
  },
  () => EndpointWithHostLabelOperationInput,
  () => Unit
);
export var GreetingWithErrors = op(
  n0,
  _GWE,
  2,
  () => GreetingWithErrorsInput,
  () => GreetingWithErrorsOutput
);
export var HostWithPathOperation = op(
  n0,
  _HWPO,
  0,
  () => Unit,
  () => Unit
);
export var JsonUnions = op(
  n0,
  _JU,
  2,
  () => JsonUnionsInput,
  () => JsonUnionsOutput
);
export var NoInputAndNoOutput = op(
  n0,
  _NIANO,
  0,
  () => Unit,
  () => Unit
);
export var NoInputAndOutput = op(
  n0,
  _NIAO,
  0,
  () => Unit,
  () => NoInputAndOutputOutput
);
export var OperationWithDefaults = op(
  n0,
  _OWD,
  0,
  () => OperationWithDefaultsInput,
  () => OperationWithDefaultsOutput
);
export var OperationWithNestedStructure = op(
  n0,
  _OWNS,
  0,
  () => OperationWithNestedStructureInput,
  () => OperationWithNestedStructureOutput
);
export var OperationWithRequiredMembers = op(
  n0,
  _OWRM,
  0,
  () => Unit,
  () => OperationWithRequiredMembersOutput
);
export var OperationWithRequiredMembersWithDefaults = op(
  n0,
  _OWRMWD,
  0,
  () => Unit,
  () => OperationWithRequiredMembersWithDefaultsOutput
);
export var PutWithContentEncoding = op(
  n0,
  _PWCE,
  0,
  () => PutWithContentEncodingInput,
  () => Unit
);
export var SimpleScalarProperties = op(
  n0,
  _SSP,
  0,
  () => SimpleScalarPropertiesInput,
  () => SimpleScalarPropertiesOutput
);
