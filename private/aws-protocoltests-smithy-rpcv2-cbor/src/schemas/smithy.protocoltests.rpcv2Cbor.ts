const _CE = "ComplexError";
const _D = "Defaults";
const _EIO = "EmptyInputOutput";
const _F = "Float16";
const _FS = "FractionalSeconds";
const _FSO = "FractionalSecondsOutput";
const _GWE = "GreetingWithErrors";
const _IG = "InvalidGreeting";
const _NIO = "NoInputOutput";
const _OIO = "OptionalInputOutput";
const _OWD = "OperationWithDefaults";
const _OWDI = "OperationWithDefaultsInput";
const _OWDO = "OperationWithDefaultsOutput";
const _RS = "RecursiveShapes";
const _RSIO = "RecursiveShapesInputOutput";
const _RSION = "RecursiveShapesInputOutputNested1";
const _RSIONe = "RecursiveShapesInputOutputNested2";
const _RVCDM = "RpcV2CborDenseMaps";
const _RVCL = "RpcV2CborLists";
const _RVCLIO = "RpcV2CborListInputOutput";
const _RVCSM = "RpcV2CborSparseMaps";
const _RVCSMIO = "RpcV2CborSparseMapsInputOutput";
const _SBM = "SparseBooleanMap";
const _SNM = "SparseNumberMap";
const _SNO = "SparseNullsOperation";
const _SNOIO = "SparseNullsOperationInputOutput";
const _SSM = "SparseSetMap";
const _SSMp = "SparseStructMap";
const _SSP = "SimpleScalarProperties";
const _SSS = "SimpleScalarStructure";
const _TIE = "TestIntEnum";
const _bL = "blobList";
const _bV = "blobValue";
const _c = "client";
const _d = "datetime";
const _dB = "defaultBlob";
const _dT = "defaultTimestamp";
const _de = "defaults";
const _e = "error";
const _eB = "emptyBlob";
const _n = "nested";
const _nu = "number";
const _rM = "recursiveMember";
const _s = "sparse";
const _sBM = "sparseBooleanMap";
const _sNM = "sparseNumberMap";
const _sSL = "sparseStringList";
const _sSM = "sparseStructMap";
const _sSMp = "sparseStringMap";
const _sSMpa = "sparseSetMap";
const _tL = "timestampList";

// smithy-typescript generated code
import { error as __error, map as __map, op as __op, struct as __struct, TypeRegistry } from "@smithy/core/schema";

import { ComplexError as __ComplexError, InvalidGreeting as __InvalidGreeting } from "../models/index";
import { Unit } from "./smithy.api";
import { BlobList, SparseStringList, SparseStringMap, TimestampList } from "./smithy.protocoltests.shared";

/* eslint no-var: 0 */

export const smithy_protocoltests_rpcv2CborRegistry = TypeRegistry.for("smithy.protocoltests.rpcv2Cbor");
smithy_protocoltests_rpcv2CborRegistry.startCapture();
export var ClientOptionalDefaults = 8 as const;

export var ComplexError = __error(
  _CE,
  {
    [_e]: _c,
  },
  {},

  __ComplexError
);
export var ComplexNestedErrorData = 8 as const;

export var Defaults = __struct(
  _D,
  {},
  {
    [_dT]: [() => "time", {}],
    [_dB]: [() => "blob", {}],
    [_eB]: [() => "blob", {}],
  }
);
export var EmptyStructure = 8 as const;

export var Float16Output = 8 as const;

export var FractionalSecondsOutput = __struct(
  _FSO,
  {},
  {
    [_d]: [() => "date-time", {}],
  }
);
export var GreetingWithErrorsOutput = 8 as const;

export var InvalidGreeting = __error(
  _IG,
  {
    [_e]: _c,
  },
  {},

  __InvalidGreeting
);
export var OperationWithDefaultsInput = __struct(
  _OWDI,
  {},
  {
    [_de]: [() => Defaults, {}],
  }
);
export var OperationWithDefaultsOutput = __struct(
  _OWDO,
  {},
  {
    [_dT]: [() => "time", {}],
    [_dB]: [() => "blob", {}],
    [_eB]: [() => "blob", {}],
  }
);
export var RecursiveShapesInputOutput = __struct(
  _RSIO,
  {},
  {
    [_n]: [() => RecursiveShapesInputOutputNested1, {}],
  }
);
export var RecursiveShapesInputOutputNested1 = __struct(
  _RSION,
  {},
  {
    [_n]: [() => RecursiveShapesInputOutputNested2, {}],
  }
);
export var RecursiveShapesInputOutputNested2 = __struct(
  _RSIONe,
  {},
  {
    [_rM]: [() => RecursiveShapesInputOutputNested1, {}],
  }
);
export var RpcV2CborDenseMapsInputOutput = 8 as const;

