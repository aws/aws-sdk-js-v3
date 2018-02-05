import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
export type AddTagsToVaultExceptionsUnion = InvalidParameterValueException |
    MissingParameterValueException |
    ResourceNotFoundException |
    LimitExceededException |
    ServiceUnavailableException;
