import {InlineType} from "../../../lib/Components/Model";
import {minimalShapeMap, scalarTypes} from "../../../__fixtures__";

describe('InlineType', () => {
    it('should return a type node of a serialization model tree', () => {
        for (let scalar of scalarTypes) {
            expect((new InlineType(minimalShapeMap[scalar])).toString())
                .toEqual(
`{
    type: '${scalar}',
}`
                );
        }
    });

    it('should include sensitive traits in the emitted type definition', () => {
        expect((new InlineType({type: 'string', sensitive: true})).toString())
            .toEqual(
`{
    type: 'string',
    sensitive: true,
}`
            );
    });

    it('should include streaming traits in the emitted type definition', () => {
        expect((new InlineType({type: 'blob', streaming: true})).toString())
            .toEqual(
`{
    type: 'blob',
    streaming: true,
}`
            );
    });

    it('should include jsonValue traits in the emitted type definition', () => {
        expect((new InlineType({type: 'string', jsonValue: true})).toString())
            .toEqual(
`{
    type: 'string',
    jsonValue: true,
}`
            );
    });

    it('should include timestampFormat traits in the emitted type definition', () => {
        expect((new InlineType({type: 'timestamp', timestampFormat: 'rfc822'})).toString())
            .toEqual(
`{
    type: 'timestamp',
    timestampFormat: 'rfc822',
}`
            );
    });

    it('should include min traits for strings', () => {
            expect((new InlineType({min: 1, type: 'string'})).toString())
                .toEqual(
`{
    type: 'string',
    min: 1,
}`
                );
    });

    it('should include min traits for numbers', () => {
        expect((new InlineType({min: 1, type: 'number'})).toString())
            .toEqual(
`{
    type: 'number',
    min: 1,
}`
            );
    });
});
