import {Import} from "../Import";
import {Structure} from "./Structure";
import {GENERIC_STREAM_TYPE} from '../../constants';

export class Input extends Structure {

    toString(): string {
        return `
${this.imports}

${this.documentationFor(this.shapeName)}
export interface ${this.shapeName}${this.hasStreamingBody ? `<${GENERIC_STREAM_TYPE}>` : ''} {
${Object.keys(this.shape.members).map(this.getInterfaceDefinition, this).join('\n\n')}
}
`.trim();
    }

    private get hasStreamingBody(): boolean {
        return Object.keys(this.shape.members)
            .filter(memberName => {
                const member = this.shape.members[memberName];
                const shape = this.shapeMap[member.shape];
                return shape.type === 'blob' &&
                    (member.streaming || shape.streaming);
            })
            .length > 0;
    }

    private get imports(): string {
        return this.foreignShapes
            .map(shape => new Import(`./${shape}`, shape))
            .join('\n');
    }

}
