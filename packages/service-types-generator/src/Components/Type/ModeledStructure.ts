import { getMemberType } from "./getMemberType";
import { getInterfaceType } from "./getInterfaceType";
import { Import } from "../Import";
import { Structure } from "./Structure";
import { IndentedSection } from "../IndentedSection";
import { getUnmarshalledShapeName } from "./helpers";

export class ModeledStructure extends Structure {
  toString(): string {
    return `
${this.imports}

${this.docBlock(this.shape.documentation)}
export interface ${this.shape.name} {
${new IndentedSection(
  Object.keys(this.shape.members)
    .map(this.getInterfaceDefinition, this)
    .join("\n\n")
)}
}

export ${this.outputType}
`.trim();
  }

  private get imports(): string {
    return this.foreignShapes
      .map(
        shape =>
          new Import(`./${shape}`, shape, getUnmarshalledShapeName(shape))
      )
      .join("\n");
  }

  private get outputOverrides(): Array<string> {
    return Object.keys(this.shape.members).reduce(
      (carry: Array<string>, memberName: string) => {
        const member = this.shape.members[memberName];
        const mType = getMemberType(member.shape, member);
        const iType = getInterfaceType(member.shape, member);
        if (mType !== iType) {
          carry.push(memberName);
        }
        return carry;
      },
      []
    );
  }

  private get outputType(): string {
    const { name } = this.shape;
    const { outputOverrides } = this;
    if (outputOverrides.length > 0) {
      return `
interface ${getUnmarshalledShapeName(name)} extends ${name} {
${new IndentedSection(
  outputOverrides.map(this.getMemberDefinition, this).join("\n\n")
)}
}
            `.trim();
    }

    return `type ${getUnmarshalledShapeName(name)} = ${name};`;
  }
}
