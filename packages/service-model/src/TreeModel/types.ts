import {ApiModel} from "../ApiModel";
import {Operation} from "../ApiModel/Operation";
import {ServiceMetadata} from "@aws/types";
import {StructureMember} from "../ApiModel/Shape";
import {
    Blob,
    Boolean,
    Float,
    Integer,
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

/**
 * Denotes an object that contains a documentation string.
 */
export interface Documented {
    documentation: string;
}

/**
 * Denotes an object that contains a name string.
 */
export interface Named {
    name: string;
}

/**
 * Has a name and documentation.
 */
export type NamedAndDocumented<T> = Documented & Named & T;

/**
 * @internal
 */
export interface NormalizedModel extends ApiModel {
    operations: NormalizedOperationMap;
}

/**
 * @internal
 */
export interface NormalizedOperation extends Operation {
    input: StructureMember;
    output: StructureMember;
    errors: Array<StructureMember>;
}

/**
 * @internal
 */
export type NormalizedOperationMap = {[key: string]: NormalizedOperation};

/**
 * @inheritDoc
 *
 * A TreeModelList structure additionally contains a name, documentation, and a
 * name and documentation for its element structure.
 */
export interface TreeModelList extends NamedAndDocumented<List> {
    member: TreeModelMember;
}

/**
 * @inheritDoc
 *
 * A TreeModelMap structure additionally contains a name, documentation, and a
 * name and documentation for its key and value structures.
 */
export interface TreeModelMap extends NamedAndDocumented<Map> {
    key: TreeModelMember;
    value: TreeModelMember;
}

/**
 * @inheritDoc
 *
 * A TreeModelMember additionally contains a name and documentation string. The
 * member may have documentation about this specific usage of the shape, which
 * should be used (if present) instead of the shape's generic documentation.
 */
export interface TreeModelMember extends Partial<Documented>, Member {
    shape: TreeModelShape;
}

/**
 * @inheritDoc
 *
 * This member's shape must be a structure.
 */
export interface TreeModelOperationMember extends TreeModelMember {
    shape: TreeModelStructure;
}

/**
 * @inheritDoc
 *
 * Additionally contains a name and documentation string, as do all shapes
 * referenced by this operation.
 */
export interface TreeModelOperation extends NamedAndDocumented<OperationModel> {
    input: TreeModelOperationMember;
    output: TreeModelOperationMember;
    errors: Array<TreeModelOperationMember>;
}

export interface TreeModelOperationMap {
    [operationName: string]: TreeModelOperation;
}

/**
 * A shape that may appear in a tree model. Contains the serialization model
 * along with the associated shape name and documentation string.
 */
export type TreeModelShape = NamedAndDocumented<
    Blob |
    Boolean |
    Float |
    Integer |
    Timestamp |
    TreeModelString |
    TreeModelList |
    TreeModelMap |
    TreeModelStructure
>;

export interface TreeModelShapeMap {
    [shapeName: string]: TreeModelShape;
}

/**
 * @inheritDoc
 *
 * Additionally contains the shape name, documentation string, and any
 * enumerated values.
 */
export interface TreeModelString extends NamedAndDocumented<String> {
    enum?: Array<string>;
}

/**
 * @inheritDoc
 *
 * Additionally contains the shape name and documentation string, as well as
 * names and documentation strings for shapes used as structure members. Also
 * indicates if this structure represents an exception top or an operation input
 * or output.
 */
export interface TreeModelStructure extends NamedAndDocumented<Structure> {
    members: {[key: string]: TreeModelMember};
    exception?: boolean;
    topLevel?: 'input'|'output';
}
