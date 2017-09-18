import {Import} from "../Import";
import {Structure} from "./Structure";
import {GENERIC_STREAM_TYPE} from '../../constants';
import {IndentedSection} from "../IndentedSection";
import {hasStreamingBody} from "./helpers";

export class Input extends Structure {

    toString(): string {
        return `
${this.imports}

${this.docBlock(this.shape.documentation)}
export interface ${this.shape.name}${hasStreamingBody(this.shape) ? `<${GENERIC_STREAM_TYPE}>` : ''} {
${new IndentedSection(
    Object.keys(this.shape.members)
        .map(this.getInterfaceDefinition, this)
        .join('\n\n')
)}
}
`.trim();
    }

    private get imports(): string {
        return this.foreignShapes
            .map(shape => new Import(`./${shape}`, shape))
            .join('\n');
    }

}
