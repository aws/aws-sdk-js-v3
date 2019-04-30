import { isArrayOf } from "./isArrayOf";
import { isObjectMapOf } from "./isObjectMapOf";
import { XmlNamespace } from "@aws-sdk/types";
import {
  Blob,
  Boolean,
  Byte,
  Character,
  ComplexShape,
  Double,
  Error,
  Float,
  Integer,
  List,
  Long,
  Map,
  Member,
  Shape,
  ShapeDef,
  Short,
  String,
  Structure,
  StructureMember,
  Timestamp,
  Type
} from "@aws-sdk/build-types";

function isShapeDef(arg: any): arg is ShapeDef {
  return (
    typeof arg === "object" &&
    arg !== null &&
    typeof arg.type === "string" &&
    ["undefined", "boolean"].indexOf(typeof arg.sensitive) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.documentation) > -1 &&
    ["undefined", "boolean"].indexOf(typeof arg.deprecated) > -1
  );
}

function isBlob(arg: Shape): boolean {
  return (
    arg.type === "blob" &&
    ["undefined", "boolean"].indexOf(typeof arg.streaming) > -1
  );
}

function isBoolean(arg: Shape): boolean {
  return arg.type === "boolean";
}

function isByte(arg: Shape): boolean {
  return (
    arg.type === "byte" &&
    ["undefined", "number"].indexOf(typeof arg.min) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.max) > -1
  );
}

function isCharacter(arg: Shape): boolean {
  return arg.type === "character";
}

function isDouble(arg: Shape): boolean {
  return (
    arg.type === "double" &&
    ["undefined", "number"].indexOf(typeof arg.min) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.max) > -1
  );
}

function isFloat(arg: Shape): boolean {
  return (
    arg.type === "float" &&
    ["undefined", "number"].indexOf(typeof arg.min) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.max) > -1
  );
}

function isInteger(arg: Shape): boolean {
  return (
    arg.type === "integer" &&
    ["undefined", "number"].indexOf(typeof arg.min) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.max) > -1
  );
}

function isLong(arg: Shape): boolean {
  return (
    arg.type === "long" &&
    ["undefined", "number"].indexOf(typeof arg.min) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.max) > -1
  );
}

function isShort(arg: Shape): boolean {
  return (
    arg.type === "short" &&
    ["undefined", "number"].indexOf(typeof arg.min) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.max) > -1
  );
}

const stringDeterminer = (arg: any): arg is string => typeof arg === "string";

function isString(arg: Shape): boolean {
  return (
    arg.type === "string" &&
    ["undefined", "number"].indexOf(typeof arg.min) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.max) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.pattern) > -1 &&
    (arg.enum === undefined || isArrayOf(arg.enum, stringDeterminer)) &&
    ["undefined", "boolean"].indexOf(typeof arg.jsonValue) > -1 &&
    ["undefined", "boolean"].indexOf(typeof arg.idempotencyToken) > -1
  );
}

function isTimestamp(arg: Shape): boolean {
  return (
    arg.type === "timestamp" &&
    ["undefined", "string"].indexOf(typeof arg.timestampFormat) > -1
  );
}

/**
 * @internal
 */
export function isXmlNamespace(arg: any): arg is XmlNamespace {
  return (
    typeof arg === "object" &&
    arg !== null &&
    ["undefined", "string"].indexOf(typeof arg.prefix) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.uri) > -1
  );
}

function isMember(arg: any): arg is Member {
  return (
    typeof arg === "object" &&
    arg !== null &&
    typeof arg.shape === "string" &&
    ["undefined", "string"].indexOf(typeof arg.documentation) > -1 &&
    ["undefined", "boolean"].indexOf(typeof arg.flattened) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.locationName) > -1 &&
    ["undefined", "boolean"].indexOf(typeof arg.xmlAttribute) > -1
  );
}

/**
 * @internal
 */
export function isStructureMember(arg: any): arg is StructureMember {
  return (
    Boolean(arg) &&
    typeof arg === "object" &&
    (!arg.location || typeof arg.location === "string") &&
    (!arg.xmlNamespace ||
      (isXmlNamespace(arg.xmlNamespace) ||
        typeof arg.xmlNamespace === "string")) &&
    isMember(arg)
  );
}

function isList(arg: Shape): boolean {
  return (
    arg.type === "list" &&
    ["undefined", "number"].indexOf(typeof arg.min) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.max) > -1 &&
    ["undefined", "boolean"].indexOf(typeof arg.flattened) > -1 &&
    (arg.member === undefined || isMember(arg.member))
  );
}

function isMap(arg: Shape): boolean {
  return (
    arg.type === "map" &&
    isMember(arg.key) &&
    isMember(arg.value) &&
    ["undefined", "boolean"].indexOf(typeof arg.flattened) > -1
  );
}

function isError(arg: any): arg is Error {
  return (
    typeof arg === "object" &&
    arg !== null &&
    ["undefined", "string"].indexOf(typeof arg.code) > -1 &&
    ["undefined", "number"].indexOf(typeof arg.httpStatusCode) > -1 &&
    ["undefined", "boolean"].indexOf(typeof arg.senderFault) > -1
  );
}

function isStructure(arg: Shape): boolean {
  return (
    arg.type === "structure" &&
    isObjectMapOf(arg.members, isStructureMember) &&
    ["undefined", "boolean"].indexOf(typeof arg.exception) > -1 &&
    ["undefined", "boolean"].indexOf(typeof arg.fault) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.payload) > -1 &&
    (arg.error === undefined || isError(arg.error)) &&
    (arg.required === undefined || isArrayOf(arg.required, stringDeterminer))
  );
}

const COMPLEX_SHAPES = new Set<Type>(["list", "map", "structure"]);

/**
 * @internal
 */
export function isComplexShape(arg: Shape): arg is ComplexShape {
  return COMPLEX_SHAPES.has(arg.type);
}

/**
 * @internal
 */
export function isShape(arg: any): arg is Shape {
  if (isShapeDef(arg)) {
    const probablyShape = <Shape>arg;
    return (
      isBlob(probablyShape) ||
      isBoolean(probablyShape) ||
      isByte(probablyShape) ||
      isCharacter(probablyShape) ||
      isDouble(probablyShape) ||
      isFloat(probablyShape) ||
      isInteger(probablyShape) ||
      isList(probablyShape) ||
      isLong(probablyShape) ||
      isMap(probablyShape) ||
      isShort(probablyShape) ||
      isString(probablyShape) ||
      isStructure(probablyShape) ||
      isTimestamp(probablyShape)
    );
  }

  return false;
}
