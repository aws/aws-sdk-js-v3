const _BL = "BlobList";
const _BLo = "BooleanList";
const _DT = "DateTime";
const _FE = "FooEnum";
const _FEL = "FooEnumList";
const _GS = "GreetingStruct";
const _IE = "IntegerEnum";
const _IEL = "IntegerEnumList";
const _IL = "IntegerList";
const _NSL = "NestedStringList";
const _SL = "StringList";
const _SS = "StringSet";
const _SSL = "SparseStringList";
const _SSM = "SparseStringMap";
const _TL = "TimestampList";
const _h = "hi";
const _s = "sparse";

// smithy-typescript generated code
import { list as __list, map as __map, struct as __struct, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const smithy_protocoltests_sharedRegistry = TypeRegistry.for("smithy.protocoltests.shared");
smithy_protocoltests_sharedRegistry.startCapture();
export var GreetingStruct = __struct(_GS, {}, [_h], [0]);
export var BlobList = 64 | 21;

export var BooleanList = 64 | 2;

export var FooEnumList = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerList = 64 | 1;

export var NestedStringList = __list(_NSL, {}, 64 | 0);
export var SparseStringList = __list(
  _SSL,
  {
    [_s]: 1,
  },
  0
);
export var StringList = 64 | 0;

export var StringSet = 64 | 0;

export var TimestampList = 64 | 4;

export var SparseStringMap = __map(
  _SSM,
  {
    [_s]: 1,
  },
  0
);
smithy_protocoltests_sharedRegistry.stopCapture();
