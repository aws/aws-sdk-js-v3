import {InvalidInputException} from './InvalidInputException';
import {InternalServerException} from './InternalServerException';
import {IdempotentParameterMismatchException} from './IdempotentParameterMismatchException';
export type CreateDataSourceFromS3ExceptionsUnion = InvalidInputException |
    InternalServerException |
    IdempotentParameterMismatchException;
