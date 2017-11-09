import {getMemberType} from "./getMemberType";
import {getUnmarshalledShapeName} from "./helpers";
import {
    NodeList,
    NonStreamingBlob,
    PrimaryLocationMap,
    StreamingBlob,
    ValidationException,
} from "../../shapes.fixture";
import {GENERIC_STREAM_TYPE} from "../../constants";

describe('getMemberType', () => {
    it('should translate blob to buffer', () => {
        expect(getMemberType(NonStreamingBlob))
            .toEqual('Uint8Array');
    });

    it('should allow streams for streaming blobs', () => {
        expect(getMemberType(StreamingBlob)).toEqual(GENERIC_STREAM_TYPE);
    });

    it('should allow streams for streaming structure members', () => {
        expect(getMemberType(
            NonStreamingBlob,
            {shape: NonStreamingBlob, streaming: true}
        )).toEqual(GENERIC_STREAM_TYPE);
    });

    it('should translate booleans to booleans', () => {
        expect(getMemberType({
            type: 'boolean',
            name: 'boolean',
            documentation: 'boolean',
        })).toEqual('boolean');
    });

    it('should return "number" for float types', () => {
        expect(getMemberType({
            type: 'float',
            name: 'number',
            documentation: 'number',
        })).toEqual('number');
    });

    it('should return "number" for integer types', () => {
        expect(getMemberType({
            type: 'integer',
            name: 'number',
            documentation: 'number',
        })).toEqual('number');
    });

    it('should return "string" for string types', () => {
        expect(getMemberType({
            type: 'string',
            name: 'string',
            documentation: 'string',
        })).toEqual('string');
    });

    it('should include enumerations for strings', () => {
        expect(getMemberType({
            type: 'string',
            enum: ['foo', 'bar', 'baz'],
            name: 'enumString',
            documentation: 'a string with enumerations',
        })).toEqual(`'foo'|'bar'|'baz'|string`);
    });

    it('should return arrays for lists', () => {
        expect(getMemberType(NodeList))
            .toEqual('Array<string>');
    });

    it('should return objects for maps', () => {
        expect(getMemberType(PrimaryLocationMap))
            .toEqual(`{[key: string]: string}`);
    });

    it('should return Date objects for timestamps', () => {
        expect(getMemberType({
            type: 'timestamp',
            name: 'timestamp',
            documentation: 'timestamp',
        })).toEqual('Date');
    });

    it('should return objects matching an interface for structures', () => {
        expect(getMemberType(ValidationException))
            .toEqual(getUnmarshalledShapeName(ValidationException.name));
    });
});
