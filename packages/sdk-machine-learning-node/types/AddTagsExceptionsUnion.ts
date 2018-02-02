import {InvalidInputException} from './InvalidInputException';
import {InvalidTagException} from './InvalidTagException';
import {TagLimitExceededException} from './TagLimitExceededException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
export type AddTagsExceptionsUnion = InvalidInputException |
    InvalidTagException |
    TagLimitExceededException |
    ResourceNotFoundException |
    InternalServerException;
