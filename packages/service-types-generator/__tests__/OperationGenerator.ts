import {model} from "../__fixtures__";
import {OperationGenerator} from "../lib/OperationGenerator";

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
