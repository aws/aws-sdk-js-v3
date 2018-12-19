import {Import} from "../Import";
import {MemberRef} from "./MemberRef";
import {IndentedSection} from "../IndentedSection";
import {requiresImport} from "./helpers";
import {CircularDependenciesMap} from "../helpers/detectCircularModelDependency";
import {TreeModelList} from "@aws-sdk/build-types";

export class List {
    constructor(
        private readonly shape: TreeModelList,
        private readonly circularDependencies: CircularDependenciesMap = {}
    ) {}

    toString(): string {
        let toReturn: string = `${new Import('@aws-sdk/types', 'List as _List_')}\n`;
        const {flattened, member, min, sensitive} = this.shape;
        const props: Array<string> = ["type: 'list'"];
        if (flattened) {
            props.push('flattened: true');
        }
        if (min) {
            props.push(`min: ${min}`)
        }
        if (sensitive) {
            props.push('sensitive: true');
        }
        if (requiresImport(member.shape)) {
            const {name} = member.shape;
            toReturn += `${new Import(`./${name}`, name)}\n`;
        }
        props.push(`member: ${new MemberRef(member)}`);

        toReturn += `
export const ${this.shape.name}: _List_ = {
${new IndentedSection(props.join(',\n'))},
};`;

        return toReturn.trim();
    }
}
