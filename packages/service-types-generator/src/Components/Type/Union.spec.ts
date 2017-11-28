import {Union} from './Union';
import {TreeModelStructure, TreeModelShape} from "@aws/build-types";

describe('Union', () => {
    const treeModelStructure: TreeModelStructure = {
        name: '',
        documentation: 'fake document',
        type: 'structure',
        required: [],
        members: {},
    }
    it('should import the shapes provided to the constructor', () => {
        const union = 
            new Union([
                {...treeModelStructure, name: 'Foo'},
                {...treeModelStructure, name: 'Bar'},
                {...treeModelStructure, name: 'Baz'},
                {...treeModelStructure, name: 'Quux'},
            ],
            'MyUnion'
        );

        expect(union.toString()).toMatch(
`import {Foo} from './Foo';
import {Bar} from './Bar';
import {Baz} from './Baz';
import {Quux} from './Quux';`
        );
    });

    it('should export a type union of all shapes provided to the constructor', () => {
        const streamingTreeModelStructure: TreeModelStructure = {
            name: '',
            documentation: 'fake document',
            type: 'structure',
            required: [],
            members: {
                arg: {
                    shape: <TreeModelShape>{
                        ...treeModelStructure,
                        name: 'arg',
                        streaming: true
                    }
                }
            }
        }
        const union = 
            new Union([
                {...streamingTreeModelStructure, name: 'Foo'},
                {...treeModelStructure, name: 'Bar'},
                {...treeModelStructure, name: 'Baz'},
                {...treeModelStructure, name: 'Quux'}
            ],
            'MyUnion'
        );

        expect(union.toString()).toMatch(
`export type MyUnion = Foo<ReadableStream> |
    Bar |
    Baz |
    Quux;`
        );
    });
});
