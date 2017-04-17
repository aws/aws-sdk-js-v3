export type SerializationType = 'blob'|'boolean'|'list'|'map'|'number'|'string'|'structure'|'timestamp';

export type MemberLocation = 'header'|'headers'|'uri'|'querystring';

export interface XmlNamespace {
    prefix?: string;
    uri?: string;
}

interface Member {
    shape: SerializationModel;
    flattened?: boolean;
    location?: MemberLocation;
    locationName?: string;
    sensitive?: boolean;
    streaming?: boolean;
    xmlAttribute?: boolean;
    xmlNamespace?: XmlNamespace;
}

interface Shape {
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
    input: Structure;
    output: Structure;
    errors: Array<Structure>;
}
