import {getMapIndexDeclaration} from './getMapIndexDeclaration';
import {getStringDeclaration} from "./getStringDeclaration";
import {TreeModelMember, TreeModelShape} from "@aws-sdk/build-types";
import {GENERIC_STREAM_TYPE} from '../../constants';
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
            return shape.type;
        case 'float':
        case 'integer':
            return 'number';
        case 'list':
            return `Array<${getMemberType(shape.member.shape)}>`;
        case 'map':
            return `{${getMapIndexDeclaration(shape)}: ${getMemberType(shape.value.shape)}}`;
        case 'string':
            return getStringDeclaration(shape);
        case 'timestamp':
            return 'Date';
        case 'structure':
            return getUnmarshalledShapeName(shape.name);
    }
}
