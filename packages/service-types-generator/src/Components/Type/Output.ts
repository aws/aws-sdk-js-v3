import {Import} from "../Import";
import {Structure} from "./Structure";
import {GENERIC_STREAM_TYPE} from '../../constants';
import {IndentedSection} from "../IndentedSection";
import {getUnmarshalledShapeName, hasStreamingBody} from "./helpers";
import {
    METADATA_PROPERTY_IMPORT,
    OUTPUT_METADATA_PROPERTY,
} from './constants';

export class Output extends Structure {
    toString(): string {
        return `
${this.imports}

${this.docBlock(this.shape.documentation)}
export interface ${this.shape.name}${hasStreamingBody(this.shape) ? `<${GENERIC_STREAM_TYPE}>` : ''} {
${new IndentedSection(
    Object.keys(this.shape.members)
        .map(this.getMemberDefinition, this)
        .concat(OUTPUT_METADATA_PROPERTY)
        .join('\n\n')
)}
}
`.trim();
    }

    private get imports(): string {
        return this.foreignShapes
            .map(shape => new Import(
                `./${shape}`,
                getUnmarshalledShapeName(shape)
            ))
            .concat(METADATA_PROPERTY_IMPORT)
            .join('\n');
    }
}
