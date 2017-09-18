import {isOperationMap, OperationMap} from "./OperationMap";
import {isServiceMetadata} from "./ServiceMetadata";
import {isShapeMap, ShapeMap} from "./ShapeMap";
import {ServiceMetadata} from "@aws/types";

/**
 * Represents a definition of an API, complete with rich typing, validation
 * metadata, and documentation. Matches the '.service-2.json' or '.normal.json'
 * formats used by the AWS SDKs.
 *
 * This type exists to allow the TreeModel (cf ../TreeModel/*) to be built from
 * JSON files with a known structure. The runtime SDK should only rely on types
 * defined in the @aws/types package, and the code generator should rely on the
 * TreeModel's types.
 *
 * If you're using this model or its shape or operation types to do anything
 * other than build a TreeModel from a JSON document, you should probably
 * reconsider your approach.
 *
 * @internal
 */
export interface ApiModel {
    metadata: ServiceMetadata,
    operations: OperationMap,
    shapes: ShapeMap,
    documentation?: string,
}

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
