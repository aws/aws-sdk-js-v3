import {Import} from "../Import";
import {IndentedSection} from "../IndentedSection";
import {MemberRef} from "./MemberRef";
import {requiresImport} from "./helpers";
import {TreeModelMap} from "@aws/build-types";

export class Map {
    constructor(private readonly shape: TreeModelMap) {}

    toString(): string {
        let toReturn: string = `${new Import('@aws/types', 'Map as _Map_')}\n`;
        const properties: Array<string> = ["type: 'map'"];
        const {flattened, max, min, sensitive} = this.shape;
        if (flattened) {
            properties.push('flattened: true');
        }

        if (max) {
            properties.push(`max: ${max}`)
        }

        if (min) {
            properties.push(`min: ${min}`)
        }

        if (sensitive) {
            properties.push('sensitive: true');
        }

        for (let memberName of <Array<'key'|'value'>>['key', 'value']) {
            const member = this.shape[memberName];
            if (requiresImport(member.shape)) {
                const {name} = member.shape;
                toReturn += `${new Import(`./${name}`, name)}\n`;
            }
            properties.push(`${memberName}: ${new MemberRef(member)}`);
        }

        toReturn += `
export const ${this.shape.name}: _Map_ = {
${new IndentedSection(properties.join(',\n'))},
};`;

        return toReturn.trim();
    }
}
