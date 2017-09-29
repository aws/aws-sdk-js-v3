import {getStringDeclaration} from "./getStringDeclaration";
import {GENERIC_STREAM_TYPE} from '../../constants';
import {TreeModelMember, TreeModelShape} from "@aws/service-model";

export function getInterfaceType(
    shape: TreeModelShape,
    memberDef: TreeModelMember|undefined = {shape}
): string {
    switch (shape.type) {
        case 'blob':
            const {streaming: shapeNormallyStreaming = false} = shape;
            const {streaming = shapeNormallyStreaming} = memberDef;
            const acceptableBlobs = 'ArrayBuffer|ArrayBufferView|string';
            if (streaming) {
                return acceptableBlobs + `|${GENERIC_STREAM_TYPE}`;
            }
            return acceptableBlobs;
        case 'boolean':
            return shape.type;
        case 'float':
        case 'integer':
        case 'number':
            return 'number';
        case 'list':
            const memberType = getInterfaceType(shape.member.shape);
            return `Array<${memberType}>|Iterable<${memberType}>`;
        case 'map':
            const keyType = getInterfaceType(shape.key.shape);
            const valueType = getInterfaceType(shape.value.shape);
            return `{[key in ${keyType}]: ${valueType}}|Iterable<[${keyType}, ${valueType}]>`;
        case 'string':
            return getStringDeclaration(shape);
        case 'timestamp':
            return 'Date|string|number';
        case 'structure':
            return shape.name;
    }
}
