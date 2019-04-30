import { Import } from "../Import";
import { MemberRef } from "./MemberRef";
import { IndentedSection } from "../IndentedSection";
import { requiresImport } from "./helpers";
import { CircularDependenciesMap } from "../helpers/detectCircularModelDependency";
import { TreeModelList } from "@aws-sdk/build-types";
import { INPUT_CONTROL_PROPERTIES } from "../Type/constants";

export class List {
  constructor(
    private readonly shape: TreeModelList,
    private readonly circularDependencies: CircularDependenciesMap = {}
  ) {}

  toString(): string {
    let imports: Array<Import> = [
      new Import("@aws-sdk/types", "List as _List_")
    ];
    const { flattened, member, min, sensitive } = this.shape;
    const props: Array<string> = ["type: 'list'"];
    if (flattened) {
      props.push("flattened: true");
    }
    if (min) {
      props.push(`min: ${min}`);
    }
    if (sensitive) {
      props.push("sensitive: true");
    }
    if (requiresImport(member.shape)) {
      const { name } = member.shape;
      imports.push(new Import(`./${name}`, name));
    }
    //has cyclic dependency from current module to sub-module
    if (
      this.circularDependencies[this.shape.name] &&
      this.circularDependencies[this.shape.name].has(member.shape.name)
    ) {
      imports
        .filter(singleImport => singleImport.path === "@aws-sdk/types")[0]
        .addSymbols(["Member as _Member_"]);
      props.push(`get member(): _Member_ {
    Object.defineProperty(${
      this.shape.name
    }, 'member', {value: ${new IndentedSection(new MemberRef(member))
        .toString()
        .replace(/^\s+/, "")}});
    return ${new IndentedSection(new MemberRef(member))
      .toString()
      .replace(/^\s+/, "")}

}`);
    } else {
      props.push(`member: ${new MemberRef(member)}`);
    }
    let toReturn = imports.reduce<string>(
      (prev, singleImport) => (prev += `${singleImport.toString()}\n`),
      ""
    );
    toReturn += `
export const ${this.shape.name}: _List_ = {
${new IndentedSection(props.join(",\n"))},
};`;

    return toReturn.trim();
  }
}
