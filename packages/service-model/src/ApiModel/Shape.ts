import {isArrayOf} from "./isArrayOf";
import {isObjectMapOf} from "./isObjectMapOf";
import {XmlNamespace} from "@aws/types";

/**
 * @internal
 */
export type Type = 'boolean'|'byte'|'timestamp'|'character'|'double'|'float'|'integer'|'long'|'short'|'string'|'blob'|'list'|'map'|'structure';

/**
 * Represents a definition of a data shape as defined in the '.service-2.json'
 * format used by the AWS SDKs.
 *
 * This type exists to allow the TreeModel (cf ../TreeModel/*) to be built from
 * JSON files with a known structure. The runtime SDK should only rely on types
 * defined in the @aws/types package, and the code generator should rely on the
 * TreeModel's types.
 *
 * If you're using the types in this file to do anything other than build a
 * TreeModel from a JSON document, you should probably reconsider your approach.
 *
 * @internal
 */
export interface ShapeDef {
    readonly type: Type;
    sensitive?: boolean;
    documentation?: string;
    deprecated?: boolean;
}

function isShapeDef(arg: any): arg is ShapeDef {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.type === 'string'
        && ['undefined', 'boolean'].indexOf(typeof arg.sensitive) > -1
        && ['undefined', 'string'].indexOf(typeof arg.documentation) > -1
        && ['undefined', 'boolean'].indexOf(typeof arg.deprecated) > -1;
}

/**
 * @internal
 */
export interface Blob extends ShapeDef {
    readonly type: 'blob';
    streaming?: boolean;
}

function isBlob(arg: Shape): boolean {
    return arg.type === 'blob'
        && ['undefined', 'boolean'].indexOf(typeof arg.streaming) > -1;
}

/**
 * @internal
 */
export interface Boolean extends ShapeDef {
    readonly type: 'boolean';
}

function isBoolean(arg: Shape): boolean {
    return arg.type === 'boolean';
}

/**
 * @internal
 */
export interface Byte extends ShapeDef {
    readonly type: 'byte';
    min?: number;
    max?: number;
}

function isByte(arg: Shape): boolean {
    return arg.type === 'byte'
        && ['undefined', 'number'].indexOf(typeof arg.min) > -1
        && ['undefined', 'number'].indexOf(typeof arg.max) > -1;
}

/**
 * @internal
 */
export interface Character extends ShapeDef {
    readonly type: 'character';
}

function isCharacter(arg: Shape): boolean {
    return arg.type === 'character';
}

/**
 * @internal
 */
export interface Double extends ShapeDef {
    readonly type: 'double';
    min?: number;
    max?: number;
}

function isDouble(arg: Shape): boolean {
    return arg.type === 'double'
        && ['undefined', 'number'].indexOf(typeof arg.min) > -1
        && ['undefined', 'number'].indexOf(typeof arg.max) > -1;
}

/**
 * @internal
 */
export interface Float extends ShapeDef {
    readonly type: 'float';
    min?: number;
    max?: number;
}

function isFloat(arg: Shape): boolean {
    return arg.type === 'float'
        && ['undefined', 'number'].indexOf(typeof arg.min) > -1
        && ['undefined', 'number'].indexOf(typeof arg.max) > -1;
}

/**
 * @internal
 */
export interface Integer extends ShapeDef {
    readonly type: 'integer';
    min?: number;
    max?: number;
}

function isInteger(arg: Shape): boolean {
    return arg.type === 'integer'
        && ['undefined', 'number'].indexOf(typeof arg.min) > -1
        && ['undefined', 'number'].indexOf(typeof arg.max) > -1;
}

/**
 * @internal
 */
export interface Long extends ShapeDef {
    readonly type: 'long';
    min?: number;
    max?: number;
}

function isLong(arg: Shape): boolean {
    return arg.type === 'long'
        && ['undefined', 'number'].indexOf(typeof arg.min) > -1
        && ['undefined', 'number'].indexOf(typeof arg.max) > -1;
}

/**
 * @internal
 */
export interface Short extends ShapeDef {
    readonly type: 'short';
    min?: number;
    max?: number;
}

function isShort(arg: Shape): boolean {
    return arg.type === 'short'
        && ['undefined', 'number'].indexOf(typeof arg.min) > -1
        && ['undefined', 'number'].indexOf(typeof arg.max) > -1;
}

/**
 * @internal
 */
export interface String extends ShapeDef {
    readonly type: 'string';
    min?: number;
    max?: number;
    pattern?: string;
    enum?: Array<string>;
    jsonValue?: boolean;
    idempotencyToken?: boolean;
}

const stringDeterminer = (arg: any): arg is string => typeof arg === 'string';

function isString(arg: Shape): boolean {
    return arg.type === 'string'
        && ['undefined', 'number'].indexOf(typeof arg.min) > -1
        && ['undefined', 'number'].indexOf(typeof arg.max) > -1
        && ['undefined', 'string'].indexOf(typeof arg.pattern) > -1
        && (arg.enum === undefined || isArrayOf(arg.enum, stringDeterminer))
        && ['undefined', 'boolean'].indexOf(typeof arg.jsonValue) > -1
        && ['undefined', 'boolean'].indexOf(typeof arg.idempotencyToken) > -1;
}

