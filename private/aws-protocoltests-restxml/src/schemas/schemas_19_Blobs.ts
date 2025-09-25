// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bl, _da, _f, _hH, _HPT, _HPTIO, _http_, _XBm, _XBR, _XBRm, _XEB, _XEBR, _XEBRm, _XF, n1 } from "./schemas_0";

/* eslint no-var: 0 */

export var HttpPayloadTraitsInputOutput = struct(
  n1,
  _HPTIO,
  0,
  [_f, _bl],
  [
    [
      0,
      {
        [_hH]: _XF,
      },
    ],
    [21, 16],
  ]
);
export var XmlBlobsRequest = struct(n1, _XBR, 0, [_da], [21]);
export var XmlBlobsResponse = struct(n1, _XBRm, 0, [_da], [21]);
export var XmlEmptyBlobsRequest = struct(n1, _XEBR, 0, [_da], [21]);
export var XmlEmptyBlobsResponse = struct(n1, _XEBRm, 0, [_da], [21]);
export var HttpPayloadTraits = op(
  n1,
  _HPT,
  {
    [_http_]: ["POST", "/HttpPayloadTraits", 200],
  },
  () => HttpPayloadTraitsInputOutput,
  () => HttpPayloadTraitsInputOutput
);
export var XmlBlobs = op(
  n1,
  _XBm,
  {
    [_http_]: ["POST", "/XmlBlobs", 200],
  },
  () => XmlBlobsRequest,
  () => XmlBlobsResponse
);
export var XmlEmptyBlobs = op(
  n1,
  _XEB,
  {
    [_http_]: ["POST", "/XmlEmptyBlobs", 200],
  },
  () => XmlEmptyBlobsRequest,
  () => XmlEmptyBlobsResponse
);
