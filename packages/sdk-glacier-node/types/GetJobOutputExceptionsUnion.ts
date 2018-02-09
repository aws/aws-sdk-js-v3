import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InvalidParameterValueException} from './InvalidParameterValueException';
import {MissingParameterValueException} from './MissingParameterValueException';
import {ServiceUnavailableException} from './ServiceUnavailableException';
export type GetJobOutputExceptionsUnion = ResourceNotFoundException |
    InvalidParameterValueException |
    MissingParameterValueException |
    ServiceUnavailableException;
