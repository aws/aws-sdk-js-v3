import {
    SerializationModel,
    ServiceMetadata,
} from "@aws/types";

export function requiresImport(shape: SerializationModel): boolean {
    return ['list', 'map', 'structure'].indexOf(shape.type) > -1;
}

/**
 * Removes unused fields from the ServiceMetadata. 
 */
export function pruneServiceMetadata<T extends ServiceMetadata>(metadata: T): ServiceMetadata {
    const acceptedFields = new Map<keyof ServiceMetadata, true>([
        ['apiVersion', true],
        ['endpointPrefix', true],
        ['jsonVersion', true],
        ['protocol', true],
        ['serviceAbbreviation', true],
        ['serviceFullName', true],
        ['signatureVersion', true],
        ['targetPrefix', true],
        ['timestampFormat', true],
        ['uid', true],
        ['xmlNamespace', true]
    ]);

    const prunedMetadata: any = {};
    for (let field of acceptedFields.keys()) {
        if (metadata[field]) {
            prunedMetadata[field] = metadata[field];
        }
    }
    return prunedMetadata;
}