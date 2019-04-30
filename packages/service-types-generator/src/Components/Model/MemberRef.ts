import { XmlNamespace } from "./XmlNamespace";
import { InlineType } from "./InlineType";
import { IndentedSection } from "../IndentedSection";
import { requiresImport } from "./helpers";
import { TreeModelMember } from "@aws-sdk/build-types";

export class MemberRef {
  constructor(private readonly member: TreeModelMember) {}

  toString(): string {
    const {
      flattened,
      location,
      locationName,
      shape,
      streaming,
      xmlAttribute,
      xmlNamespace,
      queryName,
      resultWrapper
    } = this.member;
    const properties: Array<string> = [
      `shape: ${!requiresImport(shape) ? new InlineType(shape) : shape.name}`
    ];
    if (flattened) {
      properties.push("flattened: true");
    }
    if (location) {
      properties.push(`location: '${location}'`);
    }
    if (locationName) {
      properties.push(`locationName: '${locationName}'`);
    }
    if (streaming) {
      properties.push(`streaming: true`);
    }
    if (xmlAttribute) {
      properties.push(`xmlAttribute: true`);
    }
    if (xmlNamespace) {
      properties.push(`xmlNamespace: ${new XmlNamespace(xmlNamespace)}`);
    }
    if (queryName) {
      properties.push(`queryName: '${queryName}'`);
    }
    if (resultWrapper) {
      properties.push(`resultWrapper: '${resultWrapper}'`);
    }
    return `
{
${new IndentedSection(properties.join(",\n"))},
}
        `.trim();
  }
}
