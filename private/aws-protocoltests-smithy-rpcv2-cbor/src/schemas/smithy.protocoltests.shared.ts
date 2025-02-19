const _BL = "BlobList";
const _DT = "DateTime";
const _SSL = "SparseStringList";
const _SSM = "SparseStringMap";
const _TL = "TimestampList";
const _s = "sparse";

// smithy-typescript generated code
import { list as __list, map as __map, TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const smithy_protocoltests_sharedRegistry = TypeRegistry.for("smithy.protocoltests.shared");
smithy_protocoltests_sharedRegistry.startCapture();
export var GreetingStruct: undefined;

export var BlobList = __list(_BL, {}, [() => "blob", {}]);
export var BooleanList: undefined;

export var FooEnumList: undefined;

export var IntegerEnumList: undefined;

export var IntegerList: undefined;

export var NestedStringList: undefined;

export var SparseStringList = __list(
  _SSL,
  {
    [_s]: 1,
  } /* String */
);
export var StringList: undefined;

export var StringSet: undefined;

export var TimestampList = __list(_TL, {}, [() => "time", {}]);
export var SparseStringMap = __map(
  _SSM,
  {
    [_s]: 1,
  } /* String */
);
smithy_protocoltests_sharedRegistry.stopCapture();
