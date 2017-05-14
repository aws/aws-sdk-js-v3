import {ApiModel} from "../ApiModel";
import {Operation} from "../ApiModel/Operation";
import {ServiceMetadata} from "../ApiModel/ServiceMetadata";
import {StructureMember} from "../ApiModel/Shape";
import {
    Blob,
    Boolean,
    List,
    Map,
    Member,
    Number,
    OperationModel,
    String,
    Structure,
    Timestamp,
} from "@aws/types";

/**
 * Represents a service definition compatible with the protocol model defined
 * in the @aws/types package that has been further decorated with documentation
 * and naming metadata from the API model (as defined in ../ApiModel/*)
 */
export interface TreeModel extends Documented, Named {
    metadata: ServiceMetadata;
    operations: TreeModelOperationMap;
    shapes: TreeModelShapeMap;
}

interface Documented {
    documentation: string;
}

interface Named {
    name: string;
}

type NamedAndDocumented<T> = Documented & Named & T;

export interface NormalizedModel extends ApiModel {
    operations: NormalizedOperationMap;
}

export interface NormalizedOperation extends Operation {
    input: StructureMember;
    output: StructureMember;
    errors: Array<StructureMember>;
}

export type NormalizedOperationMap = {[key: string]: NormalizedOperation};

export interface TreeModelList extends NamedAndDocumented<List> {
    member: TreeModelMember;
}

export interface TreeModelMap extends NamedAndDocumented<Map> {
    key: TreeModelMember;
    value: TreeModelMember;
}

export interface TreeModelMember extends Partial<Documented>, Member {
    shape: TreeModelShape;
}

export interface TreeModelOperation extends NamedAndDocumented<OperationModel> {
    input: TreeModelStructure;
    output: TreeModelStructure;
    errors: Array<TreeModelStructure>;
}

export interface TreeModelOperationMap {
    [operationName: string]: TreeModelOperation;
}

export type TreeModelShape = NamedAndDocumented<
    Blob |
    Boolean |
    Number |
    Timestamp |
    TreeModelString |
    TreeModelList |
    TreeModelMap |
    TreeModelStructure
>;

export interface TreeModelShapeMap {
    [shapeName: string]: TreeModelShape;
}

export interface TreeModelString extends NamedAndDocumented<String> {
    enum?: Array<string>;
}

export interface TreeModelStructure extends NamedAndDocumented<Structure> {
    members: {[key: string]: TreeModelMember};
    exception?: boolean;
    topLevel?: 'input'|'output';
}
