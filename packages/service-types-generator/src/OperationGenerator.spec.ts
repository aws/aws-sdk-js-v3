import {model} from "./shapes.fixture";
import {OperationGenerator} from "./OperationGenerator";

describe('OperationGenerator', () => {
    it('should iterate over all operations in a model', () => {
        const operations = {...model.operations};
        expect(Object.keys(operations).length).toBeGreaterThan(0);

        for (let [operationName, _] of new OperationGenerator(model)) {
            delete operations[operationName];
        }

        expect(Object.keys(operations).length).toBe(0);
    });
});
