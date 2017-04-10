import {isOperationMap} from "../lib/OperationMap";

describe('isOperationMap', () => {
    it('should accept a valid operation map', () => {
        expect(isOperationMap({
            'foo': {
                name: 'string',
                http: {method: 'string', requestUri: 'string'}
            }
        })).toBe(true);
    });

    it('should reject a map of objects that are not operations', () => {
        expect(isOperationMap({'foo': {bar: 'baz'}})).toBe(false);
    });

    it('should reject scalar values', () => {
        for (let scalar of [null, void 0, 1, 'string', true]) {
            expect(isOperationMap(scalar)).toBe(false);
        }
    });
});
