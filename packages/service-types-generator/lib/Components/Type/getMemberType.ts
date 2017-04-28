import {getStringDeclaration} from "./getStringDeclaration";
import {ShapeMap, StructureMember} from "@aws/service-model";
import {
    GENERIC_STREAM_TYPE,
    OUTPUT_STRUCTURE_PREFIX,
} from '../../constants';

export function getMemberType(
    shape: string,
    shapeMap: ShapeMap,
    memberDef: StructureMember
): string {
    const shapeDef = shapeMap[shape];
    switch (shapeDef.type) {
        case 'blob':
            const {streaming: shapeNormallyStreaming = false} = shapeDef;
            const {streaming = shapeNormallyStreaming} = memberDef;
            return streaming ? GENERIC_STREAM_TYPE : 'Uint8Array';
        case 'boolean':
            return 'boolean';
        case 'byte':
        case 'double':
        case 'float':
        case 'integer':
        case 'long':
        case 'short':
            return 'number';
        case 'list':
            const memberType = getMemberType(shapeDef.member.shape, shapeMap, memberDef);
            return `Array<${memberType}>|Iterable<${memberType}>`;
        case 'map':
            const keyType = getMemberType(shapeDef.key.shape, shapeMap, memberDef);
            const valueType = getMemberType(shapeDef.value.shape, shapeMap, memberDef);
            return `{[key in ${keyType}]: ${valueType}}|Iterable<[${keyType}, ${valueType}]>`;
        case 'string':
            return getStringDeclaration(shapeDef);
        case 'timestamp':
            return 'Date';
        case 'structure':
        default:
            return `${OUTPUT_STRUCTURE_PREFIX}${shape}`;
    }
}
