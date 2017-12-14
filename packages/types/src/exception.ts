import {ResponseMetadata} from './response';
import { MetadataBearer } from './index';

/**
 * Exceptions that responded from AWS service containing raw http response
 * and parsed exception object
 * 
 * @property {any} details - parsed exception object normalized according to
 * its API model
 */
export interface ServiceException<Details = any> extends Error, MetadataBearer {
    details: Details;
}

/**
 * Service exceptions that can not be parsed by unmarshallers' error parser
 */
export interface UnkownServiceException extends ServiceException<undefined> {
    name: 'Error'
}
