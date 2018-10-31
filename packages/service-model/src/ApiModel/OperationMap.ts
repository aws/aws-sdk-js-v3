import {isOperation} from "./Operation";
import {isObjectMapOf} from "./isObjectMapOf";
import {Operation, OperationMap} from '@aws-sdk/build-types';

/**
 * @internal
 */
export function isOperationMap(arg: any): arg is OperationMap {
    return isObjectMapOf<Operation>(arg, isOperation);
}
