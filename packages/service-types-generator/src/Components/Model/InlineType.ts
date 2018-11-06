import {IndentedSection} from "../IndentedSection";
import {SerializationModel} from "@aws-sdk/types";

export class InlineType {
    constructor(private readonly shape: SerializationModel) {}

    toString(): string {
        const {shape} = this;

        const props = [`type: '${shape.type}'`];
        if (shape.sensitive) {
            props.push('sensitive: true');
        }
        switch (shape.type) {
            case 'blob':
                if (shape.streaming) {
                    props.push('streaming: true');
                }
                break;
            case 'string':
                if (shape.jsonValue) {
                    props.push('jsonValue: true');
                }
                // intentional fallthrough
            case 'float':
            case 'integer':
                if (shape.min) {
                    props.push(`min: ${shape.min}`);
                }
                break;
            case 'timestamp':
                if (shape.timestampFormat) {
                    props.push(`timestampFormat: '${shape.timestampFormat}'`);
                }
                break;
        }

        return `
{
${new IndentedSection(props.join(',\n'))},
}
        `.trim();
    }
}
