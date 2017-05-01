import {getStringDeclaration} from "./getStringDeclaration";
import {ShapeMap, StructureMember} from "@aws/service-model";
import {GENERIC_STREAM_TYPE} from '../../constants';

export function getInterfaceType(
    shape: string,
    shapeMap: ShapeMap,
    memberDef: StructureMember|undefined = {shape}
): string {
    const shapeDef = shapeMap[shape];
    switch (shapeDef.type) {
        case 'blob':
            const {streaming: shapeNormallyStreaming = false} = shapeDef;
            const {streaming = shapeNormallyStreaming} = memberDef;
            const acceptableBlobs = 'ArrayBuffer|ArrayBufferView|string';
            if (streaming) {
                return acceptableBlobs + `|${GENERIC_STREAM_TYPE}`;
            }
            return acceptableBlobs;
        case 'boolean':
            return 'boolean';
        case 'byte':
        case 'double':
        case 'float':
        case 'integer':
        case 'long':
        case 'short':
            return 'number';
        case 'character':
            return 'string';
        case 'list':
            const memberType = getInterfaceType(shapeDef.member.shape, shapeMap);
            return `Array<${memberType}>|Iterable<${memberType}>`;
        case 'map':
            const keyType = getInterfaceType(shapeDef.key.shape, shapeMap);
            const valueType = getInterfaceType(shapeDef.value.shape, shapeMap);
            return `{[key in ${keyType}]: ${valueType}}|Iterable<[${keyType}, ${valueType}]>`;
        case 'string':
            return getStringDeclaration(shapeDef);
        case 'timestamp':
            return 'Date|string|number';
        case 'structure':
            return shape;
    }
}
