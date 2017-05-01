import {getInterfaceType} from "../../../lib/Components/Type/getInterfaceType";
import {
    minimalShapeMap,
    numericTypes,
    stringTypes,
} from "../../../__fixtures__";
import {GENERIC_STREAM_TYPE} from "../../../lib/constants";

describe('getInterfaceType', () => {
    it('should translate blob to buffer/string', () => {
        expect(getInterfaceType('blob', minimalShapeMap))
            .toEqual('ArrayBuffer|ArrayBufferView|string');
    });

    it('should allow streams for streaming blobs', () => {
        expect(getInterfaceType(
            'blob',
            {blob: {type: 'blob', streaming: true}}
        )).toEqual(`ArrayBuffer|ArrayBufferView|string|${GENERIC_STREAM_TYPE}`);
    });

    it('should allow streams for streaming structure members', () => {
        expect(getInterfaceType(
            'blob',
            minimalShapeMap,
            {shape: 'blob', streaming: true}
        )).toEqual(`ArrayBuffer|ArrayBufferView|string|${GENERIC_STREAM_TYPE}`);
    });

    it('should translate booleans to booleans', () => {
        expect(getInterfaceType('boolean', minimalShapeMap))
            .toEqual('boolean');
    });

    it('should return "number" for numeric types', () => {
        for (let numeric of numericTypes) {
            expect(getInterfaceType(numeric, minimalShapeMap))
                .toEqual('number');
        }
    });

    it('should return "string" for stringy types', () => {
        for (let numeric of stringTypes) {
            expect(getInterfaceType(numeric, minimalShapeMap))
                .toEqual('string');
        }
    });

    it('should include enumerations for strings', () => {
        expect(getInterfaceType(
            'string',
            {string: {type: 'string', enum: ['foo', 'bar', 'baz']}},
            {shape: 'string'}
        )).toEqual(`'foo'|'bar'|'baz'|string`);
    });

    it('should allow arrays and iterables for lists', () => {
        expect(getInterfaceType('list', minimalShapeMap))
            .toEqual('Array<boolean>|Iterable<boolean>');
    });

    it('should allow objects and iterables for maps', () => {
        const valueType = 'ArrayBuffer|ArrayBufferView|string';
        expect(getInterfaceType('map', minimalShapeMap))
            .toEqual(`{[key in string]: ${valueType}}|Iterable<[string, ${valueType}]>`);
    });

    it('should allow Date objects, strings, or numbers for timestamps', () => {
        expect(getInterfaceType('timestamp', minimalShapeMap))
            .toEqual('Date|string|number');
    });

    it('should allow objects matching an interface for structures', () => {
        expect(getInterfaceType('structure', minimalShapeMap))
            .toEqual('structure');
    });
});