import {DeleteTagsInput} from './DeleteTagsInput';
import {DeleteTagsOutput} from './DeleteTagsOutput';
import {InvalidInputException} from './InvalidInputException';
import {InvalidTagException} from './InvalidTagException';
import {ResourceNotFoundException} from './ResourceNotFoundException';
import {InternalServerException} from './InternalServerException';
import {OperationModel as _Operation_} from '@aws/types';
import {ServiceMetadata} from './ServiceMetadata';

export const DeleteTags: _Operation_ = {
    metadata: ServiceMetadata,
    name: 'DeleteTags',
    http: {
        method: 'POST',
        requestUri: '/',
    },
    input: {
        shape: DeleteTagsInput,
    },
    output: {
        shape: DeleteTagsOutput,
    },
    errors: [
        {
            shape: InvalidInputException,
        },
        {
            shape: InvalidTagException,
        },
        {
            shape: ResourceNotFoundException,
        },
        {
            shape: InternalServerException,
        },
    ],
};