export var RpcV2CborListInputOutput = __struct(
  _RVCLIO,
  {},
  {
    [_tL]: [() => TimestampList, {}],
    [_bL]: [() => BlobList, {}],
  }
);
export var RpcV2CborSparseMapsInputOutput = __struct(
  _RVCSMIO,
  {},
  {
    [_sSM]: [() => SparseStructMap, {}],
    [_sNM]: [() => SparseNumberMap, {}],
    [_sBM]: [() => SparseBooleanMap, {}],
    [_sSMp]: [() => SparseStringMap, {}],
    [_sSMpa]: [() => SparseSetMap, {}],
  }
);
export var SimpleScalarStructure = __struct(
  _SSS,
  {},
  {
    [_bV]: [() => "blob", {}],
  }
);
export var SimpleStructure = 8 as const;

export var SparseNullsOperationInputOutput = __struct(
  _SNOIO,
  {},
  {
    [_sSL]: [() => SparseStringList, {}],
    [_sSMp]: [() => SparseStringMap, {}],
  }
);
export var StructureListMember = 8 as const;

export var StructureList = 2 as const;

export var TestStringList = 2 as const;

export var DenseBooleanMap = 4 as const;

export var DenseNumberMap = 4 as const;

export var DenseSetMap = 4 as const;

export var DenseStringMap = 4 as const;

export var DenseStructMap = 4 as const;

export var SparseBooleanMap = __map(
  _SBM,
  {
    [_s]: 1,
  } /* Boolean */
);
export var SparseNumberMap = __map(
  _SNM,
  {
    [_s]: 1,
  } /* Integer */
);
export var SparseSetMap = __map(
  _SSM,
  {
    [_s]: 1,
  } /* StringSet */
);
export var SparseStructMap = __map(
  _SSMp,
  {
    [_s]: 1,
  } /* GreetingStruct */
);
export var TestStringMap = 4 as const;

export var EmptyInputOutput = __op(
  _EIO,
  {},
  () => EmptyStructure,
  () => EmptyStructure
);
export var Float16 = __op(
  _F,
  {},
  () => Unit,
  () => Float16Output
);
export var FractionalSeconds = __op(
  _FS,
  {},
  () => Unit,
  () => FractionalSecondsOutput
);
export var GreetingWithErrors = __op(
  _GWE,
  {},
  () => Unit,
  () => GreetingWithErrorsOutput
);
export var NoInputOutput = __op(
  _NIO,
  {},
  () => Unit,
  () => Unit
);
export var OperationWithDefaults = __op(
  _OWD,
  {},
  () => OperationWithDefaultsInput,
  () => OperationWithDefaultsOutput
);
export var OptionalInputOutput = __op(
  _OIO,
  {},
  () => SimpleStructure,
  () => SimpleStructure
);
export var RecursiveShapes = __op(
  _RS,
  {},
  () => RecursiveShapesInputOutput,
  () => RecursiveShapesInputOutput
);
export var RpcV2CborDenseMaps = __op(
  _RVCDM,
  {},
  () => RpcV2CborDenseMapsInputOutput,
  () => RpcV2CborDenseMapsInputOutput
);
export var RpcV2CborLists = __op(
  _RVCL,
  {},
  () => RpcV2CborListInputOutput,
  () => RpcV2CborListInputOutput
);
export var RpcV2CborSparseMaps = __op(
  _RVCSM,
  {},
  () => RpcV2CborSparseMapsInputOutput,
  () => RpcV2CborSparseMapsInputOutput
);
export var SimpleScalarProperties = __op(
  _SSP,
  {},
  () => SimpleScalarStructure,
  () => SimpleScalarStructure
);
export var SparseNullsOperation = __op(
  _SNO,
  {},
  () => SparseNullsOperationInputOutput,
  () => SparseNullsOperationInputOutput
);
smithy_protocoltests_rpcv2CborRegistry.registerSimpleTypes({
  [_TIE]: _nu,
});
smithy_protocoltests_rpcv2CborRegistry.stopCapture();
