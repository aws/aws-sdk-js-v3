import { ARN, parse, validate } from "@aws-sdk/util-arn-parser";

import { partitionModel } from "../fixtures/partitions";
import {
  Arr,
  EndpointParametersAndAssignments,
  Obj,
  Partition,
  PartitionOutputsModel,
  ResolvedFunctionArg,
} from "../types";
import { validateArgTypes } from "./validateArgTypes";

export const isSet = (params: EndpointParametersAndAssignments, argv: ResolvedFunctionArg[]): boolean => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [arg0] = validateArgTypes("isSet", argv, "string" as const);
  return Object.hasOwnProperty.call(params, arg0);
};

export const not = (argv: ResolvedFunctionArg[]): boolean => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [arg0] = validateArgTypes("not", argv, "boolean" as const);
  return !arg0;
};

/**
 * getAttr pathing strings are composed of types of components:
 * * Keys, eg. scheme as in uri#scheme
 * * Indexes, eg. [2] as in bucketArn.resourceId[2]
 * An index (eg. [2]), if present, MUST, occur at the end of the path. This is because indexing always produces a
 * nullable value and you cannot further index or lookup a key into a nullable field.
 */
export const getAttr = (params: Obj | Arr, argv: ResolvedFunctionArg[]): ResolvedFunctionArg => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [path] = validateArgTypes("getAttr", argv, "string" as const);
  const pathComponents = path.split(".");
  let pointer = params;
  for (const pathComponent of pathComponents) {
    const sliceIndex = pathComponent.indexOf("[");
    if (sliceIndex != -1) {
      if (pathComponent[pathComponent.length - 1] !== "]") {
        throw new Error(`Invalid getAttr path ${path}`);
      }
      const slice = parseInt(pathComponent.substring(sliceIndex, pathComponent.length - 1));
      // @ts-ignore the path traversal must be valid
      return pointer[slice];
    } else {
      // @ts-ignore the path traversal must be valid
      pointer = pointer[pathComponent];
    }
  }
  return pointer;
};

const constructPartition = (name: string, model: PartitionOutputsModel): Partition => ({
  name,
  dnsDualStackSuffix: model.dualStackDnsSuffix,
  dnsSuffix: model.dnsSuffix,
  supportsDualStack: model.supportsDualStack,
  supportsFIPS: model.supportsFIPS,
});

export const getPartition = (argv: ResolvedFunctionArg[]): Partition | undefined => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [region] = validateArgTypes("getPartition", argv, "string" as const);
  for (const { regions, id, outputs } of partitionModel.partitions) {
    if (Object.keys(regions).includes(region)) {
      return constructPartition(id, outputs);
    }
  }
  for (const { regionRegex, id, outputs } of partitionModel.partitions) {
    const regex = new RegExp(regionRegex);
    if (regex.test(region)) {
      return constructPartition(id, outputs);
    }
  }
  const { id, outputs } = partitionModel.partitions.filter(({ id }) => id === "aws")[0]!;
  return constructPartition(id, outputs);
};

export const parseArn = (argv: ResolvedFunctionArg[]): ARN | undefined => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [arn] = validateArgTypes("parseArn", argv, "string" as const);
  if (validate(arn)) {
    return parse(arn);
  }
};

export const substring = (argv: ResolvedFunctionArg[]): string | undefined => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [input, start, stop, reverse] = validateArgTypes(
    "substring",
    argv,
    "string" as const,
    "number" as const,
    "number" as const,
    "boolean" as const
  );
  if (start >= stop || input.length < stop) {
    return undefined;
  }
  const sub = input.substring(start, stop);
  if (!reverse) {
    return sub.split("").reverse().join("");
  } else {
    return sub;
  }
};

export const stringEquals = (argv: ResolvedFunctionArg[]): boolean => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [value1, value2] = validateArgTypes("stringEquals", argv, "string" as const, "string" as const);
  return value1 === value2;
};

export const isValidHostLabel = (argv: ResolvedFunctionArg[]): boolean => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [value, allowSubDomains] = validateArgTypes("isValidHostLabel", argv, "string" as const, "boolean" as const);
  // TODO: implement it
  return true;
};

export const uriEncode = (argv: ResolvedFunctionArg[]): string => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [component] = validateArgTypes("uriEncode", argv, "string" as const);
  // TODO: implement it
  return component;
};

export const parseURL = (argv: ResolvedFunctionArg[]): URL | undefined => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [urlString] = validateArgTypes("paseURL", argv, "string" as const);
  // TODO: implement it
  return new URL(urlString);
};

export const booleanEquals = (argv: ResolvedFunctionArg[]): boolean => {
  // TODO: maybe we don't need to validate them because model guarantees validity.
  const [bool1, bool2] = validateArgTypes("booleanEquals", argv, "boolean" as const, "boolean" as const);
  return bool1 === bool2;
};
