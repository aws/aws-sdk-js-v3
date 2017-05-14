import {isOperation, Operation} from "./Operation";
import {isObjectMapOf} from "./isObjectMapOf";

export type OperationMap = {[key: string]: Operation};

export function isOperationMap(arg: any): arg is OperationMap {
    return isObjectMapOf<Operation>(arg, isOperation);
}
