import { Import } from "../Import";

export class Union {
  constructor(
    protected readonly constituentShapeNames: Array<string>,
    protected readonly typeName: string
  ) {}

  toString(): string {
    if (this.constituentShapeNames.length) {
      return `${this.imports}
export type ${this.typeName} = ${this.constituentShapeNames.join(" |\n    ")};
`;
    } else {
      return `export type ${this.typeName} = never;\n`;
    }
  }

  protected get imports(): string {
    return this.constituentShapeNames
      .map(shape => new Import(`./${shape}`, shape))
      .join("\n");
  }
}
