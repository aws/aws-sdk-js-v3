// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ac,
  _EPI,
  _fE,
  _fEL,
  _fEM,
  _fEo,
  _fEoo,
  _fES,
  _HEP,
  _ht,
  _iE,
  _iEL,
  _iEM,
  _iEn,
  _iEnt,
  _iES,
  _JE,
  _JEIO,
  _JIE,
  _JIEIO,
  _p,
  _PA,
  _PPA,
  _PPAI,
  _PPAO,
  _qu,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EnumPayloadInput = struct(n0, _EPI, 0, [_p], [[0, 16]]);
export var JsonEnumsInputOutput = struct(
  n0,
  _JEIO,
  0,
  [_fE, _fEo, _fEoo, _fEL, _fES, _fEM],
  [0, 0, 0, 64 | 0, 64 | 0, 128 | 0]
);
export var JsonIntEnumsInputOutput = struct(
  n0,
  _JIEIO,
  0,
  [_iE, _iEn, _iEnt, _iEL, _iES, _iEM],
  [1, 1, 1, 64 | 1, 64 | 1, 128 | 1]
);
export var PostPlayerActionInput = struct(n0, _PPAI, 0, [_ac], [() => PlayerAction]);
export var PostPlayerActionOutput = struct(n0, _PPAO, 0, [_ac], [() => PlayerAction]);
export var Unit = "unit" as const;

export var FooEnumList = 64 | 0;

export var FooEnumSet = 64 | 0;

export var IntegerEnumList = 64 | 1;

export var IntegerEnumSet = 64 | 1;

export var FooEnumMap = 128 | 0;

export var IntegerEnumMap = 128 | 1;

export var PlayerAction = uni(n0, _PA, 0, [_qu], [() => Unit]);
export var HttpEnumPayload = op(
  n0,
  _HEP,
  {
    [_ht]: ["POST", "/EnumPayload", 200],
  },
  () => EnumPayloadInput,
  () => EnumPayloadInput
);
export var JsonEnums = op(
  n0,
  _JE,
  {
    [_ht]: ["PUT", "/JsonEnums", 200],
  },
  () => JsonEnumsInputOutput,
  () => JsonEnumsInputOutput
);
export var JsonIntEnums = op(
  n0,
  _JIE,
  {
    [_ht]: ["PUT", "/JsonIntEnums", 200],
  },
  () => JsonIntEnumsInputOutput,
  () => JsonIntEnumsInputOutput
);
export var PostPlayerAction = op(
  n0,
  _PPA,
  {
    [_ht]: ["POST", "/PostPlayerAction", 200],
  },
  () => PostPlayerActionInput,
  () => PostPlayerActionOutput
);
