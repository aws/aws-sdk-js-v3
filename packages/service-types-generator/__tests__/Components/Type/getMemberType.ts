import {getMemberType} from "../../../lib/Components/Type/getMemberType";
import {
    minimalShapeMap,
    numericTypes,
    stringTypes,
} from "../../../__fixtures__";
import {
    GENERIC_STREAM_TYPE,
    OUTPUT_STRUCTURE_PREFIX,
} from "../../../lib/constants";

describe('getMemberType', () => {
    it('should translate blob to buffer', () => {
        expect(getMemberType('blob', minimalShapeMap))
            .toEqual('Uint8Array');
    });

    it('should allow streams for streaming blobs', () => {
        expect(getMemberType(
            'blob',
            {blob: {type: 'blob', streaming: true}},
        )).toEqual(GENERIC_STREAM_TYPE);
    });

    it('should allow streams for streaming structure members', () => {
        expect(getMemberType(
            'blob',
            minimalShapeMap,
            {shape: 'blob', streaming: true}
        )).toEqual(GENERIC_STREAM_TYPE);
    });

    it('should translate booleans to booleans', () => {
        expect(getMemberType('boolean', minimalShapeMap))
            .toEqual('boolean');
    });

    it('should return "number" for numeric types', () => {
        for (let numeric of numericTypes) {
            expect(getMemberType(numeric, minimalShapeMap))
                .toEqual('number');
        }
    });

    it('should return "string" for stringy types', () => {
        for (let numeric of stringTypes) {
            expect(getMemberType(numeric, minimalShapeMap))
                .toEqual('string');
        }
    });

    it('should include enumerations for strings', () => {
        expect(getMemberType(
            'string',
            {string: {type: 'string', enum: ['foo', 'bar', 'baz']}},
        )).toEqual(`'foo'|'bar'|'baz'|string`);
    });

    it('should return arrays for lists', () => {
        expect(getMemberType('list', minimalShapeMap))
            .toEqual('Array<boolean>');
    });

    it('should return objects for maps', () => {
        expect(getMemberType('map', minimalShapeMap))
            .toEqual(`{[key in string]: Uint8Array}`);
    });

    it('should return Date objects for timestamps', () => {
        expect(getMemberType('timestamp', minimalShapeMap))
            .toEqual('Date');
    });

    it('should return objects matching an interface for structures', () => {
        expect(getMemberType('structure', minimalShapeMap))
            .toEqual(`${OUTPUT_STRUCTURE_PREFIX}structure`);
    });
});