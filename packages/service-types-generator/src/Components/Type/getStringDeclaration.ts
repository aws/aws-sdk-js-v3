import {TreeModelString} from "@aws/build-types";

export function getStringDeclaration(shape: TreeModelString): string {
    return shape.enum
        ? shape.enum.map(e => `'${e}'`).concat(['string']).join('|')
        : 'string';
}
