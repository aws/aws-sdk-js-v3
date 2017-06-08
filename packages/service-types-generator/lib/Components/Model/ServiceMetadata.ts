import {pruneServiceMetadata} from './helpers';
import {Import} from '../Import';
import {ServiceMetadata as ServiceMetadataDefinition} from '@aws/types';
export class ServiceMetadata {
    constructor(private readonly metadata: ServiceMetadataDefinition) {}

    toString(): string {
        return `
${new Import('@aws/types', 'ServiceMetadata as _ServiceMetadata_')}

export const ServiceMetadata: _ServiceMetadata_ = ${JSON.stringify(pruneServiceMetadata(this.metadata), null, 4)};
        `.trim();
    }
}