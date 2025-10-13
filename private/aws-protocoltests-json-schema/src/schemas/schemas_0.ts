export const _B = "Blob";
export const _Bo = "Boolean";
export const _C = "Code";
export const _CD = "ComplexData";
export const _CE = "ComplexError";
export const _CE_ = "Content-Encoding";
export const _CNED = "ComplexNestedErrorData";
export const _CTP = "ContentTypeParameters";
export const _CTPI = "ContentTypeParametersInput";
export const _CTPO = "ContentTypeParametersOutput";
export const _D = "Double";
export const _DO = "DatetimeOffsets";
export const _DOO = "DatetimeOffsetsOutput";
export const _EO = "EmptyOperation";
export const _EOn = "EndpointOperation";
export const _ES = "EmptyStruct";
export const _EWHLO = "EndpointWithHostLabelOperation";
export const _EWM = "ErrorWithMembers";
export const _EWMr = "ErrorWithoutMembers";
export const _F = "Foo";
export const _FE = "FooError";
export const _FS = "FractionalSeconds";
export const _FSO = "FractionalSecondsOutput";
export const _Fl = "Float";
export const _Fo = "Fooooo";
export const _GS = "GreetingStruct";
export const _GWE = "GreetingWithErrors";
export const _GWEO = "GreetingWithErrorsOutput";
export const _HLI = "HostLabelInput";
export const _HT = "HttpdateTimestamp";
export const _HWPO = "HostWithPathOperation";
export const _I = "Integer";
export const _IF = "IntegerField";
export const _IG = "InvalidGreeting";
export const _IT = "Iso8601Timestamp";
export const _JE = "JsonEnums";
export const _JEIO = "JsonEnumsInputOutput";
export const _JIE = "JsonIntEnums";
export const _JIEIO = "JsonIntEnumsInputOutput";
export const _JU = "JsonUnions";
export const _JV = "JsonValue";
export const _KS = "KitchenSink";
export const _KSO = "KitchenSinkOperation";
export const _L = "Long";
export const _LF = "ListField";
export const _LOKS = "ListOfKitchenSinks";
export const _LOL = "ListOfLists";
export const _LOLOS = "ListOfListOfStrings";
export const _LOMOS = "ListOfMapsOfStrings";
export const _LOS = "ListOfStrings";
export const _LOSi = "ListOfStructs";
export const _M = "Message";
export const _MF = "MapField";
export const _MOKS = "MapOfKitchenSinks";
export const _MOLOS = "MapOfListsOfStrings";
export const _MOM = "MapOfMaps";
export const _MOMOS = "MapOfMapOfStrings";
export const _MOS = "MapOfStrings";
export const _MOSa = "MapOfStructs";
export const _MU = "MyUnion";
export const _N = "Nested";
export const _NO = "NullOperation";
export const _NOIO = "NullOperationInputOutput";
export const _OWOIO = "OperationWithOptionalInputOutput";
export const _OWOIOI = "OperationWithOptionalInputOutputInput";
export const _OWOIOO = "OperationWithOptionalInputOutputOutput";
export const _PAGID = "PutAndGetInlineDocuments";
export const _PAGIDIO = "PutAndGetInlineDocumentsInputOutput";
export const _PWCE = "PutWithContentEncoding";
export const _PWCEI = "PutWithContentEncodingInput";
export const _RL = "RecursiveList";
export const _RM = "RecursiveMap";
export const _RMe = "RenamedMember";
export const _RS = "RecursiveStruct";
export const _S = "String";
export const _SF = "StringField";
export const _SNO = "SparseNullsOperation";
export const _SNOIO = "SparseNullsOperationInputOutput";
export const _SS = "SimpleStruct";
export const _SSL = "SparseStringList";
export const _SSM = "SparseStringMap";
export const _SSP = "SimpleScalarProperties";
export const _SSPIO = "SimpleScalarPropertiesInputOutput";
export const _SWJN = "StructWithJsonName";
export const _T = "Timestamp";
export const _TL = "TopLevel";
export const _UIO = "UnionInputOutput";
export const _UT = "UnixTimestamp";
export const _V = "Value";
export const _a = "application/json";
export const _bV = "booleanValue";
export const _bVl = "blobValue";
export const _c = "client";
export const _co = "contents";
export const _d = "datetime";
export const _dV = "doubleValue";
export const _da = "data";
export const _e = "error";
export const _eV = "enumValue";
export const _en = "encoding";
export const _end = "endpoint";
export const _fE = "fooEnum1";
export const _fEL = "fooEnumList";
export const _fEM = "fooEnumMap";
export const _fES = "fooEnumSet";
export const _fEo = "fooEnum2";
export const _fEoo = "fooEnum3";
export const _fV = "floatValue";
export const _g = "greeting";
export const _h = "hi";
export const _hH = "httpHeader";
export const _hL = "hostLabel";
export const _iD = "inlineDocument";
export const _iE = "intEnum1";
export const _iEL = "intEnumList";
export const _iEM = "intEnumMap";
export const _iES = "intEnumSet";
export const _iEn = "intEnum2";
export const _iEnt = "intEnum3";
export const _jN = "jsonName";
export const _l = "label";
export const _lV = "listValue";
export const _mT = "mediaType";
export const _mV = "mapValue";
export const _nV = "numberValue";
export const _s = "server";
export const _sSL = "sparseStringList";
export const _sSM = "sparseStringMap";
export const _sV = "stringValue";
export const _sVt = "structureValue";
export const _sm = "smithy.ts.sdk.synthetic.aws.protocoltests.json";
export const _sp = "sparse";
export const _st = "string";
export const _tV = "timestampValue";
export const _v = "value";
export const n0 = "aws.protocoltests.json";
export const n1 = "aws.protocoltests.shared";

