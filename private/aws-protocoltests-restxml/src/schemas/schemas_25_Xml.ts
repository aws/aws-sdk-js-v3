// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _BWXN,
  _BWXNIO,
  _He,
  _Ho,
  _hP,
  _HPWMXN,
  _HPWMXNIO,
  _HPWXN,
  _HPWXNIO,
  _http_,
  _n,
  _na,
  _PWXN,
  _xN,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BodyWithXmlNameInputOutput = struct(
  n1,
  _BWXNIO,
  {
    [_xN]: _A,
  },
  [_n],
  [[() => PayloadWithXmlName, 0]]
);
export var HttpPayloadWithMemberXmlNameInputOutput = struct(
  n1,
  _HPWMXNIO,
  0,
  [_n],
  [
    [
      () => PayloadWithXmlName,
      {
        [_hP]: 1,
        [_xN]: _Ho,
      },
    ],
  ]
);
export var HttpPayloadWithXmlNameInputOutput = struct(n1, _HPWXNIO, 0, [_n], [[() => PayloadWithXmlName, 16]]);
export var PayloadWithXmlName = struct(
  n1,
  _PWXN,
  {
    [_xN]: _He,
  },
  [_na],
  [0]
);
export var BodyWithXmlName = op(
  n1,
  _BWXN,
  {
    [_http_]: ["PUT", "/BodyWithXmlName", 200],
  },
  () => BodyWithXmlNameInputOutput,
  () => BodyWithXmlNameInputOutput
);
export var HttpPayloadWithMemberXmlName = op(
  n1,
  _HPWMXN,
  {
    [_http_]: ["PUT", "/HttpPayloadWithMemberXmlName", 200],
  },
  () => HttpPayloadWithMemberXmlNameInputOutput,
  () => HttpPayloadWithMemberXmlNameInputOutput
);
export var HttpPayloadWithXmlName = op(
  n1,
  _HPWXN,
  {
    [_http_]: ["PUT", "/HttpPayloadWithXmlName", 200],
  },
  () => HttpPayloadWithXmlNameInputOutput,
  () => HttpPayloadWithXmlNameInputOutput
);
