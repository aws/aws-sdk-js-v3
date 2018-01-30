import {Union} from './Union';

describe('Union', () => {
    it('should import the shapes provided to the constructor', () => {
        const union = new Union(
            ['Foo', 'Bar', 'Baz', 'Quux'],
            'MyUnion'
        );

        expect(union.toString()).toMatch(
`import {Foo} from './Foo';
import {Bar} from './Bar';
import {Baz} from './Baz';
import {Quux} from './Quux';`
        );
    });

    it(
        'should export a type union of all shapes provided to the constructor',
        () => {
            const union = new Union(
                ['Foo', 'Bar', 'Baz', 'Quux'],
                'MyUnion'
            );

            expect(union.toString()).toMatch(
`export type MyUnion = Foo |
    Bar |
    Baz |
    Quux;`
            );
        }
    );

    it(
        'should export a type alias of `never` if the union has no constituent shapes',
        () => {
            const union = new Union([], 'MyUnion');

            expect(union.toString()).toBe('export type MyUnion = never;\n');

        }
    );
});
