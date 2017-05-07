import {isOperation, NormalizedOperation, Operation} from "./Operation";
import {isObjectMapOf} from "./isObjectMapOf";

export type OperationMap = {[key: string]: Operation};

export function isOperationMap(arg: any): arg is OperationMap {
    return isObjectMapOf<Operation>(arg, isOperation);
}

type NormalizedOperationMap = {[key: string]: NormalizedOperation};
