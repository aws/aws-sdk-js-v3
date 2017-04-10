import {isShapeMap} from "../lib/ShapeMap";

describe('isShapeMap', () => {
    it('should accept a valid shape map', () => {
        expect(isShapeMap({'foo': {type: 'boolean'}})).toBe(true);
    });

    it('should reject a map of objects that are not shapes', () => {
        expect(isShapeMap({'foo': {bar: 'baz'}})).toBe(false);
    });

    it('should reject scalar values', () => {
        for (let scalar of [null, void 0, 1, 'string', true]) {
            expect(isShapeMap(scalar)).toBe(false);
        }
    });
});