// smithy-typescript generated code
import { error, TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ComplexError as __ComplexError,
  ErrorWithMembers as __ErrorWithMembers,
  ErrorWithoutMembers as __ErrorWithoutMembers,
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import { JsonProtocolServiceException as __JsonProtocolServiceException } from "../models/JsonProtocolServiceException";

/* eslint no-var: 0 */

export var JsonValue: StaticSimpleSchema = [
  0,
  n0,
  _JV,
  0,
  {
    [_mT]: _a,
  },
];
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
export var DatetimeOffsetsOutput: StaticStructureSchema = [3, n0, _DOO, 0, [_d], [5]];
export var EmptyStruct: StaticStructureSchema = [3, n0, _ES, 0, [], []];
export var ErrorWithMembers: StaticErrorSchema = [
  -3,
  n0,
  _EWM,
  {
    [_e]: _c,
  },
  [_C, _CD, _IF, _LF, _MF, _M, _SF],
  [0, [() => KitchenSink, 0], 1, 64 | 0, 128 | 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ErrorWithMembers, __ErrorWithMembers);

export var ErrorWithoutMembers: StaticErrorSchema = [
  -3,
  n0,
  _EWMr,
  {
    [_e]: _s,
  },
  [],
  [],
];
TypeRegistry.for(n0).registerError(ErrorWithoutMembers, __ErrorWithoutMembers);

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

export var FractionalSecondsOutput: StaticStructureSchema = [3, n0, _FSO, 0, [_d], [5]];
export var GreetingWithErrorsOutput: StaticStructureSchema = [3, n0, _GWEO, 0, [_g], [0]];
export var HostLabelInput: StaticStructureSchema = [
  3,
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
  ],
];
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

export var JsonEnumsInputOutput: StaticStructureSchema = [
  3,
  n0,
  _JEIO,
  0,
  [_fE, _fEo, _fEoo, _fEL, _fES, _fEM],
  [0, 0, 0, 64 | 0, 64 | 0, 128 | 0],
];
export var JsonIntEnumsInputOutput: StaticStructureSchema = [
  3,
  n0,
  _JIEIO,
  0,
  [_iE, _iEn, _iEnt, _iEL, _iES, _iEM],
  [1, 1, 1, 64 | 1, 64 | 1, 128 | 1],
];
export var KitchenSink: StaticStructureSchema = [
  3,
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
    [1, n0, _LOLOS, 0, 64 | 0] as StaticListSchema,
    [1, n0, _LOMOS, 0, 128 | 0] as StaticListSchema,
    64 | 0,
    () => ListOfStructs,
    1,
    [2, n0, _MOLOS, 0, 64 | 0, 64 | 0] as StaticMapSchema,
    [2, n0, _MOMOS, 0, 0, 128 | 0, 128 | 0] as StaticMapSchema,
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
  ],
];
export var NullOperationInputOutput: StaticStructureSchema = [3, n0, _NOIO, 0, [_st], [0]];
export var OperationWithOptionalInputOutputInput: StaticStructureSchema = [3, n0, _OWOIOI, 0, [_V], [0]];
export var OperationWithOptionalInputOutputOutput: StaticStructureSchema = [3, n0, _OWOIOO, 0, [_V], [0]];
export var PutAndGetInlineDocumentsInputOutput: StaticStructureSchema = [3, n0, _PAGIDIO, 0, [_iD], [15]];
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
export var SimpleScalarPropertiesInputOutput: StaticStructureSchema = [3, n0, _SSPIO, 0, [_fV, _dV], [1, 1]];
export var SimpleStruct: StaticStructureSchema = [3, n0, _SS, 0, [_V], [0]];
export var SparseNullsOperationInputOutput: StaticStructureSchema = [
  3,
  n0,
  _SNOIO,
  0,
  [_sSL, _sSM],
  [
    [() => SparseStringList, 0],
    [() => SparseStringMap, 0],
  ],
];
export var StructWithJsonName: StaticStructureSchema = [
  3,
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
  ],
];
export var UnionInputOutput: StaticStructureSchema = [3, n0, _UIO, 0, [_co], [() => MyUnion]];
export var GreetingStruct: StaticStructureSchema = [3, n1, _GS, 0, [_h], [0]];
export var Unit = "unit" as const;

