const _DT = "DateTime";
const _ES = "EpochSeconds";
const _HD = "HttpDate";
const _TL = "TimestampList";
const _TPB = "TextPlainBlob";

// smithy-typescript generated code
import { list as __list, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const aws_protocoltests_sharedRegistry = TypeRegistry.for("aws.protocoltests.shared");
aws_protocoltests_sharedRegistry.startCapture();
export var GreetingStruct: undefined;

export var BooleanList: undefined;

export var DoubleList: undefined;

export var FooEnumList: undefined;

export var FooEnumSet: undefined;

export var IntegerEnumList: undefined;

export var IntegerEnumSet: undefined;

export var IntegerList: undefined;

export var IntegerSet: undefined;

export var NestedStringList: undefined;

export var StringList: undefined;

export var StringSet: undefined;

export var TimestampList = __list(_TL, {}, [() => "time", {}]);
export var FooEnumMap: undefined;

export var IntegerEnumMap: undefined;

export var StringListMap: undefined;

export var StringMap: undefined;

aws_protocoltests_sharedRegistry.stopCapture();
