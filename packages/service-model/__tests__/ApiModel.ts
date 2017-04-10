import {ApiModel, isApiModel} from "../lib/ApiModel";
import {minimalValidServiceMetadata} from './ServiceMetadata';

describe('isApiModel', () => {
    const minimalValidApiModel: ApiModel = {
        metadata: minimalValidServiceMetadata,
        operations: {},
        shapes: {},
    };

    it('should accept a valid ApiModel', () => {
        expect(isApiModel(minimalValidApiModel)).toBe(true);
    });

    it(
        'should reject objects where "metadata" is not a valid ServiceMetadata object',
        () => {
            expect(isApiModel(
                Object.assign({}, minimalValidApiModel, {metadata: 'string'})
            )).toBe(false);
        }
    );

    it('should reject objects where "operations" is not a valid OperationMap', () => {
        expect(isApiModel(
            Object.assign({}, minimalValidApiModel, {operations: 'string'})
        )).toBe(false);
    });

    it('should reject objects where "shapes" is not a valid ShapeMap', () => {
        expect(isApiModel(
            Object.assign({}, minimalValidApiModel, {shapes: 'string'})
        )).toBe(false);
    });

    it(
        'should reject objects where a "documentation" property is present and not a string',
        () => {
            expect(isApiModel(
                Object.assign({}, minimalValidApiModel, {documentation: {}})
            )).toBe(false);
        }
    );

    it('should reject scalar values', () => {
        for (let scalar of [null, void 0, 1, 'string', true]) {
            expect(isApiModel(scalar)).toBe(false);
        }
    });
});
