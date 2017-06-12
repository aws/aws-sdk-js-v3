import {SerializationModel} from "@aws/types";

export function requiresImport(shape: SerializationModel): boolean {
    return ['list', 'map', 'structure'].indexOf(shape.type) > -1;
}

