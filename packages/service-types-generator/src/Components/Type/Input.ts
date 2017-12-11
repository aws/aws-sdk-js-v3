import {Import} from "../Import";
import {Structure} from "./Structure";
import {IndentedSection} from "../IndentedSection";
import {hasStreamingBody} from "./helpers";
import {GENERIC_STREAM_TYPE} from '../../constants';
import {
    RuntimeTarget,
    TreeModelStructure
} from '@aws/build-types';

export class Input extends Structure {
    constructor(
        protected readonly shape: TreeModelStructure,
        private readonly runtime?: RuntimeTarget
    ) {
        super(shape);
    }

    toString(): string {
        const streamType = this.runtime ? ` = ${this.getStreamType()}` : '';
        return `
${this.imports}

${this.docBlock(this.shape.documentation)}
export interface ${this.shape.name}${hasStreamingBody(this.shape) ? `<StreamType${streamType}>` : ''} {
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
            .concat(this.environmentImports())
            .join('\n');
    }

    private environmentImports(): Import[] {
        const toImport = [];
        if (this.runtime === 'node' && hasStreamingBody(this.shape)) {
            toImport.push(new Import('stream', 'Readable'));
        }
        return toImport;
    }

    private getStreamType() {
        switch (this.runtime) {
            case 'browser':
                return 'ReadableStream';
            case 'node':
                return 'Readable';
            case 'universal':
                return 'Uint8Array';
            default:
                return GENERIC_STREAM_TYPE;
        }
    }
}