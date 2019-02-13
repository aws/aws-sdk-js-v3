import {Import} from '../Import';
import {IndentedSection} from "../IndentedSection";
import {ServiceMetadata as ServiceMetadataDefinition} from '@aws-sdk/types';
export class ServiceMetadata {
    constructor(private readonly metadata: ServiceMetadataDefinition) {}

    toString(): string {
        let metadata = Object.keys(this.metadata)
            .sort()
            .map((key) => {
                if (key === 'xmlNamespace') return `${key}: ${JSON.stringify(this.metadata[key])}`;
                return `${key}: '${(this.metadata as any)[key]}'`;
            }).join(',\n');
        return `
${new Import('@aws-sdk/types', 'ServiceMetadata as _ServiceMetadata_')}

export const ServiceMetadata: _ServiceMetadata_ = {
${new IndentedSection(metadata)}
};
        `.trim();
    }
}