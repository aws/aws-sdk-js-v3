import {Output} from "./Output";
import {GENERIC_STREAM_TYPE} from "../../constants";
import {getUnmarshalledShapeName} from "./helpers";
import {
    TreeModelList,
    TreeModelMap,
    TreeModelStructure,
} from "@aws/build-types";
import {getMemberType} from "./getMemberType";
import {
    NonStreamingBlob,
    StreamingBlob,
} from "../../shapes.fixture";
import {IndentedSection} from "../IndentedSection";
import {
    METADATA_PROPERTY_IMPORT,
    OUTPUT_METADATA_PROPERTY,
} from "./constants";

describe('Output', () => {
    it(
        'should emit documentation and an empty interface for an empty structure',
        () => {
            const name = 'OperationOutput';
            const output = new Output({
                name,
                type: 'structure',
                documentation: 'Operation output',
                required: [],
                members: {},
            });

            expect(output.toString()).toEqual(
`${METADATA_PROPERTY_IMPORT.toString()}

/**
 * Operation output
 */
export interface ${name} {
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
}`
            );
        }
    );

    it(
        'should emit an interface with a type parameter if the shape has a streaming body',
        () => {
            const name = 'OperationOutput';
            const output = new Output({
                name,
                type: 'structure',
                documentation: 'Operation output',
                required: [],
                members: {
                    data: {
                        shape: StreamingBlob,
                    }
                },
            });

            expect(output.toString()).toEqual(
`${METADATA_PROPERTY_IMPORT.toString()}

/**
 * Operation output
 */
export interface ${name}<${GENERIC_STREAM_TYPE}> {
    /**
     * ${StreamingBlob.documentation}
     */
    data?: ${getMemberType(StreamingBlob)};
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
}`
            );
        }
    );

    it(
        'should emit an interface with a type parameter if the shape has a streaming member',
        () => {
            const name = 'OperationOutput';
            const dataMember = {
                shape: NonStreamingBlob,
                streaming: true,
                documentation: 'a streaming blob',
            };
            const output: TreeModelStructure = {
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

            expect(new Output(output).toString()).toEqual(
`${METADATA_PROPERTY_IMPORT.toString()}

/**
 * ${output.documentation}
 */
export interface ${name}<${GENERIC_STREAM_TYPE}> {
    /**
     * ${dataMember.documentation}
     */
    data?: ${getMemberType(dataMember.shape, dataMember)};
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
}`
            );
        }
    );

    it('should import structure shapes', () => {
        const name = 'OperationOutput';
        const structure: TreeModelStructure = {
            type: 'structure',
            name: 'Structure',
            documentation: 'structure',
            required: [],
            members: {},
        };
        const outputShape: TreeModelStructure = {
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

        expect(new Output(outputShape).toString()).toEqual(
`import {${getUnmarshalledShapeName(structure.name)}} from './${structure.name}';
${METADATA_PROPERTY_IMPORT.toString()}

/**
 * ${outputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structure.documentation}
     */
    data?: ${getMemberType(structure)};
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
}`
        );
    });

    it('should import structure list members', () => {
        const name = 'OperationOutput';
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

        expect(new Output(inputShape).toString()).toEqual(
`import {${getUnmarshalledShapeName(structureName)}} from './${structureName}';
${METADATA_PROPERTY_IMPORT.toString()}

/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structureList.documentation}
     */
    data?: ${getMemberType(structureList)};
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
}`
        );
    });

    it('should import structure map values', () => {
        const name = 'OperationOutput';
        const keyStructure = 'KeyStructure';
        const valueStructure = 'ValueStructure';
        const structureMap: TreeModelMap = {
            type: 'map',
            name: 'structureList',
            documentation: 'StructureMap',
            key: {
                shape: {
                    type: 'string',
                    name: keyStructure,
                    documentation: keyStructure,
                },
            },
            value: {
                shape: {
                    type: 'structure',
                    name: valueStructure,
                    documentation: valueStructure,
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

        expect(new Output(inputShape).toString()).toEqual(
`import {${getUnmarshalledShapeName(valueStructure)}} from './${valueStructure}';
${METADATA_PROPERTY_IMPORT.toString()}

/**
 * ${inputShape.documentation}
 */
export interface ${name} {
    /**
     * ${structureMap.documentation}
     */
    data?: ${getMemberType(structureMap)};
    
${new IndentedSection(OUTPUT_METADATA_PROPERTY)}
}`
        );
    });
});
