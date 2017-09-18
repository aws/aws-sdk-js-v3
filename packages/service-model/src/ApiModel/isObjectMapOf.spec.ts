import {isObjectMapOf} from "./isObjectMapOf";

describe('isArrayOf', () => {
    const stringDeterminer = (arg: any): arg is string => typeof arg === 'string';

    it('should reject arguments that are not objects', () => {
        expect(isObjectMapOf('foo', stringDeterminer)).toBe(false);
    });

    it('should accept empty objects', () => {
        expect(isObjectMapOf({}, stringDeterminer)).toBe(true);
    });

    it('should accept arrays where each member passes the determiner', () => {
        expect(isObjectMapOf({a: 'foo', b: 'bar', c: 'baz'}, stringDeterminer))
            .toBe(true);
    });

    it('should reject arrays where any member fails the determiner', () => {
        expect(isObjectMapOf(
            {a: 'foo', b: 1, c: 'bar', d: 'baz'},
            stringDeterminer
        )).toBe(false);
    });
});
