import {ApiModel} from "../ApiModel";
import {Operation} from "../Operation";
import {StructureMember} from "../Shape";

export interface NormalizedModel extends ApiModel {
    operations: NormalizedOperationMap;
}

interface NormalizedOperation extends Operation {
    input: StructureMember;
    output: StructureMember;
    errors: Array<StructureMember>;
}

export type NormalizedOperationMap = {[key: string]: NormalizedOperation};
