// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ComplexError as __ComplexError,
  FooError as __FooError,
  InvalidGreeting as __InvalidGreeting,
} from "../models/index";
import {
  _bV,
  _bVl,
  _c,
  _CE,
  _CE_,
  _CNED,
  _co,
  _COD,
  _cOD,
  _D,
  _d,
  _da,
  _dB,
  _dBe,
  _dBef,
  _dD,
  _dDB,
  _dDL,
  _dDM,
  _dDS,
  _dE,
  _dF,
  _Di,
  _dI,
  _di,
  _dIE,
  _DL,
  _dL,
  _dLe,
  _dLi,
  _DM,
  _dM,
  _dMi,
  _dND,
  _dS,
  _dSe,
  _dT,
  _e,
  _eB,
  _en,
  _end,
  _eS,
  _eV,
  _EWHLO,
  _EWHLOI,
  _F,
  _f,
  _Fa,
  _fB,
  _FE,
  _Fo,
  _g,
  _GS,
  _GWE,
  _GWEI,
  _GWEO,
  _h,
  _hH,
  _hL,
  _iEV,
  _IG,
  _jN,
  _JU,
  _JUI,
  _JUO,
  _l,
  _la,
  _lV,
  _M,
  _m,
  _MU,
  _mV,
  _N,
  _nV,
  _oTLD,
  _OWD,
  _OWDI,
  _OWDO,
  _OWNS,
  _OWNSI,
  _OWNSO,
  _OWRM,
  _OWRMO,
  _OWRMWD,
  _OWRMWDO,
  _p,
  _PWCE,
  _PWCEI,
  _rB,
  _rBe,
  _rBeq,
  _rD,
  _rE,
  _rF,
  _rI,
  _rIE,
  _rL,
  _rLe,
  _rM,
  _rS,
  _rSe,
  _rT,
  _s,
  _sV,
  _sVt,
  _TL,
  _tL,
  _tLD,
  _tV,
  _zB,
  _zD,
  _zF,
  _zI,
  _zL,
  _zS,
  n0,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientOptionalDefaults = struct(n0, _COD, 0, [_m], [1]);
export var ComplexError = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_TL, _N],
  [0, [() => ComplexNestedErrorData, 0]],

  __ComplexError
);
export var ComplexNestedErrorData = struct(
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
  ]
);
export var Defaults = struct(
  n0,
  _D,
  0,
  [
    _dS,
    _dB,
    _dL,
    _dDM,
    _dDS,
    _dDB,
    _dDL,
    _dND,
    _dT,
    _dBe,
    _dBef,
    _dSe,
    _dI,
    _dLe,
    _dF,
    _dD,
    _dM,
    _dE,
    _dIE,
    _eS,
    _fB,
    _eB,
    _zB,
    _zS,
    _zI,
    _zL,
    _zF,
    _zD,
  ],
  [0, 2, 64 | 0, 15, 15, 15, 15, 15, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1]
);
export var Dialog = struct(n0, _Di, 0, [_l, _g, _f], [0, 0, () => Farewell]);
export var EndpointWithHostLabelOperationInput = struct(
  n0,
  _EWHLOI,
  0,
  [_la],
  [
    [
      0,
      {
        [_hL]: 1,
      },
    ],
  ]
);
export var Farewell = struct(n0, _Fa, 0, [_p], [0]);
export var FooError = error(
  n0,
  _FE,
  {
    [_e]: _s,
  },
  [],
  [],

  __FooError
);
export var GreetingWithErrorsInput = struct(n0, _GWEI, 0, [_g], [0]);
export var GreetingWithErrorsOutput = struct(n0, _GWEO, 0, [_g], [0]);
export var InvalidGreeting = error(
  n0,
  _IG,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidGreeting
);
export var JsonUnionsInput = struct(n0, _JUI, 0, [_co], [() => MyUnion]);
export var JsonUnionsOutput = struct(n0, _JUO, 0, [_co], [() => MyUnion]);
export var OperationWithDefaultsInput = struct(
  n0,
  _OWDI,
  0,
  [_d, _cOD, _tLD, _oTLD],
  [() => Defaults, () => ClientOptionalDefaults, 0, 1]
);
export var OperationWithDefaultsOutput = struct(
  n0,
  _OWDO,
  0,
  [
    _dS,
    _dB,
    _dL,
    _dDM,
    _dDS,
    _dDB,
    _dDL,
    _dND,
    _dT,
    _dBe,
    _dBef,
    _dSe,
    _dI,
    _dLe,
    _dF,
    _dD,
    _dM,
    _dE,
    _dIE,
    _eS,
    _fB,
    _eB,
    _zB,
    _zS,
    _zI,
    _zL,
    _zF,
    _zD,
  ],
  [0, 2, 64 | 0, 15, 15, 15, 15, 15, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1, 0, 2, 21, 1, 1, 1, 1, 1, 1]
);
export var OperationWithNestedStructureInput = struct(n0, _OWNSI, 0, [_tL], [() => TopLevel]);
export var OperationWithNestedStructureOutput = struct(
  n0,
  _OWNSO,
  0,
  [_di, _dLi, _dMi],
  [() => Dialog, () => DialogList, () => DialogMap]
);
export var OperationWithRequiredMembersOutput = struct(
  n0,
  _OWRMO,
  0,
  [_rS, _rB, _rL, _rT, _rBe, _rBeq, _rSe, _rI, _rLe, _rF, _rD, _rM],
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0]
);
export var OperationWithRequiredMembersWithDefaultsOutput = struct(
  n0,
  _OWRMWDO,
  0,
  [_rS, _rB, _rL, _rT, _rBe, _rBeq, _rSe, _rI, _rLe, _rF, _rD, _rM, _rE, _rIE],
  [0, 2, 64 | 0, 4, 21, 1, 1, 1, 1, 1, 1, 128 | 0, 0, 1]
);
export var PutWithContentEncodingInput = struct(
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
  ]
);
export var TopLevel = struct(n0, _TL, 0, [_di, _dLi, _dMi], [() => Dialog, () => DialogList, () => DialogMap]);
export var GreetingStruct = struct(n1, _GS, 0, [_h], [0]);
export var Unit = "unit" as const;

