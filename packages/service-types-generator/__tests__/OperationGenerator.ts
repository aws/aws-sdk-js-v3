import {model} from "../__fixtures__";
import {OperationGenerator} from "../lib/OperationGenerator";

describe('OperationGenerator', () => {
    it('should iterate over all complex shapes in a model', () => {
        const operations = {...model.operations};
        for (let [operationName, _] of new OperationGenerator(model, '.')) {
            delete operations[operationName];
        }

        expect(Object.keys(operations).length).toBe(0);
    });
});