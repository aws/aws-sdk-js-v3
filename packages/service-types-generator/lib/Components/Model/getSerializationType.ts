import {ShapeMap} from "@aws/service-model";
import {SerializationType} from "@aws/types";

export function getSerializationType(
    shape: string,
    shapeMap: ShapeMap
): SerializationType {
    const {type} = shapeMap[shape];
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

    throw new Error(`Shape ${shape} has an unrecognized type: ${type}`);
}