export var DialogList = list(n0, _DL, 0, () => Dialog);
export var RequiredStringList = 64 | 0;

export var TestStringList = 64 | 0;

export var StringList = 64 | 0;

export var DialogMap = map(n0, _DM, 0, 0, () => Dialog);
export var RequiredStringMap = 128 | 0;

export var TestStringMap = 128 | 0;

export var StringMap = 128 | 0;

export var MyUnion = uni(
  n0,
  _MU,
  0,
  [_sV, _bV, _nV, _bVl, _tV, _eV, _iEV, _lV, _mV, _sVt],
  [0, 2, 1, 21, 4, 0, 1, 64 | 0, 128 | 0, () => GreetingStruct]
);
export var EndpointWithHostLabelOperation = op(
  n0,
  _EWHLO,
  {
    [_end]: ["foo.{label}."],
  },
  () => EndpointWithHostLabelOperationInput,
  () => Unit
);
export var GreetingWithErrors = op(
  n0,
  _GWE,
  2,
  () => GreetingWithErrorsInput,
  () => GreetingWithErrorsOutput
);
export var JsonUnions = op(
  n0,
  _JU,
  2,
  () => JsonUnionsInput,
  () => JsonUnionsOutput
);
export var OperationWithDefaults = op(
  n0,
  _OWD,
  0,
  () => OperationWithDefaultsInput,
  () => OperationWithDefaultsOutput
);
export var OperationWithNestedStructure = op(
  n0,
  _OWNS,
  0,
  () => OperationWithNestedStructureInput,
  () => OperationWithNestedStructureOutput
);
export var OperationWithRequiredMembers = op(
  n0,
  _OWRM,
  0,
  () => Unit,
  () => OperationWithRequiredMembersOutput
);
export var OperationWithRequiredMembersWithDefaults = op(
  n0,
  _OWRMWD,
  0,
  () => Unit,
  () => OperationWithRequiredMembersWithDefaultsOutput
);
export var PutWithContentEncoding = op(
  n0,
  _PWCE,
  0,
  () => PutWithContentEncodingInput,
  () => Unit
);
