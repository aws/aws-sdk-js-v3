export type ResolvedFunctionArg =
  | undefined
  | string
  | boolean
  | number
  | ResolvedFunctionArg[]
  | { [key: string]: ResolvedFunctionArg };

export type Arr = ResolvedFunctionArg[];
export type Obj = Record<string, ResolvedFunctionArg>;

/**
 * Type represents endpoint parameters together with the newly assigned values from
 * conditions.
 */
export type EndpointParametersAndAssignments = Record<string, ResolvedFunctionArg>;

export interface Partition {
  name: string;
  dnsSuffix: string;
  dnsDualStackSuffix: string;
  supportsFIPS: boolean;
  supportsDualStack: boolean;
}

export interface PartitionOutputsModel {
  dnsSuffix: string;
  dualStackDnsSuffix: string;
  supportsFIPS: boolean;
  supportsDualStack: boolean;
}

export interface PartitionModel {
  version: string;
  partitions: {
    id: string;
    regionRegex: string;
    regions: Record<string, unknown>;
    outputs: PartitionOutputsModel;
  }[];
}
