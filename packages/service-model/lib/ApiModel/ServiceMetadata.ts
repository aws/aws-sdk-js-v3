export type SupportedProtocol = 'json'|'rest-json'|'rest-xml'|'query'|'ec2';

export type SupportedSignatureVersion = 'v4'|'s3'|'s3v4'|'v4-unsigned-body'|'none';

export interface ServiceMetadata {
    apiVersion: string;
    endpointPrefix: string;
    protocol: SupportedProtocol;
    serviceAbbreviation?: string;
    serviceFullName: string;
    signatureVersion: 'v4'|'s3'|string;
    uid: string;
}

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

export function isServiceMetadata(arg: any): arg is ServiceMetadata {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.apiVersion === 'string'
        && typeof arg.endpointPrefix === 'string'
        && isSupportedProtocol(arg.protocol)
        && typeof arg.serviceFullName === 'string'
        && isSupportedSignatureVersion(arg.signatureVersion)
        && typeof arg.uid === 'string'
        && ['undefined', 'string'].indexOf(typeof arg.serviceAbbreviation) > -1;
}
