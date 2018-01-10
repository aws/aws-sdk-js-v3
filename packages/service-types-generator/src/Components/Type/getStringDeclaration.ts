import {String} from "@aws/types";

export function getStringDeclaration(shape: String): string {
    return shape.enum
        ? shape.enum.map(e => `'${e}'`).concat(['string']).join('|')
        : 'string';
}
