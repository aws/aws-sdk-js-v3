import {Input} from "../../../lib/Components/Type/Input";
import {GENERIC_STREAM_TYPE} from "../../../lib/constants";
import {ShapeMap} from "@aws/service-model";
import {getInterfaceType} from "../../../lib/Components/Type/getInterfaceType";

describe('Input', () => {
    it(
        'should emit documentation and an empty interface for an empty structure',
        () => {
            const name = 'OperationInput';
            const shapeMap: ShapeMap = {
                [name]: {
                    type: 'structure',
                    members: {},
                    documentation: 'Input for an operation'
                }
            };
            const input = new Input(name, shapeMap);

            expect(input.toString()).toEqual(
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
            const input = new Input(name, shapeMap);

            expect(input.toString()).toEqual(
`/**
 * ${name}
 */
export interface ${name}<${GENERIC_STREAM_TYPE}> {
    /**
     * ${shapeMap.StreamingBlob.documentation}
     */
    data?: ${getInterfaceType('StreamingBlob', shapeMap, {shape: 'StreamingBlob'})};
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
        const input = new Input(name, shapeMap);

        expect(input.toString()).toEqual(
`import {Structure} from './Structure';

/**
 * ${name}
 */
export interface ${name} {
    /**
     * Structure
     */
    data?: ${getInterfaceType('Structure', shapeMap, {shape: 'Structure'})};
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
        const input = new Input(name, shapeMap);

        expect(input.toString()).toEqual(
`import {Structure} from './Structure';

/**
 * ${name}
 */
export interface ${name} {
    /**
     * StructureList
     */
    data?: ${getInterfaceType('StructureList', shapeMap, {shape: 'StructureList'})};
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
        const input = new Input(name, shapeMap);

        expect(input.toString()).toEqual(
`import {Structure} from './Structure';

/**
 * ${name}
 */
export interface ${name} {
    /**
     * StructureMap
     */
    data?: ${getInterfaceType('StructureMap', shapeMap, {shape: 'StructureMap'})};
}`
        );
    });
});