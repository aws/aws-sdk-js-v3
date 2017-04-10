import {isArrayOf} from "../lib/isArrayOf";

describe('isArrayOf', () => {
    const stringDeterminer = (arg: any): arg is string => typeof arg === 'string';

    it('should reject arguments that are not arrays', () => {
        expect(isArrayOf('foo', stringDeterminer)).toBe(false);
    });

    it('should accept empty arrays', () => {
        expect(isArrayOf([], stringDeterminer)).toBe(true);
    });

    it('should accept arrays where each member passes the determiner', () => {
        expect(isArrayOf(['foo', 'bar', 'baz'], stringDeterminer)).toBe(true);
    });

    it('should reject arrays where any member fails the determiner', () => {
        expect(isArrayOf(['foo', 1, 'bar', 'baz'], stringDeterminer))
            .toBe(false);
    });
});
