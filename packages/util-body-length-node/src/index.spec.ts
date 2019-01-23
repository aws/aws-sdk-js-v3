import {
    calculateBodyLength
} from "./";

const arrayBuffer = new ArrayBuffer(1);

describe('caclulateBodyLength', () => {
    it(
        'should handle null/undefined objects',
        () => {
            expect(calculateBodyLength(null)).toEqual(0);
        }
    );

    it(
        'should handle string inputs',
        () => {
            expect(calculateBodyLength('foo')).toEqual(3);
        }
    );

    it(
        'should handle string inputs with multi-byte characters',
        () => {
            expect(calculateBodyLength('2。')).toEqual(4);
        }
    );

    it(
        'should handle inputs with byteLengths',
        () => {
            expect(calculateBodyLength(arrayBuffer)).toEqual(1);
        }
    );
});