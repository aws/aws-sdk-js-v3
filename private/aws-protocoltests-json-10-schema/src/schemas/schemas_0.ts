const _CE = "ComplexError";
const _CE_ = "Content-Encoding";
const _CNED = "ComplexNestedErrorData";
const _COD = "ClientOptionalDefaults";
const _CTP = "ContentTypeParameters";
const _CTPI = "ContentTypeParametersInput";
const _CTPO = "ContentTypeParametersOutput";
const _D = "Defaults";
const _DL = "DialogList";
const _DM = "DialogMap";
const _Di = "Dialog";
const _EIAEO = "EmptyInputAndEmptyOutput";
const _EIAEOI = "EmptyInputAndEmptyOutputInput";
const _EIAEOO = "EmptyInputAndEmptyOutputOutput";
const _EO = "EndpointOperation";
const _EWHLO = "EndpointWithHostLabelOperation";
const _EWHLOI = "EndpointWithHostLabelOperationInput";
const _F = "Foo";
const _FE = "FooError";
const _Fa = "Farewell";
const _Fo = "Fooooo";
const _GS = "GreetingStruct";
const _GWE = "GreetingWithErrors";
const _GWEI = "GreetingWithErrorsInput";
const _GWEO = "GreetingWithErrorsOutput";
const _HWPO = "HostWithPathOperation";
const _IG = "InvalidGreeting";
const _JU = "JsonUnions";
const _JUI = "JsonUnionsInput";
const _JUO = "JsonUnionsOutput";
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
const _QIO = "QueryIncompatibleOperation";
const _SSP = "SimpleScalarProperties";
const _SSPI = "SimpleScalarPropertiesInput";
const _SSPO = "SimpleScalarPropertiesOutput";
const _TL = "TopLevel";
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
const _sm = "smithy.ts.sdk.synthetic.aws.protocoltests.json10";
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
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/errors";
import { JSONRPC10ServiceException as __JSONRPC10ServiceException } from "../models/JSONRPC10ServiceException";

/* eslint no-var: 0 */
export var ClientOptionalDefaults: StaticStructureSchema = [3, n0, _COD, 0, [_m], [1]];
export var ComplexError: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  { [_e]: _c },
  [_TL, _N],
  [0, [() => ComplexNestedErrorData, 0]],
];
TypeRegistry.for(n0).registerError(ComplexError, __ComplexError);
export var ComplexNestedErrorData: StaticStructureSchema = [3, n0, _CNED, 0, [_F], [[0, { [_jN]: _Fo }]]];
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
export var EndpointWithHostLabelOperationInput: StaticStructureSchema = [3, n0, _EWHLOI, 0, [_la], [[0, { [_hL]: 1 }]]];
export var Farewell: StaticStructureSchema = [3, n0, _Fa, 0, [_p], [0]];
export var FooError: StaticErrorSchema = [-3, n0, _FE, { [_e]: _s }, [], []];
TypeRegistry.for(n0).registerError(FooError, __FooError);
export var GreetingWithErrorsInput: StaticStructureSchema = [3, n0, _GWEI, 0, [_g], [0]];
export var GreetingWithErrorsOutput: StaticStructureSchema = [3, n0, _GWEO, 0, [_g], [0]];
export var InvalidGreeting: StaticErrorSchema = [-3, n0, _IG, { [_e]: _c }, [_M], [0]];
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
  [[0, { [_hH]: _CE_ }], 0],
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
export var EndpointOperation: StaticOperationSchema = [9, n0, _EO, { [_end]: ["foo."] }, () => __Unit, () => __Unit];
export var EndpointWithHostLabelOperation: StaticOperationSchema = [
  9,
  n0,
  _EWHLO,
  { [_end]: ["foo.{label}."] },
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
