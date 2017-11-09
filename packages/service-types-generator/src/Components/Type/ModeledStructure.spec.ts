import {getMemberType} from "./getMemberType";
import {ModeledStructure} from "./ModeledStructure";
import {getInterfaceType} from "./getInterfaceType";
import {getUnmarshalledShapeName} from "./helpers";
import {TreeModelStructure} from "@aws/build-types";

describe('ModeledStructure', () => {
    it(
        'should emit documentation, an empty interface, and an aliased type for an empty structure',
        () => {
            const name = 'DataStructure';
            const structure: TreeModelStructure = {
                name,
                type: 'structure',
                documentation: 'Structured data that is nested in operation input or output',
                required: [],
                members: {},
            };

            expect(new ModeledStructure(structure).toString()).toEqual(
`/**
 * ${structure.documentation}
 */
export interface ${name} {
    
}

export type ${getUnmarshalledShapeName(name)} = ${name};`
            );
        }
    );

    it(
        'should emit an output structure that is an alias of the main (input) structure when all members are scalar',
        () => {
            const name = 'DataStructure';
            const structure: TreeModelStructure = {
                name: 'DataStructure',
                documentation: 'a structure',
                type: 'structure',
                required: [],
                members: {
                    boolean: {shape: {type: 'boolean', name: 'boolean', documentation: 'boolean'}},
                    float: {shape: {type: 'float', name: 'float', documentation: 'float'}},
                    integer: {shape: {type: 'integer', name: 'integer', documentation: 'integer'}},
                    string: {shape: {type: 'string', name: 'string', documentation: 'string'}}
                },
            };

            expect(new ModeledStructure(structure).toString()).toEqual(
`/**
 * ${structure.documentation}
 */
export interface ${structure.name} {
    /**
     * boolean
     */
    boolean?: ${getInterfaceType(structure.members.boolean.shape)};
    
    /**
     * float
     */
    float?: ${getInterfaceType(structure.members.float.shape)};
    
    /**
     * integer
     */
    integer?: ${getInterfaceType(structure.members.integer.shape)};
    
    /**
     * string
     */
    string?: ${getInterfaceType(structure.members.string.shape)};
}

export type ${getUnmarshalledShapeName(structure.name)} = ${structure.name};`
            );
        }
    );

    it(
        'should define a child interface for output when a member has a stricter unmarshalled type than marshalled type',
        () => {
            const name = 'DataStructure';
            const structure: TreeModelStructure = {
                name,
                documentation: 'a structure',
                type: 'structure',
                required: [],
                members: {
                    createdAt: {shape: {type: 'timestamp', name: 'timestamp', documentation: 'DateTime'}},
                },
            };

            expect(new ModeledStructure(structure).toString()).toEqual(
`/**
 * ${structure.documentation}
 */
export interface ${name} {
    /**
     * DateTime
     */
    createdAt?: ${getInterfaceType(structure.members.createdAt.shape)};
}

export interface ${getUnmarshalledShapeName(name)} extends ${name} {
    /**
     * DateTime
     */
    createdAt?: ${getMemberType(structure.members.createdAt.shape)};
}`
            );
        }
    );

    it('should import structure shapes in both input and output forms', () => {
        const name = 'DataStructure';
        const nestedStructure: TreeModelStructure = {
            type: 'structure',
            name: 'Structure',
            documentation: 'structure',
            required: [],
            members: {},
        };
        const structure: TreeModelStructure = {
            name,
            documentation: 'A structure',
            type: 'structure',
            required: [],
            members: {
                data: {
                    shape: nestedStructure,
                }
            }
        };

        expect(new ModeledStructure(structure).toString()).toEqual(
`import {${nestedStructure.name}, ${getUnmarshalledShapeName(nestedStructure.name)}} from './${nestedStructure.name}';

/**
 * ${structure.documentation}
 */
export interface ${name} {
    /**
     * ${nestedStructure.documentation}
     */
    data?: ${getInterfaceType(nestedStructure)};
}

export interface ${getUnmarshalledShapeName(name)} extends ${name} {
    /**
     * ${nestedStructure.documentation}
     */
    data?: ${getMemberType(nestedStructure)};
}`
        );
    });
});
