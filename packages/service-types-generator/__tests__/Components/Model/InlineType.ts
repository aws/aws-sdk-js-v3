import {InlineType} from "../../../lib/Components/Model";
import {ShapeMap} from "@aws/service-model";
import {minimalShapeMap, scalarTypes} from "../../../__fixtures__";
import {getSerializationType} from "../../../lib/Components/Model/getSerializationType";

describe('InlineType', () => {
    it('should return a type node of a serialization model tree', () => {
        for (let scalar of scalarTypes) {
            expect((new InlineType(scalar, minimalShapeMap)).toString())
                .toEqual(
`{
    type: '${getSerializationType(scalar, minimalShapeMap)}',
}`
                );
        }
    });

    it('should include sensitive traits in the emitted type definition', () => {
        const shapeMap: ShapeMap = {
            password: {type: 'string', sensitive: true}
        };
        expect((new InlineType('password', shapeMap)).toString())
            .toEqual(
`{
    type: 'string',
    sensitive: true,
}`
            );
    });

    it('should include streaming traits in the emitted type definition', () => {
        const shapeMap: ShapeMap = {
            movie: {type: 'blob', streaming: true}
        };
        expect((new InlineType('movie', shapeMap)).toString())
            .toEqual(
`{
    type: 'blob',
    streaming: true,
}`
            );
    });

    it('should include jsonValue traits in the emitted type definition', () => {
        const shapeMap: ShapeMap = {
            complexHeader: {type: 'string', jsonValue: true}
        };
        expect((new InlineType('complexHeader', shapeMap)).toString())
            .toEqual(
`{
    type: 'string',
    jsonValue: true,
}`
            );
    });

    it('should include timestampFormat traits in the emitted type definition', () => {
        const shapeMap: ShapeMap = {
            dateHeader: {type: 'timestamp', timestampFormat: 'rfc822'}
        };
        expect((new InlineType('dateHeader', shapeMap)).toString())
            .toEqual(
`{
    type: 'timestamp',
    timestampFormat: 'rfc822',
}`
            );
    });

    it('should include min traits in the emitted type definition', () => {
        for (let type of ['string', 'byte', 'double', 'float', 'integer', 'long', 'short']) {
            const shapeMap: ShapeMap = <ShapeMap><any>{
                shape: {min: 1, type}
            };
            expect((new InlineType('shape', shapeMap)).toString())
                .toEqual(
`{
    type: '${getSerializationType('shape', shapeMap)}',
    min: 1,
}`
                );
        }
    });
});