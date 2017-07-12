export type SerializationType = 'blob'|'boolean'|'list'|'map'|'number'|'string'|'structure'|'timestamp';

export type MemberLocation = 'header'|'headers'|'uri'|'querystring'|'statusCode';

export interface XmlNamespace {
    prefix?: string;
    uri?: string;
}

export interface Member {
    shape: SerializationModel;
    flattened?: boolean;
    location?: MemberLocation;
    locationName?: string;
    sensitive?: boolean;
    streaming?: boolean;
    xmlAttribute?: boolean;
    xmlNamespace?: XmlNamespace;
}

export interface Shape {
    type: SerializationType;
    sensitive?: boolean;
}

export interface Blob extends Shape {
    type: 'blob';
    streaming?: boolean;
}

export interface Boolean extends Shape {
    type: 'boolean';
}

export interface List extends Shape {
    type: 'list';
    member: Member;
    flattened?: boolean;
    min?: number;
}

export interface Map extends Shape {
    type: 'map';
    key: Member;
    value: Member;
    flattened?: boolean;
}

export interface Number extends Shape {
    type: 'number';
    min?: number;
}

export interface String extends Shape {
    type: 'string';
    min?: number;
    jsonValue?: boolean;
    idempotencyToken?: boolean;
}

export interface Structure extends Shape {
    type: 'structure';
    required: Array<string>;
    members: {[key: string]: Member};
    exceptionType?: string;
    exceptionCode?: string;
    payload?: string;
}

export interface Timestamp extends Shape {
    type: 'timestamp';
    timestampFormat?: string;
}

export type SerializationModel = Blob|Boolean|List|Map|Number|String|Structure|Timestamp;

export interface HttpTrait {
    method: string;
    requestUri: string;
}

export interface OperationModel {
    http: HttpTrait;
    name: string;
    metadata: ServiceMetadata;
    input: Member;
    output: Member;
    errors: Array<Member>;
}

export type SupportedProtocol = 'json'|'rest-json'|'rest-xml'|'query'|'ec2';

export type SupportedSignatureVersion = 'v4'|'s3'|'s3v4'|'v4-unsigned-body'|'none';

export interface ServiceMetadata {
    apiVersion: string;
    endpointPrefix: string;
    jsonVersion?: string;
    protocol: SupportedProtocol;
    serviceAbbreviation?: string;
    serviceFullName: string;
    signatureVersion: SupportedSignatureVersion|string;
    /**
     * Required for json-rpc services.
     */
    targetPrefix?: string;
    /**
     * Sometimes specified when format differs from protocol default.
     */
    timestampFormat?: string;
    uid: string;
    /**
     * Required for query services.
     */
    xmlNamespace?: string;
}
