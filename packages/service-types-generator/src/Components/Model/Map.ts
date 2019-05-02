import { Import } from "../Import";
import { IndentedSection } from "../IndentedSection";
import { MemberRef } from "./MemberRef";
import { requiresImport } from "./helpers";
import { CircularDependenciesMap } from "../helpers/detectCircularModelDependency";
import { TreeModelMap } from "@aws-sdk/build-types";

export class Map {
  constructor(
    private readonly shape: TreeModelMap,
    private readonly circularDependencies: CircularDependenciesMap = {}
  ) {}

  toString(): string {
    let imports: Array<Import> = [new Import("@aws-sdk/types", "Map as _Map_")];
    const properties: Array<string> = ["type: 'map'"];
    const { flattened, sensitive } = this.shape;
    let useGetter = false;
    if (flattened) {
      properties.push("flattened: true");
    }
    if (sensitive) {
      properties.push("sensitive: true");
    }
    for (let memberName of <Array<"key" | "value">>["key", "value"]) {
      const member = this.shape[memberName];
      if (requiresImport(member.shape)) {
        const { name } = member.shape;
        imports.push(new Import(`./${name}`, name));
      }
      //has cyclic dependency from current module to sub-module
      if (
        this.circularDependencies[this.shape.name] &&
        this.circularDependencies[this.shape.name].has(member.shape.name)
      ) {
        useGetter = true;
        properties.push(`get ${memberName}(): _Member_ {
${new IndentedSection(`Object.defineProperty(${
  this.shape.name
}, '${memberName}', {value: ${new MemberRef(member)
  .toString()
  .replace(/^\s+/, "")}});
return ${new MemberRef(member).toString().replace(/^\s+/, "")};`)}
}`);
      } else {
        properties.push(`${memberName}: ${new MemberRef(member)}`);
      }
    }
    if (useGetter) {
      imports
        .filter(singleImport => singleImport.path === "@aws-sdk/types")[0]
        .addSymbols(["Member as _Member_"]);
    }
    let toReturn = imports.reduce<string>(
      (prev, singleImport) => (prev += `${singleImport.toString()}\n`),
      ""
    );
    toReturn += `
export const ${this.shape.name}: _Map_ = {
${new IndentedSection(properties.join(",\n"))},
};`;

    return toReturn.trim();
  }
}
