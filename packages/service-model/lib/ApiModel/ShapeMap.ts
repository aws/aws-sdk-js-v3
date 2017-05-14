import {isObjectMapOf} from "./isObjectMapOf";
import {isShape, Shape} from './Shape';

export type ShapeMap = {[key: string]: Shape};

export function isShapeMap(arg: any): arg is ShapeMap {
    return isObjectMapOf<Shape>(arg, isShape);
}
