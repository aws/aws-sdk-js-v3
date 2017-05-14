import {isArrayOf} from "./isArrayOf";
import {StructureMember, isStructureMember} from './Shape';
import {
    isSupportedSignatureVersion,
    SupportedSignatureVersion
} from "./ServiceMetadata";
import {HttpTrait} from '@aws/types';

export function isHttpTrait(arg: any): arg is HttpTrait {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.method === 'string'
        && typeof arg.requestUri === 'string';
}
/**
 * Represents a definition of an API operation as defined in the
 * '.service-2.json' format used by the AWS SDKs.
 *
 * This type exists to allow the TreeModel (cf ../TreeModel/*) to be built from
 * JSON files with a known structure. The runtime SDK should only rely on types
 * defined in the @aws/types package, and the code generator should rely on the
 * TreeModel's types.
 *
 * If you're using the types in this file to do anything other than build a
 * TreeModel from a JSON document, you should probably reconsider your approach.
 */
export interface Operation {
    deprecated?: boolean;
    documentation?: string;
    documentationUrl?: string;
    errors?: Array<StructureMember>;
    http: HttpTrait;
    input?: StructureMember;
    name: string;
    output?: StructureMember;
    authtype?: SupportedSignatureVersion;
}

export function isOperation(arg: any): arg is Operation {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.name === 'string'
        && isHttpTrait(arg.http)
        && ['undefined', 'boolean'].indexOf(typeof arg.deprecated) > -1
        && ['undefined', 'string'].indexOf(typeof arg.documentation) > -1
        && (arg.input === undefined || isStructureMember(arg.input))
        && (arg.output === undefined || isStructureMember(arg.output))
        && (arg.errors === undefined || isArrayOf(arg.errors, isStructureMember))
        && (arg.authtype === undefined || isSupportedSignatureVersion(arg.authtype));
}
