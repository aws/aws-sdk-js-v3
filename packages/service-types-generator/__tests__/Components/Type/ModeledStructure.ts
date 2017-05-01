import {OUTPUT_STRUCTURE_PREFIX} from "../../../lib/constants";
import {ShapeMap} from "@aws/service-model";
import {getMemberType} from "../../../lib/Components/Type/getMemberType";
import {ModeledStructure} from "../../../lib/Components/Type/ModeledStructure";
import {getInterfaceType} from "../../../lib/Components/Type/getInterfaceType";
import {minimalShapeMap} from "../../../__fixtures__";
import {IndentedSection} from "../../../lib/Components/IndentedSection";

describe('ModeledStructure', () => {
    it(
        'should emit documentation, an empty interface, and an aliased type for an empty structure',
        () => {
            const name = 'DataStructure';
            const shapeMap: ShapeMap = {
                [name]: {
                    type: 'structure',
                    members: {},
                    documentation: 'Structured data that is nested in operation input or output'
                }
            };
            const structure = new ModeledStructure(name, shapeMap);

            expect(structure.toString()).toEqual(
`/**
 * ${shapeMap[name].documentation}
 */
export interface ${name} {
    
}

export type ${OUTPUT_STRUCTURE_PREFIX}${name} = ${name};`
            );
        }
    );

    it(
        'should emit an output structure that is an alias of the main (input) structure when all members are scalar',
        () => {
            const scalarOnlyShapeMap: ShapeMap = Object.keys(minimalShapeMap)
                .reduce((carry, item) => {
                    if (['blob', 'timestamp', 'list', 'map', 'structure'].indexOf(item) > -1) {
                        return carry;
                    }
                    return Object.assign(carry, {[item]: minimalShapeMap[item]});
                }, {});
            const name = 'DataStructure';
            const shapeMap: ShapeMap = {
                ...minimalShapeMap,
                [name]: {
                    type: 'structure',
                    members: Object.keys(scalarOnlyShapeMap)
                        .reduce((carry, item) => {
                            return Object.assign(carry, {[item]: {shape: item}});
                        }, {}),
                }
            };
            const structure = new ModeledStructure(name, shapeMap);

            expect(structure.toString()).toEqual(
`/**
 * ${name}
 */
export interface ${name} {
${new IndentedSection(Object.keys(scalarOnlyShapeMap).map(scalarType => `
/**
 * ${scalarType}
 */
${scalarType}?: ${getInterfaceType(scalarType, scalarOnlyShapeMap)};
`.trim()).join('\n\n'))}
}

export type ${OUTPUT_STRUCTURE_PREFIX}${name} = ${name};`
            );
        }
    );

    it(
        'should define a child interface for output when a member has a stricter unmarshalled type than marshalled type',
        () => {
            const name = 'DataStructure';
            const shapeMap: ShapeMap = {
                [name]: {
                    type: 'structure',
                    members: {
                        createdAt: {shape: 'DateTime'},
                    },
                },
                DateTime: {
                    type: 'timestamp',
                }
            };
            const structure = new ModeledStructure(name, shapeMap);

            expect(structure.toString()).toEqual(
`/**
 * ${name}
 */
export interface ${name} {
    /**
     * DateTime
     */
    createdAt?: ${getInterfaceType('DateTime', shapeMap)};
}

export interface ${OUTPUT_STRUCTURE_PREFIX}${name} extends ${name} {
    /**
     * DateTime
     */
    createdAt?: ${getMemberType('DateTime', shapeMap)};
}`
            );
        }
    );

    it('should import structure shapes in both input and output forms', () => {
        const name = 'DataStructure';
        const shapeMap: ShapeMap = {
            [name]: {
                type: 'structure',
                members: {
                    data: {shape: 'Structure'}
                },
            },
            Structure: {
                type: 'structure',
                members: {},
            }
        };
        const structure = new ModeledStructure(name, shapeMap);

        expect(structure.toString()).toEqual(
`import {Structure, ${OUTPUT_STRUCTURE_PREFIX}Structure} from './Structure';

/**
 * ${name}
 */
export interface ${name} {
    /**
     * Structure
     */
    data?: ${getInterfaceType('Structure', shapeMap)};
}

export interface ${OUTPUT_STRUCTURE_PREFIX}${name} extends ${name} {
    /**
     * Structure
     */
    data?: ${getMemberType('Structure', shapeMap)};
}`
        );
    });
});