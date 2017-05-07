import {ApiModel, isApiModel} from "../ApiModel";
import {ServiceMetadata} from "../ServiceMetadata";
import {Shape} from "../Shape";
import {ShapeMap} from "../ShapeMap";
import {getSerializationType} from "./getSerializationType";
import {prependUnderscoreToShapeNames} from "./prependUnderscoreToShapeNames";
import {standardizeOperationIoShapes} from "./standardizeOperationIoShapes";
import {NormalizedOperationMap} from "./NormalizedModel";
import {
    Blob,
    Boolean,
    List,
    Map,
    Member,
    Number,
    OperationModel,
    String,
    Structure as SerializationStructure,
    Timestamp,
} from '@aws/types';

interface Documented {
    documentation: string;
}

interface Named {
    name: string;
}

type NamedAndDocumented<T> = Documented & Named & T;

export interface TreeModel extends Documented, Named {
    metadata: ServiceMetadata;
    operations: TreeModelOperationMap;
    shapes: TreeModelShapeMap;
}

interface TreeModelList extends NamedAndDocumented<List> {
    member: TreeModelMember;
}

interface TreeModelMap extends NamedAndDocumented<Map> {
    key: TreeModelMember;
    value: TreeModelMember;
}

interface TreeModelMember extends NamedAndDocumented<Member> {
    shape: TreeModelShape;
}

interface TreeModelOperation extends NamedAndDocumented<OperationModel> {
    input: TreeModelStructure;
    output:TreeModelStructure;
    errors: Array<TreeModelStructure>;
}

interface TreeModelOperationMap {
    [operationName: string]: TreeModelOperation;
}

type TreeModelShape = NamedAndDocumented<
    Blob |
    Boolean |
    Number |
    String |
    Timestamp |
    TreeModelList |
    TreeModelMap |
    TreeModelStructure
>;

interface TreeModelShapeMap {
    [shapeName: string]: TreeModelShape;
}

interface TreeModelStructure extends
    NamedAndDocumented<SerializationStructure>
{
    members: {[key: string]: TreeModelMember};
}

export function fromModelJson(modelJson: string): TreeModel {
    const parsed: any = JSON.parse(modelJson);
    if (isApiModel(parsed)) {
        return fromApiModel(parsed);
    }

    throw new Error('Invalid service model');
}

export function fromApiModel(model: ApiModel): TreeModel {
    const normalized = standardizeOperationIoShapes(
        prependUnderscoreToShapeNames(model)
    );

    const {metadata} = normalized;
    const {documentation = `${metadata.serviceFullName} service`} = normalized;

    const shapes = fromApiModelShapeMap(normalized.shapes);
    const operations = fromApiModelOperationMap(normalized.operations, shapes);

    return {
        documentation,
        metadata,
        name: metadata.serviceFullName,
        operations,
        shapes
    };
}

function fromApiModelShapeMap(shapeMap: ShapeMap): TreeModelShapeMap {
    const map: {[name: string]: any} = Object.keys(shapeMap)
        .reduce((carry, item) =>  Object.assign(carry, {[item]: {}}), {});

    Object.keys(shapeMap).forEach(name => {
        const shape: Shape = shapeMap[name];
        const target = map[name];
        target.name = name;
        target.documentation = shape.documentation || `${name} shape`;
        target.sensitive = shape.sensitive;
        target.type = getSerializationType(shape);

        if (
            shape.type === 'list'
            || shape.type === 'string'
            || shape.type === 'byte'
            || shape.type === 'double'
            || shape.type === 'float'
            || shape.type === 'integer'
            || shape.type === 'long'
            || shape.type === 'short'
        ) {
            target.min = shape.min;
        }

        if (shape.type === 'list' || shape.type === 'map') {
            target.flattened = shape.flattened;
        }

        if (shape.type === 'string') {

        } else if (shape.type === 'list') {
            target.member = {
                ...shape.member,
                shape: map[shape.member.shape],
            } as Member;
        } else if (shape.type === 'map') {
            for (let mapMember of <Array<'key' | 'value'>>['key', 'value']) {
                target[mapMember] = {
                    ...shape[mapMember],
                    shape: map[shape[mapMember].shape],
                } as Member;
            }
        } else if (shape.type === 'structure') {
            target.required = shape.required || [];
            target.members = Object.keys(shape.members).reduce((
                members: {[key: string]: Member},
                memberName: string
            ) => {
                const member = shape.members[memberName];
                members[memberName] = {
                    ...member,
                    shape: map[member.shape],
                };
                return members;
            }, {});
        }
    });

    return map;
}

function fromApiModelOperationMap(
    operationMap: NormalizedOperationMap,
    shapes: TreeModelShapeMap
): TreeModelOperationMap {
    return Object.keys(operationMap)
        .reduce((
            carry: TreeModelOperationMap,
            operationName: string
        ) => {
            const {
                name,
                errors: errorDeclaration,
                http,
                input: inputDeclaration,
                output: outputDeclaration,
            } = operationMap[operationName];
            const {
                documentation = `${name} operation`,
            } = operationMap[operationName];
            const input = shapes[inputDeclaration.shape];
            const output = shapes[outputDeclaration.shape];
            const errors = errorDeclaration
                .map(errorShape => {
                    const shape = shapes[errorShape.shape];
                    if (shape.type === 'structure') {
                        return shape;
                    }

                    throw new Error('Non-structure used as error shape.');
                });

            if (
                input.type === 'structure'
                && output.type === 'structure'
            ) {
                carry[operationName] = {
                    documentation,
                    errors,
                    http,
                    input,
                    name,
                    output
                };
                return carry;
            }

            throw new Error('Invalid operation');
        }, {});
}
