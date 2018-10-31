import { isApiModel } from '../ApiModel';
import { normalizeModel } from './normalizeModel';
import { getSerializationType } from './getSerializationType';
import { convertXmlNamespace } from './convertXmlNamespace';
import {
    Blob as ProtocolBlob,
    Boolean as ProtocolBoolean,
    Number,
    String as ProtocolString,
    ServiceMetadata,
    Timestamp as ProtocolTimestamp,
} from '@aws-sdk/types';
import {
    ApiModel,
    Blob,
    Boolean,
    Byte,
    Character,
    Double,
    Float,
    Integer,
    List,
    Long,
    Map,
    NormalizedOperationMap,
    Shape,
    ShapeMap,
    Short,
    String,
    Structure,
    Timestamp,
    TreeModel,
    TreeModelList,
    TreeModelMap,
    TreeModelMember,
    TreeModelOperationMap,
    TreeModelShapeMap,
    TreeModelString,
    TreeModelStructure,
} from '@aws-sdk/build-types';

/**
 * Converts a JSON string into a TreeModel structure.
 *
 * @throws Error if the provided JSON is not a service model.
 */
export function fromModelJson(modelJson: string): TreeModel {
    const parsed: any = JSON.parse(modelJson);
    if (isApiModel(parsed)) {
        return fromApiModel(parsed);
    }

    throw new Error('Invalid service model');
}

/**
 * Converts a service model into a TreeModel structure in which shapes are
 * referenced with object pointers instead of by name.
 */
export function fromApiModel(model: ApiModel): TreeModel {
    const normalized = normalizeModel(model);

    const {metadata} = normalized;
    const {documentation = `${metadata.serviceFullName} service`} = normalized;

    const shapes = fromApiModelShapeMap(normalized.shapes, metadata);
    const operations = fromApiModelOperationMap(
        normalized.operations,
        shapes,
        metadata
    );

    return {
        documentation,
        metadata,
        name: metadata.serviceFullName,
        operations,
        shapes
    };
}

function fromApiModelShapeMap(shapeMap: ShapeMap, metadata: ServiceMetadata): TreeModelShapeMap {
    const map: {[name: string]: any} = Object.keys(shapeMap)
        .reduce((carry, item) => ({...carry, [item]: {}}), {});

    Object.keys(shapeMap).forEach(name => {
        const shape: Shape = shapeMap[name];
        const target = map[name];

        target.name = name;
        target.documentation = shape.documentation || `${name} shape`;
        target.sensitive = shape.sensitive;
        target.deprecated = shape.deprecated;
        target.type = getSerializationType(shape);

        switch (shape.type) {
            case 'blob':
                visitBlob(target, shape);
                break;
            case 'boolean':
                visitBoolean(target, shape);
                break;
            case 'byte':
            case 'double':
            case 'float':
            case 'integer':
            case 'long':
            case 'short':
                visitNumeric(target, shape);
                break;
            case 'character':
                visitCharacter(target, shape);
                break;
            case 'list':
                visitList(target, shape, map);
                break;
            case 'map':
                visitMap(target, shape, map);
                break;
            case 'string':
                visitString(target, shape);
                break;
            case 'structure':
                visitStructure(target, shape, map);
                break;
            case 'timestamp':
                visitTimestamp(target, shape, metadata.timestampFormat);
                break;
        }
    });

    return map;
}

function fromApiModelOperationMap(
    operationMap: NormalizedOperationMap,
    shapes: TreeModelShapeMap,
    metadata: ServiceMetadata
): TreeModelOperationMap {
    return Object.keys(operationMap).reduce((
        carry: TreeModelOperationMap,
        operationName: string
    ) => {
        const {
            authtype,
            name,
            errors,
            http,
            input,
            output,
        } = operationMap[operationName];
        const {
            documentation = `${name} operation`,
        } = operationMap[operationName];

        return {
            ...carry,
            [operationName]: {
                documentation,
                http,
                name,
                metadata,
                input: {
                    ...input,
                    shape: shapes[input.shape] as TreeModelStructure,
                },
                output: {
                    ...output,
                    shape: shapes[output.shape] as TreeModelStructure,
                },
                errors: errors.map(errorShape => ({
                    ...errorShape,
                    shape: shapes[errorShape.shape] as TreeModelStructure
                })),
                authtype,
            }
        };
    }, {});
}

function visitBlob(
    toPopulate: Partial<ProtocolBlob>,
    sourceData: Blob
): void {
    toPopulate.streaming = sourceData.streaming;
}

function visitBoolean(
    toPopulate: Partial<ProtocolBoolean>,
    sourceData: Boolean
): void {
    // pass
}

function visitNumeric(
    toPopulate: Partial<Number>,
    sourceData: Byte|Double|Float|Integer|Long|Short
): void {
    toPopulate.min = sourceData.min;
}

function visitCharacter(
    toPopulate: Partial<ProtocolString>,
    sourceData: Character
): void {
    // pass
}

function visitString(
    toPopulate: Partial<TreeModelString>,
    sourceData: String
): void {
    toPopulate.jsonValue = sourceData.jsonValue;
    toPopulate.idempotencyToken = sourceData.idempotencyToken;
    toPopulate.min = sourceData.min;
    toPopulate.enum = sourceData.enum;
}

function visitTimestamp(
    toPopulate: Partial<ProtocolTimestamp>,
    sourceData: Timestamp,
    serviceTimestampFormat?: string
): void {
    toPopulate.timestampFormat = sourceData.timestampFormat || serviceTimestampFormat;
}

function visitList(
    toPopulate: Partial<TreeModelList>,
    sourceData: List,
    shapeMap: TreeModelShapeMap
): void {
    toPopulate.flattened = sourceData.flattened;
    toPopulate.min = sourceData.min;
    toPopulate.member = {
        ...sourceData.member,
        shape: shapeMap[sourceData.member.shape],
    };
}

function visitMap(
    toPopulate: Partial<TreeModelMap>,
    sourceData: Map,
    shapeMap: TreeModelShapeMap
): void {
    toPopulate.flattened = sourceData.flattened;
    for (let mapMember of <Array<'key' | 'value'>>['key', 'value']) {
        toPopulate[mapMember] = {
            ...sourceData[mapMember],
            shape: shapeMap[sourceData[mapMember].shape],
        };
    }
}

function visitStructure(
    toPopulate: Partial<TreeModelStructure>,
    sourceData: Structure,
    shapeMap: TreeModelShapeMap
): void {
    toPopulate.required = sourceData.required || [];
    toPopulate.topLevel = sourceData.topLevel;
    toPopulate.payload = sourceData.payload;
    if (sourceData.exception) {
        toPopulate.exception = true;
        toPopulate.exceptionType = toPopulate.name;
        toPopulate.exceptionCode = (sourceData.error && sourceData.error.code) || void 0;
    }

    toPopulate.members = Object.keys(sourceData.members).reduce((
        members: {[key: string]: TreeModelMember},
        memberName: string
    ) => {
        const member = sourceData.members[memberName];
        members[memberName] = {
            ...member,
            xmlNamespace: convertXmlNamespace(member.xmlNamespace),
            shape: shapeMap[member.shape],
        };
        return members;
    }, {});
}
