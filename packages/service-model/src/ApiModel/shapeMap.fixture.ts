import { ShapeMap, Shape, Type } from "@aws-sdk/build-types";

export const minimalShapeMap: ShapeMap & { [key in Type]: Shape } = {
  blob: { type: "blob" },
  boolean: { type: "boolean" },
  byte: { type: "byte" },
  character: { type: "character" },
  double: { type: "double" },
  float: { type: "float" },
  integer: { type: "integer" },
  list: {
    type: "list",
    member: { shape: "boolean" }
  },
  long: { type: "long" },
  map: {
    type: "map",
    key: { shape: "string" },
    value: { shape: "blob" }
  },
  short: { type: "short" },
  string: { type: "string" },
  structure: {
    type: "structure",
    members: {}
  },
  timestamp: { type: "timestamp" }
};
