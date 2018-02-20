import {
    INPUT_CONTROL_PROPERTIES as prop,
    INPUT_TYPES_IMPORT_BROWSER,
    INPUT_TYPES_IMPORT_NODE,
    INPUT_TYPES_IMPORT_UNIVERSAL,
} from './constants';
import {IndentedSection} from "../IndentedSection";
import {Input} from "./Input";
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

const INPUT_CONTROL_PROPERTIES = prop.map(propa =>
`/**
 * ${propa.documentation.split('\n').join('\n * ')}
 */
${propa.name}?: ${propa.typeExpression};`
)

describe('Input', () => {
    it(
        'should emit documentation and an interface with only SDK control parameters for an empty structure',
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
`${INPUT_TYPES_IMPORT_UNIVERSAL}
import * as __aws_types from '@aws/types';

/**
 * Operation input
 */
export interface ${name} {
${new IndentedSection(INPUT_CONTROL_PROPERTIES.join('\n\n'))}
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
`${INPUT_TYPES_IMPORT_UNIVERSAL}
import * as __aws_types from '@aws/types';

/**
 * ${inputShape.documentation}
 */
export interface ${name}<StreamType = Uint8Array> {
    /**
     * ${StreamingBlob.documentation}
     */
    data?: ${getInterfaceType(StreamingBlob)};

${new IndentedSection(INPUT_CONTROL_PROPERTIES.join('\n\n'))}
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
`${INPUT_TYPES_IMPORT_UNIVERSAL}
import * as __aws_types from '@aws/types';

/**
 * ${inputShape.documentation}
 */
export interface ${name}<StreamType = Uint8Array> {
    /**
     * ${dataMember.documentation}
     */
    data?: ${getInterfaceType(dataMember.shape, dataMember)};

${new IndentedSection(INPUT_CONTROL_PROPERTIES.join('\n\n'))}
}`
            );
        }
    );

    it(
        'should emit an interface with a type parameter if the shape has a streaming body (node)',
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

            expect(new Input(inputShape, 'node').toString()).toEqual(
`${INPUT_TYPES_IMPORT_NODE}
import * as _stream from 'stream';
import * as __aws_types from '@aws/types';

/**
 * ${inputShape.documentation}
 */
export interface ${name}<StreamType = _stream.Readable> {
    /**
     * ${StreamingBlob.documentation}
     */
    data?: ${getInterfaceType(StreamingBlob)};

${new IndentedSection(INPUT_CONTROL_PROPERTIES.join('\n\n'))}
}`
            );
        }
    );

    it(
        'should emit an interface with a type parameter if the shape has a streaming body (browser)',
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

            expect(new Input(inputShape, 'browser').toString()).toEqual(
`${INPUT_TYPES_IMPORT_BROWSER}
import * as __aws_types from '@aws/types';

/**
 * ${inputShape.documentation}
 */
export interface ${name}<StreamType = Blob> {
    /**
     * ${StreamingBlob.documentation}
     */
    data?: ${getInterfaceType(StreamingBlob)};

${new IndentedSection(INPUT_CONTROL_PROPERTIES.join('\n\n'))}
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
${INPUT_TYPES_IMPORT_UNIVERSAL}
import * as __aws_types from '@aws/types';

/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structure.documentation}
     */
    data?: ${getInterfaceType(structure)};

${new IndentedSection(INPUT_CONTROL_PROPERTIES.join('\n\n'))}
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
${INPUT_TYPES_IMPORT_UNIVERSAL}
import * as __aws_types from '@aws/types';

/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structureList.documentation}
     */
    data?: ${getInterfaceType(structureList)};

${new IndentedSection(INPUT_CONTROL_PROPERTIES.join('\n\n'))}
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
${INPUT_TYPES_IMPORT_UNIVERSAL}
import * as __aws_types from '@aws/types';

/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structureMap.documentation}
     */
    data?: ${getInterfaceType(structureMap)};

${new IndentedSection(INPUT_CONTROL_PROPERTIES.join('\n\n'))}
}`
        );
    });
});
