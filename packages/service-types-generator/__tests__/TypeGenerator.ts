import {model} from "../__fixtures__";
import {TypeGenerator} from "../lib/TypeGenerator";

describe('TypeGenerator', () => {
    it('should iterate over all complex shapes in a model', () => {
        const shapes = {...model.shapes};
        expect(
            Object.keys(shapes)
                .filter(shape => shapes[shape].type === 'structure')
                .length
        ).toBeGreaterThan(0);

        for (let [shapeName, _] of new TypeGenerator(model)) {
            delete shapes[shapeName];
        }

        expect(
            Object.keys(shapes)
                .filter(shape => shapes[shape].type === 'structure')
                .length
        ).toBe(0);
    });
});
