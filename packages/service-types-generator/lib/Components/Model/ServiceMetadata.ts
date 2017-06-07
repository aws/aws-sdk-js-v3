import {ServiceMetadata as ServiceMetadataDefinition, pruneServiceMetadata} from '@aws/service-model'; 
import {Import} from '../Import';
export class ServiceMetadata {
    constructor(private readonly metadata: ServiceMetadataDefinition) {}

    toString(): string {
        return `
${new Import('@aws/service-model', 'ServiceMetadata as _ServiceMetadata_')}

export const ServiceMetadata: _ServiceMetadata_ = ${JSON.stringify(pruneServiceMetadata(this.metadata), null, 4)};
        `.trim();
    }
}