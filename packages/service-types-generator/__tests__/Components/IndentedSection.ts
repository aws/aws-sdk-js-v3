import {IndentedSection} from "../../lib/Components/IndentedSection";
describe('IndentedSection', () => {
    it('should prepend four spaces to each line by default', () => {
        expect((new IndentedSection('a\na')).toString())
            .toEqual('    a\n    a');
    });

    it('should allow multiple indentations to be prepended to each line', () => {
        expect((new IndentedSection('a\na', 2)).toString())
            .toEqual('        a\n        a');
    });

    it('should allow no indentations to be prepended to each line', () => {
        expect((new IndentedSection('a\na', 0)).toString())
            .toEqual('a\na');
    });
});