export var JsonProtocolServiceException = error(_sm, "JsonProtocolServiceException", 0, [], [], null);
TypeRegistry.for(_sm).registerError(JsonProtocolServiceException, __JsonProtocolServiceException);

export var ListOfKitchenSinks: StaticListSchema = [1, n0, _LOKS, 0, [() => KitchenSink, 0]];
export var ListOfListOfStrings: StaticListSchema = [1, n0, _LOLOS, 0, 64 | 0];
export var ListOfMapsOfStrings: StaticListSchema = [1, n0, _LOMOS, 0, 128 | 0];
export var ListOfStrings = 64 | 0;

export var ListOfStructs: StaticListSchema = [1, n0, _LOSi, 0, () => SimpleStruct];
export var FooEnumList = 64 | 0;

export var FooEnumSet = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerEnumSet = 64 | 1;

export var SparseStringList: StaticListSchema = [
  1,
  n1,
  _SSL,
  {
    [_sp]: 1,
  },
  0,
];
export var StringList = 64 | 0;

export var MapOfKitchenSinks: StaticMapSchema = [2, n0, _MOKS, 0, [0, 0], [() => KitchenSink, 0]];
export var MapOfListsOfStrings: StaticMapSchema = [2, n0, _MOLOS, 0, 0, 64 | 0];
export var MapOfMapOfStrings: StaticMapSchema = [2, n0, _MOMOS, 0, 0, 128 | 0];
export var MapOfStrings = 128 | 0;

export var MapOfStructs: StaticMapSchema = [2, n0, _MOSa, 0, 0, () => SimpleStruct];
export var FooEnumMap = 128 | 0;

