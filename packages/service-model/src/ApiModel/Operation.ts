import {isArrayOf} from "./isArrayOf";
import {isStructureMember} from './Shape';
import {
    isSupportedSignatureVersion,
} from "./ServiceMetadata";
import {Operation} from '@aws-sdk/build-types';
import {
    HttpTrait,
    SupportedSignatureVersion,
} from '@aws-sdk/types';

/**
 * @internal
 */
export function isHttpTrait(arg: any): arg is HttpTrait {
    return typeof arg === 'object'
        && arg !== null
        && typeof arg.method === 'string'
        && typeof arg.requestUri === 'string';
}

/**
 * @internal
 */
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
