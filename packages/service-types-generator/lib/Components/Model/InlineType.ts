import {getSerializationType} from "./getSerializationType";
import {ShapeMap} from "@aws/service-model";

export class InlineType {
    constructor(
        private readonly shapeName: string,
        private readonly shapeMap: ShapeMap
    ) {}

    toString(): string {
        const {shapeName, shapeMap} = this;
        const shape = shapeMap[shapeName];

        const props = [`type: '${getSerializationType(shapeName, shapeMap)}'`];
        if (shape.sensitive) {
            props.push('sensitive: true');
        }
        switch (shape.type) {
            case 'blob':
                if (shape.streaming) {
                    props.push('streaming: true');
                }
                break;
            case 'byte':
            case 'double':
            case 'float':
            case 'integer':
            case 'long':
            case 'short':
            case 'string':
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

        return `{${props.join(',')}}`;
    }
}
