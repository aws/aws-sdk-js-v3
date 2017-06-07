import {ModelGenerator} from "../lib/ModelGenerator";
import {model} from "../__fixtures__";

describe('ModelGenerator', () => {
    it('should iterate over all complex shapes in a model', () => {
        const shapes = {...model.shapes};
        expect(Object.keys(shapes).length).toBeGreaterThan(0);

        for (let [shapeName, _] of new ModelGenerator(model)) {
            delete shapes[shapeName];
        }

        expect(
            Object.keys(shapes)
                .filter(shape => [
                    'list',
                    'map',
                    'structure',
                ].indexOf(shapes[shape].type) > -1)
                .length
        ).toBe(0);
    });

    it('should include service metadata when iterating over it', () => {
        let foundServiceMetadata = false;
        for (let [shapeName, code] of new ModelGenerator(model)) {
            if (shapeName === 'ServiceMetadata') {
                foundServiceMetadata = true;
                break;
            }
        }
        expect(foundServiceMetadata).toBe(true);
    });
});
