// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _At,
  _GS,
  _hi,
  _http_,
  _mM,
  _Se,
  _XEM,
  _XEMR,
  _XEMRm,
  _XM,
  _XMIOM,
  _XMR,
  _XMRm,
  _XMXN,
  _XMXNIOM,
  _XMXNR,
  _XMXNRm,
  _xN,
  n0,
  n1,
} from "./schemas_0";

/* eslint no-var: 0 */

export var XmlEmptyMapsRequest = struct(n1, _XEMR, 0, [_mM], [() => XmlMapsInputOutputMap]);
export var XmlEmptyMapsResponse = struct(n1, _XEMRm, 0, [_mM], [() => XmlMapsInputOutputMap]);
export var XmlMapsRequest = struct(n1, _XMR, 0, [_mM], [() => XmlMapsInputOutputMap]);
export var XmlMapsResponse = struct(n1, _XMRm, 0, [_mM], [() => XmlMapsInputOutputMap]);
export var XmlMapsXmlNameRequest = struct(n1, _XMXNR, 0, [_mM], [[() => XmlMapsXmlNameInputOutputMap, 0]]);
export var XmlMapsXmlNameResponse = struct(n1, _XMXNRm, 0, [_mM], [[() => XmlMapsXmlNameInputOutputMap, 0]]);
export var GreetingStruct = struct(n0, _GS, 0, [_hi], [0]);
export var XmlMapsInputOutputMap = map(n1, _XMIOM, 0, 0, () => GreetingStruct);
export var XmlMapsXmlNameInputOutputMap = map(
  n1,
  _XMXNIOM,
  0,
  [
    0,
    {
      [_xN]: _At,
    },
  ],
  [
    () => GreetingStruct,
    {
      [_xN]: _Se,
    },
  ]
);
export var XmlEmptyMaps = op(
  n1,
  _XEM,
  {
    [_http_]: ["POST", "/XmlEmptyMaps", 200],
  },
  () => XmlEmptyMapsRequest,
  () => XmlEmptyMapsResponse
);
export var XmlMaps = op(
  n1,
  _XM,
  {
    [_http_]: ["POST", "/XmlMaps", 200],
  },
  () => XmlMapsRequest,
  () => XmlMapsResponse
);
export var XmlMapsXmlName = op(
  n1,
  _XMXN,
  {
    [_http_]: ["POST", "/XmlMapsXmlName", 200],
  },
  () => XmlMapsXmlNameRequest,
  () => XmlMapsXmlNameResponse
);
