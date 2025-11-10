const _B = "Blob";
const _Bo = "Boolean";
const _C = "Code";
const _CD = "ComplexData";
const _CE = "ComplexError";
const _CE_ = "Content-Encoding";
const _CNED = "ComplexNestedErrorData";
const _CTP = "ContentTypeParameters";
const _CTPI = "ContentTypeParametersInput";
const _CTPO = "ContentTypeParametersOutput";
const _D = "Double";
const _DO = "DatetimeOffsets";
const _DOO = "DatetimeOffsetsOutput";
const _EO = "EmptyOperation";
const _EOn = "EndpointOperation";
const _ES = "EmptyStruct";
const _EWHLO = "EndpointWithHostLabelOperation";
const _EWM = "ErrorWithMembers";
const _EWMr = "ErrorWithoutMembers";
const _F = "Foo";
const _FE = "FooError";
const _FS = "FractionalSeconds";
const _FSO = "FractionalSecondsOutput";
const _Fl = "Float";
const _Fo = "Fooooo";
const _GS = "GreetingStruct";
const _GWE = "GreetingWithErrors";
const _GWEO = "GreetingWithErrorsOutput";
const _HLI = "HostLabelInput";
const _HT = "HttpdateTimestamp";
const _HWPO = "HostWithPathOperation";
const _I = "Integer";
const _IF = "IntegerField";
const _IG = "InvalidGreeting";
const _IT = "Iso8601Timestamp";
const _JE = "JsonEnums";
const _JEIO = "JsonEnumsInputOutput";
const _JIE = "JsonIntEnums";
const _JIEIO = "JsonIntEnumsInputOutput";
const _JU = "JsonUnions";
const _JV = "JsonValue";
const _KS = "KitchenSink";
const _KSO = "KitchenSinkOperation";
const _L = "Long";
const _LF = "ListField";
const _LOKS = "ListOfKitchenSinks";
const _LOL = "ListOfLists";
const _LOLOS = "ListOfListOfStrings";
const _LOMOS = "ListOfMapsOfStrings";
const _LOS = "ListOfStrings";
const _LOSi = "ListOfStructs";
const _M = "Message";
const _MF = "MapField";
const _MOKS = "MapOfKitchenSinks";
const _MOLOS = "MapOfListsOfStrings";
const _MOM = "MapOfMaps";
const _MOMOS = "MapOfMapOfStrings";
const _MOS = "MapOfStrings";
const _MOSa = "MapOfStructs";
const _MU = "MyUnion";
const _N = "Nested";
const _NO = "NullOperation";
const _NOIO = "NullOperationInputOutput";
const _OWOIO = "OperationWithOptionalInputOutput";
const _OWOIOI = "OperationWithOptionalInputOutputInput";
const _OWOIOO = "OperationWithOptionalInputOutputOutput";
const _PAGID = "PutAndGetInlineDocuments";
const _PAGIDIO = "PutAndGetInlineDocumentsInputOutput";
const _PWCE = "PutWithContentEncoding";
const _PWCEI = "PutWithContentEncodingInput";
const _RL = "RecursiveList";
const _RM = "RecursiveMap";
const _RMe = "RenamedMember";
const _RS = "RecursiveStruct";
const _S = "String";
const _SF = "StringField";
const _SNO = "SparseNullsOperation";
const _SNOIO = "SparseNullsOperationInputOutput";
const _SS = "SimpleStruct";
const _SSL = "SparseStringList";
const _SSM = "SparseStringMap";
const _SSP = "SimpleScalarProperties";
const _SSPIO = "SimpleScalarPropertiesInputOutput";
const _SWJN = "StructWithJsonName";
const _T = "Timestamp";
const _TL = "TopLevel";
const _UIO = "UnionInputOutput";
const _UT = "UnixTimestamp";
const _V = "Value";
const _a = "application/json";
const _bV = "booleanValue";
const _bVl = "blobValue";
const _c = "client";
const _co = "contents";
const _d = "datetime";
const _dV = "doubleValue";
const _da = "data";
const _e = "error";
const _eV = "enumValue";
const _en = "encoding";
const _end = "endpoint";
const _fE = "fooEnum1";
const _fEL = "fooEnumList";
const _fEM = "fooEnumMap";
const _fES = "fooEnumSet";
const _fEo = "fooEnum2";
const _fEoo = "fooEnum3";
const _fV = "floatValue";
const _g = "greeting";
const _h = "hi";
const _hH = "httpHeader";
const _hL = "hostLabel";
const _iD = "inlineDocument";
const _iE = "intEnum1";
const _iEL = "intEnumList";
const _iEM = "intEnumMap";
const _iES = "intEnumSet";
const _iEn = "intEnum2";
const _iEnt = "intEnum3";
const _jN = "jsonName";
const _l = "label";
const _lV = "listValue";
const _mT = "mediaType";
const _mV = "mapValue";
const _nV = "numberValue";
const _s = "server";
const _sSL = "sparseStringList";
const _sSM = "sparseStringMap";
const _sV = "stringValue";
const _sVt = "structureValue";
const _sm = "smithy.ts.sdk.synthetic.aws.protocoltests.json";
const _sp = "sparse";
const _st = "string";
const _tV = "timestampValue";
const _v = "value";
const n0 = "aws.protocoltests.json";
const n1 = "aws.protocoltests.shared";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
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
  {
    [_mT]: _a,
  },
  0,
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
    [1, n0, _LOLOS, 0, 64 | 0],
    [1, n0, _LOMOS, 0, 128 | 0],
    64 | 0,
    () => ListOfStructs,
    1,
    [2, n0, _MOLOS, 0, 0, 64 | 0],
    [2, n0, _MOMOS, 0, 0, 128 | 0],
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
export var __Unit = "unit" as const;

export var JsonProtocolServiceException: StaticErrorSchema = [-3, _sm, "JsonProtocolServiceException", 0, [], []];
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
export var DatetimeOffsets: StaticOperationSchema = [9, n0, _DO, 0, () => __Unit, () => DatetimeOffsetsOutput];
export var EmptyOperation: StaticOperationSchema = [9, n0, _EO, 0, () => __Unit, () => __Unit];
export var EndpointOperation: StaticOperationSchema = [
  9,
  n0,
  _EOn,
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
  () => HostLabelInput,
  () => __Unit,
];
export var FractionalSeconds: StaticOperationSchema = [9, n0, _FS, 0, () => __Unit, () => FractionalSecondsOutput];
export var GreetingWithErrors: StaticOperationSchema = [9, n0, _GWE, 2, () => __Unit, () => GreetingWithErrorsOutput];
export var HostWithPathOperation: StaticOperationSchema = [9, n0, _HWPO, 0, () => __Unit, () => __Unit];
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
  () => __Unit,
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
