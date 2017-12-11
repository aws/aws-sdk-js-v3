import {Input} from "./Input";
import {getInterfaceType} from "./getInterfaceType";
import {getMemberType} from "./getMemberType";
import {getUnmarshalledShapeName} from "./helpers";
import {ModeledStructure} from "./ModeledStructure";
import {
    TreeModelShape,
    TreeModelStructure,
} from "@aws/build-types";

describe('Structure', () => {
    it('should mark required members as not optional', () => {
        const name = 'Structure';
        const blob: TreeModelShape = {
            type: 'blob',
            name: 'blob',
            documentation: 'blob',
        };
        const structure = new ModeledStructure({
            name,
            type: 'structure',
            documentation: 'A structure',
            required: ['data'],
            members: {
                data: {
                    shape: blob,
                },
            },
        });

        expect(structure.toString()).toEqual(
`/**
 * A structure
 */
export interface ${name} {
    /**
     * blob
     */
    data: ${getInterfaceType(blob)};
}

export interface ${getUnmarshalledShapeName(name)} extends ${name} {
    /**
     * blob
     */
    data: ${getMemberType(blob)};
}`
        );
    });

    it(
        'should prefer documentation defined on the input structure member to that defined on the shape',
        () => {
            const name = 'OperationInput';
            const inputShape: TreeModelStructure = {
                name,
                documentation: 'A structure',
                type: 'structure',
                required: [],
                members: {
                    data: {
                        documentation: 'CORRECT',
                        shape: {
                            name: 'blob',
                            type: 'blob',
                            documentation: 'WRONG',
                        },
                    }
                }
            };
            const dataMember = inputShape.members.data;

            expect(new Input(inputShape, 'universal').toString()).toEqual(
`/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * CORRECT
     */
    data?: ${getInterfaceType(dataMember.shape, dataMember)};
}`
            );
        }
    );
});
