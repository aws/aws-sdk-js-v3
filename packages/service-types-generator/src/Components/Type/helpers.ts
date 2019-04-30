import { SyntheticParameterCustomizationDefinition } from "@aws-sdk/build-types";
import { Structure } from "@aws-sdk/types";
const OUTPUT_STRUCTURE_PREFIX = "Unmarshalled";

export function getUnmarshalledShapeName(shapeName: string): string {
  // Any shape that is not an exception or operation input or output will be
  // prefixed with one or more underscores. Capture those to keep as a prefix.
  const [visibilityPrefix] = shapeName.split(/[^_]/, 1);
  return (
    visibilityPrefix +
    OUTPUT_STRUCTURE_PREFIX +
    shapeName.substring(visibilityPrefix.length)
  );
}

export function hasStreamingBody(structure: Structure): boolean {
  return (
    Object.keys(structure.members)
      .map(memberName => structure.members[memberName])
      .filter(member => {
        const { shape } = member;
        return shape.type === "blob" && (member.streaming || shape.streaming);
      }).length > 0
  );
}
