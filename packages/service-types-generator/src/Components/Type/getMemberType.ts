import {getStringDeclaration} from "./getStringDeclaration";
import {TreeModelMember, TreeModelShape} from "@aws/service-model";
import {GENERIC_STREAM_TYPE,} from '../../constants';
import {getUnmarshalledShapeName} from "./helpers";


export function getMemberType(
    shape: TreeModelShape,
    memberDef: TreeModelMember|undefined = {shape}
): string {
    switch (shape.type) {
        case 'blob':
            const {streaming: shapeNormallyStreaming = false} = shape;
            const {streaming = shapeNormallyStreaming} = memberDef;
            return streaming ? GENERIC_STREAM_TYPE : 'Uint8Array';
        case 'boolean':
        case 'number':
            return shape.type;
        case 'list':
            return `Array<${getMemberType(shape.member.shape)}>`;
        case 'map':
            const keyType = getMemberType(shape.key.shape);
            const valueType = getMemberType(shape.value.shape);
            return `{[key in ${keyType}]: ${valueType}}`;
        case 'string':
            return getStringDeclaration(shape);
        case 'timestamp':
            return 'Date';
        case 'structure':
            return getUnmarshalledShapeName(shape.name);
    }
}
