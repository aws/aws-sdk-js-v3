import {isObjectMapOf} from "./isObjectMapOf";
import {isShape, Shape} from './Shape';

/**
 * @internal
 */
export type ShapeMap = {[key: string]: Shape};

/**
 * @internal
 */
export function isShapeMap(arg: any): arg is ShapeMap {
    return isObjectMapOf<Shape>(arg, isShape);
}
