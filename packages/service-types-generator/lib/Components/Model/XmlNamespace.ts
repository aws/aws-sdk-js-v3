import {XmlNamespace as XmlNs} from "@aws/service-model";
import {IndentedSection} from "../IndentedSection";

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
        return `
{
${new IndentedSection(props.join(',\n'))},
}
        `.trim();
    }
}
