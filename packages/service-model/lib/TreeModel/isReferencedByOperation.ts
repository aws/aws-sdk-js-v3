import {ApiModel} from "../ApiModel";

export function isReferencedByOperation(
    model: ApiModel,
    name: string
): boolean {
    return Object.keys(model.operations)
        .map(operationName => {
            const operation = model.operations[operationName];
            if (operation.input && operation.input.shape === name) {
                return true;
            }
            if (operation.output && operation.output.shape === name) {
                return true;
            }
            for (let error of operation.errors || []) {
                if (error.shape === name) {
                    return true;
                }
            }
            return false;
        }).filter(isReferenced => isReferenced)
        .length > 0;
}
