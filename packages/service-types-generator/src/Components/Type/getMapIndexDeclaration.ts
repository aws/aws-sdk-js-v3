import {getStringDeclaration} from "./getStringDeclaration";
import {TreeModelMap} from "@aws/build-types";

export function getMapIndexDeclaration(map: TreeModelMap): string {
    if (map.key.shape.type !== 'string') {
        throw new Error(
            `Invalid type: map keys must be strings, but ${map.name} is indexed with a ${map.key.shape.type}`
        );
    }

    const keyType = getStringDeclaration(map.key.shape);
    if (keyType === 'string') {
        return '[key: string]';
    }

    return `[key in ${keyType}]`;
}
