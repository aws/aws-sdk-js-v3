import { isMember } from "./isMember";
import { isReferencedByOperation } from "./isReferencedByOperation";
import { convertXmlNamespace } from "./convertXmlNamespace";
import { prependUnderscoreToShapeNames } from "./prependUnderscoreToShapeNames";
import {
  Structure as SerializationStructure,
  ServiceMetadata
} from "@aws-sdk/types";
import {
  ApiModel,
  NormalizedModel,
  Operation,
  Structure,
  StructureMember
} from "@aws-sdk/build-types";

const EMPTY_STRUCTURE: Structure & SerializationStructure = {
  type: "structure",
  required: [],
  members: {}
};

/**
 * "Normalizes" a service model by ensuring that:
 *   * All operations have a defined input and output structure
 *   * All input and output structures follow a predictable naming pattern
 *      (\`${operationName}Input\` and \`${operationName}Output\`)
 *   * All internal shapes (those not used as an input, output, or error) have a
 *      name that begins with an underscore
 *   * All shapes are referenced either by an operation or another shape
 *   * Service Metadata is pruned of unrecognized fields
 *
 * @internal
 */
export function normalizeModel(model: ApiModel): NormalizedModel {
  model = prependUnderscoreToShapeNames(model);

  Object.keys(model.operations).forEach(operationName => {
    const operation: Operation = model.operations[operationName];
    operation.errors = operation.errors || [];

    for (let ioShapeId of <Array<"input" | "output">>["input", "output"]) {
      const ioShape: StructureMember | undefined = operation[ioShapeId];
      const shape: Structure = JSON.parse(
        JSON.stringify(ioShape ? model.shapes[ioShape.shape] : EMPTY_STRUCTURE)
      );
      shape.topLevel = ioShapeId;

      const ioShapeName = `${operationName}${
        ioShapeId === "input" ? "Input" : "Output"
      }`;
      model.shapes[ioShapeName] = shape;
      operation[ioShapeId] = {
        ...(ioShape || {}),
        shape: ioShapeName
      };
    }
  });

  model.metadata = pruneServiceMetadata(model.metadata);

  return pruneShapes(<NormalizedModel>model);
}

/**
 * Removes unused fields from the ServiceMetadata.
 */
function pruneServiceMetadata<T extends ServiceMetadata>(
  metadata: T
): ServiceMetadata {
  const acceptedFields = new Set<keyof ServiceMetadata>([
    "apiVersion",
    "endpointPrefix",
    "jsonVersion",
    "protocol",
    "serviceAbbreviation",
    "serviceFullName",
    "serviceId",
    "signatureVersion",
    "signingName",
    "targetPrefix",
    "timestampFormat",
    "uid",
    "xmlNamespace"
  ]);

  const prunedMetadata: any = {};
  for (let field of acceptedFields) {
    if (metadata[field]) {
      prunedMetadata[field] =
        field === "xmlNamespace"
          ? convertXmlNamespace(metadata[field])
          : metadata[field];
    }
  }

  return prunedMetadata;
}

function pruneShapes(model: NormalizedModel): NormalizedModel {
  for (let maybeOrphan of Object.keys(model.shapes)) {
    if (
      !isMember(model, maybeOrphan) &&
      !isReferencedByOperation(model, maybeOrphan)
    ) {
      delete model.shapes[maybeOrphan];
    }
  }

  return model;
}
