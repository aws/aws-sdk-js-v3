import {deepCopy} from "./deepCopy.fixture";
import {model} from "./normalizedModel.fixture";
import {renameShape} from "./renameShape";
import {createHash} from 'crypto';
import {readFileSync} from 'fs';
import {isMember} from "./isMember";
import {isReferencedByOperation} from "./isReferencedByOperation";

const newName = createHash('md5')
    .update(readFileSync(__filename))
    .digest('hex');

describe('renameShape', () => {
    for (let shapeName of Object.keys(model.shapes)) {
        it(`should rename ${shapeName}`, () => {
            const modelClone = deepCopy(model);
            renameShape(modelClone, shapeName, newName);

            expect(modelClone.shapes[shapeName]).not.toBeDefined();
            expect(modelClone.shapes[newName]).toBeDefined();
        });

        it(`should rename references to ${shapeName}`, () => {
            const modelClone = deepCopy(model);
            renameShape(modelClone, shapeName, newName);

            expect(isMember(modelClone, shapeName)).toBe(false);
            expect(isMember(modelClone, newName))
                .toBe(isMember(model, shapeName));
        });

        it(`should rename operation usages of ${shapeName}`, () => {
            const modelClone = deepCopy(model);
            renameShape(modelClone, shapeName, newName);

            expect(isReferencedByOperation(modelClone, shapeName)).toBe(false);
            expect(isReferencedByOperation(modelClone, newName))
                .toBe(isReferencedByOperation(model, shapeName));
        });
    }

    it('should be a no-op when the shape being renamed is not in model', () => {
        const modelClone = deepCopy(model);
        renameShape(modelClone, newName, 'name');

        expect(modelClone).toEqual(model);
    });
});