/**
 * @internal
 */
export interface Timestamp extends ShapeDef {
    readonly type: 'timestamp';
    timestampFormat?: string;
}

function isTimestamp(arg: Shape): boolean {
    return arg.type === 'timestamp'
        && ['undefined', 'string'].indexOf(typeof arg.timestampFormat) > -1;
}

/**
 * @internal
 */
export function isXmlNamespace(arg: any): arg is XmlNamespace {
    return typeof arg === 'object'
        && arg !== null
        && ['undefined', 'string'].indexOf(typeof arg.prefix) > -1
        && ['undefined', 'string'].indexOf(typeof arg.uri) > -1;
}

/**
 * @internal
 */
export interface Member {
    documentation?: string;
    shape: string;
    flattened?: boolean;
    locationName?: string;
    xmlAttribute?: boolean;
}

function isMember(arg: any): arg is Member {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.shape === 'string'
        && ['undefined', 'string'].indexOf(typeof arg.documentation) > -1
        && ['undefined', 'boolean'].indexOf(typeof arg.flattened) > -1
        && ['undefined', 'string'].indexOf(typeof arg.locationName) > -1
        && ['undefined', 'boolean'].indexOf(typeof arg.xmlAttribute) > -1;
}

/**
 * @internal
 */
export type MemberLocation = 'header'|'headers'|'uri'|'querystring';

/**
 * @internal
 */
export interface StructureMember extends Member {
    location?: MemberLocation;
    xmlNamespace?: XmlNamespace|string;
    streaming?: boolean;
}

/**
 * @internal
 */
export function isStructureMember(arg: any): arg is StructureMember {
    return Boolean(arg) && typeof arg === 'object'
        && (!arg.location || typeof arg.location === 'string')
        && (!arg.xmlNamespace || (isXmlNamespace(arg.xmlNamespace) || typeof arg.xmlNamespace === 'string'))
        && isMember(arg);
}

/**
 * @internal
 */
export interface List extends ShapeDef {
    readonly type: 'list';
    member: Member;
    flattened?: boolean;
    min?: number;
    max?: number;
}

function isList(arg: Shape): boolean {
    return arg.type === 'list'
        && ['undefined', 'number'].indexOf(typeof arg.min) > -1
        && ['undefined', 'number'].indexOf(typeof arg.max) > -1
        && ['undefined', 'boolean'].indexOf(typeof arg.flattened) > -1
        && (arg.member === undefined || isMember(arg.member));
}

/**
 * @internal
 */
export interface Map extends ShapeDef {
    readonly type: 'map';
    flattened?: boolean;
    key: Member;
    value: Member;
}

function isMap(arg: Shape): boolean {
    return arg.type === 'map'
        && isMember(arg.key)
        && isMember(arg.value)
        && ['undefined', 'boolean'].indexOf(typeof arg.flattened) > -1;
}

/**
 * @internal
 */
export interface Error {
    code?: string;
    httpStatusCode?: number;
    senderFault?: boolean;
}

function isError(arg: any): arg is Error {
    return typeof arg === 'object'
        && arg !== null
        && ['undefined', 'string'].indexOf(typeof arg.code) > -1
        && ['undefined', 'number'].indexOf(typeof arg.httpStatusCode) > -1
        && ['undefined', 'boolean'].indexOf(typeof arg.senderFault) > -1;
}

/**
 * @internal
 */
export interface Structure extends ShapeDef {
    readonly type: 'structure';
    error?: Error;
    exception?: boolean;
    fault?: boolean;
    members: {[key: string]: StructureMember}
    required?: Array<string>;
    payload?: string;
    topLevel?: 'input'|'output';
}

function isStructure(arg: Shape): boolean {
    return arg.type === 'structure'
        && isObjectMapOf(arg.members, isStructureMember)
        && ['undefined', 'boolean'].indexOf(typeof arg.exception) > -1
        && ['undefined', 'boolean'].indexOf(typeof arg.fault) > -1
        && ['undefined', 'string'].indexOf(typeof arg.payload) > -1
        && (arg.error === undefined || isError(arg.error))
        && (arg.required === undefined || isArrayOf(arg.required, stringDeterminer));
}

/**
 * @internal
 */
export type Shape = Blob|Boolean|Byte|Character|Double|Float|Integer|List|Long|Map|Short|String|Structure|Timestamp;

/**
 * @internal
 */
export type ComplexShape = List|Map|Structure;

const COMPLEX_SHAPES = new Set<Type>([
    'list',
    'map',
    'structure',
]);

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
        return isBlob(probablyShape)
            || isBoolean(probablyShape)
            || isByte(probablyShape)
            || isCharacter(probablyShape)
            || isDouble(probablyShape)
            || isFloat(probablyShape)
            || isInteger(probablyShape)
            || isList(probablyShape)
            || isLong(probablyShape)
            || isMap(probablyShape)
            || isShort(probablyShape)
            || isString(probablyShape)
            || isStructure(probablyShape)
            || isTimestamp(probablyShape);
    }

    return false;
}
