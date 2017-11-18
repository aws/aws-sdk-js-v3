import {ServiceMetadata} from '@aws/types';

export function serviceIdFromMetadata(metadata: ServiceMetadata): string {
    const {
        serviceAbbreviation,
        serviceFullName,
        serviceId,
    } = metadata;

    return serviceId || (
        (serviceAbbreviation || serviceFullName)
            .replace(/^(aws|amazon)/i, '')
            .trim()
    );
}
