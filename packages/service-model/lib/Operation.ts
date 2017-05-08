import {isArrayOf} from "./isArrayOf";
import {StructureMember, isStructureMember} from './Shape';
import {
    isSupportedSignatureVersion,
    SupportedSignatureVersion
} from "./ServiceMetadata";

type HttpMethod = 'GET'|'POST'|'PUT'|'DELETE'|'PATCH'|'HEAD'|string;

export interface HttpTraitDefinition {
    method: HttpMethod;
    requestUri: string;
}

export function isHttpTraitDefinition(arg: any): arg is HttpTraitDefinition {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.method === 'string'
        && typeof arg.requestUri === 'string';
}

export interface Operation {
    deprecated?: boolean;
    documentation?: string;
    documentationUrl?: string;
    errors?: Array<StructureMember>;
    http: HttpTraitDefinition;
    input?: StructureMember;
    name: string;
    output?: StructureMember;
    authtype?: SupportedSignatureVersion;
}

export function isOperation(arg: any): arg is Operation {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.name === 'string'
        && isHttpTraitDefinition(arg.http)
        && ['undefined', 'boolean'].indexOf(typeof arg.deprecated) > -1
        && ['undefined', 'string'].indexOf(typeof arg.documentation) > -1
        && (arg.input === undefined || isStructureMember(arg.input))
        && (arg.output === undefined || isStructureMember(arg.output))
        && (arg.errors === undefined || isArrayOf(arg.errors, isStructureMember))
        && (arg.authtype === undefined || isSupportedSignatureVersion(arg.authtype));
}
