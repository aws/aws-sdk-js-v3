import {InvalidInputException} from './InvalidInputException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {LimitExceededException} from './LimitExceededException';
import {InternalServerException} from './InternalServerException';
import {PredictorNotMountedException} from './PredictorNotMountedException';
export type PredictExceptionsUnion = InvalidInputException |
    ResourceNotFoundException |
    LimitExceededException |
    InternalServerException |
    PredictorNotMountedException;
