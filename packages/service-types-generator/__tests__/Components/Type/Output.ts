import {Output} from "../../../lib/Components/Type/Output";
import {
    GENERIC_STREAM_TYPE,
    OUTPUT_STRUCTURE_PREFIX
} from "../../../lib/constants";
import {ShapeMap} from "@aws/service-model";
import {getMemberType} from "../../../lib/Components/Type/getMemberType";

describe('Output', () => {
    it(
        'should emit documentation and an empty interface for an empty structure',
        () => {
            const name = 'OperationInput';
            const shapeMap: ShapeMap = {
                [name]: {
                    type: 'structure',
                    members: {},
                    documentation: 'Output for an operation'
                }
            };
            const output = new Output(name, shapeMap);

            expect(output.toString()).toEqual(
`/**
 * ${shapeMap[name].documentation}
 */
export interface ${name} {
    
}`
            );
        }
    );

    it(
        'should emit an interface with a type parameter if the shape has a streaming body',
        () => {
            const name = 'OperationInput';
            const shapeMap: ShapeMap = {
                [name]: {
                    type: 'structure',
                    members: {
                        data: {shape: 'StreamingBlob'}
                    },
                    payload: 'data',
                },
                StreamingBlob: {
                    type: 'blob',
                    streaming: true,
                    documentation: 'a streaming blob'
                }
            };
            const output = new Output(name, shapeMap);

            expect(output.toString()).toEqual(
`/**
 * ${name}
 */
export interface ${name}<${GENERIC_STREAM_TYPE}> {
    /**
     * ${shapeMap.StreamingBlob.documentation}
     */
    data?: ${getMemberType('StreamingBlob', shapeMap, {shape: 'StreamingBlob'})};
}`
            );
        }
    );

    it('should import structure shapes', () => {
        const name = 'OperationInput';
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
        const output = new Output(name, shapeMap);

        expect(output.toString()).toEqual(
`import {${OUTPUT_STRUCTURE_PREFIX}Structure} from './Structure';

/**
 * ${name}
 */
export interface ${name} {
    /**
     * Structure
     */
    data?: ${getMemberType('Structure', shapeMap, {shape: 'Structure'})};
}`
        );
    });

    it('should import structure list members', () => {
        const name = 'OperationInput';
        const shapeMap: ShapeMap = {
            [name]: {
                type: 'structure',
                members: {
                    data: {shape: 'StructureList'}
                },
            },
            Structure: {
                type: 'structure',
                members: {},
            },
            StructureList: {
                type: 'list',
                member: {shape: 'Structure'},
            }
        };
        const output = new Output(name, shapeMap);

        expect(output.toString()).toEqual(
`import {${OUTPUT_STRUCTURE_PREFIX}Structure} from './Structure';

/**
 * ${name}
 */
export interface ${name} {
    /**
     * StructureList
     */
    data?: ${getMemberType('StructureList', shapeMap, {shape: 'StructureList'})};
}`
        );
    });

    it('should import structure map values', () => {
        const name = 'OperationInput';
        const shapeMap: ShapeMap = {
            [name]: {
                type: 'structure',
                members: {
                    data: {shape: 'StructureMap'}
                },
            },
            String: {type: 'string'},
            Structure: {
                type: 'structure',
                members: {},
            },
            StructureMap: {
                type: 'map',
                key: {shape: 'String'},
                value: {shape: 'Structure'},
            }
        };
        const output = new Output(name, shapeMap);

        expect(output.toString()).toEqual(
`import {${OUTPUT_STRUCTURE_PREFIX}Structure} from './Structure';

/**
 * ${name}
 */
export interface ${name} {
    /**
     * StructureMap
     */
    data?: ${getMemberType('StructureMap', shapeMap, {shape: 'StructureMap'})};
}`
        );
    });
});