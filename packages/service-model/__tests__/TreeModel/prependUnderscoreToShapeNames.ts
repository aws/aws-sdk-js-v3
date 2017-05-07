import {prependUnderscoreToShapeNames} from "../../lib/TreeModel/prependUnderscoreToShapeNames";
import {deepCopy, model} from "../../__fixtures__";

describe('prependUnderscoreToShapeNames', () => {
    it('should rename each shape to begin with an underscore', () => {
        const modelClone = prependUnderscoreToShapeNames(deepCopy(model));

        expect(Object.keys(modelClone.shapes).length)
            .toEqual(Object.keys(model.shapes).length);

        for (let shapeName of Object.keys(model)) {
            expect(modelClone.shapes[`_${shapeName}`])
                .toEqual(model.shapes[shapeName]);
        }
    });
});
