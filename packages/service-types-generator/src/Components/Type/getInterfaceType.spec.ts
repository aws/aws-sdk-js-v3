import {getInterfaceType} from "./getInterfaceType";
import {GENERIC_STREAM_TYPE} from "../../constants";

describe('getInterfaceType', () => {
    it('should translate blob to buffer/string', () => {
        expect(getInterfaceType({
            type: 'blob',
            name: 'blob',
            documentation: 'blob',
        })).toEqual('ArrayBuffer|ArrayBufferView|string');
    });

    it('should allow streams for streaming blobs', () => {
        expect(getInterfaceType({
            type: 'blob',
            name: 'blob',
            documentation: 'blob',
            streaming: true,
        })).toEqual(`ArrayBuffer|ArrayBufferView|string|${GENERIC_STREAM_TYPE}`);
    });

    it('should allow streams for streaming structure members', () => {
        expect(getInterfaceType(
            {
                type: 'blob',
                name: 'blob',
                documentation: 'blob',
            },
            {
                shape: {
                    type: 'blob',
                    name: 'blob',
                    documentation: 'blob',
                },
                streaming: true,
            },
        )).toEqual(`ArrayBuffer|ArrayBufferView|string|${GENERIC_STREAM_TYPE}`);
    });

    it('should translate booleans to booleans', () => {
        expect(getInterfaceType({
            type: 'boolean',
            name: 'boolean',
            documentation: 'boolean',
        })).toEqual('boolean');
    });

    it('should return "number" for numeric types', () => {
        expect(getInterfaceType({
            type: 'number',
            name: 'number',
            documentation: 'number',
        })).toEqual('number');
    });

    it('should return "string" for stringy types', () => {
        expect(getInterfaceType({
            type: 'string',
            name: 'string',
            documentation: 'string',
        })).toEqual('string');
    });

    it('should include enumerations for strings', () => {
        expect(getInterfaceType({
            type: 'string',
            name: 'string',
            documentation: 'string',
            enum: ['foo', 'bar', 'baz'],
        })).toEqual(`'foo'|'bar'|'baz'|string`);
    });

    it('should allow arrays and iterables for lists', () => {
        expect(getInterfaceType({
            type: 'list',
            name: 'list',
            documentation: 'list',
            member: {
                shape: {
                    type: 'boolean',
                    name: 'boolean',
                    documentation: 'boolean',
                },
            },
        })).toEqual('Array<boolean>|Iterable<boolean>');
    });

    it('should allow objects and iterables for maps', () => {
        expect(getInterfaceType({
            type: 'map',
            name: 'map',
            documentation: 'map',
            key: {
                shape: {
                    type: 'string',
                    name: 'string',
                    documentation: 'string',
                },
            },
            value: {
                shape: {
                    type: 'boolean',
                    name: 'boolean',
                    documentation: 'boolean',
                },
            },
        })).toEqual(`{[key in string]: boolean}|Iterable<[string, boolean]>`);
    });

    it('should allow Date objects, strings, or numbers for timestamps', () => {
        expect(getInterfaceType({
            type: 'timestamp',
            name: 'timestamp',
            documentation: 'timestamp',
        })).toEqual('Date|string|number');
    });

    it('should allow objects matching an interface for structures', () => {
        expect(getInterfaceType({
            type: 'structure',
            name: 'structure',
            documentation: 'structure',
            members: {},
            required: [],
        })).toEqual('structure');
    });
});
