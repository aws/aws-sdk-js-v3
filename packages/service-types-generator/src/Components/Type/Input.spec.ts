import {Input} from "./Input";
import {GENERIC_STREAM_TYPE} from "../../constants";
import {getInterfaceType} from "./getInterfaceType";
import {
    TreeModelList,
    TreeModelMap,
    TreeModelStructure,
} from "@aws/build-types";
import {
    NonStreamingBlob,
    StreamingBlob,
} from "../../shapes.fixture";

describe('Input', () => {
    it(
        'should emit documentation and an empty interface for an empty structure',
        () => {
            const name = 'OperationInput';
            const input = new Input({
                name,
                type: 'structure',
                documentation: 'Operation input',
                required: [],
                members: {},
            }, 'universal');

            expect(input.toString()).toEqual(
`/**
 * Operation input
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
            const inputShape: TreeModelStructure = {
                name,
                documentation: 'A structure',
                type: 'structure',
                required: [],
                members: {
                    data: {
                        shape: StreamingBlob,
                    }
                }
            };

            expect(new Input(inputShape, 'universal').toString()).toEqual(
`/**
 * ${inputShape.documentation}
 */
export interface ${name}<Uint8Array> {
    /**
     * ${StreamingBlob.documentation}
     */
    data?: ${getInterfaceType(StreamingBlob)};
}`
            );
        }
    );

    it(
        'should emit an interface with a type parameter if the input shape has a streaming member',
        () => {
            const name = 'OperationInput';
            const dataMember = {
                shape: NonStreamingBlob,
                streaming: true,
                documentation: 'a streaming blob',
            };
            const inputShape: TreeModelStructure = {
                name,
                documentation: 'A structure',
                type: 'structure',
                required: [],
                members: {
                    data: {
                        ...dataMember,
                    },
                }
            };

            expect(new Input(inputShape, 'universal').toString()).toEqual(
`/**
 * ${inputShape.documentation}
 */
export interface ${name}<Uint8Array> {
    /**
     * ${dataMember.documentation}
     */
    data?: ${getInterfaceType(dataMember.shape, dataMember)};
}`
            );
        }
    );

    it('should import structure shapes', () => {
        const name = 'OperationInput';
        const structure: TreeModelStructure = {
            type: 'structure',
            name: 'Structure',
            documentation: 'structure',
            required: [],
            members: {},
        };
        const inputShape: TreeModelStructure = {
            name,
            documentation: 'A structure',
            type: 'structure',
            required: [],
            members: {
                data: {
                    shape: structure,
                }
            }
        };

        expect(new Input(inputShape, 'universal').toString()).toEqual(
`import {${structure.name}} from './${structure.name}';

/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structure.documentation}
     */
    data?: ${getInterfaceType(structure)};
}`
        );
    });

    it('should import structure list members', () => {
        const name = 'OperationInput';
        const structureName = 'NestedStructure';
        const structureList: TreeModelList = {
            type: 'list',
            name: 'structureList',
            documentation: 'StructureList',
            member: {
                shape: {
                    type: 'structure',
                    name: structureName,
                    documentation: structureName,
                    required: [],
                    members: {},
                },
            },
        };
        const inputShape: TreeModelStructure = {
            name,
            documentation: 'A structure',
            type: 'structure',
            required: [],
            members: {
                data: {
                    shape: structureList,
                }
            }
        };

        expect(new Input(inputShape, 'universal').toString()).toEqual(
`import {${structureName}} from './${structureName}';

/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structureList.documentation}
     */
    data?: ${getInterfaceType(structureList)};
}`
        );
    });

    it('should import structure map values', () => {
        const name = 'OperationInput';
        const structureName = 'NestedStructure';
        const structureMap: TreeModelMap = {
            type: 'map',
            name: 'structureList',
            documentation: 'StructureMap',
            key: {
                shape: {
                    type: 'string',
                    name: 'string',
                    documentation: 'string',
                },
            },
            value: {
                shape: {
                    type: 'structure',
                    name: structureName,
                    documentation: structureName,
                    required: [],
                    members: {},
                },
            },
        };
        const inputShape: TreeModelStructure = {
            name,
            documentation: 'A structure',
            type: 'structure',
            required: [],
            members: {
                data: {
                    shape: structureMap,
                }
            }
        };

        expect(new Input(inputShape, 'universal').toString()).toEqual(
`import {${structureName}} from './${structureName}';

/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structureMap.documentation}
     */
    data?: ${getInterfaceType(structureMap)};
}`
        );
    });
});
