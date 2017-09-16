import {TreeModel} from "@aws/service-model";
import {Operation} from "./Components/Model";

export class OperationGenerator {
    constructor(private readonly model: TreeModel) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {operations} = this.model;
        for (let operationName of Object.keys(operations)) {
            yield [
                operationName,
                new Operation(operations[operationName]).toString(),
            ];
        }
    }
}
