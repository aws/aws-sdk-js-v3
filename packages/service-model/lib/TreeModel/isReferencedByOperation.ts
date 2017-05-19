import {ApiModel} from "../ApiModel";

/**
 * Determines if the shape name provided is used as the shape for any
 * operation's input, output, or known errors. Does not check the members of
 * those shapes; only shapes directly referenced by an operation are inspected.
 *
 * @internal
 */
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
