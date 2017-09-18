import {Type} from "../ApiModel/Shape";

export const stringTypes = new Set<Type>([
    'character',
    'string',
]);

export const numericTypes = new Set<Type>([
    'byte',
    'double',
    'float',
    'integer',
    'long',
    'short',
]);

export const scalarTypes = new Set<Type>([
    ...numericTypes,
    ...stringTypes,
    'blob',
    'boolean',
    'timestamp',
]);
