import {isOperation, Operation} from "./Operation";
import {isObjectMapOf} from "./isObjectMapOf";

/**
 * @internal
 */
export type OperationMap = {[key: string]: Operation};

/**
 * @internal
 */
export function isOperationMap(arg: any): arg is OperationMap {
    return isObjectMapOf<Operation>(arg, isOperation);
}
