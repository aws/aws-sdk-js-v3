const _BL = "BlobList";
const _DT = "DateTime";
const _IE = "IntegerEnum";
const _SSL = "SparseStringList";
const _SSM = "SparseStringMap";
const _TL = "TimestampList";
const _n = "number";
const _s = "sparse";

// smithy-typescript generated code
import { list as __list, map as __map, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const smithy_protocoltests_sharedRegistry = TypeRegistry.for("smithy.protocoltests.shared");
smithy_protocoltests_sharedRegistry.startCapture();
export var GreetingStruct = 8 as const;

export var BlobList = __list(_BL, {}, [() => "blob", {}]);
export var BooleanList = 2 as const;

export var FooEnumList = 2 as const;

export var IntegerEnumList = 2 as const;

export var IntegerList = 2 as const;

export var NestedStringList = 2 as const;

export var SparseStringList = __list(
  _SSL,
  {
    [_s]: 1,
  } /* String */
);
export var StringList = 2 as const;

export var StringSet = 2 as const;

export var TimestampList = __list(_TL, {}, [() => "time", {}]);
export var SparseStringMap = __map(
  _SSM,
  {
    [_s]: 1,
  } /* String */
);
smithy_protocoltests_sharedRegistry.registerSimpleTypes({
  [_IE]: _n,
});
smithy_protocoltests_sharedRegistry.stopCapture();
