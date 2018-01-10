import {IndentedSection} from "../IndentedSection";
import {
    Blob,
    Float,
    Integer,
    String,
    SerializationModel,
} from "@aws/types";

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

                range(shape, props);
                break;
            case 'string':
                if (shape.jsonValue) {
                    props.push('jsonValue: true');
                }

                if (shape.idempotencyToken) {
                    props.push('idempotencyToken: true');
                }

                if (shape.pattern) {
                    props.push(`pattern: '${shape.pattern}'`);
                }

                if (shape.enum) {
                    props.push(`enum: [${
                        shape.enum.map(val => `'${val}'`).join(',')
                    }]`);
                }

                range(shape, props);
                break;
            case 'float':
            case 'integer':
                range(shape, props);
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

function range(shape: Blob|Float|Integer|String, props: Array<string>): void {
    if (shape.min) {
        props.push(`min: ${shape.min}`);
    }

    if (shape.max) {
        props.push(`max: ${shape.max}`);
    }
}
