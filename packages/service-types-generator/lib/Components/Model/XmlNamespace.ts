import {XmlNamespace as XmlNs} from "@aws/service-model";

export class XmlNamespace {
    constructor(private readonly ns: XmlNs|string) {}

    toString(): string {
        const normalized: XmlNs = typeof this.ns === 'string' ?
            {uri: this.ns} : this.ns;
        const {prefix, uri} = normalized;
        const props: Array<string> = ['prefix', 'uri']
            .map((prop: 'prefix'|'uri') => normalized[prop] ?
                `${prop}: '${normalized[prop]}'` : ''
            ).filter(prop => prop);
        return `{${props.join(', ')}}`
    }
}
