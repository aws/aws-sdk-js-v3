import {Structure} from "./Structure";
import {SerializationType} from "@aws/types";
import {IndentedSection} from "../IndentedSection";
import {getUnmarshalledShapeName} from "./helpers";
import {Import} from "../Import";
import {
    SERVICE_EXCEPTION_METADATA_IMPORT,
    SVC_EXP_ALIAS
} from "./constants";

interface InnateMember {
    memberName: string;
    type: SerializationType;
    documentation: string;
}

export class Exception extends Structure {

    toString(): string {
        const members = Object.keys(this.shape.members)
            .map(this.getMemberDefinition, this)
        return `
${this.imports}

${this.docBlock(this.shape.documentation)}
export interface ${this.shape.name} extends ${SVC_EXP_ALIAS}<${this.exceptionDetails()}> {
${new IndentedSection(this.getExceptionProperties())}
}

export interface ${this.exceptionDetails()} {
${new IndentedSection(members.join('\n\n'))}
}
        `.trim();
    }

    private get imports(): string {
        return this.foreignShapes
            .map(shape => new Import(
                `./${shape}`,
                getUnmarshalledShapeName(shape)
            ))
            .concat(SERVICE_EXCEPTION_METADATA_IMPORT)
            .join('\n');
    }

    private exceptionDetails(): string {
        return `_${this.shape.name}Details`;
    }

    private getExceptionProperties(): string {
        return `name: '${this.shape.name}';`
    }
}
