import {
    ServiceMetadata,
    SupportedProtocol,
    SupportedSignatureVersion,
} from '@aws/types';

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