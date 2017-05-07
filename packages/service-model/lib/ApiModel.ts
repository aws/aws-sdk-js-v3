import {isOperationMap, OperationMap} from "./OperationMap";
import {isServiceMetadata, ServiceMetadata} from "./ServiceMetadata";
import {isShapeMap, ShapeMap} from "./ShapeMap";

export interface ApiModel {
    metadata: ServiceMetadata,
    operations: OperationMap,
    shapes: ShapeMap,
    documentation?: string,
}

export function isApiModel(model: any): model is ApiModel {
    return typeof model === 'object'
        && model !== null
        && isServiceMetadata(model.metadata)
        && isOperationMap(model.operations)
        && isShapeMap(model.shapes)
        && ['undefined', 'string'].indexOf(typeof model.documentation) > -1;
}
