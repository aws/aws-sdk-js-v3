import {ShapeMap, StructureMember} from "@aws/service-model";
import {Input} from "../../../lib/Components/Type/Input";
import {getInterfaceType} from "../../../lib/Components/Type/getInterfaceType";
import {Output} from "../../../lib/Components/Type/Output";
import {OUTPUT_STRUCTURE_PREFIX} from "../../../lib/constants";
import {getMemberType} from "../../../lib/Components/Type/getMemberType";
import {ModeledStructure} from "../../../lib/Components/Type/ModeledStructure";

describe('Structure', () => {
    it('should throw when instantiated with a shape that is not a structure', () => {
        expect(() => {
            const input = new Input('foo', {
                foo: {type: 'string'}
            });
        }).toThrow();
    });

    it('should throw when a shape not in the map is referenced', () => {
        expect(() => {
            const input = (new Input('foo', {
                foo: {
                    type: 'structure',
                    members: {
                        bar: {shape: 'bar'}
                    }
                }
            })).toString();
        }).toThrow();
    });

    it('should mark required members as not optional', () => {
        const name = 'Structure';
        const shapeMap: ShapeMap = {
            [name]: {
                type: 'structure',
                members: {
                    data: {shape: 'Blob'}
                },
                required: ['data'],
            },
            Blob: {type: 'blob'}
        };
        const structure = new ModeledStructure(name, shapeMap);

        expect(structure.toString()).toEqual(
`/**
 * ${name}
 */
export interface ${name} {
    /**
     * Blob
     */
    data: ${getInterfaceType('Blob', shapeMap)};
}

export interface ${OUTPUT_STRUCTURE_PREFIX}${name} extends ${name} {
    /**
     * Blob
     */
    data: ${getMemberType('Blob', shapeMap)};
}`
        );
    });

    it(
        'should prefer documentation defined on the input structure member to that defined on the shape',
        () => {
            const name = 'OperationInput';
            const dataMember: StructureMember = {
                shape: 'Blob',
                documentation: 'CORRECT'
            };
            const shapeMap: ShapeMap = {
                [name]: {
                    type: 'structure',
                    members: {
                        data: dataMember
                    },
                    documentation: 'Input for an operation',
                },
                Blob: {
                    type: 'blob',
                    documentation: 'WRONG'
                }
            };
            const input = new Input(name, shapeMap);

            expect(input.toString()).toEqual(
`/**
 * ${shapeMap[name].documentation}
 */
export interface ${name} {
    /**
     * ${dataMember.documentation}
     */
    data?: ${getInterfaceType('Blob', shapeMap, dataMember)};
}`
            );
        }
    );
});