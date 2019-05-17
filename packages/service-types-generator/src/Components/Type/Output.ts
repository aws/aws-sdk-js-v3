import { Import } from "../Import";
import { Structure } from "./Structure";
import { IndentedSection } from "../IndentedSection";
import { getUnmarshalledShapeName, hasStreamingBody } from "./helpers";
import { OUTPUT_METADATA_PROPERTY } from "./constants";
import {
  ParameterSuppressionCustomizationDefinition,
  RuntimeTarget,
  SyntheticParameterCustomizationDefinition,
  TreeModelStructure
} from "@aws-sdk/build-types";
import { streamType } from "../../streamType";
import { FullPackageImport } from "../Client/FullPackageImport";

export class Output extends Structure {
  constructor(
    shape: TreeModelStructure,
    private readonly runtime: RuntimeTarget,
    customizations: Array<
      | ParameterSuppressionCustomizationDefinition
      | SyntheticParameterCustomizationDefinition
    > = []
  ) {
    super(shape, customizations.concat(OUTPUT_METADATA_PROPERTY));
  }

  toString(): string {
    return `${this.imports}

${this.docBlock(this.shape.documentation)}
export interface ${this.shape.name}${
      hasStreamingBody(this.shape)
        ? `<StreamType = ${streamType(this.runtime)}>`
        : ""
    } extends __aws_sdk_types.MetadataBearer {
${new IndentedSection(
  [
    ...new Map<string, string>(
      this.memberNames
        .map(
          memberName =>
            [memberName, this.getMemberDefinition(memberName)] as [
              string,
              string
            ]
        )
        .concat(this.syntheticParameters)
    ).values()
  ].join("\n\n")
)}
}
`;
  }

  private get imports(): string {
    return this.foreignShapes
      .map<{ toString(): string }>(
        shape => new Import(`./${shape}`, getUnmarshalledShapeName(shape))
      )
      .concat(this.environmentImports(), this.customizationImports)
      .join("\n");
  }

  private environmentImports(): FullPackageImport[] {
    const toImport = [];
    if (this.runtime === "node" && hasStreamingBody(this.shape)) {
      toImport.push(new FullPackageImport("stream"));
    }
    return toImport;
  }
}