export var IntegerEnumMap = 128 | 1;

export var SparseStringMap: StaticMapSchema = [
  2,
  n1,
  _SSM,
  {
    [_sp]: 1,
  },
  0,
  0,
];
export var StringMap = 128 | 0;

export var MyUnion: StaticStructureSchema = [
  3,
  n0,
  _MU,
  0,
  [_sV, _bV, _nV, _bVl, _tV, _eV, _lV, _mV, _sVt],
  [0, 2, 1, 21, 4, 0, 64 | 0, 128 | 0, () => GreetingStruct],
];
export var ContentTypeParameters: StaticOperationSchema = [
  9,
  n0,
  _CTP,
  0,
  () => ContentTypeParametersInput,
  () => ContentTypeParametersOutput,
];
export var DatetimeOffsets: StaticOperationSchema = [9, n0, _DO, 0, () => Unit, () => DatetimeOffsetsOutput];
export var EmptyOperation: StaticOperationSchema = [9, n0, _EO, 0, () => Unit, () => Unit];
export var EndpointOperation: StaticOperationSchema = [
  9,
  n0,
  _EOn,
  {
    [_end]: ["foo."],
  },
  () => Unit,
  () => Unit,
];
export var EndpointWithHostLabelOperation: StaticOperationSchema = [
  9,
  n0,
  _EWHLO,
  {
    [_end]: ["foo.{label}."],
  },
  () => HostLabelInput,
  () => Unit,
];
export var FractionalSeconds: StaticOperationSchema = [9, n0, _FS, 0, () => Unit, () => FractionalSecondsOutput];
export var GreetingWithErrors: StaticOperationSchema = [9, n0, _GWE, 2, () => Unit, () => GreetingWithErrorsOutput];
export var HostWithPathOperation: StaticOperationSchema = [9, n0, _HWPO, 0, () => Unit, () => Unit];
export var JsonEnums: StaticOperationSchema = [9, n0, _JE, 2, () => JsonEnumsInputOutput, () => JsonEnumsInputOutput];
export var JsonIntEnums: StaticOperationSchema = [
  9,
  n0,
  _JIE,
  2,
  () => JsonIntEnumsInputOutput,
  () => JsonIntEnumsInputOutput,
];
export var JsonUnions: StaticOperationSchema = [9, n0, _JU, 2, () => UnionInputOutput, () => UnionInputOutput];
export var KitchenSinkOperation: StaticOperationSchema = [9, n0, _KSO, 0, () => KitchenSink, () => KitchenSink];
export var NullOperation: StaticOperationSchema = [
  9,
  n0,
  _NO,
  0,
  () => NullOperationInputOutput,
  () => NullOperationInputOutput,
];
export var OperationWithOptionalInputOutput: StaticOperationSchema = [
  9,
  n0,
  _OWOIO,
  0,
  () => OperationWithOptionalInputOutputInput,
  () => OperationWithOptionalInputOutputOutput,
];
export var PutAndGetInlineDocuments: StaticOperationSchema = [
  9,
  n0,
  _PAGID,
  0,
  () => PutAndGetInlineDocumentsInputOutput,
  () => PutAndGetInlineDocumentsInputOutput,
];
export var PutWithContentEncoding: StaticOperationSchema = [
  9,
  n0,
  _PWCE,
  0,
  () => PutWithContentEncodingInput,
  () => Unit,
];
export var SimpleScalarProperties: StaticOperationSchema = [
  9,
  n0,
  _SSP,
  0,
  () => SimpleScalarPropertiesInputOutput,
  () => SimpleScalarPropertiesInputOutput,
];
export var SparseNullsOperation: StaticOperationSchema = [
  9,
  n0,
  _SNO,
  0,
  () => SparseNullsOperationInputOutput,
  () => SparseNullsOperationInputOutput,
];
