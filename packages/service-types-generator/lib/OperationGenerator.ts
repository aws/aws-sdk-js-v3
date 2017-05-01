import {NormalizedModel} from "@aws/service-model";
import {Operation} from "./Components/Model";

export class OperationGenerator {
    constructor(
        private readonly model: NormalizedModel,
        private readonly modelsDir: string
    ) {}

    *[Symbol.iterator](): Iterator<[string, string]> {
        const {operations} = this.model;
        for (let operationName of Object.keys(operations)) {
            yield [
                operationName,
                new Operation(
                    operations[operationName],
                    this.modelsDir
                ).toString(),
            ];
        }
    }
}