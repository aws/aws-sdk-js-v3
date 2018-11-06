import {Type} from '@aws-sdk/build-types';

export const stringTypes = new Set<Type>([
    'character',
    'string',
]);

export const floatTypes = new Set<Type>([
    'double',
    'float'
]);

export const integerTypes = new Set<Type>([
    'byte',
    'integer',
    'long',
    'short'
]);

export const numericTypes = new Set<Type>([
    ...floatTypes,
    ...integerTypes
]);

export const scalarTypes = new Set<Type>([
    ...numericTypes,
    ...stringTypes,
    'blob',
    'boolean',
    'timestamp',
]);
