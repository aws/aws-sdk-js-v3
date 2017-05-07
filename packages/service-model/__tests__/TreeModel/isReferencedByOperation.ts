import {isReferencedByOperation} from "../../lib/TreeModel/isReferencedByOperation";
import {model} from "../../__fixtures__";

describe('isReferencedByOperation', () => {
    const {operations} = model;

    it(
        'should return true when an operation uses the shape as its input',
        () => {
            for (let operationName of Object.keys(operations)) {
                const {input} = operations[operationName];
                expect(isReferencedByOperation(model, input.shape)).toBe(true);
            }
        }
    );

    it(
        'should return true when an operation uses the shape as its input',
        () => {
            for (let operationName of Object.keys(operations)) {
                const {output} = operations[operationName];
                expect(isReferencedByOperation(model, output.shape)).toBe(true);
            }
        }
    );

    it(
        'should return true when an operation uses the shape as its input',
        () => {
            for (let operationName of Object.keys(operations)) {
                const {errors} = operations[operationName];
                for (let error of errors) {
                    expect(isReferencedByOperation(model, error.shape))
                        .toBe(true);
                }
            }
        }
    );

    it(
        'should return false for shapes not referenced directly by operations',
        () => {
            const shapes = {...model.shapes};
            for (let operationName of Object.keys(operations)) {
                const {input, output, errors} = operations[operationName];
                delete shapes[input.shape];
                delete shapes[output.shape];
                for (let error of errors) {
                    delete shapes[error.shape];
                }
            }

            expect(Object.keys(shapes).length).toBeGreaterThan(0);

            for (let shapeName of Object.keys(shapes)) {
                expect(isReferencedByOperation(model, shapeName)).toBe(false);
            }
        }
    );

    it('should return false for shape names not in model', () => {
        expect(isReferencedByOperation(model, 'fdsajfsadhjk')).toBe(false);
    });
});
