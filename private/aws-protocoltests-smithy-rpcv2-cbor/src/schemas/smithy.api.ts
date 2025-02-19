const _B = "Blob";
const _Bo = "Boolean";
const _By = "Byte";
const _D = "Double";
const _F = "Float";
const _I = "Integer";
const _L = "Long";
const _S = "Short";
const _T = "Timestamp";
const _b = "boolean";
const _n = "number";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";

/* eslint no-var: 0 */

export const smithy_apiRegistry = TypeRegistry.for("smithy.api");
smithy_apiRegistry.startCapture();
export var Unit = "unit";

smithy_apiRegistry.registerSimpleTypes({
  [_Bo]: _b,

  [_By]: _n,

  [_D]: _n,

  [_F]: _n,

  [_I]: _n,

  [_L]: _n,

  [_S]: _n,
});
smithy_apiRegistry.stopCapture();
