import {SerializationType} from "@aws/types";
import {Shape} from "../Shape";

export function getSerializationType(
    shape: Shape
): SerializationType {
    const {type} = shape;
    switch (type) {
        case 'byte':
        case 'double':
        case 'float':
        case 'integer':
        case 'long':
        case 'short':
            return 'number';
        case 'character':
        case 'string':
            return 'string';
        case 'list':
        case 'map':
        case 'timestamp':
        case 'blob':
        case 'boolean':
        case 'structure':
            return type;
    }

    throw new Error(
        `Unable to translate ${type} to a valid serialization type.`
    );
}
