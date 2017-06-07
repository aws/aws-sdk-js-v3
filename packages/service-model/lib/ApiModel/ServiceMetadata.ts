import {
    ServiceMetadata as _ServiceMetadata_,
    SupportedProtocol as _SupportedProtocol_,
    SupportedSignatureVersion as _SupportedSignatureVersion_,
} from '@aws/types';
export type ServiceMetadata = _ServiceMetadata_;
export type SupportedProtocol = _SupportedProtocol_;
export type SupportedSignatureVersion = _SupportedSignatureVersion_;
/**
 * @internal
 */
export function isSupportedProtocol(arg: any): arg is SupportedProtocol {
    return typeof arg === 'string'
        && [
            'json',
            'rest-json',
            'rest-xml',
            'query',
            'ec2',
        ].indexOf(arg) > -1;
}

/**
 * @internal
 */
export function isSupportedSignatureVersion(
    arg: any
): arg is SupportedSignatureVersion {
    return typeof arg === 'string'
        && [
            'v4',
            's3',
            's3v4',
            'v4-unsigned-body',
            'none',
        ].indexOf(arg) > -1;
}

/**
 * @internal
 */
export function isServiceMetadata(arg: any): arg is ServiceMetadata {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.apiVersion === 'string'
        && typeof arg.endpointPrefix === 'string'
        && isSupportedProtocol(arg.protocol)
        && typeof arg.serviceFullName === 'string'
        && isSupportedSignatureVersion(arg.signatureVersion)
        && typeof arg.uid === 'string'
        && ['undefined', 'string'].indexOf(typeof arg.serviceAbbreviation) > -1
        && ['undefined', 'string'].indexOf(typeof arg.jsonVersion) > -1
        && ['undefined', 'string'].indexOf(typeof arg.targetPrefix) > -1
        && ['undefined', 'string'].indexOf(typeof arg.timestampFormat) > -1
        && ['undefined', 'string'].indexOf(typeof arg.xmlNamespace) > -1;
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