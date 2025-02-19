const _DT = "DateTime";
const _ES = "EpochSeconds";
const _HD = "HttpDate";
const _IE = "IntegerEnum";
const _TL = "TimestampList";
const _TPB = "TextPlainBlob";
const _n = "number";

// smithy-typescript generated code
import { list as __list, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const aws_protocoltests_sharedRegistry = TypeRegistry.for("aws.protocoltests.shared");
aws_protocoltests_sharedRegistry.startCapture();
export var GreetingStruct = 8 as const;

export var BooleanList = 2 as const;

export var DoubleList = 2 as const;

export var FooEnumList = 2 as const;

export var FooEnumSet = 2 as const;

export var IntegerEnumList = 2 as const;

export var IntegerEnumSet = 2 as const;

export var IntegerList = 2 as const;

export var IntegerSet = 2 as const;

export var NestedStringList = 2 as const;

export var StringList = 2 as const;

export var StringSet = 2 as const;

export var TimestampList = __list(_TL, {}, [() => "time", {}]);
export var FooEnumMap = 4 as const;

export var IntegerEnumMap = 4 as const;

export var StringListMap = 4 as const;

export var StringMap = 4 as const;

aws_protocoltests_sharedRegistry.registerSimpleTypes({
  [_IE]: _n,
});
aws_protocoltests_sharedRegistry.stopCapture();
