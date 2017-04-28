import {getMemberType} from "./getMemberType";
import {getInterfaceType} from "./getInterfaceType";
import {Import} from "../Import";
import {Structure} from "./Structure";
import {StructureMember} from "@aws/service-model";
import {OUTPUT_STRUCTURE_PREFIX} from '../../constants';

export class ModeledStructure extends Structure {

    toString(): string {
        return `
${this.imports}

${this.documentationFor(this.shapeName)}
export interface ${this.shapeName} {
${Object.keys(this.shape.members).map(this.getInterfaceDefinition, this).join('\n\n')}
}

export ${this.outputType}
`.trim();
    }

    private get imports(): string {
        return this.foreignShapes
            .map(shape => new Import(
                `./${shape}`,
                shape,
                `${OUTPUT_STRUCTURE_PREFIX}${shape}`
            )).join('\n');
    }

    private get outputOverrides(): Array<string> {
        return Object.keys(this.shape.members).reduce((
            carry: Array<string>,
            memberName: string
        ) => {
            const member: StructureMember = this.shape.members[memberName];
            const mType = getMemberType(member.shape, this.shapeMap, member);
            const iType = getInterfaceType(member.shape, this.shapeMap, member);
            if (mType !== iType) {
                carry.push(memberName);
            }
            return carry;
        }, []);
    }

    private get outputType(): string {
        const {outputOverrides, shapeName} = this;
        if (outputOverrides.length > 0) {
            return `
interface ${OUTPUT_STRUCTURE_PREFIX}${shapeName} extends ${shapeName} {
${outputOverrides.map(this.getMemberDefinition, this).join('\n\n')}
}
            `.trim();
        }

        return `type ${OUTPUT_STRUCTURE_PREFIX}${shapeName} = ${shapeName};`
    }

}
