const _BL = "BooleanList";
const _DL = "DoubleList";
const _DT = "DateTime";
const _ES = "EpochSeconds";
const _FE = "FooEnum";
const _FEL = "FooEnumList";
const _FEM = "FooEnumMap";
const _FES = "FooEnumSet";
const _GS = "GreetingStruct";
const _HD = "HttpDate";
const _IE = "IntegerEnum";
const _IEL = "IntegerEnumList";
const _IEM = "IntegerEnumMap";
const _IES = "IntegerEnumSet";
const _IL = "IntegerList";
const _IS = "IntegerSet";
const _NSL = "NestedStringList";
const _SL = "StringList";
const _SLM = "StringListMap";
const _SM = "StringMap";
const _SS = "StringSet";
const _TL = "TimestampList";
const _TPB = "TextPlainBlob";
const _h = "hi";

// smithy-typescript generated code
import { list as __list, map as __map, struct as __struct, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const aws_protocoltests_sharedRegistry = TypeRegistry.for("aws.protocoltests.shared");
aws_protocoltests_sharedRegistry.startCapture();
export var GreetingStruct = __struct(_GS, {}, [_h], [0]);
export var BooleanList = 64 | 2;

export var DoubleList = 64 | 1;

export var FooEnumList = 64 | 0;

export var FooEnumSet = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerEnumSet = 64 | 1;

export var IntegerList = 64 | 1;

export var IntegerSet = 64 | 1;

export var NestedStringList = __list(_NSL, {}, 64 | 0);
export var StringList = 64 | 0;

export var StringSet = 64 | 0;

export var TimestampList = 64 | 4;

export var FooEnumMap = 128 | 0;

export var IntegerEnumMap = 128 | 1;

export var StringListMap = __map(_SLM, {}, 64 | 0);
export var StringMap = 128 | 0;

aws_protocoltests_sharedRegistry.stopCapture();
