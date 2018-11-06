import {isOperationMap} from "./OperationMap";
import {isServiceMetadata} from "./ServiceMetadata";
import {isShapeMap} from "./ShapeMap";
import {ApiModel} from '@aws-sdk/build-types';

/**
 * @internal
 */
export function isApiModel(model: any): model is ApiModel {
    return typeof model === 'object'
        && model !== null
        && isServiceMetadata(model.metadata)
        && isOperationMap(model.operations)
        && isShapeMap(model.shapes)
        && ['undefined', 'string'].indexOf(typeof model.documentation) > -1;
}
