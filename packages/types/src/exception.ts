import {ResponseMetadata} from './response';
import { MetadataBearer } from './index';
/**
 * Exceptions that responded from AWS service containing raw http response
 * and parsed exception object
 * 
 * @property {any} details - parsed exception object normalized according to
 * its API model
 */
export interface ServiceException extends Error, MetadataBearer {
    details: any;
}

/**
 * An interface used to construct a ServiceException.
 * @property {ResponseMetadata} $metadata - Metadata about the response received, 
 * including the HTTP status code, HTTP headers, and any request identifiers
 * recognized by the SDK.
 * @property {string} name - name of exception
 * @property {string} message - a human readable description of exception
 * @property {any} rawException - parsed exception object normalized according to
 * its API model
 */
export interface ServiceExceptionOption {
    $metadata: ResponseMetadata,
    name?: string,
    message?: string,
    rawException?: any
}

/**
 * A union of all the known exceptions to be thrown by SDK
 */
export type SdkExceptions = undefined //TODO
